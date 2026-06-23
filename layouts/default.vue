<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 transition-all duration-200">
      <div class="section-container">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2.5 group">
            <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <span class="text-white font-heading font-bold text-lg">C</span>
            </div>
            <span class="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">
              Curate<span class="text-primary-800">WithNG</span>
            </span>
          </NuxtLink>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-10">
            <NuxtLink to="/explore" class="text-[15px] font-semibold text-slate-600 hover:text-primary-800 transition-colors">
              Explore Gifts
            </NuxtLink>
            <NuxtLink to="/curate" class="text-[15px] font-semibold text-slate-600 hover:text-primary-800 transition-colors flex items-center gap-1.5">
              AI Curator <span class="text-lg">✨</span>
            </NuxtLink>
            <NuxtLink to="/vendors" class="text-[15px] font-semibold text-slate-600 hover:text-primary-800 transition-colors">
              Vendors
            </NuxtLink>
          </div>

          <!-- Right side -->
          <div class="flex items-center gap-5">
            <!-- Cart -->
            <NuxtLink to="/cart" class="relative p-2 text-slate-600 hover:text-primary-800 transition-colors">
              <ShoppingCart class="w-6 h-6" />
              <span v-if="cartStore.totalItems > 0" class="absolute top-0 right-0 w-5 h-5 bg-primary-800 text-white text-[11px] rounded-full flex items-center justify-center font-bold border-2 border-white">
                {{ cartStore.totalItems }}
              </span>
            </NuxtLink>

            <!-- Auth Desktop -->
            <template v-if="!!token">
              <div class="relative hidden sm:block" ref="dropdownRef">
                <button @click="showDropdown = !showDropdown" class="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
                  <div class="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                    <span class="text-white font-semibold text-sm">{{ user?.firstName?.charAt(0) }}</span>
                  </div>
                  <span class="text-sm font-semibold text-slate-800">{{ user?.firstName }}</span>
                </button>
                <div v-if="showDropdown" class="absolute right-0 mt-3 w-56 bg-white rounded-2xl border border-slate-100 py-2 shadow-xl animate-slide-down">
                  <div class="px-4 py-3 border-b border-slate-100 mb-2">
                    <p class="text-sm font-semibold text-slate-900">{{ user?.firstName }} {{ user?.lastName }}</p>
                    <p class="text-xs text-slate-500 truncate">{{ user?.email }}</p>
                  </div>
                  <NuxtLink to="/dashboard" class="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-800" @click="showDropdown = false">My Account</NuxtLink>
                  <NuxtLink to="/dashboard/orders" class="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-800" @click="showDropdown = false">My Orders</NuxtLink>
                  <hr class="my-2 border-slate-100">
                  <button @click="handleLogout" class="block w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50">Sign Out</button>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="hidden sm:flex items-center gap-4">
                <NuxtLink to="/auth/login" class="text-[15px] font-semibold text-slate-600 hover:text-primary-800 transition-colors">
                  Sign In
                </NuxtLink>
                <NuxtLink to="/auth/register" class="bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-full text-[15px] font-semibold transition-colors shadow-sm">
                  Get Started
                </NuxtLink>
              </div>
            </template>

            <!-- Mobile menu button -->
            <button @click="showMobile = true" class="md:hidden p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              <Menu class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Slide-over Menu -->
    <div v-if="showMobile" class="md:hidden fixed inset-0 z-[100]">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" @click="showMobile = false"></div>
      
      <!-- Drawer -->
      <div class="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-in-right">
        <div class="px-6 py-6 flex items-center justify-between border-b border-slate-100">
          <span class="font-heading font-extrabold text-xl text-slate-900">Menu</span>
          <button @click="showMobile = false" class="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
            <X class="w-6 h-6" />
          </button>
        </div>
        
        <div class="flex-1 overflow-y-auto py-6 px-6 space-y-8">
          <div class="space-y-6">
            <NuxtLink to="/explore" class="block text-xl font-heading font-bold text-slate-900" @click="showMobile = false">Explore Gifts</NuxtLink>
            <NuxtLink to="/curate" class="block text-xl font-heading font-bold text-slate-900 flex items-center gap-2" @click="showMobile = false">
              AI Curator <span>✨</span>
            </NuxtLink>
            <NuxtLink to="/vendors" class="block text-xl font-heading font-bold text-slate-900" @click="showMobile = false">Vendors</NuxtLink>
          </div>
          
          <hr class="border-slate-100">
          
          <div v-if="!!token" class="space-y-4">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <span class="text-slate-900 font-bold text-lg">{{ user?.firstName?.charAt(0) }}</span>
              </div>
              <div>
                <p class="font-bold text-slate-900">{{ user?.firstName }} {{ user?.lastName }}</p>
                <p class="text-sm text-slate-500">{{ user?.email }}</p>
              </div>
            </div>
            <NuxtLink to="/dashboard" class="block text-lg font-semibold text-slate-700" @click="showMobile = false">My Account</NuxtLink>
            <NuxtLink to="/dashboard/orders" class="block text-lg font-semibold text-slate-700" @click="showMobile = false">My Orders</NuxtLink>
            <button @click="handleLogout" class="block w-full text-left pt-4 text-lg font-semibold text-red-600">Sign Out</button>
          </div>
          <div v-else class="space-y-3">
            <NuxtLink to="/auth/login" class="block w-full py-3 text-center border-2 border-slate-200 rounded-xl text-base font-bold text-slate-700 hover:bg-slate-50" @click="showMobile = false">Sign In</NuxtLink>
            <NuxtLink to="/auth/register" class="block w-full py-3 text-center bg-slate-900 rounded-xl text-base font-bold text-white shadow-sm hover:bg-slate-800" @click="showMobile = false">Create Account</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-50 text-slate-600 pt-16 pb-8 relative z-20">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span class="text-white font-heading font-bold text-sm">C</span>
              </div>
              <span class="font-heading font-bold text-xl text-slate-900">CurateWithNG</span>
            </div>
            <p class="text-slate-500 text-sm leading-relaxed">The smartest way to gift in Nigeria. AI-powered curation for every occasion.</p>
          </div>
          <div>
            <h4 class="font-heading font-semibold text-slate-900 mb-4">Shop</h4>
            <div class="space-y-2">
              <NuxtLink to="/explore" class="block text-sm hover:text-primary-800 transition-colors">All Gifts</NuxtLink>
              <NuxtLink to="/curate" class="block text-sm hover:text-primary-800 transition-colors">AI Curator</NuxtLink>
              <NuxtLink to="/vendors" class="block text-sm hover:text-primary-800 transition-colors">Our Vendors</NuxtLink>
            </div>
          </div>
          <div>
            <h4 class="font-heading font-semibold text-slate-900 mb-4">Company</h4>
            <div class="space-y-2">
              <NuxtLink to="/about" class="block text-sm hover:text-primary-800 transition-colors">About Us</NuxtLink>
              <NuxtLink to="/contact" class="block text-sm hover:text-primary-800 transition-colors">Contact</NuxtLink>
              <a href="https://vendor.curatewithng.com" class="block text-sm hover:text-primary-800 transition-colors">Become a Vendor</a>
            </div>
          </div>
          <div>
            <h4 class="font-heading font-semibold text-slate-900 mb-4">Legal</h4>
            <div class="space-y-2">
              <NuxtLink to="/privacy" class="block text-sm hover:text-primary-800 transition-colors">Privacy Policy</NuxtLink>
              <NuxtLink to="/terms" class="block text-sm hover:text-primary-800 transition-colors">Terms of Service</NuxtLink>
              <NuxtLink to="/refund-policy" class="block text-sm hover:text-primary-800 transition-colors">Refund Policy</NuxtLink>
            </div>
          </div>
        </div>
        <div class="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-sm text-slate-400">© {{ new Date().getFullYear() }} CurateWithNG. All rights reserved.</p>
          <div class="flex gap-4">
            <a href="#" class="text-slate-400 hover:text-slate-600 transition-colors">
              <Twitter class="w-5 h-5" />
            </a>
            <a href="#" class="text-slate-400 hover:text-slate-600 transition-colors">
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
