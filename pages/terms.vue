<template>
  <div class="pt-24 pb-16 min-h-[60vh]">
    <div class="section-container max-w-3xl prose prose-slate max-w-none">
      <h1 class="text-4xl font-heading font-extrabold text-slate-900 mb-6">Terms of Service</h1>
      <p class="text-slate-500 text-sm mb-8">Last updated: {{ new Date().toLocaleDateString() }}</p>
      
      <p class="text-slate-600 mb-4">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the CurateWithNG website operated by us.</p>
      
      <h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Accounts</h2>
      <p class="text-slate-600 mb-4">When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
      
      <h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Purchases</h2>
      <p class="text-slate-600 mb-4">If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>

      <h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Changes</h2>
      <p class="text-slate-600 mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
    </div>
  </div>
</template>
<script setup>
definePageMeta({ layout: 'default' });
useSeoMeta({ title: 'Terms of Service — CurateWithNG' });
</script>
