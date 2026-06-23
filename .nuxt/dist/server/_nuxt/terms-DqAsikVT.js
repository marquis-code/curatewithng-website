import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "/Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs";
import { a as useSeoMeta } from "../server.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/website/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/website/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ufo/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/klona/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/destr/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ohash/dist/index.mjs";
import "axios";
import "vue-toastification";
const _sfc_main = {
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Terms of Service — CurateWithNG" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24 pb-16 min-h-[60vh]" }, _attrs))}><div class="section-container max-w-3xl prose prose-slate max-w-none"><h1 class="text-4xl font-heading font-extrabold text-slate-900 mb-6">Terms of Service</h1><p class="text-slate-500 text-sm mb-8">Last updated: ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><p class="text-slate-600 mb-4">Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the CurateWithNG website operated by us.</p><h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Accounts</h2><p class="text-slate-600 mb-4">When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p><h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Purchases</h2><p class="text-slate-600 mb-4">If you wish to purchase any product or service made available through the Service (&quot;Purchase&quot;), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p><h2 class="text-2xl font-heading font-bold text-slate-900 mt-8 mb-4">Changes</h2><p class="text-slate-600 mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=terms-DqAsikVT.js.map
