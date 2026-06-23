<template>
  <div class="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-10 animate-scale-in max-w-md mx-auto">
    <h2 class="text-2xl font-heading font-bold text-slate-900 text-center mb-2">Welcome Back</h2>
    <p class="text-slate-500 text-center mb-8">Sign in to your CurateWithNG account</p>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <UiCustomInput
        v-model="email"
        type="email"
        required
        label="Email"
        placeholder="you@example.com"
      />
      <UiCustomInput
        v-model="password"
        type="password"
        required
        minlength="8"
        pattern=".{8,}"
        title="Password must be at least 8 characters long"
        label="Password"
        placeholder="••••••••"
      />
      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" class="rounded border-slate-300 text-primary-800 focus:ring-primary-500" />
          Remember me
        </label>
        <NuxtLink to="/auth/forgot-password" class="text-sm text-primary-800 hover:underline">Forgot password?</NuxtLink>
      </div>
      <button type="submit" :disabled="loading" class="btn-primary w-full flex items-center justify-center gap-2">
        <Loader2 v-if="loading" class="w-5 h-5 animate-spin" />
        {{ loading ? 'Signing in...' : 'Sign In' }}
      </button>
    </form>

    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200"></div></div>
        <div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-slate-400">Or continue with</span></div>
      </div>
      <button @click="handleGoogleLogin" type="button" class="mt-4 flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Continue with Google
      </button>
    </div>

    <p class="text-center text-sm text-slate-500 mt-6">
      Don't have an account? <NuxtLink to="/auth/register" class="text-primary-800 font-semibold hover:underline">Sign up</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';

definePageMeta({ layout: 'auth' });
useHead({ title: 'Sign In — CurateWithNG' });

import { useAuth } from '~/composables/modules/auth/useAuth';

const config = useRuntimeConfig();
const { login, firebaseGoogleLogin } = useAuth();
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleLogin = async () => {
  loading.value = true;
  error.value = '';
  try {
    await login({ email: email.value, password: password.value });
    navigateTo('/dashboard');
  } catch (e: any) {
    error.value = e.data?.message || 'Invalid email or password';
    alert(error.value);
  } finally {
    loading.value = false;
  }
};

const handleGoogleLogin = async () => {
  loading.value = true;
  error.value = '';
  try {
    const { $firebaseAuth } = useNuxtApp();
    const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
    const provider = new GoogleAuthProvider();
    
    const result = await signInWithPopup($firebaseAuth, provider);
    const idToken = await result.user.getIdToken();
    
    await firebaseGoogleLogin({ token: idToken });
    navigateTo('/dashboard');
  } catch (e: any) {
    error.value = e.message || 'Google Login failed';
    alert(error.value);
  } finally {
    loading.value = false;
  }
};
</script>
