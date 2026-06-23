import { _ as _sfc_main$1 } from './CustomInput-BV4K4PXs.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { Loader2 } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { f as formatNaira } from './formatCurrency-DDPrfxv6.mjs';
import { u as useHead } from './server.mjs';
import { u as useCartStore } from './cart.store-B02bp-DA.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/h3/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/website/node_modules/ufo/dist/index.mjs';
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
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Checkout \u2014 CurateWithNG" });
    const cartStore = useCartStore();
    const paying = ref(false);
    const recipient = reactive({
      name: "",
      phone: "",
      address: "",
      note: "",
      deliveryDate: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCustomInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="section-container max-w-4xl"><h1 class="text-3xl font-heading font-bold text-slate-900 mb-8">Checkout</h1><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 space-y-6"><div class="card p-6"><h3 class="font-heading font-bold text-slate-900 mb-4">Recipient Details</h3><div class="space-y-4">`);
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(recipient).name,
        "onUpdate:modelValue": ($event) => unref(recipient).name = $event,
        required: "",
        label: "Recipient Name *",
        placeholder: "Full name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(recipient).phone,
        "onUpdate:modelValue": ($event) => unref(recipient).phone = $event,
        type: "tel",
        label: "Phone Number",
        placeholder: "+234..."
      }, null, _parent));
      _push(`<div><label class="text-sm font-semibold text-slate-700 mb-1 block">Delivery Address</label><textarea rows="2" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-slate-300 transition-all duration-200" placeholder="Full delivery address">${ssrInterpolate(unref(recipient).address)}</textarea></div><div><label class="text-sm font-semibold text-slate-700 mb-1 block">Gift Note (optional)</label><textarea rows="2" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-slate-300 transition-all duration-200" placeholder="A personal message for the recipient...">${ssrInterpolate(unref(recipient).note)}</textarea></div>`);
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(recipient).deliveryDate,
        "onUpdate:modelValue": ($event) => unref(recipient).deliveryDate = $event,
        type: "date",
        label: "Preferred Delivery Date"
      }, null, _parent));
      _push(`</div></div></div><div><div class="card p-6 sticky top-24"><h3 class="font-heading font-bold text-slate-900 mb-4">Order Summary</h3><div class="space-y-3 mb-4"><!--[-->`);
      ssrRenderList(unref(cartStore).items, (item) => {
        var _a;
        _push(`<div class="flex gap-3"><div class="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0"><img${ssrRenderAttr("src", (_a = item.gift.images) == null ? void 0 : _a[0])} class="w-full h-full object-cover"></div><div class="flex-1"><p class="text-sm font-medium text-slate-900 line-clamp-1">${ssrInterpolate(item.gift.name)}</p><p class="text-xs text-slate-500">Qty: ${ssrInterpolate(item.quantity)}</p></div><span class="text-sm font-semibold text-slate-900">${ssrInterpolate(unref(formatNaira)((item.gift.discountPrice || item.gift.price) * item.quantity))}</span></div>`);
      });
      _push(`<!--]--></div><hr class="border-slate-200 mb-4"><div class="flex justify-between font-heading font-bold text-lg mb-6"><span>Total</span><span class="text-primary-800">${ssrInterpolate(unref(formatNaira)(unref(cartStore).totalAmount))}</span></div><button${ssrIncludeBooleanAttr(unref(paying) || !unref(recipient).name) ? " disabled" : ""} class="btn-primary w-full flex items-center justify-center gap-2">`);
      if (unref(paying)) {
        _push(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(paying) ? "Processing..." : "Pay with Paystack \u{1F4B3}")}</button><p class="text-xs text-slate-400 text-center mt-3">Secured by Paystack. Your payment is encrypted.</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout-D3AWL1q-.mjs.map
