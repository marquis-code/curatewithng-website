<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <NuxtLink to="/" class="flex items-center justify-center gap-2 mb-8">
        <div class="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
          <span class="text-white font-heading font-bold text-lg">C</span>
        </div>
        <span class="font-heading font-bold text-2xl text-slate-900">CurateWithNG</span>
      </NuxtLink>
      <slot />
    </div>
  </div>
</template>
