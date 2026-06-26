<template>
  <div class="card p-6 animate-scale-in">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h3 class="font-heading font-bold text-slate-900 text-xl">My Recipients</h3>
        <p class="text-slate-500 text-sm mt-1">Save recipient profiles for faster curation</p>
      </div>
      <button v-if="!showForm && user?.recipients?.length > 0" @click="showForm = true" class="btn-primary py-2 px-4 text-sm flex items-center gap-2">
        <Plus class="w-4 h-4" /> Add New
      </button>
    </div>

    <!-- Add Recipient Form -->
    <div v-if="showForm" class="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 relative">
      <button @click="showForm = false" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
        <X class="w-5 h-5" />
      </button>
      <h4 class="font-bold text-slate-900 mb-4">Add New Recipient</h4>
      <form @submit.prevent="handleAddRecipient" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-xs">Name <span class="text-red-500">*</span></label>
            <input v-model="form.name" type="text" required class="input-field" placeholder="e.g. Jane Doe" />
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-xs">Relationship</label>
            <input v-model="form.relationship" type="text" list="relationship-options" class="input-field" placeholder="Select or type custom..." />
            <datalist id="relationship-options">
              <option value="Mother"></option>
              <option value="Father"></option>
              <option value="Sister"></option>
              <option value="Brother"></option>
              <option value="Wife"></option>
              <option value="Husband"></option>
              <option value="Partner"></option>
              <option value="Friend"></option>
              <option value="Colleague"></option>
              <option value="Boss"></option>
              <option value="Mentor"></option>
            </datalist>
          </div>
        </div>
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-xs">Notes</label>
          <textarea v-model="form.notes" rows="2" class="input-field" placeholder="Any special notes about what they like..."></textarea>
        </div>
        <div class="flex justify-end pt-2">
          <button type="submit" :disabled="loading" class="btn-primary py-2.5 px-6 flex items-center gap-2 disabled:opacity-50">
            <Loader2 v-if="loading" class="w-4 h-4 animate-spin" />
            Save Recipient
          </button>
        </div>
      </form>
    </div>

    <!-- Empty State -->
    <div v-if="!user?.recipients?.length && !showForm" class="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
      <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
        <Users class="w-10 h-10 text-blue-400" />
      </div>
      <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">No recipients saved</h3>
      <p class="text-slate-500 max-w-sm mb-6 text-sm">Add your first recipient to make AI curation even faster next time.</p>
      <button @click="showForm = true" class="btn-primary px-6">Add Recipient</button>
    </div>

    <!-- List -->
    <div v-if="user?.recipients?.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(recipient, idx) in user.recipients" :key="idx" class="border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors bg-white relative group">
        <button @click="handleRemove(Number(idx))" :disabled="removingIdx === Number(idx)" class="absolute top-3 right-3 text-slate-300 hover:text-red-500 transition-colors bg-slate-50 rounded-full p-1.5 opacity-0 group-hover:opacity-100 disabled:opacity-50">
          <Loader2 v-if="removingIdx === Number(idx)" class="w-4 h-4 animate-spin text-slate-400" />
          <Trash2 v-else class="w-4 h-4" />
        </button>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-lg">
            {{ recipient.name.charAt(0).toUpperCase() }}
          </div>
          <div>
            <h4 class="font-bold text-slate-900">{{ recipient.name }}</h4>
            <p class="text-xs text-slate-500 font-medium">{{ recipient.relationship || 'Unspecified Relationship' }}</p>
          </div>
        </div>
        <p v-if="recipient.notes" class="text-sm text-slate-600 mt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
          <span class="font-semibold text-slate-700 text-xs uppercase block mb-1">Notes:</span>
          {{ recipient.notes }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Users, Plus, X, Trash2, Loader2 } from 'lucide-vue-next';
import { auth_api } from '~/api_factory/modules/auth';
import { useUser } from '~/composables/modules/auth/user';
import { useCustomToast } from '~/composables/core/useCustomToast';

const { user, setUser } = useUser();
const { showToast } = useCustomToast();

const showForm = ref(false);
const loading = ref(false);
const removingIdx = ref<number | null>(null);

const form = ref({
  name: '',
  relationship: '',
  notes: '',
});

const handleAddRecipient = async () => {
  if (!form.value.name) return;
  
  loading.value = true;
  try {
    const res = await auth_api.addRecipient(form.value);
    const data = res.data?.data || res.data;
    setUser(data);
    showToast({ title: 'Success', message: 'Recipient added successfully', toastType: 'success' });
    
    // Reset
    form.value = { name: '', relationship: '', notes: '' };
    showForm.value = false;
  } catch (error: any) {
    showToast({ title: 'Error', message: error?.data?.message || 'Failed to add recipient', toastType: 'error' });
  } finally {
    loading.value = false;
  }
};

const handleRemove = async (index: number) => {
  if (!confirm('Are you sure you want to remove this recipient?')) return;
  
  removingIdx.value = index;
  try {
    const res = await auth_api.removeRecipient(index);
    const data = res.data?.data || res.data;
    setUser(data);
    showToast({ title: 'Success', message: 'Recipient removed', toastType: 'success' });
  } catch (error: any) {
    showToast({ title: 'Error', message: error?.data?.message || 'Failed to remove recipient', toastType: 'error' });
  } finally {
    removingIdx.value = null;
  }
};
</script>
