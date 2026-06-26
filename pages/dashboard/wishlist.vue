<template>
  <div class="card p-6 animate-scale-in">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h3 class="font-heading font-bold text-slate-900 text-xl">Saved Gifts</h3>
        <p class="text-slate-500 text-sm mt-1">Gifts you love, saved for later.</p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!user?.savedGifts?.length" class="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
      <div class="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-4">
        <Heart class="w-10 h-10 text-pink-400" />
      </div>
      <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">Your wishlist is empty</h3>
      <p class="text-slate-500 max-w-sm mb-6 text-sm">Save gifts you love for later by clicking the heart icon on any gift.</p>
      <NuxtLink to="/explore" class="btn-primary px-6 inline-block">Explore Gifts</NuxtLink>
    </div>

    <!-- Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="gift in user.savedGifts" :key="gift._id" class="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all group flex flex-col relative">
        <button @click="handleToggle(gift._id)" :disabled="toggling === gift._id" class="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-pink-500 shadow-sm hover:scale-110 transition-transform">
          <Loader2 v-if="toggling === gift._id" class="w-4 h-4 animate-spin text-slate-400" />
          <Heart v-else class="w-4 h-4 fill-pink-500" />
        </button>
        <div class="h-48 bg-slate-100 relative overflow-hidden">
          <img :src="gift.images?.[0] || '/placeholder-gift.jpg'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div class="p-4 flex flex-col flex-1">
          <h4 class="font-bold text-slate-900 mb-1 truncate">{{ gift.name }}</h4>
          <p class="text-sm font-bold text-primary-700 mb-4">{{ formatNaira(gift.discountPrice || gift.price) }}</p>
          <NuxtLink :to="`/gifts/${gift.slug || gift._id}`" class="mt-auto w-full text-center py-2 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
            View Gift
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Heart, Loader2 } from 'lucide-vue-next';
import { useUser } from '~/composables/modules/auth/user';
import { auth_api } from '~/api_factory/modules/auth';
import { useCustomToast } from '~/composables/core/useCustomToast';
import { formatNaira } from '~/utils/formatCurrency';

const { user, setUser } = useUser();
const { showToast } = useCustomToast();

const toggling = ref('');

const handleToggle = async (giftId: string) => {
  toggling.value = giftId;
  try {
    const res = await auth_api.toggleSavedGift(giftId);
    const data = res.data?.data || res.data;
    setUser(data);
    showToast({ title: 'Removed', message: 'Gift removed from wishlist', toastType: 'success' });
  } catch (err: any) {
    showToast({ title: 'Error', message: 'Failed to update wishlist', toastType: 'error' });
  } finally {
    toggling.value = '';
  }
};
</script>
