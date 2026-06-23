<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-[0_20px_60px_-15px_rgba(107,33,168,0.2)] border border-purple-100/50 transform transition-all">
          <div class="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Gift class="w-10 h-10 text-purple-600" />
          </div>
          
          <h2 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Welcome to the Family! ✨</h2>
          <p class="text-slate-600 text-lg leading-relaxed mb-6">
            We're incredibly excited to have you join the CurateWithNG community. Get ready to create unforgettable gifting moments.
          </p>
          
          <div class="flex items-center justify-center space-x-2">
            <div class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
            <div class="w-2 h-2 rounded-full bg-purple-600 animate-pulse" style="animation-delay: 200ms"></div>
            <div class="w-2 h-2 rounded-full bg-purple-600 animate-pulse" style="animation-delay: 400ms"></div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Gift } from 'lucide-vue-next'

defineProps<{
  show: boolean
}>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
