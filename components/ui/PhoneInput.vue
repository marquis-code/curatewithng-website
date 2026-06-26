<template>
  <div class="space-y-1.5">
    <label v-if="label" class="block text-sm font-semibold text-slate-700">{{ label }}</label>
    <div class="flex">
      <!-- Country Code Selector -->
      <UiCustomSelect 
        v-model="countryCode"
        :options="countries.map(c => ({ label: `${c.flag} ${c.dialCode}`, value: c.dialCode }))"
        buttonClass="!rounded-r-none !border-r-0 !bg-slate-50"
        class="w-[140px]"
        placeholder="Code"
      />
      
      <!-- Phone Number Input -->
      <input 
        v-model="phoneNumber"
        type="tel"
        pattern="^[0-9]+$"
        :placeholder="placeholder"
        :required="required"
        @input="validateInput"
        class="input-field rounded-l-none flex-1 focus:ring-primary-500 focus:border-primary-500"
        title="Please enter only numbers"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

// Standard country codes
const countries = [
  { code: 'NG', dialCode: '+234', flag: '🇳🇬' },
  { code: 'US', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', dialCode: '+44', flag: '🇬🇧' },
  { code: 'CA', dialCode: '+1', flag: '🇨🇦' },
  { code: 'GH', dialCode: '+233', flag: '🇬🇭' },
  { code: 'ZA', dialCode: '+27', flag: '🇿🇦' },
  { code: 'KE', dialCode: '+254', flag: '🇰🇪' },
  { code: 'RW', dialCode: '+250', flag: '🇷🇼' },
];

const countryCode = ref('+234');
const phoneNumber = ref('');

// Aggressive validation: strip anything that is not a number immediately
const validateInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const digitsOnly = target.value.replace(/\D/g, '');
  phoneNumber.value = digitsOnly;
  target.value = digitsOnly; // Force update input view to block characters
};

// Watch for changes and emit the combined phone string
watch([countryCode, phoneNumber], () => {
  if (phoneNumber.value) {
    emit('update:modelValue', `${countryCode.value}${phoneNumber.value}`);
  } else {
    emit('update:modelValue', '');
  }
});
</script>
