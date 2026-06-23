import { defineComponent, ref, computed, useId, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { Eye, EyeOff } from "lucide-vue-next";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    minlength: {
      type: [String, Number],
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const showPassword = ref(false);
    const inputType = computed(() => {
      if (props.type === "password") {
        return showPassword.value ? "text" : "password";
      }
      return props.type;
    });
    const id = useId();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-1.5" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="text-sm font-semibold text-slate-700">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="text-red-500">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative">`);
      if (_ctx.$slots.icon) {
        _push(`<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("id", unref(id))}${ssrRenderAttr("type", inputType.value)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("minlength", __props.minlength)}${ssrIncludeBooleanAttr(__props.readonly) ? " readonly" : ""} class="${ssrRenderClass([
        "w-full px-4 py-2.5 rounded-xl border bg-white text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500",
        _ctx.$slots.icon ? "pl-10" : "",
        __props.type === "password" ? "pr-12" : "",
        __props.error ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-slate-200 hover:border-slate-300 focus:border-transparent",
        __props.readonly ? "bg-slate-50 text-slate-500 cursor-not-allowed" : ""
      ])}">`);
      if (__props.type === "password") {
        _push(`<button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors">`);
        if (!showPassword.value) {
          _push(ssrRenderComponent(unref(Eye), { class: "w-5 h-5" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(EyeOff), { class: "w-5 h-5" }, null, _parent));
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.error) {
        _push(`<span class="text-xs text-red-500">${ssrInterpolate(__props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CustomInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=CustomInput-BV4K4PXs.js.map
