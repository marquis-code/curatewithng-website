<template>
  <div class="py-8 animate-fade-in">
    <div class="section-container">
      <h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">My Account</h1>
      <p class="text-slate-500 mb-8">Manage your profile and view your order history</p>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <nav class="card p-4 space-y-1 sticky top-28">
            <NuxtLink v-for="tab in tabs" :key="tab.id" :to="tab.path"
              class="w-full flex items-center gap-3 text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
              :class="[route.path === tab.path ? 'bg-primary-50 text-primary-800' : 'text-slate-600 hover:bg-slate-50']">
              <component :is="tab.icon" class="w-4 h-4" />
              {{ tab.label }}
            </NuxtLink>
          </nav>
        </aside>

        <!-- Content -->
        <div class="lg:col-span-3">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Package, Heart, Users, Bell } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

definePageMeta({ layout: 'default', middleware: 'auth' });
useHead({ title: 'My Account — CurateWithNG' });

const route = useRoute();

const tabs = [
  { id: 'profile', label: 'Profile Settings', path: '/dashboard', icon: User },
  { id: 'orders', label: 'My Orders', path: '/dashboard/orders', icon: Package },
  { id: 'requests', label: 'Sourcing Requests', path: '/dashboard/requests', icon: Package },
  { id: 'wishlist', label: 'Saved Gifts', path: '/dashboard/wishlist', icon: Heart },
  { id: 'recipients', label: 'My Recipients', path: '/dashboard/recipients', icon: Users },
  { id: 'notifications', label: 'Notifications', path: '/dashboard/notifications', icon: Bell },
];
</script>
