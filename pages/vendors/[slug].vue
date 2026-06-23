<template>
  <div>
    <div v-if="vendor" class="min-h-screen bg-white pb-20">
    <!-- Cover & Profile -->
    <div class="h-64 md:h-80 w-full bg-slate-100 relative">
      <img v-if="vendor.coverImage" :src="vendor.coverImage" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/10"></div>
    </div>
    
    <div class="section-container relative -mt-20">
      <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start relative z-10">
        <div class="w-32 h-32 rounded-2xl bg-white p-2 border border-slate-100 shadow-sm flex-shrink-0 -mt-16 overflow-hidden relative bg-clip-padding">
          <img v-if="vendor.logo" :src="vendor.logo" class="w-full h-full object-cover rounded-xl" />
          <div v-else class="w-full h-full bg-primary-50 rounded-xl flex items-center justify-center text-primary-800 text-3xl font-bold">
            {{ vendor.businessName.charAt(0) }}
          </div>
        </div>
        
        <div class="flex-1 w-full">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">{{ vendor.businessName }}</h1>
              <div class="flex items-center gap-2 text-sm text-slate-500">
                <MapPin class="w-4 h-4" />
                {{ vendor.location?.city }}, {{ vendor.location?.state }}
              </div>
            </div>
            <div class="flex items-center gap-1.5 bg-primary-50 text-primary-800 px-3 py-1.5 rounded-full text-sm font-semibold">
              <Star class="w-4 h-4 fill-current" />
              {{ vendor.rating?.toFixed(1) || '0.0' }} ({{ vendor.reviewCount }} reviews)
            </div>
          </div>
          
          <p class="text-slate-600 mb-6 max-w-3xl leading-relaxed">{{ vendor.description || 'Premium gift vendor on CurateWithNG.' }}</p>
          
          <div class="flex flex-wrap gap-2">
            <span v-for="cat in vendor.categories" :key="cat" class="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-sm rounded-full font-medium">
              {{ cat }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Gifts by Vendor -->
    <div class="section-container mt-16">
      <h2 class="text-2xl font-heading font-bold text-slate-900 mb-8">Gifts by {{ vendor.businessName }}</h2>
      
      <div v-if="loadingGifts" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="card p-4">
           <div class="skeleton h-48 w-full rounded-xl mb-4"></div>
           <div class="skeleton-text mb-2 w-3/4"></div>
           <div class="skeleton-text w-1/2"></div>
        </div>
      </div>
      
      <div v-else-if="gifts.length === 0" class="flex flex-col items-center justify-center py-20 text-center border border-slate-100 rounded-3xl">
        <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <Package class="w-10 h-10 text-slate-300" />
        </div>
        <h3 class="text-xl font-heading font-bold text-slate-900 mb-2">No gifts yet</h3>
        <p class="text-slate-500 max-w-sm">This vendor hasn't uploaded any gifts to the platform yet.</p>
      </div>
      
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink v-for="gift in gifts" :key="gift._id" :to="`/gifts/${gift.slug}`" class="card-interactive overflow-hidden group">
          <div class="aspect-square bg-slate-50 overflow-hidden">
            <img :src="gift.images?.[0] || '/placeholder-gift.jpg'" :alt="gift.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-4">
            <h3 class="font-heading font-semibold text-slate-900 mb-2 line-clamp-2">{{ gift.name }}</h3>
            <div class="flex items-center gap-2">
              <span class="price text-lg">{{ formatNaira(gift.discountPrice || gift.price) }}</span>
              <span v-if="gift.discountPrice" class="price-original">{{ formatNaira(gift.price) }}</span>
            </div>
            <div class="flex items-center gap-1 mt-2 text-slate-500 text-xs">
              <Star class="w-3 h-3 text-accent-500 fill-current" />
              {{ gift.rating.toFixed(1) }} ({{ gift.reviewCount }})
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-800 border-t-transparent"></div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Star, Package } from 'lucide-vue-next';
import { useVendors } from '~/composables/modules/vendors/useVendors';
import { useGifts } from '~/composables/modules/gifts/useGifts';
import { formatNaira } from '~/utils/formatCurrency';
import type { Vendor, Gift } from '~/types';

definePageMeta({ layout: 'default' });

const route = useRoute();
const slug = route.params.slug as string;

const { getVendorBySlug } = useVendors();
const { getGifts } = useGifts();

const vendor = ref<Vendor | null>(null);
const gifts = ref<Gift[]>([]);
const loadingGifts = ref(true);

onMounted(async () => {
  try {
    const res = await getVendorBySlug(slug);
    vendor.value = res.data;
    
    if (vendor.value?._id) {
      const giftsRes = await getGifts({ vendorId: vendor.value._id, limit: 20 });
      gifts.value = giftsRes.data;
    }
  } catch (error) {
    console.error('Failed to load vendor profile:', error);
  } finally {
    loadingGifts.value = false;
  }
});

useHead({
  title: computed(() => vendor.value ? `${vendor.value.businessName} — CurateWithNG` : 'Vendor — CurateWithNG')
});
</script>
