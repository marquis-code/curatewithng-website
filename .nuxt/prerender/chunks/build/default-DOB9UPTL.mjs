import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { ShoppingCart, Menu, X, Twitter, Instagram } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { d as useUser } from './server.mjs';
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}><nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 transition-all duration-200"><div class="section-container"><div class="flex items-center justify-between h-20">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2.5 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"${_scopeId}><span class="text-white font-heading font-bold text-lg"${_scopeId}>C</span></div><span class="font-heading font-extrabold text-2xl text-slate-900 tracking-tight"${_scopeId}> Curate<span class="text-primary-800"${_scopeId}>WithNG</span></span>`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105" }, [
                createVNode("span", { class: "text-white font-heading font-bold text-lg" }, "C")
              ]),
              createVNode("span", { class: "font-heading font-extrabold text-2xl text-slate-900 tracking-tight" }, [
                createTextVNode(" Curate"),
                createVNode("span", { class: "text-primary-800" }, "WithNG")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/explore",
        class: "text-[15px] font-semibold text-slate-600 hover:text-primary-800 transition-colors"
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
        class: "text-[15px] font-semibold text-slate-600 hover:text-primary-800 transition-colors flex items-center gap-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` AI Curator <span class="text-lg"${_scopeId}>\u2728</span>`);
          } else {
            return [
              createTextVNode(" AI Curator "),
              createVNode("span", { class: "text-lg" }, "\u2728")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/vendors",
        class: "text-[15px] font-semibold text-slate-600 hover:text-primary-800 transition-colors"
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
      _push(`</div><div class="flex items-center gap-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "relative p-2 text-slate-600 hover:text-primary-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShoppingCart), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            if (unref(cartStore).totalItems > 0) {
              _push2(`<span class="absolute top-0 right-0 w-5 h-5 bg-primary-800 text-white text-[11px] rounded-full flex items-center justify-center font-bold border-2 border-white"${_scopeId}>${ssrInterpolate(unref(cartStore).totalItems)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(ShoppingCart), { class: "w-6 h-6" }),
              unref(cartStore).totalItems > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute top-0 right-0 w-5 h-5 bg-primary-800 text-white text-[11px] rounded-full flex items-center justify-center font-bold border-2 border-white"
              }, toDisplayString(unref(cartStore).totalItems), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!!unref(token)) {
        _push(`<div class="relative hidden sm:block"><button class="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"><div class="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center"><span class="text-white font-semibold text-sm">${ssrInterpolate((_b = (_a = unref(user)) == null ? void 0 : _a.firstName) == null ? void 0 : _b.charAt(0))}</span></div><span class="text-sm font-semibold text-slate-800">${ssrInterpolate((_c = unref(user)) == null ? void 0 : _c.firstName)}</span></button>`);
        if (unref(showDropdown)) {
          _push(`<div class="absolute right-0 mt-3 w-56 bg-white rounded-2xl border border-slate-100 py-2 shadow-xl animate-slide-down"><div class="px-4 py-3 border-b border-slate-100 mb-2"><p class="text-sm font-semibold text-slate-900">${ssrInterpolate((_d = unref(user)) == null ? void 0 : _d.firstName)} ${ssrInterpolate((_e = unref(user)) == null ? void 0 : _e.lastName)}</p><p class="text-xs text-slate-500 truncate">${ssrInterpolate((_f = unref(user)) == null ? void 0 : _f.email)}</p></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dashboard",
            class: "block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-800",
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
            class: "block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-800",
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
          _push(`<hr class="my-2 border-slate-100"><button class="block w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50">Sign Out</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="hidden sm:flex items-center gap-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/login",
          class: "text-[15px] font-semibold text-slate-600 hover:text-primary-800 transition-colors"
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
          class: "bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-full text-[15px] font-semibold transition-colors shadow-sm"
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
        _push(`</div>`);
      }
      _push(`<button class="md:hidden p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">`);
      _push(ssrRenderComponent(unref(Menu), { class: "w-6 h-6" }, null, _parent));
      _push(`</button></div></div></div></nav>`);
      if (unref(showMobile)) {
        _push(`<div class="md:hidden fixed inset-0 z-[100]"><div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"></div><div class="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-in-right"><div class="px-6 py-6 flex items-center justify-between border-b border-slate-100"><span class="font-heading font-extrabold text-xl text-slate-900">Menu</span><button class="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
        _push(`</button></div><div class="flex-1 overflow-y-auto py-6 px-6 space-y-8"><div class="space-y-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/explore",
          class: "block text-xl font-heading font-bold text-slate-900",
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
          class: "block text-xl font-heading font-bold text-slate-900 flex items-center gap-2",
          onClick: ($event) => showMobile.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` AI Curator <span${_scopeId}>\u2728</span>`);
            } else {
              return [
                createTextVNode(" AI Curator "),
                createVNode("span", null, "\u2728")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/vendors",
          class: "block text-xl font-heading font-bold text-slate-900",
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
        _push(`</div><hr class="border-slate-100">`);
        if (!!unref(token)) {
          _push(`<div class="space-y-4"><div class="flex items-center gap-3 mb-6"><div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center"><span class="text-slate-900 font-bold text-lg">${ssrInterpolate((_h = (_g = unref(user)) == null ? void 0 : _g.firstName) == null ? void 0 : _h.charAt(0))}</span></div><div><p class="font-bold text-slate-900">${ssrInterpolate((_i = unref(user)) == null ? void 0 : _i.firstName)} ${ssrInterpolate((_j = unref(user)) == null ? void 0 : _j.lastName)}</p><p class="text-sm text-slate-500">${ssrInterpolate((_k = unref(user)) == null ? void 0 : _k.email)}</p></div></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dashboard",
            class: "block text-lg font-semibold text-slate-700",
            onClick: ($event) => showMobile.value = false
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
            class: "block text-lg font-semibold text-slate-700",
            onClick: ($event) => showMobile.value = false
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
          _push(`<button class="block w-full text-left pt-4 text-lg font-semibold text-red-600">Sign Out</button></div>`);
        } else {
          _push(`<div class="space-y-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/auth/login",
            class: "block w-full py-3 text-center border-2 border-slate-200 rounded-xl text-base font-bold text-slate-700 hover:bg-slate-50",
            onClick: ($event) => showMobile.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Sign In`);
              } else {
                return [
                  createTextVNode("Sign In")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/auth/register",
            class: "block w-full py-3 text-center bg-slate-900 rounded-xl text-base font-bold text-white shadow-sm hover:bg-slate-800",
            onClick: ($event) => showMobile.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Create Account`);
              } else {
                return [
                  createTextVNode("Create Account")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-slate-50 text-slate-600 pt-16 pb-8 relative z-20"><div class="section-container"><div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"><div><div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center"><span class="text-white font-heading font-bold text-sm">C</span></div><span class="font-heading font-bold text-xl text-slate-900">CurateWithNG</span></div><p class="text-slate-500 text-sm leading-relaxed">The smartest way to gift in Nigeria. AI-powered curation for every occasion.</p></div><div><h4 class="font-heading font-semibold text-slate-900 mb-4">Shop</h4><div class="space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/explore",
        class: "block text-sm hover:text-primary-800 transition-colors"
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
        class: "block text-sm hover:text-primary-800 transition-colors"
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
        class: "block text-sm hover:text-primary-800 transition-colors"
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
      _push(`</div></div><div><h4 class="font-heading font-semibold text-slate-900 mb-4">Company</h4><div class="space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "block text-sm hover:text-primary-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "block text-sm hover:text-primary-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://vendor.curatewithng.com" class="block text-sm hover:text-primary-800 transition-colors">Become a Vendor</a></div></div><div><h4 class="font-heading font-semibold text-slate-900 mb-4">Legal</h4><div class="space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "block text-sm hover:text-primary-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "block text-sm hover:text-primary-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/refund-policy",
        class: "block text-sm hover:text-primary-800 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Refund Policy`);
          } else {
            return [
              createTextVNode("Refund Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"><p class="text-sm text-slate-400">\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} CurateWithNG. All rights reserved.</p><div class="flex gap-4"><a href="#" class="text-slate-400 hover:text-slate-600 transition-colors">`);
      _push(ssrRenderComponent(unref(Twitter), { class: "w-5 h-5" }, null, _parent));
      _push(`</a><a href="#" class="text-slate-400 hover:text-slate-600 transition-colors">`);
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
//# sourceMappingURL=default-DOB9UPTL.mjs.map
