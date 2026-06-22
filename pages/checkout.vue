<template>
  <div class="py-8">
    <div class="section-container max-w-4xl">
      <h1 class="text-3xl font-heading font-bold text-slate-900 mb-8">Checkout</h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Delivery details -->
        <div class="lg:col-span-2 space-y-6">
          <div class="card p-6">
            <h3 class="font-heading font-bold text-slate-900 mb-4">Recipient Details</h3>
            <div class="space-y-4">
              <div>
                <label class="text-sm font-medium text-slate-700 mb-1 block">Recipient Name *</label>
                <input v-model="recipient.name" type="text" required class="input-field" placeholder="Full name" />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700 mb-1 block">Phone Number</label>
                <input v-model="recipient.phone" type="tel" class="input-field" placeholder="+234..." />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700 mb-1 block">Delivery Address</label>
                <textarea v-model="recipient.address" rows="2" class="input-field" placeholder="Full delivery address"></textarea>
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700 mb-1 block">Gift Note (optional)</label>
                <textarea v-model="recipient.note" rows="2" class="input-field" placeholder="A personal message for the recipient..."></textarea>
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700 mb-1 block">Preferred Delivery Date</label>
                <input v-model="recipient.deliveryDate" type="date" class="input-field" />
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div>
          <div class="card p-6 sticky top-24">
            <h3 class="font-heading font-bold text-slate-900 mb-4">Order Summary</h3>
            <div class="space-y-3 mb-4">
              <div v-for="item in cartStore.items" :key="item.gift._id" class="flex gap-3">
                <div class="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                  <img :src="item.gift.images?.[0]" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium text-slate-900 line-clamp-1">{{ item.gift.name }}</p>
                  <p class="text-xs text-slate-500">Qty: {{ item.quantity }}</p>
                </div>
                <span class="text-sm font-semibold text-slate-900">{{ formatNaira((item.gift.discountPrice || item.gift.price) * item.quantity) }}</span>
              </div>
            </div>
            <hr class="border-slate-200 mb-4" />
            <div class="flex justify-between font-heading font-bold text-lg mb-6">
              <span>Total</span>
              <span class="text-primary-800">{{ formatNaira(cartStore.totalAmount) }}</span>
            </div>
            <button @click="handlePayment" :disabled="paying || !recipient.name" class="btn-primary w-full flex items-center justify-center gap-2">
              <Loader2 v-if="paying" class="w-5 h-5 animate-spin" />
              {{ paying ? 'Processing...' : 'Pay with Paystack 💳' }}
            </button>
            <p class="text-xs text-slate-400 text-center mt-3">Secured by Paystack. Your payment is encrypted.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { formatNaira } from '~/utils/formatCurrency';
import { useOrders } from '~/composables/modules/orders/useOrders';
import { usePayments } from '~/composables/modules/payments/usePayments';

definePageMeta({ layout: 'default', middleware: 'auth' });
useHead({ title: 'Checkout — CurateWithNG' });

const { createOrder } = useOrders();
const { initiatePayment } = usePayments();
const cartStore = useCartStore();
const config = useRuntimeConfig();
const paying = ref(false);

const recipient = reactive({
  name: '',
  phone: '',
  address: '',
  note: '',
  deliveryDate: '',
});

const handlePayment = async () => {
  if (!recipient.name) return alert('Please enter recipient name');
  paying.value = true;

  try {
    // 1. Create order
    const order = await createOrder({
      items: cartStore.items.map((item) => ({
        giftId: item.gift._id,
        vendorId: typeof item.gift.vendorId === 'object' ? item.gift.vendorId._id : item.gift.vendorId,
        quantity: item.quantity,
        unitPrice: item.gift.discountPrice || item.gift.price,
      })),
      recipient,
    });

    // 2. Initiate payment
    const payment = await initiatePayment({ orderId: order._id });

    // 3. Redirect to Paystack
    if (payment.authorizationUrl) {
      window.location.href = payment.authorizationUrl;
    }
  } catch (error) {
    console.error('Payment failed:', error);
    alert('Payment failed. Please try again.');
  } finally {
    paying.value = false;
  }
};
</script>
