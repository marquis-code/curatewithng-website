import { _ as _sfc_main$1 } from "./CustomInput-BV4K4PXs.js";
import { reactive, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "/Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs";
import { a as useSeoMeta } from "../server.mjs";
import "lucide-vue-next";
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Contact Us — CurateWithNG" });
    const form = reactive({ name: "", email: "", message: "" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCustomInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24 pb-16 min-h-[60vh]" }, _attrs))}><div class="section-container max-w-3xl"><h1 class="text-4xl font-heading font-extrabold text-slate-900 mb-6">Contact Us</h1><p class="text-lg text-slate-600 mb-10">We&#39;d love to hear from you. Whether you have a question about an order, want to partner with us, or just want to say hi, drop us a message!</p><div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div class="space-y-6"><div class="bg-slate-50 p-6 rounded-2xl border border-slate-200"><h3 class="font-heading font-bold text-slate-900 mb-2">Customer Support</h3><p class="text-slate-600 mb-2">Email: hello@curatewithng.com</p><p class="text-slate-600">Phone: +234 800 CURATE</p></div><div class="bg-slate-50 p-6 rounded-2xl border border-slate-200"><h3 class="font-heading font-bold text-slate-900 mb-2">Office Address</h3><p class="text-slate-600">12 Innovation Drive, Lekki Phase 1<br>Lagos, Nigeria</p></div></div><form class="space-y-4">`);
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        label: "Your Name",
        placeholder: "Chidi Okonkwo"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "email",
        required: "",
        label: "Email Address",
        placeholder: "you@example.com"
      }, null, _parent));
      _push(`<div><label class="text-sm font-semibold text-slate-700 mb-1 block">Message</label><textarea required rows="4" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:border-slate-300 transition-all duration-200" placeholder="How can we help?">${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="btn-primary w-full">Send Message</button></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-BBRF5td1.js.map
