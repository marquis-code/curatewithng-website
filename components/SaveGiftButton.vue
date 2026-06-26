<template>
  <button 
    @click.prevent.stop="handleToggle" 
    class="rounded-full flex items-center justify-center transition-colors shadow-sm z-10"
    :class="[
      isSaved ? 'text-red-500 bg-white border border-red-100' : 'text-slate-400 bg-white/80 backdrop-blur-sm hover:bg-white hover:text-red-500 border border-transparent',
      sizeClass,
      { 'opacity-70 cursor-not-allowed': loading }
    ]"
    :title="isSaved ? 'Remove from Wishlist' : 'Save for Later'"
    :disabled="loading"
  >
    <Heart :class="[iconClass, { 'fill-current': isSaved }]" />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Heart } from 'lucide-vue-next';
import { useUser } from '~/composables/modules/auth/user';
import { auth_api } from '~/api_factory/modules/auth';
import { useCustomToast } from '~/composables/core/useCustomToast';
import { useRouter } from 'vue-router';

const props = defineProps({
  giftId: { type: String, required: true },
  size: { type: String, default: 'md' }, // 'sm', 'md', 'lg'
});

const { user, setUser } = useUser();
const { showToast } = useCustomToast();
const router = useRouter();

const loading = ref(false);

const isSaved = computed(() => {
  if (!user.value || !user.value.savedGifts) return false;
  return user.value.savedGifts.some((g: any) => {
    if (typeof g === 'object' && g._id) return g._id === props.giftId;
    return g === props.giftId;
  });
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-8 h-8';
    case 'lg': return 'w-12 h-12';
    case 'md':
    default: return 'w-10 h-10';
  }
});

const iconClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'w-4 h-4';
    case 'lg': return 'w-6 h-6';
    case 'md':
    default: return 'w-5 h-5';
  }
});

const handleToggle = async () => {
  if (!user.value) {
    showToast({ title: 'Authentication Required', message: 'Please log in to save gifts', toastType: 'warning' });
    router.push('/auth/login');
    return;
  }
  
  if (loading.value) return;
  loading.value = true;
  
  try {
    const res = await auth_api.toggleSavedGift(props.giftId);
    const data = res.data?.data || res.data;
    setUser(data);
    
    if (isSaved.value) {
      showToast({ title: 'Added to Wishlist', message: 'Gift saved for later', toastType: 'success' });
    } else {
      showToast({ title: 'Removed', message: 'Gift removed from wishlist', toastType: 'info' });
    }
  } catch (error: any) {
    showToast({ title: 'Error', message: error?.response?.data?.message || 'Failed to update wishlist', toastType: 'error' });
  } finally {
    loading.value = false;
  }
};
</script>
