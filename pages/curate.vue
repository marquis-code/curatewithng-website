<template>
  <div class="py-8 md:py-12">
    <div class="section-container max-w-3xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold mb-4">
          ✨ AI Gift Curator
        </div>
        <h1 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">Find the Perfect Gift</h1>
        <p class="text-lg text-slate-500">Answer a few questions and our AI will curate personalized gift recommendations</p>
      </div>

      <!-- Wizard Steps -->
      <div v-if="!showResults" class="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100">
        <!-- Progress bar -->
        <div class="flex items-center gap-2 mb-8">
          <div v-for="i in totalSteps" :key="i" class="flex-1 h-2 rounded-full transition-all duration-300"
               :class="i <= currentStep ? 'bg-primary-800' : 'bg-slate-200'"></div>
        </div>

        <!-- Step 1: Relationship -->
        <div v-if="currentStep === 1" class="animate-fade-in">
          <h2 class="text-xl font-heading font-bold text-slate-900 mb-2">Who is the gift for?</h2>
          <p class="text-slate-500 mb-6">Select your relationship with the recipient</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <button
              v-for="rel in relationships"
              :key="rel.value"
              @click="form.relationship = rel.value"
              :class="['p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden group',
                form.relationship === rel.value 
                  ? 'bg-primary-800 text-white shadow-lg ring-4 ring-primary-100' 
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100']"
            >
              <div class="absolute -right-4 -bottom-4 opacity-5 transition-transform duration-500 group-hover:scale-110" v-if="form.relationship === rel.value">
                <component :is="rel.icon" class="w-24 h-24 text-white" />
              </div>
              <component :is="rel.icon" :class="['w-8 h-8 mb-3 transition-colors', form.relationship === rel.value ? 'text-accent-400' : 'text-slate-500']" />
              <div :class="['font-semibold text-sm relative z-10', form.relationship === rel.value ? 'text-white' : 'text-slate-900']">{{ rel.label }}</div>
            </button>
          </div>
          <div v-if="form.relationship === 'other'" class="animate-fade-in mt-6">
            <UiCustomInput v-model="form.customRelationship" placeholder="Please specify relationship" />
          </div>
          <UiCustomInput v-model="form.recipientName" placeholder="Recipient's name (optional)" class="mt-4" />
        </div>

        <!-- Step 2: Occasion -->
        <div v-if="currentStep === 2" class="animate-fade-in">
          <h2 class="text-xl font-heading font-bold text-slate-900 mb-2">What's the occasion?</h2>
          <p class="text-slate-500 mb-6">Select the gifting occasion</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <button
              v-for="occ in occasions"
              :key="occ.value"
              @click="form.occasion = occ.value"
              :class="['p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden group',
                form.occasion === occ.value 
                  ? 'bg-primary-800 text-white shadow-lg ring-4 ring-primary-100' 
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100']"
            >
              <div class="absolute -right-4 -bottom-4 opacity-5 transition-transform duration-500 group-hover:scale-110" v-if="form.occasion === occ.value">
                <component :is="occ.icon" class="w-24 h-24 text-white" />
              </div>
              <component :is="occ.icon" :class="['w-8 h-8 mb-3 transition-colors', form.occasion === occ.value ? 'text-accent-400' : 'text-slate-500']" />
              <div :class="['font-semibold text-sm relative z-10', form.occasion === occ.value ? 'text-white' : 'text-slate-900']">{{ occ.label }}</div>
            </button>
          </div>
        </div>

        <!-- Step 3: Budget -->
        <div v-if="currentStep === 3" class="animate-fade-in">
          <h2 class="text-xl font-heading font-bold text-slate-900 mb-2">What's your ideal budget?</h2>
          <p class="text-slate-500 mb-6">Set the specific amount you'd like to spend</p>
          <div class="mb-6">
            <UiCustomInput
              v-model="formattedIdealBudget"
              type="text"
              label="Ideal Budget (₦)"
              placeholder="50,000"
            />
          </div>
          
          <h3 class="text-md font-heading font-bold text-slate-900 mb-3 mt-8">How flexible are you?</h3>
          <div class="space-y-3">
            <label class="flex items-start gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer transition-colors hover:bg-slate-50" :class="{ 'bg-primary-50 border-primary-200 ring-1 ring-primary-500': budgetFlexibility === 'STRICT' }">
              <input type="radio" v-model="budgetFlexibility" value="STRICT" class="mt-1" />
              <div>
                <div class="font-semibold text-slate-900">Strict</div>
                <div class="text-sm text-slate-500">Don't exceed my ideal budget</div>
              </div>
            </label>
            <label class="flex items-start gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer transition-colors hover:bg-slate-50" :class="{ 'bg-primary-50 border-primary-200 ring-1 ring-primary-500': budgetFlexibility === 'FLEXIBLE' }">
              <input type="radio" v-model="budgetFlexibility" value="FLEXIBLE" class="mt-1" />
              <div>
                <div class="font-semibold text-slate-900">Flexible</div>
                <div class="text-sm text-slate-500">Up to 20% above is okay</div>
              </div>
            </label>
            <label class="flex items-start gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer transition-colors hover:bg-slate-50" :class="{ 'bg-primary-50 border-primary-200 ring-1 ring-primary-500': budgetFlexibility === 'VERY_FLEXIBLE' }">
              <input type="radio" v-model="budgetFlexibility" value="VERY_FLEXIBLE" class="mt-1" />
              <div>
                <div class="font-semibold text-slate-900">Very flexible</div>
                <div class="text-sm text-slate-500">Just find the best option</div>
              </div>
            </label>
          </div>
        </div>

        <!-- Step 4: Interests -->
        <div v-if="currentStep === 4" class="animate-fade-in">
          <h2 class="text-xl font-heading font-bold text-slate-900 mb-2">What are they into?</h2>
          <p class="text-slate-500 mb-6">Select interests (pick as many as you like)</p>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="interest in interestOptions"
              :key="interest"
              @click="toggleInterest(interest)"
              :class="['px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300',
                form.interests.includes(interest) 
                  ? 'bg-primary-800 text-white shadow-md ring-2 ring-primary-100' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100']"
            >
              {{ interest }}
            </button>
          </div>
        </div>

        <!-- Step 5: Extra notes -->
        <div v-if="currentStep === 5" class="animate-fade-in">
          <h2 class="text-xl font-heading font-bold text-slate-900 mb-2">Anything else?</h2>
          <p class="text-slate-500 mb-6">Add any extra context to help our AI (optional)</p>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <UiCustomInput
                v-model.number="form.age"
                type="number"
                label="Age"
                placeholder="28"
              />
              <UiCustomSelect
                v-model="form.gender"
                label="Gender"
                placeholder="Not specified"
                :options="[
                  { label: 'Female', value: 'female' },
                  { label: 'Male', value: 'male' },
                  { label: 'Non-binary', value: 'non-binary' }
                ]"
              />
            </div>
            <textarea v-model="form.additionalNotes" rows="3" class="input-field" placeholder="E.g., She recently started a new job and loves everything purple..."></textarea>
          </div>
        </div>

        <!-- Navigation buttons -->
        <div class="flex justify-between mt-8">
          <button v-if="currentStep > 1" @click="currentStep--" class="btn-ghost !px-4">
            ← Back
          </button>
          <div v-else></div>
          <button v-if="currentStep < totalSteps" @click="nextStep" :disabled="!canProceed" class="btn-primary !px-8" :class="{ 'opacity-50': !canProceed }">
            Next →
          </button>
          <button v-else @click="generateRecommendations" :disabled="generating" class="btn-accent !px-8 flex items-center gap-2">
            <Loader2 v-if="generating" class="w-5 h-5 animate-spin" />
            {{ generating ? 'Curating...' : '✨ Get Recommendations' }}
          </button>
        </div>
      </div>

      <!-- Results -->
      <div v-if="showResults" class="animate-fade-in">
        <div class="text-center mb-8">
          <div class="text-4xl mb-3">🎁</div>
          <h2 class="text-2xl font-heading font-bold text-slate-900 mb-2">Your Curated Picks</h2>
          <p class="text-slate-500">Based on your recipient's profile, here are our top recommendations</p>
        </div>

        <div class="space-y-4">
          <div v-for="(rec, i) in recommendations" :key="i" class="card p-6 flex gap-4 items-start">
            <div class="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img v-if="!rec.isCustom" :src="(rec.gift?.images?.[0] as string) || '/placeholder-gift.jpg'" :alt="rec.gift?.name as string" class="w-full h-full object-cover" />
              <div v-else class="text-center w-full h-full bg-amber-50 flex flex-col items-center justify-center text-amber-500">
                <component :is="getCategoryIcon(rec.customGift?.category || '')" class="w-8 h-8 mb-1" />
                <div class="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Curated Idea</div>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="font-heading font-bold text-slate-900">{{ rec.isCustom ? rec.customGift?.name : rec.gift?.name }}</h3>
                  <p v-if="!rec.isCustom" class="text-sm text-primary-600 font-medium">{{ formatNaira(rec.gift?.discountPrice || rec.gift?.price || 0) }}</p>
                  <p v-else class="text-sm text-amber-600 font-medium">Price on request</p>
                </div>
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-1 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-sm font-bold">
                    {{ rec.score }}% match
                  </div>
                  <SaveGiftButton v-if="!rec.isCustom" :giftId="rec.gift?._id as string" size="sm" />
                </div>
              </div>
              <p v-if="rec.isCustom" class="text-sm text-slate-600 mt-2">{{ rec.customGift?.description }}</p>
              <p class="text-sm text-slate-500 mt-2 italic">"{{ rec.reasoning }}"</p>
              <div class="flex gap-2 mt-3">
                <template v-if="!rec.isCustom">
                  <NuxtLink :to="`/gifts/${rec.gift?.slug}`" class="btn-ghost !py-1.5 !px-3 text-sm">View Details</NuxtLink>
                  <button @click="addToCart(rec.gift as any)" class="btn-primary !py-1.5 !px-3 text-sm">Add to Cart</button>
                </template>
                <template v-else>
                  <button class="bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors font-bold rounded-xl !py-1.5 !px-4 text-sm" @click="selectedCustomGift = rec.customGift; showSourcingModal = true">Source This For Me</button>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-4 mt-8">
          <button @click="resetWizard" class="btn-secondary">Start Over</button>
          <NuxtLink to="/cart" class="btn-primary">Go to Cart</NuxtLink>
        </div>
      </div>
    </div>
    <!-- Sourcing Modal -->
    <SourcingModal 
      v-if="showSourcingModal" 
      :gift="selectedCustomGift"
      :occasion="form.occasion"
      :recipient-profile="form"
      :ideal-budget="idealBudgetNaira"
      :budget-flexibility="budgetFlexibility"
      @close="showSourcingModal = false" 
    />
  </div>
</template>

<script setup lang="ts">
import { Loader2, User, Users, Heart, Gift, Briefcase, GraduationCap, PartyPopper, Home, Baby, Sparkles, Plane, Utensils, Music, Book } from 'lucide-vue-next';
import { useCurator } from '~/composables/modules/curator/useCurator';
import type { Gift as GiftType, CurationRecommendation } from '~/types';
import { formatNaira } from '~/utils/formatCurrency';

definePageMeta({ layout: 'default' });
useHead({ title: 'AI Gift Curator — CurateWithNG' });

const { generateCuration } = useCurator();
const cartStore = useCartStore();

const currentStep = ref<number>(1);
const totalSteps = 5;
const generating = ref(false);
const showResults = ref(false);
const recommendations = ref<CurationRecommendation[]>([]);

const budgetFlexibility = ref('FLEXIBLE');
const idealBudgetNaira = ref(50000);

const formattedIdealBudget = computed({
  get: () => idealBudgetNaira.value ? idealBudgetNaira.value.toLocaleString('en-NG') : '',
  set: (val: string) => {
    const num = parseInt(val.replace(/,/g, '').replace(/\D/g, ''), 10);
    idealBudgetNaira.value = isNaN(num) ? 0 : num;
  }
});

const showSourcingModal = ref(false);
const selectedCustomGift = ref<any>(null);

const getCategoryIcon = (category: string) => {
  const cat = category?.toLowerCase() || '';
  if (cat.includes('travel') || cat.includes('trip') || cat.includes('flight')) return Plane;
  if (cat.includes('food') || cat.includes('dining') || cat.includes('restaurant')) return Utensils;
  if (cat.includes('music') || cat.includes('concert')) return Music;
  if (cat.includes('book') || cat.includes('reading')) return Book;
  if (cat.includes('wellness') || cat.includes('spa')) return Heart;
  if (cat.includes('home') || cat.includes('decor')) return Home;
  if (cat.includes('tech') || cat.includes('gadget')) return Briefcase;
  return Sparkles;
};

const form = reactive({
  recipientName: '',
  relationship: '',
  customRelationship: '',
  age: undefined as number | undefined,
  gender: '',
  interests: [] as string[],
  occasion: '',
  additionalNotes: '',
});

// Restore state from sessionStorage
onMounted(() => {
  const savedState = sessionStorage.getItem('curate_wizard_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      currentStep.value = parsed.currentStep || 1;
      showResults.value = parsed.showResults || false;
      recommendations.value = parsed.recommendations || [];
      idealBudgetNaira.value = parsed.idealBudgetNaira || 50000;
      budgetFlexibility.value = parsed.budgetFlexibility || 'FLEXIBLE';
      Object.assign(form, parsed.form || {});
    } catch (e) {
      console.error('Failed to parse saved curation state', e);
    }
  }
});

// Save state to sessionStorage
watch(
  () => ({
    currentStep: currentStep.value,
    showResults: showResults.value,
    recommendations: recommendations.value,
    idealBudgetNaira: idealBudgetNaira.value,
    budgetFlexibility: budgetFlexibility.value,
    form,
  }),
  (newState) => {
    sessionStorage.setItem('curate_wizard_state', JSON.stringify(newState));
  },
  { deep: true }
);

const relationships = [
  { value: 'mother', label: 'Mother', icon: User },
  { value: 'father', label: 'Father', icon: User },
  { value: 'sister', label: 'Sister', icon: User },
  { value: 'brother', label: 'Brother', icon: User },
  { value: 'wife', label: 'Wife', icon: Heart },
  { value: 'husband', label: 'Husband', icon: Heart },
  { value: 'friend', label: 'Friend', icon: Users },
  { value: 'colleague', label: 'Colleague', icon: Briefcase },
  { value: 'boss', label: 'Boss', icon: Briefcase },
  { value: 'child', label: 'Child', icon: Baby },
  { value: 'partner', label: 'Partner', icon: Heart },
  { value: 'other', label: 'Other', icon: Gift },
];

const occasions = [
  { value: 'birthday', label: 'Birthday', icon: Gift },
  { value: 'wedding', label: 'Wedding', icon: Heart },
  { value: 'anniversary', label: 'Anniversary', icon: Heart },
  { value: 'christmas', label: 'Christmas', icon: Gift },
  { value: 'valentines', label: "Valentine's", icon: Heart },
  { value: 'corporate', label: 'Corporate', icon: Briefcase },
  { value: 'owambe', label: 'Owambe', icon: PartyPopper },
  { value: 'mothers-day', label: "Mother's Day", icon: Heart },
  { value: 'housewarming', label: 'Housewarming', icon: Home },
  { value: 'graduation', label: 'Graduation', icon: GraduationCap },
  { value: 'baby-shower', label: 'Baby Shower', icon: Baby },
  { value: 'just-because', label: 'Just Because', icon: Gift },
];



const interestOptions = [
  'Fashion', 'Skincare', 'Cooking', 'Tech', 'Books', 'Fitness', 'Art',
  'Music', 'Travel', 'Gaming', 'Wine & Spirits', 'Perfume', 'Jewellery',
  'Photography', 'Wellness', 'Home Décor', 'Sports', 'Plants',
];

const toggleInterest = (interest: string) => {
  const idx = form.interests.indexOf(interest);
  if (idx >= 0) form.interests.splice(idx, 1);
  else form.interests.push(interest);
};

const canProceed = computed(() => {
  switch (currentStep.value) {
    case 1: 
      if (form.relationship === 'other') return form.customRelationship.trim().length > 0;
      return form.relationship !== '';
    case 2: return form.occasion !== '';
    case 3: return idealBudgetNaira.value > 0;
    case 4: return form.interests.length > 0;
    default: return true;
  }
});

const nextStep = () => {
  if (canProceed.value && currentStep.value < totalSteps) {
    currentStep.value++;
  }
};

const generateRecommendations = async () => {
  const min = idealBudgetNaira.value * 0.8;
  let max = idealBudgetNaira.value;
  if (budgetFlexibility.value === 'FLEXIBLE') max = idealBudgetNaira.value * 1.2;
  else if (budgetFlexibility.value === 'VERY_FLEXIBLE') max = idealBudgetNaira.value * 1.5;

  generating.value = true;
  try {
    const result = await generateCuration({
      recipientName: form.recipientName,
      relationship: form.relationship === 'other' ? form.customRelationship : form.relationship,
      age: form.age,
      gender: form.gender,
      interests: form.interests,
      occasion: form.occasion,
      budgetMin: min * 100, // Convert to kobo
      budgetMax: max * 100,
      additionalNotes: form.additionalNotes,
    });
    recommendations.value = result.data?.recommendations || result.recommendations || [];
    showResults.value = true;
  } catch (error) {
    console.error('Curation failed:', error);
    alert('Something went wrong. Please try again.');
  } finally {
    generating.value = false;
  }
};

const addToCart = (gift: GiftType) => {
  cartStore.addItem(gift);
};



const resetWizard = () => {
  currentStep.value = 1;
  showResults.value = false;
  recommendations.value = [];
  form.recipientName = '';
  form.relationship = '';
  form.customRelationship = '';
  form.age = undefined;
  form.gender = '';
  form.interests = [];
  form.occasion = '';
  form.additionalNotes = '';
  idealBudgetNaira.value = 50000;
  budgetFlexibility.value = 'FLEXIBLE';
  sessionStorage.removeItem('curate_wizard_state');
};
</script>
