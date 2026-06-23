<template>
  <div class="pt-24 pb-16 min-h-[60vh]">
    <div class="section-container max-w-3xl prose prose-slate max-w-none">
      <h1 class="text-4xl font-heading font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
      <p class="text-slate-500 text-sm mb-8">Last updated: {{ new Date().toLocaleDateString() }}</p>
      
      <p class="text-slate-600 mb-4">CurateWithNG operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
      
      <h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Information Collection And Use</h2>
      <p class="text-slate-600 mb-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
      
      <h3 class="text-xl font-heading font-semibold text-slate-900 mt-6 mb-2">Personal Data</h3>
      <p class="text-slate-600 mb-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address.</p>

      <h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Data Security</h2>
      <p class="text-slate-600 mb-4">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
    </div>
  </div>
</template>
<script setup>
definePageMeta({ layout: 'default' });
useSeoMeta({ title: 'Privacy Policy — CurateWithNG' });
</script>
