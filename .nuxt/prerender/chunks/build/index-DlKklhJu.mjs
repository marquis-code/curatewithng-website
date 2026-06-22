import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { defineComponent, ref, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { User, Package, Heart, Users } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { u as useHead, d as useUser } from './server.mjs';
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
    useHead({ title: "My Account \u2014 CurateWithNG" });
    const { user } = useUser();
    const activeTab = ref("profile");
    const tabs = [
      { id: "profile", label: "Profile", icon: User },
      { id: "orders", label: "My Orders", icon: Package },
      { id: "wishlist", label: "Saved Gifts", icon: Heart },
      { id: "recipients", label: "Recipients", icon: Users }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8" }, _attrs))}><div class="section-container"><h1 class="text-3xl font-heading font-bold text-slate-900 mb-2">My Account</h1><p class="text-slate-500 mb-8">Manage your profile and view your order history</p><div class="grid grid-cols-1 lg:grid-cols-4 gap-8"><aside class="lg:col-span-1"><nav class="card p-4 space-y-1"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([
          "w-full flex items-center gap-2 text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
          unref(activeTab) === tab.id ? "bg-primary-50 text-primary-800" : "text-slate-600 hover:bg-slate-50"
        ])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tab.icon), { class: "w-4 h-4" }, null), _parent);
        _push(` ${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></nav></aside><div class="lg:col-span-3">`);
      if (unref(activeTab) === "profile") {
        _push(`<div class="card p-6"><h3 class="font-heading font-bold text-slate-900 mb-6">Profile Settings</h3><div class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label class="text-sm font-medium text-slate-700 mb-1 block">First Name</label><input${ssrRenderAttr("value", (_a = unref(user)) == null ? void 0 : _a.firstName)} class="input-field" readonly></div><div><label class="text-sm font-medium text-slate-700 mb-1 block">Last Name</label><input${ssrRenderAttr("value", (_b = unref(user)) == null ? void 0 : _b.lastName)} class="input-field" readonly></div></div><div><label class="text-sm font-medium text-slate-700 mb-1 block">Email</label><input${ssrRenderAttr("value", (_c = unref(user)) == null ? void 0 : _c.email)} class="input-field" readonly></div><div><label class="text-sm font-medium text-slate-700 mb-1 block">Phone</label><input${ssrRenderAttr("value", (_d = unref(user)) == null ? void 0 : _d.phone)} class="input-field" readonly></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "orders") {
        _push(`<div class="card p-6"><h3 class="font-heading font-bold text-slate-900 mb-6">My Orders</h3><div class="text-center py-12 text-slate-500">`);
        _push(ssrRenderComponent(unref(Package), { class: "w-10 h-10 mx-auto mb-3 text-slate-400" }, null, _parent));
        _push(`<p>Your orders will appear here</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/explore",
          class: "btn-primary mt-4 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Start Shopping`);
            } else {
              return [
                createTextVNode("Start Shopping")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "wishlist") {
        _push(`<div class="card p-6"><h3 class="font-heading font-bold text-slate-900 mb-6">Saved Gifts</h3><div class="text-center py-12 text-slate-500">`);
        _push(ssrRenderComponent(unref(Heart), { class: "w-10 h-10 mx-auto mb-3 text-slate-400" }, null, _parent));
        _push(`<p>Save gifts you love for later</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "recipients") {
        _push(`<div class="card p-6"><h3 class="font-heading font-bold text-slate-900 mb-6">My Recipients</h3><p class="text-slate-500 mb-4">Save recipient profiles for faster curation</p><div class="text-center py-12 text-slate-500">`);
        _push(ssrRenderComponent(unref(Users), { class: "w-10 h-10 mx-auto mb-3 text-slate-400" }, null, _parent));
        _push(`<p>Add your first recipient</p><button class="btn-primary mt-4">Add Recipient</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DlKklhJu.mjs.map
