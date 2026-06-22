import { _ as __nuxt_component_0 } from "./nuxt-link-BozghAJx.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/marquis/curatewithng/website/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/website/node_modules/hookable/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/website/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/website/node_modules/klona/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/destr/dist/index.mjs";
import "/Users/marquis/curatewithng/website/node_modules/ohash/dist/index.mjs";
import "axios";
import "vue-toastification";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 flex items-center justify-center p-4" }, _attrs))}><div class="w-full max-w-md">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center justify-center gap-2 mb-8"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center"${_scopeId}><span class="text-white font-heading font-bold text-lg"${_scopeId}>C</span></div><span class="font-heading font-bold text-2xl text-slate-900"${_scopeId}>CurateWithNG</span>`);
      } else {
        return [
          createVNode("div", { class: "w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center" }, [
            createVNode("span", { class: "text-white font-heading font-bold text-lg" }, "C")
          ]),
          createVNode("span", { class: "font-heading font-bold text-2xl text-slate-900" }, "CurateWithNG")
        ];
      }
    }),
    _: 1
  }, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  auth as default
};
//# sourceMappingURL=auth-gkwA7BSd.js.map
