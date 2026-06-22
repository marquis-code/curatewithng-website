<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUser } from '~/composables/modules/auth/user';
import { useAuth } from '~/composables/modules/auth/useAuth';

const { token } = useUser();
const { fetchProfile } = useAuth();

onMounted(async () => {
  if (token.value) {
    try {
      await fetchProfile();
    } catch {}
  }
  const cartStore = useCartStore();
  cartStore.loadFromLocal();
});
</script>
