<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-hero overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-20 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div class="section-container relative z-10 py-24 md:py-32 lg:py-40">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
            <span class="text-accent-400 text-sm">✨ Powered by AI</span>
            <span class="text-white/60 text-sm">•</span>
            <span class="text-white/80 text-sm">Nigeria's Gift Curator</span>
          </div>

          <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
            The Smartest Way to
            <span class="text-gradient bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent"> Gift in Nigeria</span>
          </h1>

          <p class="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.1s">
            Tell our AI about your recipient, and we'll curate the perfect gift from Nigeria's finest vendors. Birthdays, weddings, corporate — we've got you covered.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.2s">
            <NuxtLink to="/curate" class="btn-accent text-lg !py-4 !px-8 inline-flex items-center justify-center gap-2">
              <Sparkles class="w-5 h-5" />
              Start AI Curation
            </NuxtLink>
            <NuxtLink to="/explore" class="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white/10 text-lg inline-flex items-center justify-center">
              Explore Gifts
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="flex justify-center gap-8 md:gap-16 mt-16 animate-fade-in" style="animation-delay: 0.4s">
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-heading font-bold text-white">500+</div>
              <div class="text-sm text-slate-400">Curated Gifts</div>
            </div>
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-heading font-bold text-white">50+</div>
              <div class="text-sm text-slate-400">Local Vendors</div>
            </div>
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-heading font-bold text-white">98%</div>
              <div class="text-sm text-slate-400">Happy Recipients</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">How It Works</h2>
          <p class="text-lg text-slate-500 max-w-2xl mx-auto">Three simple steps to the perfect gift</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(step, i) in steps" :key="i" class="text-center p-8">
            <div class="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-primary-800"
                 :class="step.bgClass">
              <component :is="step.icon" class="w-8 h-8" />
            </div>
            <div class="text-sm font-semibold text-primary-800 mb-2">Step {{ i + 1 }}</div>
            <h3 class="text-xl font-heading font-bold text-slate-900 mb-3">{{ step.title }}</h3>
            <p class="text-slate-500 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gift Categories -->
    <section class="py-20 bg-slate-50">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Browse by Category</h2>
          <p class="text-lg text-slate-500">Find the perfect gift for every occasion</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink
            v-for="cat in categories"
            :key="cat.slug"
            :to="`/explore?category=${cat.slug}`"
            class="card-interactive p-6 text-center group"
          >
            <div class="mb-3 flex justify-center text-slate-700">
              <component :is="cat.icon" class="w-10 h-10" />
            </div>
            <h3 class="font-heading font-semibold text-slate-900 group-hover:text-primary-800 transition-colors">{{ cat.name }}</h3>
            <p class="text-sm text-slate-400 mt-1">{{ cat.count }}+ gifts</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- AI Feature Spotlight -->
    <section class="py-20 bg-white">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold mb-6">
              ✨ AI-Powered
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Let Our AI Find the
              <span class="text-primary-800">Perfect Gift</span>
            </h2>
            <p class="text-lg text-slate-500 leading-relaxed mb-8">
              Our AI understands Nigerian culture and gifting traditions. Whether it's an Owambe, a wedding, or a corporate hamper, GiftGenius knows exactly what to recommend.
            </p>
            <ul class="space-y-4 mb-8">
              <li v-for="feature in aiFeatures" :key="feature" class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-success-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check class="w-3.5 h-3.5" />
                </div>
                <span class="text-slate-700">{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink to="/curate" class="btn-primary inline-flex items-center gap-2">
              Try AI Curator
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100">
            <div class="bg-white rounded-2xl border border-slate-200 p-6 mb-4">
              <div class="text-sm text-slate-400 mb-2">You said:</div>
              <p class="text-slate-700">"Gift for my sister Amaka, 28, loves skincare and cooking. Birthday gift, budget ₦15,000 – ₦30,000"</p>
            </div>
            <div class="bg-primary-800 text-white rounded-2xl p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-accent-400">✨</span>
                <span class="text-sm font-semibold text-primary-200">GiftGenius recommends</span>
              </div>
              <div class="space-y-3">
                <div v-for="(rec, i) in mockRecommendations" :key="i" class="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                  <div class="text-2xl">{{ rec.emoji }}</div>
                  <div class="flex-1">
                    <div class="font-semibold text-sm">{{ rec.name }}</div>
                    <div class="text-primary-200 text-xs">{{ rec.reason }}</div>
                  </div>
                  <div class="text-accent-400 font-bold text-sm">{{ rec.score }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-slate-50">
      <div class="section-container">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Loved by Nigerians</h2>
          <p class="text-lg text-slate-500">See what our customers are saying</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(testimonial, i) in testimonials" :key="i" class="card p-6">
            <div class="flex items-center gap-1 mb-4">
              <Star v-for="s in 5" :key="s" class="w-4 h-4 text-accent-500 fill-current" />
            </div>
            <p class="text-slate-600 leading-relaxed mb-4">"{{ testimonial.text }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span class="text-primary-800 font-bold text-sm">{{ testimonial.name.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-semibold text-slate-900 text-sm">{{ testimonial.name }}</div>
                <div class="text-slate-400 text-xs">{{ testimonial.location }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-hero">
      <div class="section-container text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to Gift Smarter?</h2>
        <p class="text-lg text-slate-300 mb-8 max-w-xl mx-auto">Join thousands of Nigerians who trust CurateWithNG for meaningful, curated gifts.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/auth/register" class="btn-accent text-lg !py-4 !px-8">Create Free Account</NuxtLink>
          <NuxtLink to="/curate" class="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-lg">Try AI Curator</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Sparkles, Check, ArrowRight, Star, User, Gift, ShoppingBag, Heart, Home, Briefcase } from 'lucide-vue-next';

definePageMeta({ layout: 'default' });

useHead({
  title: 'CurateWithNG — The Smartest Way to Gift in Nigeria',
});

const steps = [
  { icon: User, title: 'Describe Your Recipient', description: 'Tell us who the gift is for — their interests, the occasion, and your budget.', bgClass: 'bg-primary-50' },
  { icon: Sparkles, title: 'Get AI Picks', description: 'Our AI curator GiftGenius analyses your input and recommends the best gifts from our catalogue.', bgClass: 'bg-accent-50' },
  { icon: Gift, title: 'Order & Deliver', description: 'Choose your favourites, checkout with Paystack, and we handle the rest.', bgClass: 'bg-emerald-50' },
];

const categories = [
  { name: 'Gift Hampers', slug: 'hampers', icon: ShoppingBag, count: 80 },
  { name: 'Fashion', slug: 'fashion', icon: ShoppingBag, count: 120 },
  { name: 'Experiences', slug: 'experiences', icon: Star, count: 45 },
  { name: 'Wellness', slug: 'wellness', icon: Heart, count: 60 },
  { name: 'Tech & Gadgets', slug: 'tech', icon: ShoppingBag, count: 55 },
  { name: 'Home & Living', slug: 'home', icon: Home, count: 70 },
  { name: 'Jewellery', slug: 'jewellery', icon: Star, count: 40 },
  { name: 'Corporate', slug: 'corporate', icon: Briefcase, count: 35 },
];

const aiFeatures = [
  'Understands Nigerian gifting culture — Owambe, weddings, naming ceremonies',
  'Personalised to recipient\'s interests, age, and relationship',
  'Budget-aware: from ₦5,000 to ₦500,000+',
  'Learns from your preferences over time',
];

const mockRecommendations = [
  { emoji: '🧖', name: 'Luxury Skincare Set', reason: 'Matches her skincare interest', score: 95 },
  { emoji: '📘', name: 'Nigerian Recipe Book', reason: 'Perfect for cooking enthusiast', score: 88 },
  { emoji: '🧺', name: 'Self-Care Hamper', reason: 'Great birthday treat', score: 82 },
];

const testimonials = [
  { name: 'Adaeze O.', location: 'Lagos', text: 'The AI suggested the perfect hamper for my mum\'s birthday. She cried happy tears! This platform understands Nigerian gifting.' },
  { name: 'Tunde A.', location: 'Abuja', text: 'Used CurateWithNG for corporate end-of-year gifts. Saved me hours of shopping. The vendors are top-notch.' },
  { name: 'Chidinma E.', location: 'Port Harcourt', text: 'Found the most beautiful jewellery set for my best friend\'s wedding. The AI recommendation was spot on!' },
];
</script>
