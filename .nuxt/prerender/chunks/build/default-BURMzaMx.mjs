import { _ as __nuxt_component_0 } from './nuxt-link-BozghAJx.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { ShoppingCart, X, Menu, Twitter, Instagram } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { b as useUser } from './server.mjs';
import { u as useCartStore } from './cart.store-gmQlCi-2.mjs';
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
import 'node:fs';
import 'node:url';
import 'file:///Users/marquis/curatewithng/website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ipx/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/axios/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { user, token } = useUser();
    const cartStore = useCartStore();
    const showDropdown = ref(false);
    const showMobile = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}><nav class="sticky top-0 z-50 glass border-b border-slate-200/50"><div class="section-container"><div class="flex items-center justify-between h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center"${_scopeId}><span class="text-white font-heading font-bold text-sm"${_scopeId}>C</span></div><span class="font-heading font-bold text-xl text-slate-900"${_scopeId}> Curate<span class="text-primary-800"${_scopeId}>WithNG</span></span>`);
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center" }, [
                createVNode("span", { class: "text-white font-heading font-bold text-sm" }, "C")
              ]),
              createVNode("span", { class: "font-heading font-bold text-xl text-slate-900" }, [
                createTextVNode(" Curate"),
                createVNode("span", { class: "text-primary-800" }, "WithNG")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/explore",
        class: "text-slate-600 hover:text-primary-800 font-medium transition-colors"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/curate",
        class: "text-slate-600 hover:text-primary-800 font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` AI Curator \u2728 `);
          } else {
            return [
              createTextVNode(" AI Curator \u2728 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/vendors",
        class: "text-slate-600 hover:text-primary-800 font-medium transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Vendors `);
          } else {
            return [
              createTextVNode(" Vendors ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "relative p-2 text-slate-600 hover:text-primary-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShoppingCart), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            if (unref(cartStore).totalItems > 0) {
              _push2(`<span class="absolute -top-1 -right-1 w-5 h-5 bg-accent-600 text-white text-xs rounded-full flex items-center justify-center font-bold"${_scopeId}>${ssrInterpolate(unref(cartStore).totalItems)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(ShoppingCart), { class: "w-6 h-6" }),
              unref(cartStore).totalItems > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute -top-1 -right-1 w-5 h-5 bg-accent-600 text-white text-xs rounded-full flex items-center justify-center font-bold"
              }, toDisplayString(unref(cartStore).totalItems), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!!unref(token)) {
        _push(`<div class="relative"><button class="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors"><div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center"><span class="text-primary-800 font-semibold text-sm">${ssrInterpolate((_b = (_a = unref(user)) == null ? void 0 : _a.firstName) == null ? void 0 : _b.charAt(0))}</span></div><span class="hidden sm:block text-sm font-medium text-slate-700">${ssrInterpolate((_c = unref(user)) == null ? void 0 : _c.firstName)}</span></button>`);
        if (unref(showDropdown)) {
          _push(`<div class="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-slate-100 py-2 animate-slide-down">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dashboard",
            class: "block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50",
            onClick: ($event) => showDropdown.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`My Account`);
              } else {
                return [
                  createTextVNode("My Account")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dashboard/orders",
            class: "block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50",
            onClick: ($event) => showDropdown.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`My Orders`);
              } else {
                return [
                  createTextVNode("My Orders")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<hr class="my-1 border-slate-100"><button class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Sign Out</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/login",
          class: "hidden sm:block text-slate-600 hover:text-primary-800 font-medium transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Sign In `);
            } else {
              return [
                createTextVNode(" Sign In ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/register",
          class: "btn-primary text-sm !py-2 !px-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Get Started `);
            } else {
              return [
                createTextVNode(" Get Started ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`<button class="md:hidden p-2 text-slate-600">`);
      if (unref(showMobile)) {
        _push(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Menu), { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button></div></div>`);
      if (unref(showMobile)) {
        _push(`<div class="md:hidden pb-4 animate-slide-down">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/explore",
          class: "block py-2 text-slate-600 font-medium",
          onClick: ($event) => showMobile.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Explore Gifts`);
            } else {
              return [
                createTextVNode("Explore Gifts")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/curate",
          class: "block py-2 text-slate-600 font-medium",
          onClick: ($event) => showMobile.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`AI Curator \u2728`);
            } else {
              return [
                createTextVNode("AI Curator \u2728")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/vendors",
          class: "block py-2 text-slate-600 font-medium",
          onClick: ($event) => showMobile.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Vendors`);
            } else {
              return [
                createTextVNode("Vendors")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav><main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-slate-900 text-slate-300 pt-16 pb-8"><div class="section-container"><div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"><div><div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center"><span class="text-white font-heading font-bold text-sm">C</span></div><span class="font-heading font-bold text-xl text-white">CurateWithNG</span></div><p class="text-slate-400 text-sm leading-relaxed">The smartest way to gift in Nigeria. AI-powered curation for every occasion.</p></div><div><h4 class="font-heading font-semibold text-white mb-4">Shop</h4><div class="space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/explore",
        class: "block text-sm hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All Gifts`);
          } else {
            return [
              createTextVNode("All Gifts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/curate",
        class: "block text-sm hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AI Curator`);
          } else {
            return [
              createTextVNode("AI Curator")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/vendors",
        class: "block text-sm hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Vendors`);
          } else {
            return [
              createTextVNode("Our Vendors")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><h4 class="font-heading font-semibold text-white mb-4">Company</h4><div class="space-y-2"><a href="#" class="block text-sm hover:text-white transition-colors">About Us</a><a href="#" class="block text-sm hover:text-white transition-colors">Contact</a><a href="#" class="block text-sm hover:text-white transition-colors">Become a Vendor</a></div></div><div><h4 class="font-heading font-semibold text-white mb-4">Legal</h4><div class="space-y-2"><a href="#" class="block text-sm hover:text-white transition-colors">Privacy Policy</a><a href="#" class="block text-sm hover:text-white transition-colors">Terms of Service</a><a href="#" class="block text-sm hover:text-white transition-colors">Refund Policy</a></div></div></div><div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"><p class="text-sm text-slate-500">\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} CurateWithNG. All rights reserved.</p><div class="flex gap-4"><a href="#" class="text-slate-500 hover:text-white transition-colors">`);
      _push(ssrRenderComponent(unref(Twitter), { class: "w-5 h-5" }, null, _parent));
      _push(`</a><a href="#" class="text-slate-500 hover:text-white transition-colors">`);
      _push(ssrRenderComponent(unref(Instagram), { class: "w-5 h-5" }, null, _parent));
      _push(`</a></div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BURMzaMx.mjs.map
