import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "About Us — CurateWithNG" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24 pb-16 min-h-[60vh]" }, _attrs))}><div class="section-container max-w-3xl"><h1 class="text-4xl font-heading font-extrabold text-slate-900 mb-6">About CurateWithNG</h1><div class="prose prose-slate max-w-none"><p class="text-lg text-slate-600 leading-relaxed mb-6"> Welcome to CurateWithNG, Nigeria&#39;s premier AI-powered gift curation platform. Our mission is simple: to eliminate the stress of finding the perfect gift by combining artificial intelligence with a deep understanding of Nigerian culture. </p><h2 class="text-2xl font-heading font-bold text-slate-900 mt-10 mb-4">Our Story</h2><p class="text-slate-600 leading-relaxed mb-6"> Gifting should be a joyful experience, not a chore. Yet, between busy schedules and endless scrolling on Instagram, finding a reliable vendor and the right gift can be overwhelming. We built CurateWithNG to bridge the gap between talented local artisans and thoughtful gift-givers. </p><h2 class="text-2xl font-heading font-bold text-slate-900 mt-10 mb-4">How We Are Different</h2><ul class="list-disc pl-6 space-y-2 text-slate-600 mb-6"><li><strong>AI-Powered Matching:</strong> Our proprietary &quot;GiftGenius&quot; AI understands the nuances of Nigerian relationships, occasions (like Owambes and naming ceremonies), and budgets.</li><li><strong>Vetted Vendors:</strong> We handpick every vendor on our platform to ensure premium quality and reliable delivery.</li><li><strong>End-to-End Convenience:</strong> From curation to secure Paystack checkout and delivery, we handle everything.</li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BblXhNzn.js.map
