<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 glass border-b border-slate-200/50">
      <div class="section-container">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
              <span class="text-white font-heading font-bold text-sm">C</span>
            </div>
            <span class="font-heading font-bold text-xl text-slate-900">
              Curate<span class="text-primary-800">WithNG</span>
            </span>
          </NuxtLink>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-8">
            <NuxtLink to="/explore" class="text-slate-600 hover:text-primary-800 font-medium transition-colors">
              Explore Gifts
            </NuxtLink>
            <NuxtLink to="/curate" class="text-slate-600 hover:text-primary-800 font-medium transition-colors">
              AI Curator ✨
            </NuxtLink>
            <NuxtLink to="/vendors" class="text-slate-600 hover:text-primary-800 font-medium transition-colors">
              Vendors
            </NuxtLink>
          </div>

          <!-- Right side -->
          <div class="flex items-center gap-4">
            <!-- Cart -->
            <NuxtLink to="/cart" class="relative p-2 text-slate-600 hover:text-primary-800 transition-colors">
              <ShoppingCart class="w-6 h-6" />
              <span v-if="cartStore.totalItems > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-accent-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {{ cartStore.totalItems }}
              </span>
            </NuxtLink>

            <!-- Auth -->
            <template v-if="!!token">
              <div class="relative" ref="dropdownRef">
                <button @click="showDropdown = !showDropdown" class="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors">
                  <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span class="text-primary-800 font-semibold text-sm">{{ user?.firstName?.charAt(0) }}</span>
                  </div>
                  <span class="hidden sm:block text-sm font-medium text-slate-700">{{ user?.firstName }}</span>
                </button>
                <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-slate-100 py-2 animate-slide-down">
                  <NuxtLink to="/dashboard" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" @click="showDropdown = false">My Account</NuxtLink>
                  <NuxtLink to="/dashboard/orders" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" @click="showDropdown = false">My Orders</NuxtLink>
                  <hr class="my-1 border-slate-100">
                  <button @click="handleLogout" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Sign Out</button>
                </div>
              </div>
            </template>
            <template v-else>
              <NuxtLink to="/auth/login" class="hidden sm:block text-slate-600 hover:text-primary-800 font-medium transition-colors">
                Sign In
              </NuxtLink>
              <NuxtLink to="/auth/register" class="btn-primary text-sm !py-2 !px-4">
                Get Started
              </NuxtLink>
            </template>

            <!-- Mobile menu button -->
            <button @click="showMobile = !showMobile" class="md:hidden p-2 text-slate-600">
              <X v-if="showMobile" class="w-6 h-6" />
              <Menu v-else class="w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- Mobile nav -->
        <div v-if="showMobile" class="md:hidden pb-4 animate-slide-down">
          <NuxtLink to="/explore" class="block py-2 text-slate-600 font-medium" @click="showMobile = false">Explore Gifts</NuxtLink>
          <NuxtLink to="/curate" class="block py-2 text-slate-600 font-medium" @click="showMobile = false">AI Curator ✨</NuxtLink>
          <NuxtLink to="/vendors" class="block py-2 text-slate-600 font-medium" @click="showMobile = false">Vendors</NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span class="text-white font-heading font-bold text-sm">C</span>
              </div>
              <span class="font-heading font-bold text-xl text-white">CurateWithNG</span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed">The smartest way to gift in Nigeria. AI-powered curation for every occasion.</p>
          </div>
          <div>
            <h4 class="font-heading font-semibold text-white mb-4">Shop</h4>
            <div class="space-y-2">
              <NuxtLink to="/explore" class="block text-sm hover:text-white transition-colors">All Gifts</NuxtLink>
              <NuxtLink to="/curate" class="block text-sm hover:text-white transition-colors">AI Curator</NuxtLink>
              <NuxtLink to="/vendors" class="block text-sm hover:text-white transition-colors">Our Vendors</NuxtLink>
            </div>
          </div>
          <div>
            <h4 class="font-heading font-semibold text-white mb-4">Company</h4>
            <div class="space-y-2">
              <a href="#" class="block text-sm hover:text-white transition-colors">About Us</a>
              <a href="#" class="block text-sm hover:text-white transition-colors">Contact</a>
              <a href="#" class="block text-sm hover:text-white transition-colors">Become a Vendor</a>
            </div>
          </div>
          <div>
            <h4 class="font-heading font-semibold text-white mb-4">Legal</h4>
            <div class="space-y-2">
              <a href="#" class="block text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" class="block text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" class="block text-sm hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
        <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-sm text-slate-500">© {{ new Date().getFullYear() }} CurateWithNG. All rights reserved.</p>
          <div class="flex gap-4">
            <a href="#" class="text-slate-500 hover:text-white transition-colors">
              <Twitter class="w-5 h-5" />
            </a>
            <a href="#" class="text-slate-500 hover:text-white transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ShoppingCart, Menu, X, Twitter, Instagram } from 'lucide-vue-next';
import { useUser } from '~/composables/modules/auth/user';

const { user, token, logOut } = useUser();
const cartStore = useCartStore();
const showDropdown = ref(false);
const showMobile = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const handleLogout = () => {
  logOut();
  showDropdown.value = false;
  navigateTo('/');
};

// Close dropdown on click outside
if (import.meta.client) {
  document.addEventListener('click', (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
      showDropdown.value = false;
    }
  });
}
</script>
