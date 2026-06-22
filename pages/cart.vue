<template>
  <div class="py-8">
    <div class="section-container max-w-3xl">
      <h1 class="text-3xl font-heading font-bold text-slate-900 mb-8">Shopping Cart</h1>

      <div v-if="cartStore.isEmpty" class="text-center py-20">
        <div class="text-6xl mb-4">🛒</div>
        <h3 class="text-xl font-heading font-bold text-slate-900 mb-2">Your cart is empty</h3>
        <p class="text-slate-500 mb-6">Discover curated gifts from Nigeria's finest vendors</p>
        <NuxtLink to="/explore" class="btn-primary">Explore Gifts</NuxtLink>
      </div>

      <div v-else>
        <div class="space-y-4 mb-8">
          <div v-for="item in cartStore.items" :key="item.gift._id" class="card p-4 flex gap-4">
            <div class="w-20 h-20 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
              <img :src="item.gift.images?.[0] || '/placeholder-gift.jpg'" :alt="item.gift.name" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <h3 class="font-heading font-semibold text-slate-900">{{ item.gift.name }}</h3>
              <p class="text-sm text-primary-600 font-medium">{{ formatNaira(item.gift.discountPrice || item.gift.price) }}</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="flex items-center border border-slate-200 rounded-lg">
                <button @click="cartStore.updateQuantity(item.gift._id, item.quantity - 1)" class="px-3 py-1 text-slate-600 hover:bg-slate-50">−</button>
                <span class="px-3 py-1 font-medium text-sm">{{ item.quantity }}</span>
                <button @click="cartStore.updateQuantity(item.gift._id, item.quantity + 1)" class="px-3 py-1 text-slate-600 hover:bg-slate-50">+</button>
              </div>
              <button @click="cartStore.removeItem(item.gift._id)" class="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                <Trash2 class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Order summary -->
        <div class="card p-6">
          <h3 class="font-heading font-bold text-slate-900 mb-4">Order Summary</h3>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between text-slate-600">
              <span>Subtotal ({{ cartStore.totalItems }} items)</span>
              <span>{{ formatNaira(cartStore.totalAmount) }}</span>
            </div>
            <div class="flex justify-between text-slate-600">
              <span>Delivery</span>
              <span class="text-success-600 font-medium">Free</span>
            </div>
          </div>
          <hr class="border-slate-200 mb-4" />
          <div class="flex justify-between text-lg font-heading font-bold text-slate-900 mb-6">
            <span>Total</span>
            <span class="text-primary-800">{{ formatNaira(cartStore.totalAmount) }}</span>
          </div>
          <NuxtLink to="/checkout" class="btn-primary w-full text-center block">
            Proceed to Checkout
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';
import { formatNaira } from '~/utils/formatCurrency';

definePageMeta({ layout: 'default' });
useHead({ title: 'Cart — CurateWithNG' });

const cartStore = useCartStore();
</script>
