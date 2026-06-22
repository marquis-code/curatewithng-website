import { _ as __nuxt_component_0 } from "./nuxt-link-BBDYCnUp.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Trash2 } from "lucide-vue-next";
import { f as formatNaira } from "./formatCurrency-DDPrfxv6.js";
import "/Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "../server.mjs";
import { u as useCartStore } from "./cart.store-CsTdyhz1.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Cart — CurateWithNG" });
    const cartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="section-container max-w-3xl"><h1 class="text-3xl font-heading font-bold text-slate-900 mb-8">Shopping Cart</h1>`);
      if (unref(cartStore).isEmpty) {
        _push(`<div class="text-center py-20"><div class="text-6xl mb-4">🛒</div><h3 class="text-xl font-heading font-bold text-slate-900 mb-2">Your cart is empty</h3><p class="text-slate-500 mb-6">Discover curated gifts from Nigeria&#39;s finest vendors</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/explore",
          class: "btn-primary"
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
        _push(`</div>`);
      } else {
        _push(`<div><div class="space-y-4 mb-8"><!--[-->`);
        ssrRenderList(unref(cartStore).items, (item) => {
          _push(`<div class="card p-4 flex gap-4"><div class="w-20 h-20 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0"><img${ssrRenderAttr("src", item.gift.images?.[0] || "/placeholder-gift.jpg")}${ssrRenderAttr("alt", item.gift.name)} class="w-full h-full object-cover"></div><div class="flex-1"><h3 class="font-heading font-semibold text-slate-900">${ssrInterpolate(item.gift.name)}</h3><p class="text-sm text-primary-600 font-medium">${ssrInterpolate(unref(formatNaira)(item.gift.discountPrice || item.gift.price))}</p></div><div class="flex items-center gap-3"><div class="flex items-center border border-slate-200 rounded-lg"><button class="px-3 py-1 text-slate-600 hover:bg-slate-50">−</button><span class="px-3 py-1 font-medium text-sm">${ssrInterpolate(item.quantity)}</span><button class="px-3 py-1 text-slate-600 hover:bg-slate-50">+</button></div><button class="p-2 text-red-500 hover:bg-red-50 rounded-lg">`);
          _push(ssrRenderComponent(unref(Trash2), { class: "w-5 h-5" }, null, _parent));
          _push(`</button></div></div>`);
        });
        _push(`<!--]--></div><div class="card p-6"><h3 class="font-heading font-bold text-slate-900 mb-4">Order Summary</h3><div class="space-y-2 mb-4"><div class="flex justify-between text-slate-600"><span>Subtotal (${ssrInterpolate(unref(cartStore).totalItems)} items)</span><span>${ssrInterpolate(unref(formatNaira)(unref(cartStore).totalAmount))}</span></div><div class="flex justify-between text-slate-600"><span>Delivery</span><span class="text-success-600 font-medium">Free</span></div></div><hr class="border-slate-200 mb-4"><div class="flex justify-between text-lg font-heading font-bold text-slate-900 mb-6"><span>Total</span><span class="text-primary-800">${ssrInterpolate(unref(formatNaira)(unref(cartStore).totalAmount))}</span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/checkout",
          class: "btn-primary w-full text-center block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Proceed to Checkout `);
            } else {
              return [
                createTextVNode(" Proceed to Checkout ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cart-Cz9p-LVp.js.map
