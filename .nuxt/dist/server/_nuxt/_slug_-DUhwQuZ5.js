import { _ as __nuxt_component_0 } from "./nuxt-link-BozghAJx.js";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { Star, ShoppingCart } from "lucide-vue-next";
import { a as useRoute } from "../server.mjs";
import { f as formatNaira } from "./formatCurrency-DDPrfxv6.js";
import "/Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs";
import { u as useCartStore } from "./cart.store-gmQlCi-2.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useCartStore();
    const gift = ref(null);
    const loading = ref(true);
    const error = ref(false);
    const activeImage = ref("");
    const quantity = ref(1);
    const vendorName = computed(() => {
      if (!gift.value || !gift.value.vendorId) return "Vendor";
      return typeof gift.value.vendorId === "object" ? gift.value.vendorId.businessName : "Vendor";
    });
    const vendorLogo = computed(() => {
      if (!gift.value || !gift.value.vendorId) return "";
      return typeof gift.value.vendorId === "object" ? gift.value.vendorId.logo : "";
    });
    const vendorSlug = computed(() => {
      if (!gift.value || !gift.value.vendorId) return "";
      return typeof gift.value.vendorId === "object" ? gift.value.vendorId.slug : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-12" }, _attrs))}><div class="section-container">`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div class="skeleton h-[500px] w-full rounded-2xl"></div><div class="space-y-6 pt-4"><div class="skeleton-text w-1/4 h-6"></div><div class="skeleton-text w-3/4 h-10"></div><div class="skeleton-text w-1/3 h-8"></div><div class="skeleton-text w-full h-32"></div></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-20"><div class="text-6xl mb-4">😕</div><h1 class="text-2xl font-heading font-bold text-slate-900 mb-2">Gift Not Found</h1><p class="text-slate-500 mb-6">The gift you&#39;re looking for doesn&#39;t exist or is no longer available.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/explore",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Browse All Gifts`);
            } else {
              return [
                createTextVNode("Browse All Gifts")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (unref(gift)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div class="space-y-4"><div class="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200"><img${ssrRenderAttr("src", unref(activeImage) || "/placeholder-gift.jpg")}${ssrRenderAttr("alt", unref(gift).name)} class="w-full h-full object-cover"></div>`);
        if (unref(gift).images?.length > 1) {
          _push(`<div class="grid grid-cols-4 gap-4"><!--[-->`);
          ssrRenderList(unref(gift).images, (img, idx) => {
            _push(`<button class="${ssrRenderClass([
              "aspect-square rounded-xl overflow-hidden border-2 transition-all",
              unref(activeImage) === img ? "border-primary-800" : "border-transparent hover:border-slate-300"
            ])}"><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `${unref(gift).name} ${idx + 1}`)} class="w-full h-full object-cover"></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="pt-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/vendors/${unref(vendorSlug)}`,
          class: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors mb-6 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden"${_scopeId}>`);
              if (unref(vendorLogo)) {
                _push2(`<img${ssrRenderAttr("src", unref(vendorLogo))} class="w-full h-full object-cover"${_scopeId}>`);
              } else {
                _push2(`<span class="text-xs font-bold text-slate-500"${_scopeId}>${ssrInterpolate(unref(vendorName).charAt(0))}</span>`);
              }
              _push2(`</div><span class="text-sm font-medium text-slate-700 group-hover:text-slate-900"${_scopeId}>${ssrInterpolate(unref(vendorName))}</span>`);
            } else {
              return [
                createVNode("div", { class: "w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden" }, [
                  unref(vendorLogo) ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: unref(vendorLogo),
                    class: "w-full h-full object-cover"
                  }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-xs font-bold text-slate-500"
                  }, toDisplayString(unref(vendorName).charAt(0)), 1))
                ]),
                createVNode("span", { class: "text-sm font-medium text-slate-700 group-hover:text-slate-900" }, toDisplayString(unref(vendorName)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">${ssrInterpolate(unref(gift).name)}</h1><div class="flex items-end justify-between mb-8 pb-6 border-b border-slate-200"><div class="flex items-center gap-3"><span class="text-3xl font-heading font-bold text-primary-800">${ssrInterpolate(unref(formatNaira)(unref(gift).discountPrice || unref(gift).price))}</span>`);
        if (unref(gift).discountPrice) {
          _push(`<span class="text-xl text-slate-400 line-through font-medium">${ssrInterpolate(unref(formatNaira)(unref(gift).price))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-1">`);
        _push(ssrRenderComponent(unref(Star), { class: "w-5 h-5 text-accent-500 fill-current" }, null, _parent));
        _push(`<span class="font-medium text-slate-700">${ssrInterpolate(unref(gift).rating?.toFixed(1) || "0.0")}</span><span class="text-slate-500">(${ssrInterpolate(unref(gift).reviewCount)} reviews)</span></div></div><div class="flex gap-4 mb-10"><div class="flex items-center border-2 border-slate-200 rounded-xl"><button class="px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors">−</button><span class="px-4 py-3 font-semibold w-12 text-center">${ssrInterpolate(unref(quantity))}</span><button class="px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors">+</button></div><button class="btn-primary flex-1 text-lg flex items-center justify-center gap-2">`);
        _push(ssrRenderComponent(unref(ShoppingCart), { class: "w-5 h-5" }, null, _parent));
        _push(` Add to Cart </button></div><div class="space-y-6"><div><h3 class="font-heading font-semibold text-slate-900 mb-3 text-lg">About this gift</h3><p class="text-slate-600 leading-relaxed whitespace-pre-wrap">${ssrInterpolate(unref(gift).description)}</p></div><div class="grid grid-cols-2 gap-y-4 gap-x-8 pt-6 border-t border-slate-200"><div><span class="block text-sm text-slate-500 mb-1">Occasions</span><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(unref(gift).occasions, (occ) => {
          _push(`<span class="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full font-medium capitalize">${ssrInterpolate(occ.replace("-", " "))}</span>`);
        });
        _push(`<!--]--></div></div><div><span class="block text-sm text-slate-500 mb-1">Perfect For</span><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(unref(gift).recipientTypes, (rec) => {
          _push(`<span class="px-2 py-0.5 bg-accent-50 text-accent-700 text-xs rounded-full font-medium capitalize">${ssrInterpolate(rec)}</span>`);
        });
        _push(`<!--]--></div></div></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gifts/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DUhwQuZ5.js.map
