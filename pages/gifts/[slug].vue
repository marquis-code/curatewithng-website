<template>
  <div class="bg-slate-50 min-h-screen pb-20">
    <div class="section-container pt-8 md:pt-16">
      <!-- Loading Skeleton -->
      <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-7">
           <div class="skeleton h-[500px] md:h-[700px] w-full rounded-3xl bg-slate-200 animate-pulse"></div>
        </div>
        <div class="lg:col-span-5 space-y-8 pt-4">
          <div class="skeleton-text w-1/4 h-6 rounded-full bg-slate-200 animate-pulse"></div>
          <div class="skeleton-text w-full h-16 rounded-lg bg-slate-200 animate-pulse"></div>
          <div class="skeleton-text w-1/3 h-10 rounded-lg bg-slate-200 animate-pulse"></div>
          <div class="skeleton-text w-full h-40 rounded-xl bg-slate-200 animate-pulse"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error || !gift" class="text-center py-32 max-w-lg mx-auto">
        <div class="text-8xl mb-8 animate-bounce">😕</div>
        <h1 class="text-3xl font-heading font-black text-slate-900 mb-4">Gift Not Found</h1>
        <p class="text-slate-500 text-lg mb-8">The exquisite item you're looking for seems to have vanished or is no longer available.</p>
        <NuxtLink to="/explore" class="btn-primary py-4 px-8 text-lg w-full inline-block shadow-xl shadow-primary-900/20">Return to Collection</NuxtLink>
      </div>

      <!-- Main Content -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        <!-- Left: Image Gallery -->
        <div class="lg:col-span-7 space-y-6">
          <div class="relative w-full aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl group">
            <img :src="activeImage || '/placeholder-gift.jpg'" :alt="gift?.name || 'Gift'" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <!-- Badges -->
            <div class="absolute top-6 left-6 flex flex-col gap-2 z-10">
              <span v-if="gift?.isFeatured" class="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-primary-900 shadow-sm">Premium Selection</span>
              <span v-if="gift?.discountPrice" class="bg-accent-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">Special Offer</span>
            </div>
            <div class="absolute top-6 right-6 z-10" v-if="gift?._id">
              <SaveGiftButton :giftId="gift._id" size="lg" />
            </div>
          </div>
          
          <!-- Thumbnails -->
          <div v-if="gift?.images?.length > 1" class="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
            <button
              v-for="(img, idx) in gift.images"
              :key="idx"
              @click="activeImage = img"
              :class="['relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 snap-center rounded-2xl overflow-hidden transition-all duration-300',
                activeImage === img ? 'ring-4 ring-primary-900 ring-offset-2 scale-95' : 'hover:opacity-80']"
            >
              <img :src="img" :alt="`${gift.name} - View ${idx + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Right: Product Information -->
        <div class="lg:col-span-5 flex flex-col pt-2 lg:pt-8 relative">
          
          <!-- Vendor context -->
          <NuxtLink :to="`/vendors/${vendorSlug}`" class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all mb-8 group self-start">
            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
              <img v-if="vendorLogo" :src="vendorLogo" class="w-full h-full object-cover" />
              <span v-else class="text-xs font-bold text-slate-500">{{ vendorName ? vendorName.charAt(0).toUpperCase() : 'V' }}</span>
            </div>
            <span class="text-sm font-semibold text-slate-700 group-hover:text-slate-900 pr-2">Curated by {{ vendorName }}</span>
          </NuxtLink>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
            {{ gift?.name || 'Unnamed Gift' }}
          </h1>

          <!-- Price & Rating -->
          <div class="flex items-end justify-between mb-10">
            <div class="flex flex-col">
              <span class="text-sm text-slate-400 font-medium uppercase tracking-widest mb-1">Investment</span>
              <div class="flex items-center gap-4">
                <span class="text-4xl md:text-5xl font-heading font-black text-primary-900 tracking-tight">{{ formatNaira(gift?.discountPrice || gift?.price || 0) }}</span>
                <span v-if="gift?.discountPrice" class="text-2xl text-slate-400 line-through font-medium">{{ formatNaira(gift?.price || 0) }}</span>
              </div>
            </div>
            <div class="flex flex-col items-end">
               <div class="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <Star class="w-4 h-4 text-accent-500 fill-current" />
                <span class="font-bold text-slate-900">{{ gift?.rating?.toFixed(1) || '0.0' }}</span>
              </div>
              <span class="text-xs text-slate-500 mt-2 font-medium">{{ gift?.reviewCount || 0 }} reviews</span>
            </div>
          </div>

          <hr class="border-slate-200 mb-8" />

          <!-- Description -->
          <div class="prose prose-slate max-w-none mb-10">
            <p class="text-lg text-slate-600 leading-relaxed">{{ gift?.description || 'No description provided.' }}</p>
          </div>

          <!-- Tags & Metadata -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div>
              <span class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Perfect Occasions</span>
              <div class="flex flex-wrap gap-2">
                <span v-for="occ in gift?.occasions" :key="occ" class="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-full font-medium capitalize">{{ occ?.replace ? occ.replace('-', ' ') : occ }}</span>
                <span v-if="!gift?.occasions?.length" class="text-slate-400 text-sm italic">Any occasion</span>
              </div>
            </div>
            <div>
              <span class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Ideal For</span>
              <div class="flex flex-wrap gap-2">
                <span v-for="rec in gift?.recipientTypes" :key="rec" class="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-full font-medium capitalize">{{ rec }}</span>
                <span v-if="!gift?.recipientTypes?.length" class="text-slate-400 text-sm italic">Anyone</span>
              </div>
            </div>
          </div>

          <!-- Add to Cart Widget -->
          <div class="mt-auto sticky bottom-6 z-10 bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-white/40 shadow-2xl shadow-primary-900/10 flex flex-col sm:flex-row gap-4 items-center">
            <div class="flex items-center bg-slate-100 rounded-2xl p-1.5 w-full sm:w-auto">
              <button @click="quantity = Math.max(1, quantity - 1)" class="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-600 hover:text-primary-900 transition-colors">
                <span class="text-xl font-medium">−</span>
              </button>
              <span class="w-16 text-center font-bold text-lg text-slate-900">{{ quantity }}</span>
              <button @click="quantity++" class="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm text-slate-600 hover:text-primary-900 transition-colors">
                <span class="text-xl font-medium">+</span>
              </button>
            </div>
            
            <button @click="handleAddToCart" class="btn-primary w-full py-4 text-lg font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary-900/20 hover:scale-[1.02] transition-transform">
              <ShoppingCart class="w-6 h-6" />
              <span>Add to Collection</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Star, ShoppingCart } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { useGifts } from '~/composables/modules/gifts/useGifts';
import { useCartStore } from '~/stores/cart.store';
import type { Gift } from '~/types';
import { formatNaira } from '~/utils/formatCurrency';
import { useCustomToast } from '~/composables/core/useCustomToast';

definePageMeta({ layout: 'default' });

const route = useRoute();
const { getGiftBySlug } = useGifts();
const cartStore = useCartStore();

const gift = ref<Gift | null>(null);
const loading = ref(true);
const error = ref(false);
const activeImage = ref('');
const quantity = ref(1);

const vendorName = computed(() => {
  if (!gift.value || !gift.value.vendorId) return 'Boutique Vendor';
  return (typeof gift.value.vendorId === 'object' && gift.value.vendorId.businessName) 
    ? gift.value.vendorId.businessName 
    : 'Boutique Vendor';
});

const vendorLogo = computed(() => {
  if (!gift.value || !gift.value.vendorId) return '';
  return typeof gift.value.vendorId === 'object' ? gift.value.vendorId.logo : '';
});

const vendorSlug = computed(() => {
  if (!gift.value || !gift.value.vendorId) return '';
  return typeof gift.value.vendorId === 'object' ? gift.value.vendorId.slug : '';
});

const fetchGift = async () => {
  try {
    let rawData = await getGiftBySlug(route.params.slug as string);
    console.log("Raw fetched data:", rawData);
    
    // Aggressive unwrap just in case the interceptor passes the raw payload
    let actualData = rawData;
    if (actualData && actualData.success !== undefined && actualData.data) {
       actualData = actualData.data;
    } else if (actualData && actualData.data && actualData.data.name) {
       actualData = actualData.data;
    }
    
    console.log("Unwrapped data:", actualData);
    
    if (actualData) {
      gift.value = actualData;
      if (actualData.images?.length) {
        activeImage.value = actualData.images[0];
      }
      useSeoMeta({
        title: `${actualData.name || 'Gift'} — Premium Gift Collection`,
        description: actualData.description || '',
        ogTitle: `${actualData.name || 'Gift'} — Premium Gift Collection`,
        ogDescription: actualData.description || '',
        ogImage: actualData.images?.[0] || 'https://res.cloudinary.com/djd18sqhi/image/upload/v1/curatewithng/demo-hamper1.jpg',
        twitterCard: 'summary_large_image',
      });
    } else {
      error.value = true;
    }
  } catch (e) {
    console.error('Failed to fetch gift:', e);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

const handleAddToCart = () => {
  if (gift.value) {
    cartStore.addItem(gift.value, quantity.value);
    
    let showToast = (opts: any) => { alert(opts.message) };
    try {
      const customToast = useCustomToast();
      if (customToast && customToast.showToast) {
         showToast = customToast.showToast;
      }
    } catch(e) {}
    
    showToast({
      title: "Added to Cart",
      message: `${quantity.value}x ${gift.value.name} successfully added.`,
      toastType: "success"
    });
    // Reset quantity back to 1 for convenience
    quantity.value = 1;
  }
};

onMounted(() => {
  fetchGift();
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
