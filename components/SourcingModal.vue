<template>
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" @click="close"></div>
    
    <!-- Modal Content -->
    <div class="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <!-- Header -->
      <div class="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
        <h3 class="text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
          <span class="text-2xl">✨</span> Source This For Me
        </h3>
        <button @click="close" class="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Body -->
      <div class="p-6 overflow-y-auto flex-1">
        <!-- Step 1: Confirm Idea -->
        <div v-if="step === 1" class="animate-fade-in">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              💡
            </div>
            <h4 class="text-lg font-bold text-slate-900 mb-2">We'll source this for you!</h4>
            <p class="text-slate-500 text-sm">
              Our concierge team will find the perfect vendor for a <strong class="text-slate-900">"{{ gift?.name }}"</strong> and send you a quote within 48 hours.
            </p>
          </div>

          <div class="bg-slate-50 rounded-2xl p-4 mb-6 text-sm">
            <div class="flex justify-between mb-2">
              <span class="text-slate-500">Occasion:</span>
              <span class="font-medium text-slate-900 capitalize">{{ occasion || 'Not specified' }}</span>
            </div>
          </div>

          <button @click="step = 2" class="btn-primary w-full">Continue</button>
        </div>

        <!-- Step 2: Budget Preference -->
        <div v-if="step === 2" class="animate-fade-in space-y-4">
          <h4 class="font-bold text-slate-900 mb-4">What's your budget?</h4>
          
          <div class="space-y-4">
            <label class="block text-sm font-semibold text-slate-700">Ideal Amount (₦)</label>
            <input type="number" v-model="form.idealBudget" class="input-field" placeholder="50000" />
            
            <h4 class="font-bold text-slate-900 mt-6 mb-2">Budget Flexibility</h4>
            <div class="grid grid-cols-1 gap-3">
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer transition-colors hover:bg-slate-50" :class="{ 'bg-primary-50 border-primary-200 ring-1 ring-primary-500': form.budgetFlexibility === 'strict' }">
                <input type="radio" v-model="form.budgetFlexibility" value="strict" class="mt-0.5" />
                <div>
                  <span class="block text-sm font-medium text-slate-900">Strict</span>
                  <span class="block text-xs text-slate-500">Do not exceed my ideal budget</span>
                </div>
              </label>
              
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer transition-colors hover:bg-slate-50" :class="{ 'bg-primary-50 border-primary-200 ring-1 ring-primary-500': form.budgetFlexibility === 'flexible' }">
                <input type="radio" v-model="form.budgetFlexibility" value="flexible" class="mt-0.5" />
                <div>
                  <span class="block text-sm font-medium text-slate-900">Flexible</span>
                  <span class="block text-xs text-slate-500">You can exceed it slightly if needed</span>
                </div>
              </label>
              
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer transition-colors hover:bg-slate-50" :class="{ 'bg-primary-50 border-primary-200 ring-1 ring-primary-500': form.budgetFlexibility === 'very_flexible' }">
                <input type="radio" v-model="form.budgetFlexibility" value="very_flexible" class="mt-0.5" />
                <div>
                  <span class="block text-sm font-medium text-slate-900">Very Flexible</span>
                  <span class="block text-xs text-slate-500">Quality matters more than price</span>
                </div>
              </label>
            </div>
          </div>

          <div class="flex gap-3 pt-4">
            <button @click="step = 1" class="btn-ghost flex-1">Back</button>
            <button @click="step = 3" :disabled="!form.idealBudget" class="btn-primary flex-1">Continue</button>
          </div>
        </div>

        <!-- Step 3: Contact Details & Timeline -->
        <div v-if="step === 3" class="animate-fade-in space-y-4">
          <h4 class="font-bold text-slate-900 mb-4">Your Contact Details</h4>
          
          <UiCustomInput v-model="form.contactName" label="Full Name" placeholder="Jane Doe" />
          
          <div class="grid grid-cols-2 gap-4">
            <UiCustomInput v-model="form.contactEmail" type="email" label="Email Address" placeholder="jane@example.com" />
            <UiCustomInput v-model="form.contactPhone" type="tel" label="Phone Number" placeholder="+234..." />
          </div>

          <h4 class="font-bold text-slate-900 mt-6 mb-4">When do you need it by?</h4>
          <div class="grid grid-cols-2 gap-3">
            <label v-for="t in timelines" :key="t" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer transition-colors hover:bg-slate-50" :class="{ 'bg-primary-50 border-primary-200 ring-1 ring-primary-500': form.timeline === t }">
              <input type="radio" v-model="form.timeline" :value="t" class="mt-0.5" />
              <span class="text-sm font-medium text-slate-700">{{ t }}</span>
            </label>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Additional Notes (Optional)</label>
            <textarea v-model="form.additionalNotes" rows="3" class="input-field" placeholder="Any specific requirements or preferences..."></textarea>
          </div>

          <div class="flex gap-3 pt-4">
            <button @click="step = 2" class="btn-ghost flex-1">Back</button>
            <button @click="submitRequest" :disabled="!canSubmit || submitting" class="btn-primary flex-1 flex items-center justify-center gap-2">
              <Loader2 v-if="submitting" class="w-4 h-4 animate-spin" />
              {{ submitting ? 'Submitting...' : 'Submit Request' }}
            </button>
          </div>
        </div>

        <!-- Step 4: Success -->
        <div v-if="step === 4" class="animate-fade-in text-center py-8">
          <div class="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-green-500">
            <CheckCircle class="w-10 h-10" />
          </div>
          <h4 class="text-2xl font-heading font-bold text-slate-900 mb-3">Request Received!</h4>
          <p class="text-slate-500 mb-8 max-w-sm mx-auto">
            We've received your sourcing request. Our concierge team is on it and will send a quote to your email within 48 hours.
          </p>
          <div class="flex gap-3 justify-center">
            <button @click="close" class="btn-secondary">Close</button>
            <a href="https://wa.me/2347057188970" target="_blank" class="btn-accent flex items-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X, Loader2, CheckCircle } from 'lucide-vue-next';
import { formatNaira } from '~/utils/formatCurrency';
import { GATEWAY_ENDPOINT_WITH_AUTH } from '~/api_factory/axios.config';

const props = defineProps<{
  gift: any;
  occasion: string;
  recipientProfile: any;
  idealBudget: number;
  budgetFlexibility: string;
}>();

const emit = defineEmits(['close']);

const step = ref(1);
const submitting = ref(false);

const timelines = [
  'Within 1 week',
  'Within 2 weeks',
  'Within a month',
  'No rush'
];

const form = reactive({
  idealBudget: props.idealBudget || 50000,
  budgetFlexibility: props.budgetFlexibility || 'flexible',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  timeline: 'Within 2 weeks',
  additionalNotes: ''
});

const canSubmit = computed(() => {
  return form.contactName && form.contactEmail && form.contactPhone;
});

const close = () => {
  if (submitting.value) return;
  emit('close');
};

const submitRequest = async () => {
  if (!canSubmit.value) return;
  
  submitting.value = true;
  try {
    await GATEWAY_ENDPOINT_WITH_AUTH.post('/sourcing-requests', {
      giftIdea: props.gift?.name,
      occasion: props.occasion,
      recipientProfile: {
        name: props.recipientProfile.recipientName,
        relationship: props.recipientProfile.relationship,
        age: props.recipientProfile.age,
        gender: props.recipientProfile.gender,
        interests: props.recipientProfile.interests
      },
      budgetSignal: {
        ideal: Number(form.idealBudget),
        flexibility: form.budgetFlexibility
      },
      timeline: form.timeline,
      contactName: form.contactName,
      contactEmail: form.contactEmail,
      contactPhone: form.contactPhone,
      additionalNotes: form.additionalNotes
    });
    
    step.value = 4;
  } catch (error: any) {
    console.error('Failed to submit sourcing request:', error);
    alert('Something went wrong. Please try again.');
  } finally {
    submitting.value = false;
  }
};
</script>
