<template>
  <div class="pt-24 pb-16 min-h-[60vh]">
    <div class="section-container max-w-3xl prose prose-slate max-w-none">
      <h1 class="text-4xl font-heading font-extrabold text-slate-900 mb-6">Refund & Return Policy</h1>
      <p class="text-slate-500 text-sm mb-8">Last updated: {{ new Date().toLocaleDateString() }}</p>
      
      <p class="text-slate-600 mb-4">Thank you for shopping at CurateWithNG. We want to ensure you have a rewarding experience while discovering and purchasing our curated gifts.</p>
      
      <h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Returns</h2>
      <p class="text-slate-600 mb-4">Due to the custom and perishable nature of many of our curated gifts (such as food hampers and personalized items), we generally do not accept returns. However, if an item arrives damaged or defective, please contact us within 24 hours of delivery with photographic proof.</p>
      
      <h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Refunds</h2>
      <p class="text-slate-600 mb-4">If a return is approved for a damaged or incorrect item, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>

      <h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
      <p class="text-slate-600 mb-4">If you have any questions on how to return your item to us, please <NuxtLink to="/contact" class="text-primary-800 hover:underline">contact us</NuxtLink>.</p>
    </div>
  </div>
</template>
<script setup>
definePageMeta({ layout: 'default' });
useSeoMeta({ title: 'Refund Policy — CurateWithNG' });
</script>
