<template>
  <div class="py-8">
    <div class="section-container">
      <h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">My Account</h1>
      <p class="text-slate-500 mb-8">Manage your profile and view your order history</p>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <nav class="card p-4 space-y-1">
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
              :class="['w-full flex items-center gap-2 text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors',
                activeTab === tab.id ? 'bg-primary-50 text-primary-800' : 'text-slate-600 hover:bg-slate-50']">
              <component :is="tab.icon" class="w-4 h-4" />
              {{ tab.label }}
            </button>
          </nav>
        </aside>

        <!-- Content -->
        <div class="lg:col-span-3">
          <!-- Profile -->
          <div v-if="activeTab === 'profile'" class="card p-6">
            <h3 class="font-heading font-bold text-slate-900 mb-6">Profile Settings</h3>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-sm font-medium text-slate-700 mb-1 block">First Name</label>
                  <input :value="user?.firstName" class="input-field" readonly />
                </div>
                <div>
                  <label class="text-sm font-medium text-slate-700 mb-1 block">Last Name</label>
                  <input :value="user?.lastName" class="input-field" readonly />
                </div>
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700 mb-1 block">Email</label>
                <input :value="user?.email" class="input-field" readonly />
              </div>
              <div>
                <label class="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
                <input :value="user?.phone" class="input-field" readonly />
              </div>
            </div>
          </div>

          <!-- Orders -->
          <div v-if="activeTab === 'orders'" class="card p-6">
            <h3 class="font-heading font-bold text-slate-900 mb-6">My Orders</h3>
            <div class="flex flex-col items-center justify-center py-16 text-center">
              <div class="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                <Package class="w-12 h-12 text-primary-300" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">No orders yet</h3>
              <p class="text-slate-500 max-w-sm mb-6">You haven't placed any orders. Start exploring to find the perfect gift for someone special!</p>
              <NuxtLink to="/explore" class="btn-primary inline-block">Start Shopping</NuxtLink>
            </div>
          </div>

          <!-- Wishlist -->
          <div v-if="activeTab === 'wishlist'" class="card p-6">
            <h3 class="font-heading font-bold text-slate-900 mb-6">Saved Gifts</h3>
            <div class="flex flex-col items-center justify-center py-16 text-center">
              <div class="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-6">
                <Heart class="w-12 h-12 text-pink-300" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">Your wishlist is empty</h3>
              <p class="text-slate-500 max-w-sm">Save gifts you love for later by clicking the heart icon on any gift.</p>
            </div>
          </div>

          <!-- Recipients -->
          <div v-if="activeTab === 'recipients'" class="card p-6">
            <h3 class="font-heading font-bold text-slate-900 mb-6">My Recipients</h3>
            <p class="text-slate-500 mb-4">Save recipient profiles for faster curation</p>
            <div class="flex flex-col items-center justify-center py-12 text-center">
              <div class="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Users class="w-12 h-12 text-blue-300" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">No recipients saved</h3>
              <p class="text-slate-500 max-w-sm mb-6">Add your first recipient to make AI curation even faster next time.</p>
              <button class="btn-primary mt-2">Add Recipient</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Package, Heart, Users } from 'lucide-vue-next';
import { useUser } from '~/composables/modules/auth/user';

definePageMeta({ layout: 'default', middleware: 'auth' });
useHead({ title: 'My Account — CurateWithNG' });


const { user } = useUser();
const activeTab = ref('profile');

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'orders', label: 'My Orders', icon: Package },
  { id: 'wishlist', label: 'Saved Gifts', icon: Heart },
  { id: 'recipients', label: 'Recipients', icon: Users },
];
</script>
