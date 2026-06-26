<template>
  <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm animate-fade-in">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-xl font-heading font-bold text-slate-900 mb-1">Sourcing Requests</h2>
        <p class="text-sm text-slate-500">Track the status of your custom gift requests</p>
      </div>
      <NuxtLink to="/curate" class="text-sm font-semibold text-primary-800 hover:bg-primary-50 px-4 py-2 rounded-lg transition-colors border border-primary-200">
        New Request
      </NuxtLink>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="w-8 h-8 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>

    <div v-else-if="requests.length === 0" class="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
        <Package class="w-8 h-8 text-slate-300" />
      </div>
      <h3 class="text-lg font-semibold text-slate-900 mb-2">No active requests</h3>
      <p class="text-sm text-slate-500 mb-6">You haven't made any sourcing requests yet.</p>
      <NuxtLink to="/curate" class="inline-flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
        Curate a Gift
      </NuxtLink>
    </div>

    <div v-else class="space-y-4">
      <div 
        v-for="req in requests" 
        :key="req._id"
        class="p-6 rounded-2xl border border-slate-200 hover:border-primary-200 hover:shadow-sm transition-all"
      >
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <div class="flex items-center gap-3 mb-1">
              <h4 class="font-bold text-lg text-slate-900">{{ req.giftIdea }}</h4>
              <span 
                class="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-full uppercase"
                :class="{
                  'bg-amber-100 text-amber-800': req.status === 'PENDING',
                  'bg-green-100 text-green-800': req.status === 'QUOTED' || req.status === 'SOURCING',
                  'bg-blue-100 text-blue-800': req.status === 'PAYMENT_RECEIVED',
                  'bg-slate-100 text-slate-800': req.status === 'CLOSED' || req.status === 'CANCELLED',
                }"
              >
                {{ req.status }}
              </span>
            </div>
            <p class="text-sm text-slate-500">
              For {{ req.recipientProfile?.name || 'Someone special' }} • 
              Budget: ₦{{ (req.idealBudget / 100).toLocaleString() }}
            </p>
          </div>
          
          <div v-if="req.status === 'QUOTED'" class="flex items-center gap-3 bg-primary-50 px-4 py-3 rounded-xl border border-primary-100">
            <div>
              <p class="text-xs font-semibold text-primary-800 uppercase tracking-wider mb-0.5">Final Quote</p>
              <p class="text-lg font-bold text-slate-900 leading-none">₦{{ ((req.quoteAmount || 0) / 100).toLocaleString() }}</p>
            </div>
            <button 
              @click="payQuote(req)"
              class="ml-2 bg-primary-800 text-white hover:bg-primary-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
              :disabled="payingId === req._id"
            >
              {{ payingId === req._id ? 'Processing...' : 'Pay Now' }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
          <div>
            <p class="text-xs text-slate-500 mb-1">Occasion</p>
            <p class="text-sm font-medium text-slate-900">{{ req.occasion }}</p>
          </div>
          <div>
            <p class="text-xs text-slate-500 mb-1">Timeline</p>
            <p class="text-sm font-medium text-slate-900">{{ req.timeline }}</p>
          </div>
          <div>
            <p class="text-xs text-slate-500 mb-1">Flexibility</p>
            <p class="text-sm font-medium text-slate-900">{{ req.budgetFlexibility.replace('_', ' ') }}</p>
          </div>
          <div>
            <p class="text-xs text-slate-500 mb-1">Requested On</p>
            <p class="text-sm font-medium text-slate-900">{{ new Date(req.createdAt).toLocaleDateString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Package } from 'lucide-vue-next';
import { useUser } from '~/composables/modules/auth/user';
import { useRuntimeConfig } from '#app';
import { payments_api } from '~/api_factory/modules/payments';

const config = useRuntimeConfig();
const { token } = useUser();

const requests = ref<any[]>([]);
const loading = ref(true);
const payingId = ref<string | null>(null);

onMounted(async () => {
  if (token.value) {
    try {
      const { data } = await useFetch<any>(`${config.public.apiBase}/sourcing-requests`, {
        headers: { Authorization: `Bearer ${token.value}` }
      });
      if (data.value?.data) {
        requests.value = data.value.data;
      }
    } catch (e) {
      console.error(e);
    }
  }
  loading.value = false;
});

const payQuote = async (req: any) => {
  if (!token.value) return;
  payingId.value = req._id;
  try {
    const response = await payments_api.initiateSourcingPayment(req._id);
    const data = response.data?.data || response.data;
    if (data?.authorization_url) {
      window.location.href = data.authorization_url;
    } else {
      alert('Failed to initialize payment. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('Payment initialization failed.');
  } finally {
    payingId.value = null;
  }
};
</script>
