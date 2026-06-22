<template>
  <div class="py-8">
    <div class="section-container">
      <h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">Vendor Directory</h1>
      <p class="text-slate-500 mb-8">Discover Nigeria's finest gift vendors and artisans</p>

      <div class="flex flex-col sm:flex-row gap-4 mb-8">
        <input v-model="search" @input="debouncedFetch" type="text" placeholder="Search vendors..." class="input-field max-w-sm" />
        <select v-model="category" @change="fetchVendors" class="input-field max-w-xs">
          <option value="">All Categories</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>

      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="card p-6">
          <div class="skeleton h-16 w-16 rounded-full mb-4"></div>
          <div class="skeleton-text mb-2"></div>
          <div class="skeleton-text w-2/3"></div>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="vendor in vendors"
          :key="vendor._id"
          :to="`/vendors/${vendor.slug}`"
          class="card-interactive p-6"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden">
              <img v-if="vendor.logo" :src="vendor.logo" class="w-full h-full object-cover" />
              <span v-else class="text-primary-800 font-bold text-lg">{{ vendor.businessName.charAt(0) }}</span>
            </div>
            <div>
              <h3 class="font-heading font-bold text-slate-900">{{ vendor.businessName }}</h3>
              <p class="text-sm text-slate-500">{{ vendor.location?.city }}, {{ vendor.location?.state }}</p>
            </div>
          </div>
          <p class="text-sm text-slate-600 line-clamp-2 mb-4">{{ vendor.description || 'Premium gift vendor on CurateWithNG' }}</p>
          <div class="flex items-center justify-between">
            <div class="flex flex-wrap gap-1.5">
              <span v-for="cat in vendor.categories.slice(0, 3)" :key="cat" class="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full font-medium">
                {{ cat }}
              </span>
            </div>
            <div class="flex items-center gap-1 text-sm text-slate-500">
              <Star class="w-4 h-4 text-accent-500 fill-current" />
              {{ vendor.rating?.toFixed(1) || '0.0' }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import { useVendors } from '~/composables/modules/vendors/useVendors';
import type { Vendor } from '~/types';

definePageMeta({ layout: 'default' });
useHead({ title: 'Vendors — CurateWithNG' });

const { getVendors } = useVendors();

const vendors = ref<Vendor[]>([]);
const loading = ref(true);
const search = ref('');
const category = ref('');
const categories = ['hampers', 'fashion', 'experiences', 'wellness', 'tech', 'home', 'jewellery', 'corporate'];

let searchTimeout: ReturnType<typeof setTimeout>;
const debouncedFetch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => fetchVendors(), 400);
};

const fetchVendors = async () => {
  loading.value = true;
  try {
    const params = new URLSearchParams();
    if (search.value) params.set('search', search.value);
    if (category.value) params.set('category', category.value);
    const result = await getVendors(Object.fromEntries(params.entries()));
    vendors.value = result.data || result;
  } catch {
    vendors.value = [];
  } finally {
    loading.value = false;
  }
};

onMounted(() => fetchVendors());
</script>
