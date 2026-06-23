import { _ as _sfc_main$1 } from "./CustomSelect-7IRZxl6H.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BBDYCnUp.js";
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Store, Star } from "lucide-vue-next";
import { G as GATEWAY_ENDPOINT, u as useHead } from "../server.mjs";
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
const vendors_api = {
  getVendors: (params) => {
    return GATEWAY_ENDPOINT.get("/vendors", { params });
  },
  getVendorBySlug: (slug) => {
    return GATEWAY_ENDPOINT.get(`/vendors/${slug}`);
  }
};
const useVendors = () => {
  const getVendors = async (params) => {
    const response = await vendors_api.getVendors(params);
    return response.data;
  };
  const getVendorBySlug = async (slug) => {
    const response = await vendors_api.getVendorBySlug(slug);
    return response.data;
  };
  return { getVendors, getVendorBySlug };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Vendors — CurateWithNG" });
    const { getVendors } = useVendors();
    const vendors = ref([]);
    const loading = ref(true);
    const search = ref("");
    const category = ref("");
    const categories = ["hampers", "fashion", "experiences", "wellness", "tech", "home", "jewellery", "corporate"];
    const fetchVendors = async () => {
      loading.value = true;
      try {
        const params = new URLSearchParams();
        if (search.value) params.set("search", search.value);
        if (category.value) params.set("category", category.value);
        const result = await getVendors(Object.fromEntries(params.entries()));
        const payload = result.data || result;
        vendors.value = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
      } catch {
        vendors.value = [];
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCustomSelect = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="section-container"><h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">Vendor Directory</h1><p class="text-slate-500 mb-8">Discover Nigeria&#39;s finest gift vendors and artisans</p><div class="flex flex-col sm:flex-row gap-4 mb-8"><input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Search vendors..." class="input-field max-w-sm">`);
      _push(ssrRenderComponent(_component_UiCustomSelect, {
        modelValue: unref(category),
        "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : null,
        onChange: fetchVendors,
        options: [{ label: "All Categories", value: "" }, ...categories.map((c) => ({ label: c.charAt(0).toUpperCase() + c.slice(1), value: c }))],
        placeholder: "All Categories",
        class: "w-full max-w-xs"
      }, null, _parent));
      _push(`</div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="card p-6"><div class="skeleton h-16 w-16 rounded-full mb-4"></div><div class="skeleton-text mb-2"></div><div class="skeleton-text w-2/3"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(vendors).length === 0) {
        _push(`<div class="flex flex-col items-center justify-center py-24 text-center"><div class="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-6">`);
        _push(ssrRenderComponent(unref(Store), { class: "w-12 h-12 text-primary-300" }, null, _parent));
        _push(`</div><h3 class="text-xl font-heading font-bold text-slate-900 mb-2">No vendors found</h3><p class="text-slate-500 max-w-md mb-8">We couldn&#39;t find any amazing vendors matching your search criteria. Try adjusting your filters!</p><button class="btn-primary">Clear Filters</button></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(vendors), (vendor) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: vendor._id,
            to: `/vendors/${vendor.slug}`,
            class: "card-interactive p-6"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center gap-4 mb-4"${_scopeId}><div class="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden"${_scopeId}>`);
                if (vendor.logo) {
                  _push2(`<img${ssrRenderAttr("src", vendor.logo)} class="w-full h-full object-cover"${_scopeId}>`);
                } else {
                  _push2(`<span class="text-primary-800 font-bold text-lg"${_scopeId}>${ssrInterpolate(vendor.businessName.charAt(0))}</span>`);
                }
                _push2(`</div><div${_scopeId}><h3 class="font-heading font-bold text-slate-900"${_scopeId}>${ssrInterpolate(vendor.businessName)}</h3><p class="text-sm text-slate-500"${_scopeId}>${ssrInterpolate(vendor.location?.city)}, ${ssrInterpolate(vendor.location?.state)}</p></div></div><p class="text-sm text-slate-600 line-clamp-2 mb-4"${_scopeId}>${ssrInterpolate(vendor.description || "Premium gift vendor on CurateWithNG")}</p><div class="flex items-center justify-between"${_scopeId}><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                ssrRenderList(vendor.categories.slice(0, 3), (cat) => {
                  _push2(`<span class="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full font-medium"${_scopeId}>${ssrInterpolate(cat)}</span>`);
                });
                _push2(`<!--]--></div><div class="flex items-center gap-1 text-sm text-slate-500"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Star), { class: "w-4 h-4 text-accent-500 fill-current" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(vendor.rating?.toFixed(1) || "0.0")}</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center gap-4 mb-4" }, [
                    createVNode("div", { class: "w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden" }, [
                      vendor.logo ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: vendor.logo,
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-primary-800 font-bold text-lg"
                      }, toDisplayString(vendor.businessName.charAt(0)), 1))
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-heading font-bold text-slate-900" }, toDisplayString(vendor.businessName), 1),
                      createVNode("p", { class: "text-sm text-slate-500" }, toDisplayString(vendor.location?.city) + ", " + toDisplayString(vendor.location?.state), 1)
                    ])
                  ]),
                  createVNode("p", { class: "text-sm text-slate-600 line-clamp-2 mb-4" }, toDisplayString(vendor.description || "Premium gift vendor on CurateWithNG"), 1),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(vendor.categories.slice(0, 3), (cat) => {
                        return openBlock(), createBlock("span", {
                          key: cat,
                          class: "px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full font-medium"
                        }, toDisplayString(cat), 1);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex items-center gap-1 text-sm text-slate-500" }, [
                      createVNode(unref(Star), { class: "w-4 h-4 text-accent-500 fill-current" }),
                      createTextVNode(" " + toDisplayString(vendor.rating?.toFixed(1) || "0.0"), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vendors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C7sP94_3.js.map
