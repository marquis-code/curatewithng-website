<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUser } from '~/composables/modules/auth/user';
import { useAuth } from '~/composables/modules/auth/useAuth';

useSeoMeta({
  title: 'CurateWithNG — The Smartest Way to Gift in Nigeria',
  description: 'AI-powered gifting curation platform for Nigeria. Get personalized gift recommendations for birthdays, weddings, corporate events, and more.',
  ogTitle: 'CurateWithNG — The Smartest Way to Gift in Nigeria',
  ogDescription: 'AI-powered gifting curation platform. Find the perfect gift for every occasion.',
  ogImage: 'https://res.cloudinary.com/djd18sqhi/image/upload/v1/curatewithng/demo-hamper1.jpg',
  twitterCard: 'summary_large_image',
});

const { user } = useUser();
const { fetchProfile } = useAuth();

onMounted(async () => {
  if (user.value) {
    try {
      await fetchProfile();
    } catch {}
  }
  const cartStore = useCartStore();
  cartStore.loadFromLocal();
});
</script>
