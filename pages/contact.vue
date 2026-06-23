<template>
  <div class="pt-24 pb-16 min-h-[60vh]">
    <div class="section-container max-w-3xl">
      <h1 class="text-4xl font-heading font-extrabold text-slate-900 mb-6">Contact Us</h1>
      <p class="text-lg text-slate-600 mb-10">We'd love to hear from you. Whether you have a question about an order, want to partner with us, or just want to say hi, drop us a message!</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="space-y-6">
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 class="font-heading font-bold text-slate-900 mb-2">Customer Support</h3>
            <p class="text-slate-600 mb-2">Email: hello@curatewithng.com</p>
            <p class="text-slate-600">Phone: +234 800 CURATE</p>
          </div>
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 class="font-heading font-bold text-slate-900 mb-2">Office Address</h3>
            <p class="text-slate-600">12 Innovation Drive, Lekki Phase 1<br>Lagos, Nigeria</p>
          </div>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
          <UiCustomInput v-model="form.name" required label="Your Name" placeholder="Chidi Okonkwo" />
          <UiCustomInput v-model="form.email" type="email" required label="Email Address" placeholder="you@example.com" />
          <div>
            <label class="text-sm font-semibold text-slate-700 mb-1 block">Message</label>
            <textarea v-model="form.message" required rows="4" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-slate-300 transition-all duration-200" placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" class="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' });
useSeoMeta({ title: 'Contact Us — CurateWithNG' });

const form = reactive({ name: '', email: '', message: '' });
const submit = () => {
  alert('Thank you for contacting us! We will get back to you shortly.');
  form.name = ''; form.email = ''; form.message = '';
};
</script>
