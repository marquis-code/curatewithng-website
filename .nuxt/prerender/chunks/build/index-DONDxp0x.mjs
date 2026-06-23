import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, resolveDynamicComponent, toDisplayString, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { Sparkles, User, Gift, Check, ArrowRight, Star } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ufo/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/h3/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/destr/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/marquis/curatewithng/website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/klona/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/defu/dist/defu.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/scule/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/radix3/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/consola/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/marquis/curatewithng/website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/nuxtseo-shared/dist/utils.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ipx/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/axios/index.js';
import '../_/renderer.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///Users/marquis/curatewithng/website/node_modules/devalue/index.js';
import 'file:///Users/marquis/curatewithng/website/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "CurateWithNG \u2014 The Smartest Way to Gift in Nigeria"
    });
    const heroStories = [
      {
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2000&auto=format&fit=crop",
        title: "The Intention",
        description: "You want to make them feel truly special."
      },
      {
        image: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=2000&auto=format&fit=crop",
        title: "The AI Match",
        description: "GiftGenius analyzes their persona and occasion."
      },
      {
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop",
        title: "The Curation",
        description: "Sourced from Nigeria's finest bespoke vendors."
      },
      {
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2000&auto=format&fit=crop",
        title: "The Moment",
        description: "Delivering unforgettable joy and connection."
      }
    ];
    const activeStory = ref(0);
    const steps = [
      { icon: User, title: "Describe Your Recipient", description: "Tell us who the gift is for \u2014 their interests, the occasion, and your budget.", bgClass: "bg-primary-50" },
      { icon: Sparkles, title: "Get AI Picks", description: "Our AI curator GiftGenius analyses your input and recommends the best gifts from our catalogue.", bgClass: "bg-accent-50" },
      { icon: Gift, title: "Order & Deliver", description: "Choose your favourites, checkout with Paystack, and we handle the rest.", bgClass: "bg-emerald-50" }
    ];
    const categories = [
      { name: "Gift Hampers", slug: "hampers", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80", count: 80 },
      { name: "Fashion", slug: "fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80", count: 120 },
      { name: "Experiences", slug: "experiences", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80", count: 45 },
      { name: "Wellness", slug: "wellness", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80", count: 60 },
      { name: "Tech & Gadgets", slug: "tech", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80", count: 55 },
      { name: "Home & Living", slug: "home", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80", count: 70 },
      { name: "Jewellery", slug: "jewellery", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", count: 40 },
      { name: "Corporate", slug: "corporate", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80", count: 35 }
    ];
    const aiFeatures = [
      "Understands Nigerian gifting culture \u2014 Owambe, weddings, naming ceremonies",
      "Personalised to recipient's interests, age, and relationship",
      "Budget-aware: from \u20A65,000 to \u20A6500,000+",
      "Learns from your preferences over time"
    ];
    const mockRecommendations = [
      { emoji: "\u{1F9D6}", name: "Luxury Skincare Set", reason: "Matches her skincare interest", score: 95 },
      { emoji: "\u{1F4D8}", name: "Nigerian Recipe Book", reason: "Perfect for cooking enthusiast", score: 88 },
      { emoji: "\u{1F9FA}", name: "Self-Care Hamper", reason: "Great birthday treat", score: 82 }
    ];
    const testimonials = [
      { name: "Adaeze O.", location: "Lagos", text: "The AI suggested the perfect hamper for my mum's birthday. She cried happy tears! This platform understands Nigerian gifting." },
      { name: "Tunde A.", location: "Abuja", text: "Used CurateWithNG for corporate end-of-year gifts. Saved me hours of shopping. The vendors are top-notch." },
      { name: "Chidinma E.", location: "Port Harcourt", text: "Found the most beautiful jewellery set for my best friend's wedding. The AI recommendation was spot on!" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative z-10" }, _attrs))} data-v-547b4523><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 bg-dotted py-16 md:py-8" data-v-547b4523><div class="section-container relative z-10" data-v-547b4523><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center" data-v-547b4523><div class="max-w-xl" data-v-547b4523><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in" data-v-547b4523><span class="text-primary-800" data-v-547b4523>\u2728 Powered by AI</span><span class="text-slate-300" data-v-547b4523>\u2022</span><span data-v-547b4523>Nigeria&#39;s Gift Curator</span></div><h1 class="font-heading text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 animate-slide-up" data-v-547b4523> The Smartest Way to <span class="text-primary-800" data-v-547b4523>Gift in Nigeria</span></h1><p class="text-lg text-slate-600 leading-relaxed mb-10 animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-547b4523> Tell our AI about your recipient, and we&#39;ll curate the perfect gift from Nigeria&#39;s finest vendors. Birthdays, weddings, corporate \u2014 we&#39;ve got you covered. </p><div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-547b4523>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/curate",
        class: "btn-primary inline-flex items-center justify-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(` Start AI Curation `);
          } else {
            return [
              createVNode(unref(Sparkles), { class: "w-4 h-4" }),
              createTextVNode(" Start AI Curation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/explore",
        class: "btn-secondary inline-flex items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Explore Gifts `);
          } else {
            return [
              createTextVNode(" Explore Gifts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-8 md:gap-12 mt-12 pt-12 border-t border-slate-200 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}" data-v-547b4523><div data-v-547b4523><div class="text-2xl font-heading font-bold text-slate-900" data-v-547b4523>500+</div><div class="text-sm text-slate-500 font-medium" data-v-547b4523>Curated Gifts</div></div><div data-v-547b4523><div class="text-2xl font-heading font-bold text-slate-900" data-v-547b4523>50+</div><div class="text-sm text-slate-500 font-medium" data-v-547b4523>Local Vendors</div></div><div data-v-547b4523><div class="text-2xl font-heading font-bold text-slate-900" data-v-547b4523>98%</div><div class="text-sm text-slate-500 font-medium" data-v-547b4523>Happy Recipients</div></div></div></div><div class="relative h-[400px] lg:h-[600px] animate-fade-in group" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-547b4523><div class="absolute inset-0 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-[2rem] transform rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-2 group-hover:scale-100" data-v-547b4523></div><div class="relative w-full h-full rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl bg-slate-900" data-v-547b4523><div${ssrRenderAttrs({
        name: "story-fade",
        class: "absolute inset-0"
      })} data-v-547b4523>`);
      ssrRenderList(heroStories, (story, index2) => {
        _push(`<div class="absolute inset-0" style="${ssrRenderStyle(activeStory.value === index2 ? null : { display: "none" })}" data-v-547b4523><img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} class="${ssrRenderClass([activeStory.value === index2 ? "scale-110" : "scale-100", "w-full h-full object-cover transform transition-transform duration-[4000ms] ease-linear"])}" data-v-547b4523><div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" data-v-547b4523></div></div>`);
      });
      _push(`</div><div class="absolute top-4 left-4 right-4 flex gap-2 z-20" data-v-547b4523><!--[-->`);
      ssrRenderList(heroStories, (story, index2) => {
        _push(`<button class="flex-1 h-1.5 rounded-full overflow-hidden bg-white/30 backdrop-blur-sm cursor-pointer hover:h-2 transition-all" data-v-547b4523><div class="${ssrRenderClass([{
          "w-full": index2 < activeStory.value,
          "w-0": index2 > activeStory.value,
          "story-progress": index2 === activeStory.value
        }, "h-full bg-white"])}" data-v-547b4523></div></button>`);
      });
      _push(`<!--]--></div><div class="absolute bottom-0 left-0 right-0 p-8 z-20" data-v-547b4523><div data-v-547b4523><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20" data-v-547b4523> Step ${ssrInterpolate(activeStory.value + 1)}</div><h3 class="font-heading font-extrabold text-white text-3xl md:text-4xl mb-2" data-v-547b4523>${ssrInterpolate(heroStories[activeStory.value].title)}</h3><p class="text-white/90 text-lg md:text-xl" data-v-547b4523>${ssrInterpolate(heroStories[activeStory.value].description)}</p></div></div><div class="absolute inset-0 flex z-10" data-v-547b4523><button class="flex-1 cursor-pointer focus:outline-none" data-v-547b4523></button><button class="flex-1 cursor-pointer focus:outline-none" data-v-547b4523></button></div></div></div></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-20 md:py-8" data-v-547b4523><div class="section-container relative z-10" data-v-547b4523><div class="text-center mb-16" data-v-547b4523><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4" data-v-547b4523>How It Works</h2><p class="text-lg text-slate-500 max-w-2xl mx-auto" data-v-547b4523>Three simple steps to the perfect gift</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-547b4523><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="text-center p-8" data-v-547b4523><div class="${ssrRenderClass([step.bgClass, "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-primary-800"])}" data-v-547b4523>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(step.icon), { class: "w-8 h-8" }, null), _parent);
        _push(`</div><div class="text-sm font-semibold text-primary-800 mb-2" data-v-547b4523>Step ${ssrInterpolate(i + 1)}</div><h3 class="text-xl font-heading font-bold text-slate-900 mb-3" data-v-547b4523>${ssrInterpolate(step.title)}</h3><p class="text-slate-500 leading-relaxed" data-v-547b4523>${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 py-20 md:py-8" data-v-547b4523><div class="section-container relative z-10" data-v-547b4523><div class="text-center mb-12" data-v-547b4523><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4" data-v-547b4523>Browse by Category</h2><p class="text-lg text-slate-500" data-v-547b4523>Find the perfect gift for every occasion</p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" data-v-547b4523><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: cat.slug,
          to: `/explore?category=${cat.slug}`,
          class: "group relative h-48 md:h-64 rounded-3xl overflow-hidden cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", cat.image)}${ssrRenderAttr("alt", cat.name)} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-v-547b4523${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" data-v-547b4523${_scopeId}></div><div class="absolute bottom-0 left-0 right-0 p-5 md:p-6" data-v-547b4523${_scopeId}><h3 class="font-heading font-bold text-white text-lg md:text-xl mb-1" data-v-547b4523${_scopeId}>${ssrInterpolate(cat.name)}</h3><p class="text-sm text-slate-300" data-v-547b4523${_scopeId}>${ssrInterpolate(cat.count)}+ gifts</p></div>`);
            } else {
              return [
                createVNode("img", {
                  src: cat.image,
                  alt: cat.name,
                  class: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" }),
                createVNode("div", { class: "absolute bottom-0 left-0 right-0 p-5 md:p-6" }, [
                  createVNode("h3", { class: "font-heading font-bold text-white text-lg md:text-xl mb-1" }, toDisplayString(cat.name), 1),
                  createVNode("p", { class: "text-sm text-slate-300" }, toDisplayString(cat.count) + "+ gifts", 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-20 md:py-8" data-v-547b4523><div class="section-container relative z-10" data-v-547b4523><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-547b4523><div data-v-547b4523><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold mb-6" data-v-547b4523> \u2728 AI-Powered </div><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6" data-v-547b4523> Let Our AI Find the <span class="text-primary-800" data-v-547b4523>Perfect Gift</span></h2><p class="text-lg text-slate-500 leading-relaxed mb-8" data-v-547b4523> Our AI understands Nigerian culture and gifting traditions. Whether it&#39;s an Owambe, a wedding, or a corporate hamper, GiftGenius knows exactly what to recommend. </p><ul class="space-y-4 mb-8" data-v-547b4523><!--[-->`);
      ssrRenderList(aiFeatures, (feature) => {
        _push(`<li class="flex items-start gap-3" data-v-547b4523><div class="w-6 h-6 rounded-full bg-success-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5" data-v-547b4523>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-3.5 h-3.5" }, null, _parent));
        _push(`</div><span class="text-slate-700" data-v-547b4523>${ssrInterpolate(feature)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/curate",
        class: "btn-primary inline-flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Try AI Curator `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Try AI Curator "),
              createVNode(unref(ArrowRight), { class: "w-4 h-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100" data-v-547b4523><div class="bg-white rounded-2xl border border-slate-200 p-6 mb-4" data-v-547b4523><div class="text-sm text-slate-400 mb-2" data-v-547b4523>You said:</div><p class="text-slate-700" data-v-547b4523>&quot;Gift for my sister Amaka, 28, loves skincare and cooking. Birthday gift, budget \u20A615,000 \u2013 \u20A630,000&quot;</p></div><div class="bg-primary-800 text-white rounded-2xl p-6" data-v-547b4523><div class="flex items-center gap-2 mb-3" data-v-547b4523><span class="text-accent-400" data-v-547b4523>\u2728</span><span class="text-sm font-semibold text-primary-200" data-v-547b4523>GiftGenius recommends</span></div><div class="space-y-3" data-v-547b4523><!--[-->`);
      ssrRenderList(mockRecommendations, (rec, i) => {
        _push(`<div class="flex items-center gap-3 p-3 bg-white/10 rounded-xl" data-v-547b4523><div class="text-2xl" data-v-547b4523>${ssrInterpolate(rec.emoji)}</div><div class="flex-1" data-v-547b4523><div class="font-semibold text-sm" data-v-547b4523>${ssrInterpolate(rec.name)}</div><div class="text-primary-200 text-xs" data-v-547b4523>${ssrInterpolate(rec.reason)}</div></div><div class="text-accent-400 font-bold text-sm" data-v-547b4523>${ssrInterpolate(rec.score)}%</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 overflow-clip py-20 md:py-8" data-v-547b4523><div class="section-container relative z-10" data-v-547b4523><div class="text-center mb-12" data-v-547b4523><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4" data-v-547b4523>Loved by Nigerians</h2><p class="text-lg text-slate-500" data-v-547b4523>See what our customers are saying</p></div></div><div class="relative flex overflow-hidden" data-v-547b4523><div class="marquee-container gap-6 py-4 px-3 flex" data-v-547b4523><!--[-->`);
      ssrRenderList([...testimonials, ...testimonials, ...testimonials, ...testimonials], (testimonial, i) => {
        _push(`<div class="w-80 md:w-96 flex-shrink-0 card p-6 whitespace-normal" data-v-547b4523><div class="flex items-center gap-1 mb-4" data-v-547b4523><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(ssrRenderComponent(unref(Star), {
            key: s,
            class: "w-4 h-4 text-accent-500 fill-current"
          }, null, _parent));
        });
        _push(`<!--]--></div><p class="text-slate-600 leading-relaxed mb-4" data-v-547b4523>&quot;${ssrInterpolate(testimonial.text)}&quot;</p><div class="flex items-center gap-3" data-v-547b4523><div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0" data-v-547b4523><span class="text-primary-800 font-bold text-sm" data-v-547b4523>${ssrInterpolate(testimonial.name.charAt(0))}</span></div><div data-v-547b4523><div class="font-semibold text-slate-900 text-sm" data-v-547b4523>${ssrInterpolate(testimonial.name)}</div><div class="text-slate-400 text-xs" data-v-547b4523>${ssrInterpolate(testimonial.location)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-24 md:py-8" data-v-547b4523><div class="section-container relative z-10" data-v-547b4523><div class="bg-slate-900 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2" data-v-547b4523><div class="p-12 md:p-16 flex flex-col justify-center" data-v-547b4523><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 w-fit" data-v-547b4523> Partner With Us </div><h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6" data-v-547b4523> Grow Your Gifting Business </h2><p class="text-lg text-slate-300 leading-relaxed mb-8" data-v-547b4523> Join CurateWithNG as a curated vendor. Reach thousands of shoppers looking for high-quality, beautifully packaged gifts and hampers. We handle the AI matching, you handle the magic. </p><a href="https://vendor.curatewithng.com" class="btn-primary w-fit !bg-white !text-slate-900 hover:!bg-slate-100" data-v-547b4523> Become a Vendor Today </a></div><div class="relative h-64 lg:h-auto" data-v-547b4523><img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" alt="Vendor packaging gifts" class="absolute inset-0 w-full h-full object-cover" data-v-547b4523></div></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 bg-dotted py-20 md:py-8" data-v-547b4523><div class="section-container relative z-10" data-v-547b4523><div class="bg-white rounded-[3rem] border border-slate-200 p-12 md:p-20 text-center relative overflow-hidden shadow-sm" data-v-547b4523><div class="absolute inset-0 bg-[url(&#39;https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&#39;)] opacity-5 bg-cover bg-center" data-v-547b4523></div><div class="relative z-10 max-w-2xl mx-auto" data-v-547b4523><h2 class="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6" data-v-547b4523>Ready to Gift Smarter?</h2><p class="text-xl text-slate-500 mb-10" data-v-547b4523>Join thousands of Nigerians who trust CurateWithNG for meaningful, curated gifts.</p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-v-547b4523>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/register",
        class: "btn-primary !py-3 !px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create Free Account`);
          } else {
            return [
              createTextVNode("Create Free Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/curate",
        class: "border-2 border-slate-200 text-slate-700 bg-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Try AI Curator`);
          } else {
            return [
              createTextVNode("Try AI Curator")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-547b4523"]]);

export { index as default };
//# sourceMappingURL=index-DONDxp0x.mjs.map
