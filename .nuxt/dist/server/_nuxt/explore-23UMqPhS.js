import { _ as _sfc_main$1 } from "./CustomInput-BV4K4PXs.js";
import { _ as _sfc_main$2 } from "./CustomSelect-7IRZxl6H.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BBDYCnUp.js";
import { defineComponent, ref, reactive, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { Star, PackageSearch } from "lucide-vue-next";
import { G as GATEWAY_ENDPOINT, a as useSeoMeta } from "../server.mjs";
import { f as formatNaira } from "./formatCurrency-DDPrfxv6.js";
import "/Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ufo/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/website/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/website/node_modules/klona/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/destr/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ohash/dist/index.mjs";
import "axios";
import "vue-toastification";
const gifts_api = {
  getGifts: (params) => {
    return GATEWAY_ENDPOINT.get("/gifts", { params });
  },
  getGiftBySlug: (slug) => {
    return GATEWAY_ENDPOINT.get(`/gifts/${slug}`);
  }
};
const useGifts = () => {
  const getGifts = async (params) => {
    const response = await gifts_api.getGifts(params);
    return response.data;
  };
  const getGiftBySlug = async (slug) => {
    const response = await gifts_api.getGiftBySlug(slug);
    return response.data;
  };
  return { getGifts, getGiftBySlug };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "explore",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Explore Gifts — CurateWithNG",
      description: "Browse the best curated gifts in Nigeria for any occasion, budget, or recipient. Find the perfect present today.",
      ogTitle: "Explore Gifts — CurateWithNG",
      ogDescription: "Browse the best curated gifts in Nigeria for any occasion, budget, or recipient."
    });
    const { getGifts } = useGifts();
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
    let searchTimeout;
    const debouncedFetch = () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => fetchGifts(), 400);
    };
    const fetchGifts = async () => {
      loading.value = true;
      try {
        const params = new URLSearchParams();
        params.set("page", String(filters.page));
        params.set("limit", "12");
        if (filters.search) params.set("search", filters.search);
        if (filters.category) params.set("category", filters.category);
        if (filters.occasion) params.set("occasion", filters.occasion);
        if (filters.recipientType) params.set("recipientType", filters.recipientType);
        if (filters.budgetTier) params.set("budgetTier", filters.budgetTier);
        let sort = "createdAt";
        let order = "desc";
        if (sortBy.value === "price-asc") {
          sort = "price";
          order = "asc";
        } else if (sortBy.value === "price-desc") {
          sort = "price";
          order = "desc";
        } else if (sortBy.value === "popular") {
          sort = "popular";
        }
        params.set("sort", sort);
        params.set("order", order);
        const result = await getGifts(Object.fromEntries(params.entries()));
        const payload = result.data || result;
        gifts.value = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
        totalResults.value = payload.meta?.total || gifts.value.length;
        totalPages.value = payload.meta?.totalPages || 1;
      } catch (e) {
        console.error("Failed to fetch gifts:", e);
        gifts.value = [];
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCustomInput = _sfc_main$1;
      const _component_UiCustomSelect = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="section-container"><div class="mb-8"><h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">Explore Gifts</h1><p class="text-slate-500">Discover curated gifts from Nigeria&#39;s finest vendors</p></div><div class="flex gap-8"><aside class="hidden lg:block w-64 flex-shrink-0"><div class="sticky top-24 space-y-6">`);
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(filters).search,
        "onUpdate:modelValue": ($event) => unref(filters).search = $event,
        onInput: debouncedFetch,
        placeholder: "Search gifts...",
        label: "Search"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiCustomSelect, {
        modelValue: unref(filters).category,
        "onUpdate:modelValue": ($event) => unref(filters).category = $event,
        options: categoryOptions,
        onChange: fetchGifts,
        placeholder: "All Categories",
        label: "Category"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiCustomSelect, {
        modelValue: unref(filters).occasion,
        "onUpdate:modelValue": ($event) => unref(filters).occasion = $event,
        options: occasionOptions,
        onChange: fetchGifts,
        placeholder: "All Occasions",
        label: "Occasion"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiCustomSelect, {
        modelValue: unref(filters).recipientType,
        "onUpdate:modelValue": ($event) => unref(filters).recipientType = $event,
        options: recipientOptions,
        onChange: fetchGifts,
        placeholder: "Anyone",
        label: "Gift For"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiCustomSelect, {
        modelValue: unref(filters).budgetTier,
        "onUpdate:modelValue": ($event) => unref(filters).budgetTier = $event,
        options: [
          { label: "Budget (under ₦20k)", value: "BUDGET" },
          { label: "Mid-range (₦20k–₦50k)", value: "MID" },
          { label: "Premium (₦50k–₦150k)", value: "PREMIUM" },
          { label: "Luxury (₦150k+)", value: "LUXURY" }
        ],
        onChange: fetchGifts,
        placeholder: "All Budgets",
        label: "Budget Tier"
      }, null, _parent));
      _push(`<button class="text-sm text-primary-800 font-medium hover:underline mt-2">Reset Filters</button></div></aside><div class="flex-1"><div class="flex items-center justify-between mb-6"><p class="text-sm text-slate-500">${ssrInterpolate(unref(totalResults))} gifts found</p>`);
      _push(ssrRenderComponent(_component_UiCustomSelect, {
        modelValue: unref(sortBy),
        "onUpdate:modelValue": ($event) => isRef(sortBy) ? sortBy.value = $event : null,
        options: [
          { label: "Newest", value: "newest" },
          { label: "Price: Low to High", value: "price-asc" },
          { label: "Price: High to Low", value: "price-desc" },
          { label: "Most Popular", value: "popular" }
        ],
        onChange: fetchGifts,
        placeholder: "Sort by",
        class: "w-48"
      }, null, _parent));
      _push(`</div>`);
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
        _push(`<div class="flex flex-col items-center justify-center py-24 text-center"><div class="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-6">`);
        _push(ssrRenderComponent(unref(PackageSearch), { class: "w-12 h-12 text-primary-300" }, null, _parent));
        _push(`</div><h3 class="text-xl font-heading font-bold text-slate-900 mb-2">No gifts found</h3><p class="text-slate-500 max-w-md mb-8">We couldn&#39;t find any perfect gifts matching your current filters. Try tweaking your search!</p><button class="btn-primary">Reset Filters</button></div>`);
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
//# sourceMappingURL=explore-23UMqPhS.js.map
