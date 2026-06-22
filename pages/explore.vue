<template>
  <div class="py-8">
    <div class="section-container">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">Explore Gifts</h1>
        <p class="text-slate-500">Discover curated gifts from Nigeria's finest vendors</p>
      </div>

      <div class="flex gap-8">
        <!-- Filters sidebar -->
        <aside class="hidden lg:block w-64 flex-shrink-0">
          <div class="sticky top-24 space-y-6">
            <!-- Search -->
            <div>
              <label class="text-sm font-semibold text-slate-700 mb-2 block">Search</label>
              <input v-model="filters.search" @input="debouncedFetch" type="text" placeholder="Search gifts..." class="input-field !py-2.5 text-sm" />
            </div>

            <!-- Category -->
            <div>
              <label class="text-sm font-semibold text-slate-700 mb-2 block">Category</label>
              <select v-model="filters.category" @change="fetchGifts" class="input-field !py-2.5 text-sm">
                <option value="">All Categories</option>
                <option v-for="cat in categoryOptions" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>

            <!-- Occasion -->
            <div>
              <label class="text-sm font-semibold text-slate-700 mb-2 block">Occasion</label>
              <select v-model="filters.occasion" @change="fetchGifts" class="input-field !py-2.5 text-sm">
                <option value="">All Occasions</option>
                <option v-for="occ in occasionOptions" :key="occ" :value="occ">{{ occ }}</option>
              </select>
            </div>

            <!-- Recipient -->
            <div>
              <label class="text-sm font-semibold text-slate-700 mb-2 block">Gift For</label>
              <select v-model="filters.recipientType" @change="fetchGifts" class="input-field !py-2.5 text-sm">
                <option value="">Anyone</option>
                <option v-for="r in recipientOptions" :key="r" :value="r">{{ r }}</option>
              </select>
            </div>

            <!-- Budget -->
            <div>
              <label class="text-sm font-semibold text-slate-700 mb-2 block">Budget Tier</label>
              <select v-model="filters.budgetTier" @change="fetchGifts" class="input-field !py-2.5 text-sm">
                <option value="">All Budgets</option>
                <option value="BUDGET">Budget (under ₦20k)</option>
                <option value="MID">Mid-range (₦20k–₦50k)</option>
                <option value="PREMIUM">Premium (₦50k–₦150k)</option>
                <option value="LUXURY">Luxury (₦150k+)</option>
              </select>
            </div>

            <!-- Reset -->
            <button @click="resetFilters" class="text-sm text-primary-800 font-medium hover:underline">Reset Filters</button>
          </div>
        </aside>

        <!-- Products Grid -->
        <div class="flex-1">
          <!-- Sort bar -->
          <div class="flex items-center justify-between mb-6">
            <p class="text-sm text-slate-500">{{ totalResults }} gifts found</p>
            <select v-model="sortBy" @change="fetchGifts" class="input-field !w-auto !py-2 text-sm">
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          <!-- Loading -->
          <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="i in 6" :key="i" class="card p-4">
              <div class="skeleton h-48 w-full rounded-xl mb-4"></div>
              <div class="skeleton-text mb-2 w-3/4"></div>
              <div class="skeleton-text w-1/2"></div>
            </div>
          </div>

          <!-- Products -->
          <div v-else-if="gifts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="gift in gifts"
              :key="gift._id"
              :to="`/gifts/${gift.slug}`"
              class="card-interactive overflow-hidden group"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img
                  :src="gift.images?.[0] || '/placeholder-gift.jpg'"
                  :alt="gift.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="p-4">
                <div class="text-xs text-primary-600 font-medium mb-1">
                  {{ typeof gift.vendorId === 'object' ? gift.vendorId.businessName : '' }}
                </div>
                <h3 class="font-heading font-semibold text-slate-900 mb-2 line-clamp-2">{{ gift.name }}</h3>
                <div class="flex items-center gap-2">
                  <span class="price text-lg">{{ formatNaira(gift.discountPrice || gift.price) }}</span>
                  <span v-if="gift.discountPrice" class="price-original">{{ formatNaira(gift.price) }}</span>
                </div>
                <div class="flex items-center gap-1 mt-2">
                  <Star class="w-4 h-4 text-accent-500 fill-current" />
                  <span class="text-xs text-slate-500">{{ gift.rating.toFixed(1) }} ({{ gift.reviewCount }})</span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Empty state -->
          <div v-else class="text-center py-20">
            <div class="text-6xl mb-4">🔍</div>
            <h3 class="text-xl font-heading font-bold text-slate-900 mb-2">No gifts found</h3>
            <p class="text-slate-500 mb-6">Try adjusting your filters or search terms</p>
            <button @click="resetFilters" class="btn-primary">Reset Filters</button>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-8">
            <button
              v-for="p in totalPages"
              :key="p"
              @click="filters.page = p; fetchGifts()"
              :class="[
                'w-10 h-10 rounded-xl font-medium text-sm transition-all',
                p === filters.page ? 'bg-primary-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              ]"
            >
              {{ p }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import type { Gift } from '~/types';
import { useGifts } from '~/composables/modules/gifts/useGifts';
import { formatNaira } from '~/utils/formatCurrency';

definePageMeta({ layout: 'default' });
useSeoMeta({ 
  title: 'Explore Gifts — CurateWithNG',
  description: 'Browse the best curated gifts in Nigeria for any occasion, budget, or recipient. Find the perfect present today.',
  ogTitle: 'Explore Gifts — CurateWithNG',
  ogDescription: 'Browse the best curated gifts in Nigeria for any occasion, budget, or recipient.',
});

const { getGifts } = useGifts();

const gifts = ref<Gift[]>([]);
const loading = ref(true);
const totalResults = ref(0);
const totalPages = ref(1);
const sortBy = ref('newest');

const filters = reactive({
  page: 1,
  search: '',
  category: '',
  occasion: '',
  recipientType: '',
  budgetTier: '',
});

const categoryOptions = ['hampers', 'fashion', 'experiences', 'wellness', 'tech', 'home', 'jewellery', 'corporate'];
const occasionOptions = ['birthday', 'wedding', 'anniversary', 'christmas', 'corporate', 'owambe', 'valentines', 'mothers-day'];
const recipientOptions = ['her', 'him', 'couple', 'child', 'colleague', 'boss'];

let searchTimeout: ReturnType<typeof setTimeout>;
const debouncedFetch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => fetchGifts(), 400);
};

const fetchGifts = async () => {
  loading.value = true;
  try {
    const params = new URLSearchParams();
    params.set('page', String(filters.page));
    params.set('limit', '12');

    if (filters.search) params.set('search', filters.search);
    if (filters.category) params.set('category', filters.category);
    if (filters.occasion) params.set('occasion', filters.occasion);
    if (filters.recipientType) params.set('recipientType', filters.recipientType);
    if (filters.budgetTier) params.set('budgetTier', filters.budgetTier);

    let sort = 'createdAt';
    let order = 'desc';
    if (sortBy.value === 'price-asc') { sort = 'price'; order = 'asc'; }
    else if (sortBy.value === 'price-desc') { sort = 'price'; order = 'desc'; }
    else if (sortBy.value === 'popular') { sort = 'popular'; }
    params.set('sort', sort);
    params.set('order', order);

    const result = await getGifts(Object.fromEntries(params.entries()));
    gifts.value = result.data || result;
    totalResults.value = result.meta?.total || gifts.value.length;
    totalPages.value = result.meta?.totalPages || 1;
  } catch (e) {
    console.error('Failed to fetch gifts:', e);
    gifts.value = [];
  } finally {
    loading.value = false;
  }
};

const resetFilters = () => {
  filters.page = 1;
  filters.search = '';
  filters.category = '';
  filters.occasion = '';
  filters.recipientType = '';
  filters.budgetTier = '';
  sortBy.value = 'newest';
  fetchGifts();
};

// Read route query params on mount
onMounted(() => {
  const route = useRoute();
  if (route.query.category) filters.category = route.query.category as string;
  if (route.query.occasion) filters.occasion = route.query.occasion as string;
  fetchGifts();
});
</script>
