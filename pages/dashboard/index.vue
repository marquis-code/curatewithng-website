<template>
  <div class="card p-6 animate-scale-in">
    <h3 class="font-heading font-bold text-slate-900 mb-6 text-xl">Profile Settings</h3>
    <form @submit.prevent="handleUpdate" class="space-y-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <UiCustomInput 
          v-model="form.firstName" 
          label="First Name" 
          placeholder="John" 
          required 
        />
        <UiCustomInput 
          v-model="form.lastName" 
          label="Last Name" 
          placeholder="Doe" 
          required 
        />
      </div>
      
      <UiCustomInput 
        v-model="form.email" 
        label="Email Address" 
        type="email" 
        readonly
        disabled
        class="opacity-70 bg-slate-50 cursor-not-allowed"
      />
      
      <UiCustomInput 
        v-model="form.phone" 
        label="Phone Number" 
        placeholder="+234 800 000 0000" 
      />

      <div class="pt-4 border-t border-slate-100 flex justify-end">
        <button 
          type="submit" 
          :disabled="loading" 
          class="btn-primary px-8 flex items-center gap-2"
        >
          <Loader2 v-if="loading" class="w-4 h-4 animate-spin" />
          {{ loading ? 'Saving...' : 'Save Changes' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { useUser } from '~/composables/modules/auth/user';
import { auth_api } from '~/api_factory/modules/auth';

import { useCustomToast } from '~/composables/core/useCustomToast';

const { user, setUser } = useUser();
const { showToast } = useCustomToast();

const loading = ref(false);

const form = reactive({
  firstName: user.value?.firstName || '',
  lastName: user.value?.lastName || '',
  email: user.value?.email || '',
  phone: user.value?.phone || '',
});

const handleUpdate = async () => {
  loading.value = true;
  try {
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone
    };
    const response = await auth_api.updateProfile(payload);
    
    // Update local state
    setUser({ ...user.value, ...response.data });
    
    showToast({ title: 'Success', message: 'Profile updated successfully', toastType: 'success' });
  } catch (e: any) {
    // Handled globally by axios interceptor
  } finally {
    loading.value = false;
  }
};
</script>
