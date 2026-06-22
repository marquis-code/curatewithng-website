import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { defineComponent, withCtx, unref, createVNode, createTextVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { Sparkles, User, Gift, ShoppingBag, Star, Heart, Home, Briefcase, Check, ArrowRight } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { u as useHead } from './server.mjs';
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
    const steps = [
      { icon: User, title: "Describe Your Recipient", description: "Tell us who the gift is for \u2014 their interests, the occasion, and your budget.", bgClass: "bg-primary-50" },
      { icon: Sparkles, title: "Get AI Picks", description: "Our AI curator GiftGenius analyses your input and recommends the best gifts from our catalogue.", bgClass: "bg-accent-50" },
      { icon: Gift, title: "Order & Deliver", description: "Choose your favourites, checkout with Paystack, and we handle the rest.", bgClass: "bg-emerald-50" }
    ];
    const categories = [
      { name: "Gift Hampers", slug: "hampers", icon: ShoppingBag, count: 80 },
      { name: "Fashion", slug: "fashion", icon: ShoppingBag, count: 120 },
      { name: "Experiences", slug: "experiences", icon: Star, count: 45 },
      { name: "Wellness", slug: "wellness", icon: Heart, count: 60 },
      { name: "Tech & Gadgets", slug: "tech", icon: ShoppingBag, count: 55 },
      { name: "Home & Living", slug: "home", icon: Home, count: 70 },
      { name: "Jewellery", slug: "jewellery", icon: Star, count: 40 },
      { name: "Corporate", slug: "corporate", icon: Briefcase, count: 35 }
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
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative bg-gradient-hero overflow-hidden"><div class="absolute inset-0"><div class="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"></div><div class="absolute bottom-10 right-20 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div></div><div class="section-container relative z-10 py-24 md:py-32 lg:py-40"><div class="max-w-3xl mx-auto text-center"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in"><span class="text-accent-400 text-sm">\u2728 Powered by AI</span><span class="text-white/60 text-sm">\u2022</span><span class="text-white/80 text-sm">Nigeria&#39;s Gift Curator</span></div><h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-slide-up"> The Smartest Way to <span class="text-gradient bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent"> Gift in Nigeria</span></h1><p class="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}"> Tell our AI about your recipient, and we&#39;ll curate the perfect gift from Nigeria&#39;s finest vendors. Birthdays, weddings, corporate \u2014 we&#39;ve got you covered. </p><div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/curate",
        class: "btn-accent text-lg !py-4 !px-8 inline-flex items-center justify-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Sparkles), { class: "w-5 h-5" }, null, _parent2, _scopeId));
            _push2(` Start AI Curation `);
          } else {
            return [
              createVNode(unref(Sparkles), { class: "w-5 h-5" }),
              createTextVNode(" Start AI Curation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/explore",
        class: "border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white/10 text-lg inline-flex items-center justify-center"
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
      _push(`</div><div class="flex justify-center gap-8 md:gap-16 mt-16 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}"><div class="text-center"><div class="text-2xl md:text-3xl font-heading font-bold text-white">500+</div><div class="text-sm text-slate-400">Curated Gifts</div></div><div class="text-center"><div class="text-2xl md:text-3xl font-heading font-bold text-white">50+</div><div class="text-sm text-slate-400">Local Vendors</div></div><div class="text-center"><div class="text-2xl md:text-3xl font-heading font-bold text-white">98%</div><div class="text-sm text-slate-400">Happy Recipients</div></div></div></div></div></section><section class="py-20 bg-white"><div class="section-container"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">How It Works</h2><p class="text-lg text-slate-500 max-w-2xl mx-auto">Three simple steps to the perfect gift</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="text-center p-8"><div class="${ssrRenderClass([step.bgClass, "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-primary-800"])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(step.icon), { class: "w-8 h-8" }, null), _parent);
        _push(`</div><div class="text-sm font-semibold text-primary-800 mb-2">Step ${ssrInterpolate(i + 1)}</div><h3 class="text-xl font-heading font-bold text-slate-900 mb-3">${ssrInterpolate(step.title)}</h3><p class="text-slate-500 leading-relaxed">${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-slate-50"><div class="section-container"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Browse by Category</h2><p class="text-lg text-slate-500">Find the perfect gift for every occasion</p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: cat.slug,
          to: `/explore?category=${cat.slug}`,
          class: "card-interactive p-6 text-center group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-3 flex justify-center text-slate-700"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(cat.icon), { class: "w-10 h-10" }, null), _parent2, _scopeId);
              _push2(`</div><h3 class="font-heading font-semibold text-slate-900 group-hover:text-primary-800 transition-colors"${_scopeId}>${ssrInterpolate(cat.name)}</h3><p class="text-sm text-slate-400 mt-1"${_scopeId}>${ssrInterpolate(cat.count)}+ gifts</p>`);
            } else {
              return [
                createVNode("div", { class: "mb-3 flex justify-center text-slate-700" }, [
                  (openBlock(), createBlock(resolveDynamicComponent(cat.icon), { class: "w-10 h-10" }))
                ]),
                createVNode("h3", { class: "font-heading font-semibold text-slate-900 group-hover:text-primary-800 transition-colors" }, toDisplayString(cat.name), 1),
                createVNode("p", { class: "text-sm text-slate-400 mt-1" }, toDisplayString(cat.count) + "+ gifts", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white"><div class="section-container"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold mb-6"> \u2728 AI-Powered </div><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6"> Let Our AI Find the <span class="text-primary-800">Perfect Gift</span></h2><p class="text-lg text-slate-500 leading-relaxed mb-8"> Our AI understands Nigerian culture and gifting traditions. Whether it&#39;s an Owambe, a wedding, or a corporate hamper, GiftGenius knows exactly what to recommend. </p><ul class="space-y-4 mb-8"><!--[-->`);
      ssrRenderList(aiFeatures, (feature) => {
        _push(`<li class="flex items-start gap-3"><div class="w-6 h-6 rounded-full bg-success-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">`);
        _push(ssrRenderComponent(unref(Check), { class: "w-3.5 h-3.5" }, null, _parent));
        _push(`</div><span class="text-slate-700">${ssrInterpolate(feature)}</span></li>`);
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
      _push(`</div><div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100"><div class="bg-white rounded-2xl border border-slate-200 p-6 mb-4"><div class="text-sm text-slate-400 mb-2">You said:</div><p class="text-slate-700">&quot;Gift for my sister Amaka, 28, loves skincare and cooking. Birthday gift, budget \u20A615,000 \u2013 \u20A630,000&quot;</p></div><div class="bg-primary-800 text-white rounded-2xl p-6"><div class="flex items-center gap-2 mb-3"><span class="text-accent-400">\u2728</span><span class="text-sm font-semibold text-primary-200">GiftGenius recommends</span></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(mockRecommendations, (rec, i) => {
        _push(`<div class="flex items-center gap-3 p-3 bg-white/10 rounded-xl"><div class="text-2xl">${ssrInterpolate(rec.emoji)}</div><div class="flex-1"><div class="font-semibold text-sm">${ssrInterpolate(rec.name)}</div><div class="text-primary-200 text-xs">${ssrInterpolate(rec.reason)}</div></div><div class="text-accent-400 font-bold text-sm">${ssrInterpolate(rec.score)}%</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><section class="py-20 bg-slate-50"><div class="section-container"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Loved by Nigerians</h2><p class="text-lg text-slate-500">See what our customers are saying</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(testimonials, (testimonial, i) => {
        _push(`<div class="card p-6"><div class="flex items-center gap-1 mb-4"><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(ssrRenderComponent(unref(Star), {
            key: s,
            class: "w-4 h-4 text-accent-500 fill-current"
          }, null, _parent));
        });
        _push(`<!--]--></div><p class="text-slate-600 leading-relaxed mb-4">&quot;${ssrInterpolate(testimonial.text)}&quot;</p><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"><span class="text-primary-800 font-bold text-sm">${ssrInterpolate(testimonial.name.charAt(0))}</span></div><div><div class="font-semibold text-slate-900 text-sm">${ssrInterpolate(testimonial.name)}</div><div class="text-slate-400 text-xs">${ssrInterpolate(testimonial.location)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-gradient-hero"><div class="section-container text-center"><h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to Gift Smarter?</h2><p class="text-lg text-slate-300 mb-8 max-w-xl mx-auto">Join thousands of Nigerians who trust CurateWithNG for meaningful, curated gifts.</p><div class="flex flex-col sm:flex-row gap-4 justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/register",
        class: "btn-accent text-lg !py-4 !px-8"
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
        class: "border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-lg"
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
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Znf5SF87.mjs.map
