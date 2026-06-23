import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { a as useSeoMeta } from './server.mjs';
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

const _sfc_main = {
  __name: "refund-policy",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Refund Policy \u2014 CurateWithNG" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24 pb-16 min-h-[60vh]" }, _attrs))}><div class="section-container max-w-3xl prose prose-slate max-w-none"><h1 class="text-4xl font-heading font-extrabold text-slate-900 mb-6">Refund &amp; Return Policy</h1><p class="text-slate-500 text-sm mb-8">Last updated: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><p class="text-slate-600 mb-4">Thank you for shopping at CurateWithNG. We want to ensure you have a rewarding experience while discovering and purchasing our curated gifts.</p><h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Returns</h2><p class="text-slate-600 mb-4">Due to the custom and perishable nature of many of our curated gifts (such as food hampers and personalized items), we generally do not accept returns. However, if an item arrives damaged or defective, please contact us within 24 hours of delivery with photographic proof.</p><h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Refunds</h2><p class="text-slate-600 mb-4">If a return is approved for a damaged or incorrect item, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer&#39;s policies.</p><h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Contact Us</h2><p class="text-slate-600 mb-4">If you have any questions on how to return your item to us, please `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-primary-800 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`contact us`);
          } else {
            return [
              createTextVNode("contact us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`.</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/refund-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=refund-policy-DMtlx-JG.mjs.map
