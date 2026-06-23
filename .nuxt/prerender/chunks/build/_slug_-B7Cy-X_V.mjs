import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { defineComponent, ref, computed, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { MapPin, Star, Package } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { c as useRoute, u as useHead } from './server.mjs';
import { f as formatNaira } from './formatCurrency-DDPrfxv6.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.slug;
    const vendor = ref(null);
    const gifts = ref([]);
    const loadingGifts = ref(true);
    useHead({
      title: computed(() => vendor.value ? `${vendor.value.businessName} \u2014 CurateWithNG` : "Vendor \u2014 CurateWithNG")
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(vendor)) {
        _push(`<div class="min-h-screen bg-white pb-20"><div class="h-64 md:h-80 w-full bg-slate-100 relative">`);
        if (unref(vendor).coverImage) {
          _push(`<img${ssrRenderAttr("src", unref(vendor).coverImage)} class="w-full h-full object-cover">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute inset-0 bg-black/10"></div></div><div class="section-container relative -mt-20"><div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start relative z-10"><div class="w-32 h-32 rounded-2xl bg-white p-2 border border-slate-100 shadow-sm flex-shrink-0 -mt-16 overflow-hidden relative bg-clip-padding">`);
        if (unref(vendor).logo) {
          _push(`<img${ssrRenderAttr("src", unref(vendor).logo)} class="w-full h-full object-cover rounded-xl">`);
        } else {
          _push(`<div class="w-full h-full bg-primary-50 rounded-xl flex items-center justify-center text-primary-800 text-3xl font-bold">${ssrInterpolate(unref(vendor).businessName.charAt(0))}</div>`);
        }
        _push(`</div><div class="flex-1 w-full"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4"><div><h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">${ssrInterpolate(unref(vendor).businessName)}</h1><div class="flex items-center gap-2 text-sm text-slate-500">`);
        _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4" }, null, _parent));
        _push(` ${ssrInterpolate((_a = unref(vendor).location) == null ? void 0 : _a.city)}, ${ssrInterpolate((_b = unref(vendor).location) == null ? void 0 : _b.state)}</div></div><div class="flex items-center gap-1.5 bg-primary-50 text-primary-800 px-3 py-1.5 rounded-full text-sm font-semibold">`);
        _push(ssrRenderComponent(unref(Star), { class: "w-4 h-4 fill-current" }, null, _parent));
        _push(` ${ssrInterpolate(((_c = unref(vendor).rating) == null ? void 0 : _c.toFixed(1)) || "0.0")} (${ssrInterpolate(unref(vendor).reviewCount)} reviews) </div></div><p class="text-slate-600 mb-6 max-w-3xl leading-relaxed">${ssrInterpolate(unref(vendor).description || "Premium gift vendor on CurateWithNG.")}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(vendor).categories, (cat) => {
          _push(`<span class="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-sm rounded-full font-medium">${ssrInterpolate(cat)}</span>`);
        });
        _push(`<!--]--></div></div></div></div><div class="section-container mt-16"><h2 class="text-2xl font-heading font-bold text-slate-900 mb-8">Gifts by ${ssrInterpolate(unref(vendor).businessName)}</h2>`);
        if (unref(loadingGifts)) {
          _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
          ssrRenderList(4, (i) => {
            _push(`<div class="card p-4"><div class="skeleton h-48 w-full rounded-xl mb-4"></div><div class="skeleton-text mb-2 w-3/4"></div><div class="skeleton-text w-1/2"></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else if (unref(gifts).length === 0) {
          _push(`<div class="flex flex-col items-center justify-center py-20 text-center border border-slate-100 rounded-3xl"><div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">`);
          _push(ssrRenderComponent(unref(Package), { class: "w-10 h-10 text-slate-300" }, null, _parent));
          _push(`</div><h3 class="text-xl font-heading font-bold text-slate-900 mb-2">No gifts yet</h3><p class="text-slate-500 max-w-sm">This vendor hasn&#39;t uploaded any gifts to the platform yet.</p></div>`);
        } else {
          _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
          ssrRenderList(unref(gifts), (gift) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: gift._id,
              to: `/gifts/${gift.slug}`,
              class: "card-interactive overflow-hidden group"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<div class="aspect-square bg-slate-50 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", ((_a2 = gift.images) == null ? void 0 : _a2[0]) || "/placeholder-gift.jpg")}${ssrRenderAttr("alt", gift.name)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${_scopeId}></div><div class="p-4"${_scopeId}><h3 class="font-heading font-semibold text-slate-900 mb-2 line-clamp-2"${_scopeId}>${ssrInterpolate(gift.name)}</h3><div class="flex items-center gap-2"${_scopeId}><span class="price text-lg"${_scopeId}>${ssrInterpolate(unref(formatNaira)(gift.discountPrice || gift.price))}</span>`);
                  if (gift.discountPrice) {
                    _push2(`<span class="price-original"${_scopeId}>${ssrInterpolate(unref(formatNaira)(gift.price))}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="flex items-center gap-1 mt-2 text-slate-500 text-xs"${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(Star), { class: "w-3 h-3 text-accent-500 fill-current" }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(gift.rating.toFixed(1))} (${ssrInterpolate(gift.reviewCount)}) </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "aspect-square bg-slate-50 overflow-hidden" }, [
                      createVNode("img", {
                        src: ((_b2 = gift.images) == null ? void 0 : _b2[0]) || "/placeholder-gift.jpg",
                        alt: gift.name,
                        class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("div", { class: "p-4" }, [
                      createVNode("h3", { class: "font-heading font-semibold text-slate-900 mb-2 line-clamp-2" }, toDisplayString(gift.name), 1),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "price text-lg" }, toDisplayString(unref(formatNaira)(gift.discountPrice || gift.price)), 1),
                        gift.discountPrice ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "price-original"
                        }, toDisplayString(unref(formatNaira)(gift.price)), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center gap-1 mt-2 text-slate-500 text-xs" }, [
                        createVNode(unref(Star), { class: "w-3 h-3 text-accent-500 fill-current" }),
                        createTextVNode(" " + toDisplayString(gift.rating.toFixed(1)) + " (" + toDisplayString(gift.reviewCount) + ") ", 1)
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
      } else {
        _push(`<div class="min-h-screen flex items-center justify-center"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-800 border-t-transparent"></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vendors/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-B7Cy-X_V.mjs.map
