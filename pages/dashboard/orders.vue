<template>
  <div class="card p-6 animate-scale-in">
    <h3 class="font-heading font-bold text-slate-900 mb-6 text-xl">My Orders</h3>
    
    <div v-if="loading" class="flex flex-col items-center justify-center py-16">
      <Loader2 class="w-8 h-8 text-primary-500 animate-spin" />
      <p class="text-sm text-slate-500 mt-4 font-medium">Loading your orders...</p>
    </div>

    <div v-else-if="orders.length === 0" class="flex flex-col items-center justify-center py-16 text-center">
      <div class="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-6">
        <Package class="w-12 h-12 text-primary-300" />
      </div>
      <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">No orders yet</h3>
      <p class="text-slate-500 max-w-sm mb-6">You haven't placed any orders. Start exploring to find the perfect gift for someone special!</p>
      <NuxtLink to="/explore" class="btn-primary inline-block">Start Shopping</NuxtLink>
    </div>

    <div v-else class="space-y-4">
      <NuxtLink v-for="order in orders" :key="order._id" :to="`/orders/${order._id}`" class="block border border-slate-100 rounded-xl p-5 hover:border-primary-100 hover:shadow-md transition-all bg-slate-50/50 hover:bg-white cursor-pointer relative group">
        <div class="absolute inset-y-0 right-5 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight class="w-5 h-5 text-primary-400" />
        </div>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Order #{{ order.orderNumber || order._id.slice(-8).toUpperCase() }}</p>
            <p class="text-sm font-medium text-slate-900">{{ formatDate(order.createdAt) }}</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="font-bold text-slate-900">{{ formatNaira(order.totalAmount) }}</span>
            <span :class="[
              'px-2.5 py-1 text-xs font-bold rounded-full border',
              order.status === 'DELIVERED' ? 'bg-green-50 text-green-700 border-green-200' : 
              order.status === 'PENDING' ? 'bg-orange-50 text-orange-700 border-orange-200' :
              order.status === 'CANCELLED' ? 'bg-red-50 text-red-700 border-red-200' :
              'bg-blue-50 text-blue-700 border-blue-200'
            ]">
              {{ order.status }}
            </span>
          </div>
        </div>
        
        <div class="border-t border-slate-100 pt-4 space-y-3">
          <div v-for="(item, idx) in order.items" :key="idx" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded bg-slate-200 overflow-hidden flex-shrink-0">
               <!-- In a real scenario we might have item.giftId.images[0] -->
               <img v-if="item.giftId?.images?.length" :src="item.giftId.images[0]" class="w-full h-full object-cover" />
               <div v-else class="w-full h-full bg-slate-200 flex items-center justify-center">
                 <Package class="w-5 h-5 text-slate-400" />
               </div>
            </div>
            <div>
              <p class="text-sm font-semibold text-slate-800">{{ item.giftId?.name || 'Unknown Gift' }}</p>
              <p class="text-xs text-slate-500">Qty: {{ item.quantity }} × {{ formatNaira(item.unitPrice || item.price) }}</p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Package, Loader2, ChevronRight } from 'lucide-vue-next';
import { orders_api } from '~/api_factory/modules/orders';
import { formatNaira } from '~/utils/formatCurrency';

const orders = ref<any[]>([]);
const loading = ref(true);

const fetchOrders = async () => {
  try {
    const response = await orders_api.getOrders();
    // Safely extract the array from response.data.data.data or response.data.data
    orders.value = response.data?.data?.data || response.data?.data || response.data || [];
  } catch (error) {
    console.error('Failed to fetch orders', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchOrders();
});

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
</script>
