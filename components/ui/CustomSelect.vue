<template>
  <div class="flex flex-col gap-1.5" ref="dropdownRef">
    <label v-if="label" class="text-sm font-semibold text-slate-700">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <div class="relative">
      <button
        type="button"
        @click="isOpen = !isOpen"
        :class="[
          'w-full flex items-center justify-between px-4 py-2.5 rounded-xl border bg-white text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500',
          isOpen ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-slate-200 hover:border-slate-300',
          !modelValue ? 'text-slate-400' : 'text-slate-800',
          error ? 'border-red-300 focus:ring-red-500' : '',
          buttonClass
        ]"
      >
        <span class="truncate block pr-4">{{ displayValue }}</span>
        <ChevronDown 
          class="w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0" 
          :class="{ 'rotate-180': isOpen }"
        />
      </button>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <ul
          v-if="isOpen"
          class="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1"
        >
          <li
            v-if="placeholder"
            @click="selectOption('')"
            class="px-4 py-2.5 text-sm text-slate-400 cursor-pointer hover:bg-slate-50 transition-colors"
          >
            {{ placeholder }}
          </li>
          <li
            v-for="option in options"
            :key="typeof option === 'string' ? option : option.value"
            @click="selectOption(typeof option === 'string' ? option : option.value)"
            :class="[
              'px-4 py-2.5 text-sm cursor-pointer transition-colors',
              (typeof option === 'string' ? option : option.value) === modelValue
                ? 'bg-primary-50 text-primary-800 font-medium'
                : 'text-slate-700 hover:bg-slate-50'
            ]"
          >
            {{ typeof option === 'string' ? option : option.label }}
          </li>
        </ul>
      </transition>
    </div>
    <span v-if="error" class="text-xs text-red-500">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array as () => (string | { label: string; value: string | number })[],
    default: () => []
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  buttonClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const displayValue = computed(() => {
  if (!props.modelValue && props.modelValue !== 0) return props.placeholder;
  
  const option = props.options.find(opt => 
    (typeof opt === 'string' ? opt : opt.value) === props.modelValue
  );
  
  if (!option) return props.placeholder;
  return typeof option === 'string' ? option : option.label;
});

const selectOption = (val: string | number) => {
  emit('update:modelValue', val);
  emit('change', val);
  isOpen.value = false;
};

// Close when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
