import { _ as _sfc_main$3 } from './CustomInput-BV4K4PXs.mjs';
import { _ as _sfc_main$4 } from './CustomSelect-7IRZxl6H.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, watch, useSSRContext } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport, ssrRenderStyle } from 'file:///Users/marquis/curatewithng/website/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BBDYCnUp.mjs';
import { u as useHead, b as useAuth } from './server.mjs';
import { Gift } from 'file:///Users/marquis/curatewithng/website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PhoneInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    label: {},
    placeholder: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const countries = [
      { code: "NG", dialCode: "+234", flag: "\u{1F1F3}\u{1F1EC}" },
      { code: "US", dialCode: "+1", flag: "\u{1F1FA}\u{1F1F8}" },
      { code: "GB", dialCode: "+44", flag: "\u{1F1EC}\u{1F1E7}" },
      { code: "CA", dialCode: "+1", flag: "\u{1F1E8}\u{1F1E6}" },
      { code: "GH", dialCode: "+233", flag: "\u{1F1EC}\u{1F1ED}" },
      { code: "ZA", dialCode: "+27", flag: "\u{1F1FF}\u{1F1E6}" },
      { code: "KE", dialCode: "+254", flag: "\u{1F1F0}\u{1F1EA}" },
      { code: "RW", dialCode: "+250", flag: "\u{1F1F7}\u{1F1FC}" }
    ];
    const countryCode = ref("+234");
    const phoneNumber = ref("");
    watch([countryCode, phoneNumber], () => {
      if (phoneNumber.value) {
        emit("update:modelValue", `${countryCode.value}${phoneNumber.value}`);
      } else {
        emit("update:modelValue", "");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCustomSelect = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-1.5" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label class="block text-sm font-semibold text-slate-700">${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex">`);
      _push(ssrRenderComponent(_component_UiCustomSelect, {
        modelValue: countryCode.value,
        "onUpdate:modelValue": ($event) => countryCode.value = $event,
        options: countries.map((c) => ({ label: `${c.flag} ${c.dialCode}`, value: c.dialCode })),
        buttonClass: "!rounded-r-none !border-r-0 !bg-slate-50",
        class: "w-[140px]",
        placeholder: false
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", phoneNumber.value)} type="tel" pattern="^[0-9]+$"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""} class="input-field rounded-l-none flex-1 focus:ring-primary-500 focus:border-primary-500" title="Please enter only numbers"></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/PhoneInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CelebrationModal",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.show) {
          _push2(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-4" data-v-7061bfe1><div class="absolute inset-0 bg-white/60 backdrop-blur-md" data-v-7061bfe1></div><div class="relative bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-[0_20px_60px_-15px_rgba(107,33,168,0.2)] border border-purple-100/50 transform transition-all" data-v-7061bfe1><div class="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner" data-v-7061bfe1>`);
          _push2(ssrRenderComponent(unref(Gift), { class: "w-10 h-10 text-purple-600" }, null, _parent));
          _push2(`</div><h2 class="text-3xl font-bold text-slate-900 mb-4 tracking-tight" data-v-7061bfe1>Welcome to the Family! \u2728</h2><p class="text-slate-600 text-lg leading-relaxed mb-6" data-v-7061bfe1> We&#39;re incredibly excited to have you join the CurateWithNG community. Get ready to create unforgettable gifting moments. </p><div class="flex items-center justify-center space-x-2" data-v-7061bfe1><div class="w-2 h-2 rounded-full bg-purple-600 animate-pulse" data-v-7061bfe1></div><div class="w-2 h-2 rounded-full bg-purple-600 animate-pulse" style="${ssrRenderStyle({ "animation-delay": "200ms" })}" data-v-7061bfe1></div><div class="w-2 h-2 rounded-full bg-purple-600 animate-pulse" style="${ssrRenderStyle({ "animation-delay": "400ms" })}" data-v-7061bfe1></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CelebrationModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CelebrationModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7061bfe1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Create Account \u2014 CurateWithNG" });
    useAuth();
    const loading = ref(false);
    const showCelebration = ref(false);
    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCustomInput = _sfc_main$3;
      const _component_UiPhoneInput = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[2rem] border border-slate-100 p-8 md:p-10 animate-scale-in max-w-md mx-auto" }, _attrs))}><h2 class="text-2xl font-heading font-bold text-slate-900 text-center mb-2">Create Account</h2><p class="text-slate-500 text-center mb-8">Join CurateWithNG and start gifting smarter</p><form class="space-y-4"><div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(form).firstName,
        "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
        required: "",
        label: "First Name",
        placeholder: "Chidi"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(form).lastName,
        "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
        required: "",
        label: "Last Name",
        placeholder: "Okonkwo"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "email",
        required: "",
        label: "Email",
        placeholder: "you@example.com"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiPhoneInput, {
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
        label: "Phone (optional)",
        placeholder: "801 234 5678"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiCustomInput, {
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        required: "",
        minlength: "8",
        pattern: ".{8,}",
        title: "Password must be at least 8 characters long",
        label: "Password",
        placeholder: "At least 8 characters"
      }, null, _parent));
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="btn-primary w-full">${ssrInterpolate(unref(loading) ? "Creating account..." : "Create Account")}</button></form><div class="mt-6"><div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-slate-400">Or</span></div></div><button type="button" class="mt-4 flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors"><svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg> Sign up with Google </button></div><p class="text-center text-sm text-slate-500 mt-6"> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "text-primary-800 font-semibold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in`);
          } else {
            return [
              createTextVNode("Sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      _push(ssrRenderComponent(CelebrationModal, { show: unref(showCelebration) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-GtMrVBIj.mjs.map
