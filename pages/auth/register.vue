<template>
  <div class="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-10 animate-scale-in max-w-md mx-auto">
    <h2 class="text-2xl font-heading font-bold text-slate-900 text-center mb-2">Create Account</h2>
    <p class="text-slate-500 text-center mb-8">Join CurateWithNG and start gifting smarter</p>

    <form @submit.prevent="handleRegister" class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <UiCustomInput
          v-model="form.firstName"
          required
          label="First Name"
          placeholder="Chidi"
        />
        <UiCustomInput
          v-model="form.lastName"
          required
          label="Last Name"
          placeholder="Okonkwo"
        />
      </div>
      <UiCustomInput
        v-model="form.email"
        type="email"
        required
        label="Email"
        placeholder="you@example.com"
      />
      <UiPhoneInput
        v-model="form.phone"
        label="Phone (optional)"
        placeholder="801 234 5678"
      />
      <UiCustomInput
        v-model="form.password"
        type="password"
        required
        minlength="8"
        pattern=".{8,}"
        title="Password must be at least 8 characters long"
        label="Password"
        placeholder="At least 8 characters"
      />
      <button type="submit" :disabled="loading" class="btn-primary w-full">
        {{ loading ? 'Creating account...' : 'Create Account' }}
      </button>
    </form>

    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200"></div></div>
        <div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-slate-400">Or</span></div>
      </div>
      <button @click="handleGoogleLogin" type="button" class="mt-4 flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Sign up with Google
      </button>
    </div>

    <p class="text-center text-sm text-slate-500 mt-6">
      Already have an account? <NuxtLink to="/auth/login" class="text-primary-800 font-semibold hover:underline">Sign in</NuxtLink>
    </p>

    <CelebrationModal :show="showCelebration" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' });
useHead({ title: 'Create Account — CurateWithNG' });

import { useAuth } from '~/composables/modules/auth/useAuth';
import confetti from 'canvas-confetti';
import CelebrationModal from '~/components/ui/CelebrationModal.vue';

const config = useRuntimeConfig();
const { register, firebaseGoogleLogin } = useAuth();
const loading = ref(false);
const showCelebration = ref(false);

const fireConfetti = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#6B21A8', '#A855F7', '#D8B4FE', '#ffffff']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#6B21A8', '#A855F7', '#D8B4FE', '#ffffff']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
});

const handleRegister = async () => {
  loading.value = true;
  try {
    await register(form);
    
    // Celebration effect
    showCelebration.value = true;
    fireConfetti();
    
    setTimeout(() => {
      showCelebration.value = false;
      navigateTo('/dashboard');
    }, 4500);

  } catch (e: any) {
    alert(e.data?.message || 'Registration failed. Please try again.');
    loading.value = false;
  }
};

const handleGoogleLogin = async () => {
  loading.value = true;
  try {
    const { $firebaseAuth } = useNuxtApp();
    const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
    const provider = new GoogleAuthProvider();
    
    const result = await signInWithPopup($firebaseAuth, provider);
    const idToken = await result.user.getIdToken();
    
    await firebaseGoogleLogin({ token: idToken });
    
    // Check if new user isn't easily doable here, so we will celebrate anyway for Google login
    showCelebration.value = true;
    fireConfetti();
    
    setTimeout(() => {
      showCelebration.value = false;
      navigateTo('/dashboard');
    }, 4500);

  } catch (e: any) {
    alert(e.message || 'Google Login failed');
    loading.value = false;
  }
};
</script>
