<template>
  <main class="relative z-10">
    <!-- Hero Section -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 bg-dotted py-16 md:py-8">
      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <!-- Text Content -->
          <div class="max-w-xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in">
              <span class="text-primary-800">✨ Powered by AI</span>
              <span class="text-slate-300">•</span>
              <span>Nigeria's Gift Curator</span>
            </div>

            <h1 class="font-heading text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 animate-slide-up">
              The Smartest Way to
              <span class="text-primary-800">Gift in Nigeria</span>
            </h1>

            <p class="text-lg text-slate-600 leading-relaxed mb-10 animate-slide-up" style="animation-delay: 0.1s">
              Tell our AI about your recipient, and we'll curate the perfect gift from Nigeria's finest vendors. Birthdays, weddings, corporate — we've got you covered.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="animation-delay: 0.2s">
              <NuxtLink to="/curate" class="btn-primary inline-flex items-center justify-center gap-2">
                <Sparkles class="w-4 h-4" />
                Start AI Curation
              </NuxtLink>
              <NuxtLink to="/explore" class="btn-secondary inline-flex items-center justify-center">
                Explore Gifts
              </NuxtLink>
            </div>
            
            <!-- Stats -->
            <div class="flex gap-8 md:gap-12 mt-12 pt-12 border-t border-slate-200 animate-fade-in" style="animation-delay: 0.4s">
              <div>
                <div class="text-2xl font-heading font-bold text-slate-900">500+</div>
                <div class="text-sm text-slate-500 font-medium">Curated Gifts</div>
              </div>
              <div>
                <div class="text-2xl font-heading font-bold text-slate-900">50+</div>
                <div class="text-sm text-slate-500 font-medium">Local Vendors</div>
              </div>
              <div>
                <div class="text-2xl font-heading font-bold text-slate-900">98%</div>
                <div class="text-sm text-slate-500 font-medium">Happy Recipients</div>
              </div>
            </div>
          </div>

          <!-- Image Storytelling Showcase -->
          <div class="relative h-[400px] lg:h-[600px] animate-fade-in group" style="animation-delay: 0.3s">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-[2rem] transform rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-2 group-hover:scale-100"></div>
            
            <div class="relative w-full h-full rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl bg-slate-900">
              <!-- Images -->
              <transition-group name="story-fade" tag="div" class="absolute inset-0">
                <div v-for="(story, index) in heroStories" :key="index" v-show="activeStory === index" class="absolute inset-0">
                  <img 
                    :src="story.image" 
                    :alt="story.title" 
                    class="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-linear"
                    :class="activeStory === index ? 'scale-110' : 'scale-100'"
                  />
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                </div>
              </transition-group>

              <!-- Progress Bars -->
              <div class="absolute top-4 left-4 right-4 flex gap-2 z-20">
                <button 
                  v-for="(story, index) in heroStories" 
                  :key="'nav-'+index"
                  @click="setStory(index)"
                  class="flex-1 h-1.5 rounded-full overflow-hidden bg-white/30 backdrop-blur-sm cursor-pointer hover:h-2 transition-all"
                >
                  <div 
                    class="h-full bg-white"
                    :class="{ 
                      'w-full': index < activeStory, 
                      'w-0': index > activeStory,
                      'story-progress': index === activeStory 
                    }"
                  ></div>
                </button>
              </div>

              <!-- Story Text -->
              <div class="absolute bottom-0 left-0 right-0 p-8 z-20">
                <transition name="slide-up" mode="out-in">
                  <div :key="activeStory">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                      Step {{ activeStory + 1 }}
                    </div>
                    <h3 class="font-heading font-extrabold text-white text-3xl md:text-4xl mb-2">{{ heroStories[activeStory].title }}</h3>
                    <p class="text-white/90 text-lg md:text-xl">{{ heroStories[activeStory].description }}</p>
                  </div>
                </transition>
              </div>

              <!-- Navigation Overlays (Click sides to advance) -->
              <div class="absolute inset-0 flex z-10">
                <button @click="setStory((activeStory - 1 + heroStories.length) % heroStories.length)" class="flex-1 cursor-pointer focus:outline-none"></button>
                <button @click="setStory((activeStory + 1) % heroStories.length)" class="flex-1 cursor-pointer focus:outline-none"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-20 md:py-8">
      <div class="section-container relative z-10">
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
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 py-20 md:py-8">
      <div class="section-container relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Browse by Category</h2>
          <p class="text-lg text-slate-500">Find the perfect gift for every occasion</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <NuxtLink
            v-for="cat in categories"
            :key="cat.slug"
            :to="`/explore?category=${cat.slug}`"
            class="group relative h-48 md:h-64 rounded-3xl overflow-hidden cursor-pointer"
          >
            <img :src="cat.image" :alt="cat.name" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <h3 class="font-heading font-bold text-white text-lg md:text-xl mb-1">{{ cat.name }}</h3>
              <p class="text-sm text-slate-300">{{ cat.count }}+ gifts</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- AI Feature Spotlight -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-20 md:py-8">
      <div class="section-container relative z-10">
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
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 overflow-clip py-20 md:py-8">
      <div class="section-container relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Loved by Nigerians</h2>
          <p class="text-lg text-slate-500">See what our customers are saying</p>
        </div>
      </div>

      <!-- Infinite Marquee -->
      <div class="relative flex overflow-hidden">
        <div class="marquee-container gap-6 py-4 px-3 flex">
          <div v-for="(testimonial, i) in [...testimonials, ...testimonials, ...testimonials, ...testimonials]" :key="i" class="w-80 md:w-96 flex-shrink-0 card p-6 whitespace-normal">
            <div class="flex items-center gap-1 mb-4">
              <Star v-for="s in 5" :key="s" class="w-4 h-4 text-accent-500 fill-current" />
            </div>
            <p class="text-slate-600 leading-relaxed mb-4">"{{ testimonial.text }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
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

    <!-- Vendor Ad Section -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-24 md:py-8">
      <div class="section-container relative z-10">
        <div class="bg-slate-900 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div class="p-12 md:p-16 flex flex-col justify-center">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              Partner With Us
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Grow Your Gifting Business
            </h2>
            <p class="text-lg text-slate-300 leading-relaxed mb-8">
              Join CurateWithNG as a curated vendor. Reach thousands of shoppers looking for high-quality, beautifully packaged gifts and hampers. We handle the AI matching, you handle the magic.
            </p>
            <a href="https://vendor.curatewithng.com" class="btn-primary w-fit !bg-white !text-slate-900 hover:!bg-slate-100">
              Become a Vendor Today
            </a>
          </div>
          <div class="relative h-64 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2000&auto=format&fit=crop" 
              alt="Vendor packaging gifts" 
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 bg-dotted py-20 md:py-8">
      <div class="section-container relative z-10">
        <div class="bg-white rounded-[3rem] border border-slate-200 p-12 md:p-20 text-center relative overflow-hidden shadow-sm">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
          <div class="relative z-10 max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6">Ready to Gift Smarter?</h2>
            <p class="text-xl text-slate-500 mb-10">Join thousands of Nigerians who trust CurateWithNG for meaningful, curated gifts.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/auth/register" class="btn-primary !py-3 !px-8">Create Free Account</NuxtLink>
              <NuxtLink to="/curate" class="border-2 border-slate-200 text-slate-700 bg-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all">Try AI Curator</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Sparkles, Check, ArrowRight, Star, User, Gift, ShoppingBag, Heart, Home, Briefcase } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

definePageMeta({ layout: 'default' });

useHead({
  title: 'CurateWithNG — The Smartest Way to Gift in Nigeria',
});

// --- Storytelling Hero Data ---
const heroStories = [
  {
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2000&auto=format&fit=crop',
    title: 'The Intention',
    description: 'You want to make them feel truly special.'
  },
  {
    image: 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=2000&auto=format&fit=crop',
    title: 'The AI Match',
    description: 'GiftGenius analyzes their persona and occasion.'
  },
  {
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop',
    title: 'The Curation',
    description: 'Sourced from Nigeria\'s finest bespoke vendors.'
  },
  {
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2000&auto=format&fit=crop',
    title: 'The Moment',
    description: 'Delivering unforgettable joy and connection.'
  }
];

const activeStory = ref(0);
let storyInterval: ReturnType<typeof setInterval>;

const startStoryInterval = () => {
  storyInterval = setInterval(() => {
    activeStory.value = (activeStory.value + 1) % heroStories.length;
  }, 4000);
};

onMounted(() => {
  startStoryInterval();
});

onUnmounted(() => {
  if (storyInterval) clearInterval(storyInterval);
});

const setStory = (index: number) => {
  activeStory.value = index;
  clearInterval(storyInterval);
  startStoryInterval();
};
// ------------------------------

const steps = [
  { icon: User, title: 'Describe Your Recipient', description: 'Tell us who the gift is for — their interests, the occasion, and your budget.', bgClass: 'bg-primary-50' },
  { icon: Sparkles, title: 'Get AI Picks', description: 'Our AI curator GiftGenius analyses your input and recommends the best gifts from our catalogue.', bgClass: 'bg-accent-50' },
  { icon: Gift, title: 'Order & Deliver', description: 'Choose your favourites, checkout with Paystack, and we handle the rest.', bgClass: 'bg-emerald-50' },
];

const categories = [
  { name: 'Gift Hampers', slug: 'hampers', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80', count: 80 },
  { name: 'Fashion', slug: 'fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80', count: 120 },
  { name: 'Experiences', slug: 'experiences', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80', count: 45 },
  { name: 'Wellness', slug: 'wellness', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', count: 60 },
  { name: 'Tech & Gadgets', slug: 'tech', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80', count: 55 },
  { name: 'Home & Living', slug: 'home', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80', count: 70 },
  { name: 'Jewellery', slug: 'jewellery', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', count: 40 },
  { name: 'Corporate', slug: 'corporate', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80', count: 35 },
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

<style scoped>
.marquee-container {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}
.marquee-container:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Story Transitions */
.story-fade-enter-active,
.story-fade-leave-active {
  transition: opacity 0.8s ease;
}
.story-fade-enter-from,
.story-fade-leave-to {
  opacity: 0;
}

.story-progress {
  animation: fillProgress 4s linear forwards;
}

@keyframes fillProgress {
  0% { width: 0%; }
  100% { width: 100%; }
}
</style>
