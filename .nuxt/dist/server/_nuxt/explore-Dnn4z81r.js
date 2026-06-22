import { _ as __nuxt_component_0 } from "./nuxt-link-BozghAJx.js";
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { Star } from "lucide-vue-next";
import "../server.mjs";
import { f as formatNaira } from "./formatCurrency-DDPrfxv6.js";
import "/Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-CVdA3kdN.js";
import "/Users/marquis/curatewithng/website/node_modules/ufo/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/website/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/website/node_modules/klona/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/destr/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ohash/dist/index.mjs";
import "axios";
import "vue-toastification";
import "/Users/marquis/curatewithng/website/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "explore",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Explore Gifts — CurateWithNG" });
    const gifts = ref([]);
    const loading = ref(true);
    const totalResults = ref(0);
    const totalPages = ref(1);
    const sortBy = ref("newest");
    const filters = reactive({
      page: 1,
      search: "",
      category: "",
      occasion: "",
      recipientType: "",
      budgetTier: ""
    });
    const categoryOptions = ["hampers", "fashion", "experiences", "wellness", "tech", "home", "jewellery", "corporate"];
    const occasionOptions = ["birthday", "wedding", "anniversary", "christmas", "corporate", "owambe", "valentines", "mothers-day"];
    const recipientOptions = ["her", "him", "couple", "child", "colleague", "boss"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="section-container"><div class="mb-8"><h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">Explore Gifts</h1><p class="text-slate-500">Discover curated gifts from Nigeria&#39;s finest vendors</p></div><div class="flex gap-8"><aside class="hidden lg:block w-64 flex-shrink-0"><div class="sticky top-24 space-y-6"><div><label class="text-sm font-semibold text-slate-700 mb-2 block">Search</label><input${ssrRenderAttr("value", unref(filters).search)} type="text" placeholder="Search gifts..." class="input-field !py-2.5 text-sm"></div><div><label class="text-sm font-semibold text-slate-700 mb-2 block">Category</label><select class="input-field !py-2.5 text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(filters).category) ? ssrLooseContain(unref(filters).category, "") : ssrLooseEqual(unref(filters).category, "")) ? " selected" : ""}>All Categories</option><!--[-->`);
      ssrRenderList(categoryOptions, (cat) => {
        _push(`<option${ssrRenderAttr("value", cat)}${ssrIncludeBooleanAttr(Array.isArray(unref(filters).category) ? ssrLooseContain(unref(filters).category, cat) : ssrLooseEqual(unref(filters).category, cat)) ? " selected" : ""}>${ssrInterpolate(cat)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="text-sm font-semibold text-slate-700 mb-2 block">Occasion</label><select class="input-field !py-2.5 text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(filters).occasion) ? ssrLooseContain(unref(filters).occasion, "") : ssrLooseEqual(unref(filters).occasion, "")) ? " selected" : ""}>All Occasions</option><!--[-->`);
      ssrRenderList(occasionOptions, (occ) => {
        _push(`<option${ssrRenderAttr("value", occ)}${ssrIncludeBooleanAttr(Array.isArray(unref(filters).occasion) ? ssrLooseContain(unref(filters).occasion, occ) : ssrLooseEqual(unref(filters).occasion, occ)) ? " selected" : ""}>${ssrInterpolate(occ)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="text-sm font-semibold text-slate-700 mb-2 block">Gift For</label><select class="input-field !py-2.5 text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(filters).recipientType) ? ssrLooseContain(unref(filters).recipientType, "") : ssrLooseEqual(unref(filters).recipientType, "")) ? " selected" : ""}>Anyone</option><!--[-->`);
      ssrRenderList(recipientOptions, (r) => {
        _push(`<option${ssrRenderAttr("value", r)}${ssrIncludeBooleanAttr(Array.isArray(unref(filters).recipientType) ? ssrLooseContain(unref(filters).recipientType, r) : ssrLooseEqual(unref(filters).recipientType, r)) ? " selected" : ""}>${ssrInterpolate(r)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="text-sm font-semibold text-slate-700 mb-2 block">Budget Tier</label><select class="input-field !py-2.5 text-sm"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(filters).budgetTier) ? ssrLooseContain(unref(filters).budgetTier, "") : ssrLooseEqual(unref(filters).budgetTier, "")) ? " selected" : ""}>All Budgets</option><option value="BUDGET"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).budgetTier) ? ssrLooseContain(unref(filters).budgetTier, "BUDGET") : ssrLooseEqual(unref(filters).budgetTier, "BUDGET")) ? " selected" : ""}>Budget (under ₦20k)</option><option value="MID"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).budgetTier) ? ssrLooseContain(unref(filters).budgetTier, "MID") : ssrLooseEqual(unref(filters).budgetTier, "MID")) ? " selected" : ""}>Mid-range (₦20k–₦50k)</option><option value="PREMIUM"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).budgetTier) ? ssrLooseContain(unref(filters).budgetTier, "PREMIUM") : ssrLooseEqual(unref(filters).budgetTier, "PREMIUM")) ? " selected" : ""}>Premium (₦50k–₦150k)</option><option value="LUXURY"${ssrIncludeBooleanAttr(Array.isArray(unref(filters).budgetTier) ? ssrLooseContain(unref(filters).budgetTier, "LUXURY") : ssrLooseEqual(unref(filters).budgetTier, "LUXURY")) ? " selected" : ""}>Luxury (₦150k+)</option></select></div><button class="text-sm text-primary-800 font-medium hover:underline">Reset Filters</button></div></aside><div class="flex-1"><div class="flex items-center justify-between mb-6"><p class="text-sm text-slate-500">${ssrInterpolate(unref(totalResults))} gifts found</p><select class="input-field !w-auto !py-2 text-sm"><option value="newest"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "newest") : ssrLooseEqual(unref(sortBy), "newest")) ? " selected" : ""}>Newest</option><option value="price-asc"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price-asc") : ssrLooseEqual(unref(sortBy), "price-asc")) ? " selected" : ""}>Price: Low to High</option><option value="price-desc"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "price-desc") : ssrLooseEqual(unref(sortBy), "price-desc")) ? " selected" : ""}>Price: High to Low</option><option value="popular"${ssrIncludeBooleanAttr(Array.isArray(unref(sortBy)) ? ssrLooseContain(unref(sortBy), "popular") : ssrLooseEqual(unref(sortBy), "popular")) ? " selected" : ""}>Most Popular</option></select></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="card p-4"><div class="skeleton h-48 w-full rounded-xl mb-4"></div><div class="skeleton-text mb-2 w-3/4"></div><div class="skeleton-text w-1/2"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(gifts).length > 0) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(gifts), (gift) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: gift._id,
            to: `/gifts/${gift.slug}`,
            class: "card-interactive overflow-hidden group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="aspect-square bg-slate-100 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", gift.images?.[0] || "/placeholder-gift.jpg")}${ssrRenderAttr("alt", gift.name)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${_scopeId}></div><div class="p-4"${_scopeId}><div class="text-xs text-primary-600 font-medium mb-1"${_scopeId}>${ssrInterpolate(typeof gift.vendorId === "object" ? gift.vendorId.businessName : "")}</div><h3 class="font-heading font-semibold text-slate-900 mb-2 line-clamp-2"${_scopeId}>${ssrInterpolate(gift.name)}</h3><div class="flex items-center gap-2"${_scopeId}><span class="price text-lg"${_scopeId}>${ssrInterpolate(unref(formatNaira)(gift.discountPrice || gift.price))}</span>`);
                if (gift.discountPrice) {
                  _push2(`<span class="price-original"${_scopeId}>${ssrInterpolate(unref(formatNaira)(gift.price))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex items-center gap-1 mt-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Star), { class: "w-4 h-4 text-accent-500 fill-current" }, null, _parent2, _scopeId));
                _push2(`<span class="text-xs text-slate-500"${_scopeId}>${ssrInterpolate(gift.rating.toFixed(1))} (${ssrInterpolate(gift.reviewCount)})</span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "aspect-square bg-slate-100 overflow-hidden" }, [
                    createVNode("img", {
                      src: gift.images?.[0] || "/placeholder-gift.jpg",
                      alt: gift.name,
                      class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "p-4" }, [
                    createVNode("div", { class: "text-xs text-primary-600 font-medium mb-1" }, toDisplayString(typeof gift.vendorId === "object" ? gift.vendorId.businessName : ""), 1),
                    createVNode("h3", { class: "font-heading font-semibold text-slate-900 mb-2 line-clamp-2" }, toDisplayString(gift.name), 1),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "price text-lg" }, toDisplayString(unref(formatNaira)(gift.discountPrice || gift.price)), 1),
                      gift.discountPrice ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "price-original"
                      }, toDisplayString(unref(formatNaira)(gift.price)), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center gap-1 mt-2" }, [
                      createVNode(unref(Star), { class: "w-4 h-4 text-accent-500 fill-current" }),
                      createVNode("span", { class: "text-xs text-slate-500" }, toDisplayString(gift.rating.toFixed(1)) + " (" + toDisplayString(gift.reviewCount) + ")", 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-20"><div class="text-6xl mb-4">🔍</div><h3 class="text-xl font-heading font-bold text-slate-900 mb-2">No gifts found</h3><p class="text-slate-500 mb-6">Try adjusting your filters or search terms</p><button class="btn-primary">Reset Filters</button></div>`);
      }
      if (unref(totalPages) > 1) {
        _push(`<div class="flex justify-center gap-2 mt-8"><!--[-->`);
        ssrRenderList(unref(totalPages), (p) => {
          _push(`<button class="${ssrRenderClass([
            "w-10 h-10 rounded-xl font-medium text-sm transition-all",
            p === unref(filters).page ? "bg-primary-800 text-white" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
          ])}">${ssrInterpolate(p)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/explore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=explore-Dnn4z81r.js.map
