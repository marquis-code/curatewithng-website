import { _ as _sfc_main$1 } from './CustomInput-BV4K4PXs.mjs';
import { _ as _sfc_main$2 } from './CustomSelect-7IRZxl6H.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { defineComponent, ref, computed, reactive, mergeProps, unref, createVNode, resolveDynamicComponent, isRef, withCtx, createTextVNode, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderAttr } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { User, Heart, Users, Briefcase, Baby, Gift, PartyPopper, Home, GraduationCap, Loader2 } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { u as useHead } from './server.mjs';
import { f as formatNaira } from './formatCurrency-DDPrfxv6.mjs';
import { u as useCartStore } from './cart.store-B02bp-DA.mjs';
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

const totalSteps = 5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "curate",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "AI Gift Curator \u2014 CurateWithNG" });
    useCartStore();
    const currentStep = ref(1);
    const generating = ref(false);
    const showResults = ref(false);
    const recommendations = ref([]);
    const budgetMinNaira = ref(5e3);
    const budgetMaxNaira = ref(5e4);
    const formattedBudgetMin = computed({
      get: () => budgetMinNaira.value ? budgetMinNaira.value.toLocaleString("en-NG") : "",
      set: (val) => {
        const num = parseInt(val.replace(/,/g, "").replace(/\D/g, ""), 10);
        budgetMinNaira.value = isNaN(num) ? 0 : num;
      }
    });
    const formattedBudgetMax = computed({
      get: () => budgetMaxNaira.value ? budgetMaxNaira.value.toLocaleString("en-NG") : "",
      set: (val) => {
        const num = parseInt(val.replace(/,/g, "").replace(/\D/g, ""), 10);
        budgetMaxNaira.value = isNaN(num) ? 0 : num;
      }
    });
    const form = reactive({
      recipientName: "",
      relationship: "",
      age: void 0,
      gender: "",
      interests: [],
      occasion: "",
      additionalNotes: ""
    });
    const relationships = [
      { value: "mother", label: "Mother", icon: User },
      { value: "father", label: "Father", icon: User },
      { value: "sister", label: "Sister", icon: User },
      { value: "brother", label: "Brother", icon: User },
      { value: "wife", label: "Wife", icon: Heart },
      { value: "husband", label: "Husband", icon: Heart },
      { value: "friend", label: "Friend", icon: Users },
      { value: "colleague", label: "Colleague", icon: Briefcase },
      { value: "boss", label: "Boss", icon: Briefcase },
      { value: "child", label: "Child", icon: Baby },
      { value: "partner", label: "Partner", icon: Heart },
      { value: "other", label: "Other", icon: Gift }
    ];
    const occasions = [
      { value: "birthday", label: "Birthday", icon: Gift },
      { value: "wedding", label: "Wedding", icon: Heart },
      { value: "anniversary", label: "Anniversary", icon: Heart },
      { value: "christmas", label: "Christmas", icon: Gift },
      { value: "valentines", label: "Valentine's", icon: Heart },
      { value: "corporate", label: "Corporate", icon: Briefcase },
      { value: "owambe", label: "Owambe", icon: PartyPopper },
      { value: "mothers-day", label: "Mother's Day", icon: Heart },
      { value: "housewarming", label: "Housewarming", icon: Home },
      { value: "graduation", label: "Graduation", icon: GraduationCap },
      { value: "baby-shower", label: "Baby Shower", icon: Baby },
      { value: "just-because", label: "Just Because", icon: Gift }
    ];
    const budgetPresets = [
      { label: "\u20A65k\u2013\u20A615k", min: 5e3, max: 15e3 },
      { label: "\u20A615k\u2013\u20A630k", min: 15e3, max: 3e4 },
      { label: "\u20A630k\u2013\u20A675k", min: 3e4, max: 75e3 },
      { label: "\u20A675k\u2013\u20A6150k", min: 75e3, max: 15e4 },
      { label: "\u20A6150k+", min: 15e4, max: 5e5 }
    ];
    const interestOptions = [
      "Fashion",
      "Skincare",
      "Cooking",
      "Tech",
      "Books",
      "Fitness",
      "Art",
      "Music",
      "Travel",
      "Gaming",
      "Wine & Spirits",
      "Perfume",
      "Jewellery",
      "Photography",
      "Wellness",
      "Home D\xE9cor",
      "Sports",
      "Plants"
    ];
    const canProceed = computed(() => {
      switch (currentStep.value) {
        case 1:
          return form.relationship !== "";
        case 2:
          return form.occasion !== "";
        case 3:
          return budgetMinNaira.value > 0 && budgetMaxNaira.value > budgetMinNaira.value;
        case 4:
          return form.interests.length > 0;
        default:
          return true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCustomInput = _sfc_main$1;
      const _component_UiCustomSelect = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="section-container max-w-3xl"><div class="text-center mb-12"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold mb-4"> \u2728 AI Gift Curator </div><h1 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">Find the Perfect Gift</h1><p class="text-lg text-slate-500">Answer a few questions and our AI will curate personalized gift recommendations</p></div>`);
      if (!unref(showResults)) {
        _push(`<div class="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100"><div class="flex items-center gap-2 mb-8"><!--[-->`);
        ssrRenderList(totalSteps, (i) => {
          _push(`<div class="${ssrRenderClass([i <= unref(currentStep) ? "bg-primary-800" : "bg-slate-200", "flex-1 h-2 rounded-full transition-all duration-300"])}"></div>`);
        });
        _push(`<!--]--></div>`);
        if (unref(currentStep) === 1) {
          _push(`<div class="animate-fade-in"><h2 class="text-xl font-heading font-bold text-slate-900 mb-2">Who is the gift for?</h2><p class="text-slate-500 mb-6">Select your relationship with the recipient</p><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
          ssrRenderList(relationships, (rel) => {
            _push(`<button class="${ssrRenderClass([
              "p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden group",
              unref(form).relationship === rel.value ? "bg-primary-800 text-white shadow-lg ring-4 ring-primary-100" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            ])}">`);
            if (unref(form).relationship === rel.value) {
              _push(`<div class="absolute -right-4 -bottom-4 opacity-5 transition-transform duration-500 group-hover:scale-110">`);
              ssrRenderVNode(_push, createVNode(resolveDynamicComponent(rel.icon), { class: "w-24 h-24 text-white" }, null), _parent);
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(rel.icon), {
              class: ["w-8 h-8 mb-3 transition-colors", unref(form).relationship === rel.value ? "text-accent-400" : "text-slate-500"]
            }, null), _parent);
            _push(`<div class="${ssrRenderClass(["font-semibold text-sm relative z-10", unref(form).relationship === rel.value ? "text-white" : "text-slate-900"])}">${ssrInterpolate(rel.label)}</div></button>`);
          });
          _push(`<!--]--></div>`);
          _push(ssrRenderComponent(_component_UiCustomInput, {
            modelValue: unref(form).recipientName,
            "onUpdate:modelValue": ($event) => unref(form).recipientName = $event,
            placeholder: "Recipient's name (optional)",
            class: "mt-4"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentStep) === 2) {
          _push(`<div class="animate-fade-in"><h2 class="text-xl font-heading font-bold text-slate-900 mb-2">What&#39;s the occasion?</h2><p class="text-slate-500 mb-6">Select the gifting occasion</p><div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
          ssrRenderList(occasions, (occ) => {
            _push(`<button class="${ssrRenderClass([
              "p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden group",
              unref(form).occasion === occ.value ? "bg-primary-800 text-white shadow-lg ring-4 ring-primary-100" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            ])}">`);
            if (unref(form).occasion === occ.value) {
              _push(`<div class="absolute -right-4 -bottom-4 opacity-5 transition-transform duration-500 group-hover:scale-110">`);
              ssrRenderVNode(_push, createVNode(resolveDynamicComponent(occ.icon), { class: "w-24 h-24 text-white" }, null), _parent);
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(occ.icon), {
              class: ["w-8 h-8 mb-3 transition-colors", unref(form).occasion === occ.value ? "text-accent-400" : "text-slate-500"]
            }, null), _parent);
            _push(`<div class="${ssrRenderClass(["font-semibold text-sm relative z-10", unref(form).occasion === occ.value ? "text-white" : "text-slate-900"])}">${ssrInterpolate(occ.label)}</div></button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentStep) === 3) {
          _push(`<div class="animate-fade-in"><h2 class="text-xl font-heading font-bold text-slate-900 mb-2">What&#39;s your budget?</h2><p class="text-slate-500 mb-6">Set your budget range in Naira</p><div class="grid grid-cols-2 gap-4">`);
          _push(ssrRenderComponent(_component_UiCustomInput, {
            modelValue: unref(formattedBudgetMin),
            "onUpdate:modelValue": ($event) => isRef(formattedBudgetMin) ? formattedBudgetMin.value = $event : null,
            type: "text",
            label: "Minimum (\u20A6)",
            placeholder: "5,000"
          }, null, _parent));
          _push(ssrRenderComponent(_component_UiCustomInput, {
            modelValue: unref(formattedBudgetMax),
            "onUpdate:modelValue": ($event) => isRef(formattedBudgetMax) ? formattedBudgetMax.value = $event : null,
            type: "text",
            label: "Maximum (\u20A6)",
            placeholder: "50,000"
          }, null, _parent));
          _push(`</div><div class="flex gap-2 mt-4 flex-wrap"><!--[-->`);
          ssrRenderList(budgetPresets, (preset) => {
            _push(`<button class="px-4 py-2 rounded-xl bg-slate-50 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-all">${ssrInterpolate(preset.label)}</button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentStep) === 4) {
          _push(`<div class="animate-fade-in"><h2 class="text-xl font-heading font-bold text-slate-900 mb-2">What are they into?</h2><p class="text-slate-500 mb-6">Select interests (pick as many as you like)</p><div class="flex flex-wrap gap-3"><!--[-->`);
          ssrRenderList(interestOptions, (interest) => {
            _push(`<button class="${ssrRenderClass([
              "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
              unref(form).interests.includes(interest) ? "bg-primary-800 text-white shadow-md ring-2 ring-primary-100" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            ])}">${ssrInterpolate(interest)}</button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentStep) === 5) {
          _push(`<div class="animate-fade-in"><h2 class="text-xl font-heading font-bold text-slate-900 mb-2">Anything else?</h2><p class="text-slate-500 mb-6">Add any extra context to help our AI (optional)</p><div class="space-y-4"><div class="grid grid-cols-2 gap-4">`);
          _push(ssrRenderComponent(_component_UiCustomInput, {
            modelValue: unref(form).age,
            "onUpdate:modelValue": ($event) => unref(form).age = $event,
            modelModifiers: { number: true },
            type: "number",
            label: "Age",
            placeholder: "28"
          }, null, _parent));
          _push(ssrRenderComponent(_component_UiCustomSelect, {
            modelValue: unref(form).gender,
            "onUpdate:modelValue": ($event) => unref(form).gender = $event,
            label: "Gender",
            placeholder: "Not specified",
            options: [
              { label: "Female", value: "female" },
              { label: "Male", value: "male" },
              { label: "Non-binary", value: "non-binary" }
            ]
          }, null, _parent));
          _push(`</div><textarea rows="3" class="input-field" placeholder="E.g., She recently started a new job and loves everything purple...">${ssrInterpolate(unref(form).additionalNotes)}</textarea></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-between mt-8">`);
        if (unref(currentStep) > 1) {
          _push(`<button class="btn-ghost !px-4"> \u2190 Back </button>`);
        } else {
          _push(`<div></div>`);
        }
        if (unref(currentStep) < totalSteps) {
          _push(`<button${ssrIncludeBooleanAttr(!unref(canProceed)) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50": !unref(canProceed) }, "btn-primary !px-8"])}"> Next \u2192 </button>`);
        } else {
          _push(`<button${ssrIncludeBooleanAttr(unref(generating)) ? " disabled" : ""} class="btn-accent !px-8 flex items-center gap-2">`);
          if (unref(generating)) {
            _push(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 animate-spin" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(unref(generating) ? "Curating..." : "\u2728 Get Recommendations")}</button>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showResults)) {
        _push(`<div class="animate-fade-in"><div class="text-center mb-8"><div class="text-4xl mb-3">\u{1F381}</div><h2 class="text-2xl font-heading font-bold text-slate-900 mb-2">Your Curated Picks</h2><p class="text-slate-500">Based on your recipient&#39;s profile, here are our top recommendations</p></div><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(recommendations), (rec, i) => {
          var _a;
          _push(`<div class="card p-6 flex gap-4 items-start"><div class="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0"><img${ssrRenderAttr("src", ((_a = rec.gift.images) == null ? void 0 : _a[0]) || "/placeholder-gift.jpg")}${ssrRenderAttr("alt", rec.gift.name)} class="w-full h-full object-cover"></div><div class="flex-1"><div class="flex items-start justify-between"><div><h3 class="font-heading font-bold text-slate-900">${ssrInterpolate(rec.gift.name)}</h3><p class="text-sm text-primary-600 font-medium">${ssrInterpolate(unref(formatNaira)(rec.gift.discountPrice || rec.gift.price))}</p></div><div class="flex items-center gap-1 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-sm font-bold">${ssrInterpolate(rec.score)}% match </div></div><p class="text-sm text-slate-500 mt-2 italic">&quot;${ssrInterpolate(rec.reasoning)}&quot;</p><div class="flex gap-2 mt-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/gifts/${rec.gift.slug}`,
            class: "btn-ghost !py-1.5 !px-3 text-sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`View Details`);
              } else {
                return [
                  createTextVNode("View Details")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button class="btn-primary !py-1.5 !px-3 text-sm">Add to Cart</button></div></div></div>`);
        });
        _push(`<!--]--></div><div class="flex justify-center gap-4 mt-8"><button class="btn-secondary">Start Over</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/cart",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Go to Cart`);
            } else {
              return [
                createTextVNode("Go to Cart")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/curate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=curate-CXATpUDy.mjs.map
