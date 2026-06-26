<template>
  <div class="bg-slate-50 min-h-screen pb-20 pt-8 md:pt-16">
    <div class="section-container max-w-6xl">
      <div class="mb-10">
        <h1 class="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-2 tracking-tight">Checkout</h1>
        <p class="text-slate-500 text-lg">Complete your order securely</p>
      </div>

      <!-- Empty Cart State -->
      <div v-if="cartStore.isEmpty" class="text-center py-32 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-3xl mx-auto">
        <div class="text-8xl mb-6">🛒</div>
        <h2 class="text-2xl font-heading font-bold text-slate-900 mb-3">Your cart is empty</h2>
        <p class="text-slate-500 mb-8">Looks like you haven't added any gifts to your collection yet.</p>
        <NuxtLink to="/explore" class="btn-primary py-4 px-8 text-lg inline-block shadow-xl shadow-primary-900/20">Explore Gifts</NuxtLink>
      </div>

      <!-- Checkout Layout -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <!-- Left: Delivery Details Form -->
        <div class="lg:col-span-7 space-y-6">
          <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 class="text-xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-primary-900 text-white flex items-center justify-center text-sm font-bold shadow-md">1</span>
              Recipient Information
            </h3>
            
            <div class="space-y-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-xs">Recipient Name <span class="text-red-500">*</span></label>
                  <input v-model="recipient.name" required type="text" placeholder="Full name" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200" />
                </div>
                <div>
                  <label class="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-xs">Phone Number</label>
                  <input v-model="recipient.phone" type="tel" placeholder="+234..." class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-xs">Delivery Address <span class="text-red-500">*</span></label>
                <textarea v-model="recipient.address" rows="2" placeholder="Full delivery address" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200"></textarea>
              </div>

              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-xs">Personal Note (Optional)</label>
                <textarea v-model="recipient.note" rows="2" placeholder="A personal message to be included with the gift..." class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200"></textarea>
              </div>

              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-xs">Preferred Delivery Date</label>
                <ClientOnly>
                  <VueDatePicker 
                    v-model="recipient.deliveryDate" 
                    :enable-time-picker="false" 
                    placeholder="Select delivery date"
                    auto-apply
                    :min-date="new Date()"
                    hide-input-icon
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Order Summary -->
        <div class="lg:col-span-5">
          <div class="bg-white text-slate-900 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 sticky top-24">
            <h3 class="text-xl font-heading font-bold mb-6 text-slate-900">Order Summary</h3>
            
            <!-- Items -->
            <div class="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              <div v-for="item in cartStore.items" :key="item.gift._id" class="flex gap-4 items-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div class="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200/50">
                  <img :src="item.gift.images?.[0] || '/placeholder-gift.jpg'" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-bold text-slate-800 truncate">{{ item.gift.name }}</p>
                  <p class="text-xs text-slate-500 mt-1">Qty: {{ item.quantity }}</p>
                </div>
                <span class="text-sm font-bold text-primary-700">{{ formatNaira((item.gift.discountPrice || item.gift.price) * item.quantity) }}</span>
              </div>
            </div>
            
            <hr class="border-slate-100 mb-6" />
            
            <!-- Totals -->
            <div class="space-y-3 mb-8">
              <div class="flex justify-between text-sm text-slate-500">
                <span>Subtotal</span>
                <span class="text-slate-800 font-bold">{{ formatNaira(cartStore.totalAmount) }}</span>
              </div>
              <div class="flex justify-between text-sm text-slate-500">
                <span>Delivery</span>
                <span class="text-slate-800 font-bold">Calculated at checkout</span>
              </div>
              <div class="flex justify-between text-xl font-heading font-bold text-slate-900 pt-4 border-t border-slate-100">
                <span>Total</span>
                <span class="text-primary-700">{{ formatNaira(cartStore.totalAmount) }}</span>
              </div>
            </div>

            <!-- Pay Button -->
            <button @click="handlePayment" :disabled="paying || !recipient.name || !recipient.address" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
              <Loader2 v-if="paying" class="w-5 h-5 animate-spin" />
              <CreditCard v-else class="w-5 h-5" />
              {{ paying ? 'Processing Secure Payment...' : 'Pay with Paystack' }}
            </button>
            
            <p class="text-xs text-slate-500 text-center mt-4 flex items-center justify-center gap-1.5">
              <ShieldCheck class="w-4 h-4" /> Secure encrypted payment
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
// @ts-ignore
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { Loader2, CreditCard, ShieldCheck } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart.store';
import { formatNaira } from '~/utils/formatCurrency';
import { useOrders } from '~/composables/modules/orders/useOrders';
import { usePayments } from '~/composables/modules/payments/usePayments';
import { useCustomToast } from '~/composables/core/useCustomToast';

definePageMeta({ layout: 'default', middleware: 'auth' });
useHead({ title: 'Secure Checkout — CurateWithNG' });

const { createOrder } = useOrders();
const { initiatePayment } = usePayments();
const cartStore = useCartStore();
const { showToast } = useCustomToast();
const paying = ref(false);

const recipient = reactive({
  name: '',
  phone: '',
  address: '',
  note: '',
  deliveryDate: '',
});

const handlePayment = async () => {
  if (!recipient.name || !recipient.address) {
     return showToast({ title: "Incomplete details", message: "Please enter the recipient's name and address.", toastType: "error" });
  }
  
  paying.value = true;

  try {
    // 1. Create order
    const orderData = await createOrder({
      items: cartStore.items.map((item) => ({
        giftId: item.gift._id,
        vendorId: typeof item.gift.vendorId === 'object' ? item.gift.vendorId._id : item.gift.vendorId,
        quantity: item.quantity,
        unitPrice: item.gift.discountPrice || item.gift.price,
      })),
      recipient,
    });

    let order = orderData;
    if (order && order.success !== undefined && order.data) order = order.data;

    const orderId = order?._id || order?.id;
    if (!orderId) throw new Error("Order creation failed");

    // 2. Initiate payment
    let payment = await initiatePayment({ orderId });
    if (payment && payment.success !== undefined && payment.data) payment = payment.data;

    // 3. Redirect to Paystack
    if (payment.authorizationUrl) {
      window.location.href = payment.authorizationUrl;
    } else if (payment.authorization_url) { // fallback
      window.location.href = payment.authorization_url;
    } else {
      throw new Error("No authorization URL received from payment gateway");
    }
  } catch (error: any) {
    console.error('Payment failed:', error);
    showToast({ title: "Payment Initialization Failed", message: error.message || "An error occurred while creating your order.", toastType: "error" });
  } finally {
    paying.value = false;
  }
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5); 
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(71, 85, 105, 0.8); 
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 1); 
}

/* Custom VueDatePicker styling to match design system */
:deep(.dp__input) {
  padding: 12px 16px;
  border-radius: 0.75rem;
  border-color: #e2e8f0;
  background-color: #f8fafc;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.2s;
  height: auto;
}
:deep(.dp__input:focus) {
  background-color: #ffffff;
  border-color: transparent;
  box-shadow: 0 0 0 2px #471034; /* primary-900 */
}
</style>
