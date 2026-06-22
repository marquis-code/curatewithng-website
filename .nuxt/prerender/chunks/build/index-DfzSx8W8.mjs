import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, createTextVNode, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { Star } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
    useHead({ title: "Vendors \u2014 CurateWithNG" });
    const vendors = ref([]);
    const loading = ref(true);
    const search = ref("");
    const category = ref("");
    const categories = ["hampers", "fashion", "experiences", "wellness", "tech", "home", "jewellery", "corporate"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="section-container"><h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">Vendor Directory</h1><p class="text-slate-500 mb-8">Discover Nigeria&#39;s finest gift vendors and artisans</p><div class="flex flex-col sm:flex-row gap-4 mb-8"><input${ssrRenderAttr("value", unref(search))} type="text" placeholder="Search vendors..." class="input-field max-w-sm"><select class="input-field max-w-xs"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(category)) ? ssrLooseContain(unref(category), "") : ssrLooseEqual(unref(category), "")) ? " selected" : ""}>All Categories</option><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<option${ssrRenderAttr("value", cat)}${ssrIncludeBooleanAttr(Array.isArray(unref(category)) ? ssrLooseContain(unref(category), cat) : ssrLooseEqual(unref(category), cat)) ? " selected" : ""}>${ssrInterpolate(cat)}</option>`);
      });
      _push(`<!--]--></select></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="card p-6"><div class="skeleton h-16 w-16 rounded-full mb-4"></div><div class="skeleton-text mb-2"></div><div class="skeleton-text w-2/3"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(vendors), (vendor) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: vendor._id,
            to: `/vendors/${vendor.slug}`,
            class: "card-interactive p-6"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b, _c, _d, _e, _f;
              if (_push2) {
                _push2(`<div class="flex items-center gap-4 mb-4"${_scopeId}><div class="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden"${_scopeId}>`);
                if (vendor.logo) {
                  _push2(`<img${ssrRenderAttr("src", vendor.logo)} class="w-full h-full object-cover"${_scopeId}>`);
                } else {
                  _push2(`<span class="text-primary-800 font-bold text-lg"${_scopeId}>${ssrInterpolate(vendor.businessName.charAt(0))}</span>`);
                }
                _push2(`</div><div${_scopeId}><h3 class="font-heading font-bold text-slate-900"${_scopeId}>${ssrInterpolate(vendor.businessName)}</h3><p class="text-sm text-slate-500"${_scopeId}>${ssrInterpolate((_a = vendor.location) == null ? void 0 : _a.city)}, ${ssrInterpolate((_b = vendor.location) == null ? void 0 : _b.state)}</p></div></div><p class="text-sm text-slate-600 line-clamp-2 mb-4"${_scopeId}>${ssrInterpolate(vendor.description || "Premium gift vendor on CurateWithNG")}</p><div class="flex items-center justify-between"${_scopeId}><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                ssrRenderList(vendor.categories.slice(0, 3), (cat) => {
                  _push2(`<span class="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full font-medium"${_scopeId}>${ssrInterpolate(cat)}</span>`);
                });
                _push2(`<!--]--></div><div class="flex items-center gap-1 text-sm text-slate-500"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Star), { class: "w-4 h-4 text-accent-500 fill-current" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(((_c = vendor.rating) == null ? void 0 : _c.toFixed(1)) || "0.0")}</div></div>`);
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
                      createVNode("p", { class: "text-sm text-slate-500" }, toDisplayString((_d = vendor.location) == null ? void 0 : _d.city) + ", " + toDisplayString((_e = vendor.location) == null ? void 0 : _e.state), 1)
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
                      createTextVNode(" " + toDisplayString(((_f = vendor.rating) == null ? void 0 : _f.toFixed(1)) || "0.0"), 1)
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

export { _sfc_main as default };
//# sourceMappingURL=index-DfzSx8W8.mjs.map
