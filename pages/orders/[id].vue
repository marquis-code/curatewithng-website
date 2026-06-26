<template>
  <div class="bg-slate-50 min-h-screen py-16">
    <div class="section-container max-w-3xl">
      <div v-if="loading" class="flex flex-col items-center justify-center py-32">
        <Loader2 class="w-12 h-12 text-primary-500 animate-spin" />
        <p class="mt-4 text-slate-500 font-medium">Verifying your order...</p>
      </div>
      
      <div v-else-if="error" class="bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100">
        <div class="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle class="w-10 h-10" />
        </div>
        <h1 class="text-2xl font-heading font-bold text-slate-900 mb-2">Order Not Found</h1>
        <p class="text-slate-500 mb-8">{{ error }}</p>
        <NuxtLink to="/explore" class="btn-primary py-3 px-8">Return to Shop</NuxtLink>
      </div>

      <div v-else-if="order" class="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100">
        <!-- Header -->
        <div class="bg-primary-900 px-8 py-12 text-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div class="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-emerald-500/30">
            <Check class="w-10 h-10" />
          </div>
          <h1 class="text-3xl font-heading font-black text-white mb-2 relative z-10">Payment Successful!</h1>
          <p class="text-primary-100 relative z-10">Thank you for your order. We're getting it ready.</p>
        </div>

        <!-- Order Details -->
        <div class="p-8 md:p-10">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-8 border-b border-slate-100 gap-4">
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order Reference</p>
              <p class="text-lg font-bold text-slate-900">{{ order.orderNumber || order._id.slice(-8).toUpperCase() }}</p>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Date</p>
              <p class="text-sm font-semibold text-slate-900">{{ formatDate(order.createdAt) }}</p>
            </div>
          </div>

          <h3 class="font-heading font-bold text-slate-900 mb-4 text-lg">Order Items</h3>
          <div class="space-y-4 mb-8">
            <div v-for="(item, idx) in order.items" :key="idx" class="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div class="w-14 h-14 bg-slate-200 rounded-xl overflow-hidden flex-shrink-0">
                <img v-if="item.giftId?.images?.length" :src="item.giftId.images[0]" class="w-full h-full object-cover" />
                <div v-else class="w-full h-full bg-slate-200 flex items-center justify-center">
                  <Package class="w-6 h-6 text-slate-400" />
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-slate-800 text-sm truncate">{{ item.giftId?.name || 'Unknown Gift' }}</p>
                <p class="text-xs text-slate-500 mt-1">Qty: {{ item.quantity }} × {{ formatNaira(item.unitPrice || item.giftId?.price || 0) }}</p>
              </div>
              <span class="font-bold text-primary-700">{{ formatNaira(item.subtotal || (item.quantity * (item.unitPrice || item.giftId?.price || 0))) }}</span>
            </div>
          </div>

          <!-- Recipient -->
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
            <h3 class="font-heading font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Delivery Details</h3>
            <div class="space-y-2 text-sm">
              <p><span class="text-slate-500 w-24 inline-block">Recipient:</span> <span class="font-medium text-slate-900">{{ order.recipient?.name || 'N/A' }}</span></p>
              <p><span class="text-slate-500 w-24 inline-block">Address:</span> <span class="font-medium text-slate-900">{{ order.recipient?.address || 'N/A' }}</span></p>
              <p v-if="order.recipient?.phone"><span class="text-slate-500 w-24 inline-block">Phone:</span> <span class="font-medium text-slate-900">{{ order.recipient.phone }}</span></p>
              <p v-if="order.recipient?.deliveryDate"><span class="text-slate-500 w-24 inline-block">Delivery Date:</span> <span class="font-medium text-slate-900">{{ formatDate(order.recipient.deliveryDate) }}</span></p>
            </div>
          </div>

          <!-- Total -->
          <div class="flex justify-between items-center py-4 border-t border-slate-100">
            <span class="text-lg text-slate-500 font-medium">Total Amount Paid</span>
            <span class="text-2xl font-heading font-black text-slate-900">{{ formatNaira(order.totalAmount) }}</span>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/dashboard/orders" class="btn-secondary py-3.5 flex-1 text-center">View All Orders</NuxtLink>
            <NuxtLink to="/explore" class="btn-primary py-3.5 flex-1 text-center">Continue Shopping</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Loader2, Check, XCircle, Package } from 'lucide-vue-next';
import { useOrders } from '~/composables/modules/orders/useOrders';
import { useCartStore } from '~/stores/cart.store';
import { formatNaira } from '~/utils/formatCurrency';

definePageMeta({ layout: 'default' });
useHead({ title: 'Order Confirmation — CurateWithNG' });

const route = useRoute();
const { fetchOrderById } = useOrders();
const cartStore = useCartStore();
const orderId = route.params.id as string;

const loading = ref(true);
const order = ref<any>(null);
const error = ref('');

onMounted(async () => {
  if (!orderId) {
    error.value = 'Invalid order ID provided.';
    loading.value = false;
    return;
  }

  try {
    const data = await fetchOrderById(orderId);
    order.value = data;
    
    // Clear cart if redirected from payment gateway
    if (route.query.reference || route.query.trxref) {
      cartStore.clearCart();
    }
  } catch (err: any) {
    console.error('Failed to fetch order', err);
    error.value = 'We could not find the order you are looking for. It may have been removed or the ID is incorrect.';
  } finally {
    loading.value = false;
  }
});

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>
