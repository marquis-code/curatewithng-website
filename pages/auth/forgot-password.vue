<template>
  <div class="card p-8 animate-scale-in">
    <h2 class="text-2xl font-heading font-bold text-slate-900 text-center mb-2">Reset Password</h2>
    <p class="text-slate-500 text-center mb-8">Enter your email to receive a password reset link.</p>

    <form @submit.prevent="handleReset" class="space-y-4">
      <div>
        <label class="text-sm font-medium text-slate-700 mb-1 block">Email</label>
        <input v-model="email" type="email" required class="input-field" placeholder="you@example.com" />
      </div>
      
      <button type="submit" :disabled="loading" class="btn-primary w-full flex items-center justify-center gap-2">
        <Loader2 v-if="loading" class="w-5 h-5 animate-spin" />
        {{ loading ? 'Sending Link...' : 'Send Reset Link' }}
      </button>
    </form>

    <p class="text-center text-sm text-slate-500 mt-6">
      Remembered your password? <NuxtLink to="/auth/login" class="text-primary-800 font-semibold hover:underline">Sign in</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';

definePageMeta({ layout: 'auth' });
useHead({ title: 'Forgot Password — CurateWithNG' });

const email = ref('');
const loading = ref(false);

const handleReset = async () => {
  loading.value = true;
  try {
    // Basic mock logic or integrate with firebase auth
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Password reset link sent to ' + email.value);
    navigateTo('/auth/login');
  } catch (e: any) {
    alert(e.message || 'Failed to send reset link');
  } finally {
    loading.value = false;
  }
};
</script>
