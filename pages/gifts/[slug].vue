<template>
  <div class="py-8 md:py-12">
    <div class="section-container">
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="skeleton h-[500px] w-full rounded-2xl"></div>
        <div class="space-y-6 pt-4">
          <div class="skeleton-text w-1/4 h-6"></div>
          <div class="skeleton-text w-3/4 h-10"></div>
          <div class="skeleton-text w-1/3 h-8"></div>
          <div class="skeleton-text w-full h-32"></div>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-20">
        <div class="text-6xl mb-4">😕</div>
        <h1 class="text-2xl font-heading font-bold text-slate-900 mb-2">Gift Not Found</h1>
        <p class="text-slate-500 mb-6">The gift you're looking for doesn't exist or is no longer available.</p>
        <NuxtLink to="/explore" class="btn-primary">Browse All Gifts</NuxtLink>
      </div>

      <div v-else-if="gift" class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Image Gallery -->
        <div class="space-y-4">
          <div class="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            <img :src="activeImage || '/placeholder-gift.jpg'" :alt="gift.name" class="w-full h-full object-cover" />
          </div>
          <div v-if="gift.images?.length > 1" class="grid grid-cols-4 gap-4">
            <button
              v-for="(img, idx) in gift.images"
              :key="idx"
              @click="activeImage = img"
              :class="['aspect-square rounded-xl overflow-hidden border-2 transition-all',
                activeImage === img ? 'border-primary-800' : 'border-transparent hover:border-slate-300']"
            >
              <img :src="img" :alt="`${gift.name} ${idx + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="pt-2">
          <!-- Vendor context -->
          <NuxtLink :to="`/vendors/${vendorSlug}`" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors mb-6 group">
            <div class="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img v-if="vendorLogo" :src="vendorLogo" class="w-full h-full object-cover" />
              <span v-else class="text-xs font-bold text-slate-500">{{ vendorName.charAt(0) }}</span>
            </div>
            <span class="text-sm font-medium text-slate-700 group-hover:text-slate-900">{{ vendorName }}</span>
          </NuxtLink>

          <h1 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">{{ gift.name }}</h1>

          <!-- Price & Rating -->
          <div class="flex items-end justify-between mb-8 pb-6 border-b border-slate-200">
            <div class="flex items-center gap-3">
              <span class="text-3xl font-heading font-bold text-primary-800">{{ formatNaira(gift.discountPrice || gift.price) }}</span>
              <span v-if="gift.discountPrice" class="text-xl text-slate-400 line-through font-medium">{{ formatNaira(gift.price) }}</span>
            </div>
            <div class="flex items-center gap-1">
              <Star class="w-5 h-5 text-accent-500 fill-current" />
              <span class="font-medium text-slate-700">{{ gift.rating?.toFixed(1) || '0.0' }}</span>
              <span class="text-slate-500">({{ gift.reviewCount }} reviews)</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex gap-4 mb-10">
            <div class="flex items-center border-2 border-slate-200 rounded-xl">
              <button @click="quantity = Math.max(1, quantity - 1)" class="px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors">−</button>
              <span class="px-4 py-3 font-semibold w-12 text-center">{{ quantity }}</span>
              <button @click="quantity++" class="px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors">+</button>
            </div>
            <button @click="handleAddToCart" class="btn-primary flex-1 text-lg flex items-center justify-center gap-2">
              <ShoppingCart class="w-5 h-5" />
              Add to Cart
            </button>
          </div>

          <!-- Description -->
          <div class="space-y-6">
            <div>
              <h3 class="font-heading font-semibold text-slate-900 mb-3 text-lg">About this gift</h3>
              <p class="text-slate-600 leading-relaxed whitespace-pre-wrap">{{ gift.description }}</p>
            </div>

            <!-- Tags & Metadata -->
            <div class="grid grid-cols-2 gap-y-4 gap-x-8 pt-6 border-t border-slate-200">
              <div>
                <span class="block text-sm text-slate-500 mb-1">Occasions</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="occ in gift.occasions" :key="occ" class="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full font-medium capitalize">{{ occ.replace('-', ' ') }}</span>
                </div>
              </div>
              <div>
                <span class="block text-sm text-slate-500 mb-1">Perfect For</span>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="rec in gift.recipientTypes" :key="rec" class="px-2 py-0.5 bg-accent-50 text-accent-700 text-xs rounded-full font-medium capitalize">{{ rec }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star, ShoppingCart } from 'lucide-vue-next';
import { useGifts } from '~/composables/modules/gifts/useGifts';
import type { Gift } from '~/types';
import { formatNaira } from '~/utils/formatCurrency';

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
  if (!gift.value || !gift.value.vendorId) return 'Vendor';
  return typeof gift.value.vendorId === 'object' ? gift.value.vendorId.businessName : 'Vendor';
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
    const data = await getGiftBySlug(route.params.slug as string);
    gift.value = data;
    if (data.images?.length) {
      activeImage.value = data.images[0];
    }
    useSeoMeta({
      title: `${data.name} — CurateWithNG`,
      description: data.description,
      ogTitle: `${data.name} — CurateWithNG`,
      ogDescription: data.description,
      ogImage: data.images?.[0] || 'https://res.cloudinary.com/djd18sqhi/image/upload/v1/curatewithng/demo-hamper1.jpg',
      twitterCard: 'summary_large_image',
    });
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};

const handleAddToCart = () => {
  if (gift.value) {
    cartStore.addItem(gift.value, quantity.value);
    alert('Added to cart!');
  }
};

onMounted(() => {
  fetchGift();
});
</script>
