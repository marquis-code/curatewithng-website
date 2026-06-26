<template>
  <div class="min-h-screen grid lg:grid-cols-2 bg-white">
    <!-- Left side: Form slot -->
    <div class="relative flex flex-col justify-center px-4 sm:px-16 lg:px-24 py-12 overflow-y-auto max-h-screen">
      <div class="w-full max-w-md mx-auto">
        <NuxtLink to="/" class="flex items-center justify-center gap-3 mb-10">
          <div class="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center">
            <span class="text-white font-heading font-bold text-lg">C</span>
          </div>
          <span class="font-heading font-bold text-xl text-slate-900">Curate<span class="text-accent-500">With</span>NG</span>
        </NuxtLink>
        <slot />
      </div>
    </div>

    <!-- Right side: Floating Card Image -->
    <div class="hidden lg:flex items-center justify-center p-6 bg-slate-50">
      <div class="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)]">
        <img 
          src="~/assets/images/auth-bg.png" 
          alt="Premium Gifting" 
          class="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
        <div class="absolute bottom-12 left-12 right-12 z-10">
          <h2 class="font-heading font-extrabold text-4xl leading-tight mb-4 text-white">
            {{ title }}
          </h2>
          <p class="text-white/80 text-lg max-w-md">
            {{ body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const title = computed(() => route.meta.authImageTextTitle || 'Discover Joy.');
const body = computed(() => route.meta.authImageTextBody || 'Find the perfect gift for every occasion.');
</script>
