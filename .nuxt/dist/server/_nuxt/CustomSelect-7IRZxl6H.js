import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ChevronDown } from "lucide-vue-next";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomSelect",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Select an option"
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ""
    },
    buttonClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isOpen = ref(false);
    const dropdownRef = ref(null);
    const displayValue = computed(() => {
      if (!props.modelValue && props.modelValue !== 0) return props.placeholder;
      const option = props.options.find(
        (opt) => (typeof opt === "string" ? opt : opt.value) === props.modelValue
      );
      if (!option) return props.placeholder;
      return typeof option === "string" ? option : option.label;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col gap-1.5",
        ref_key: "dropdownRef",
        ref: dropdownRef
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<label class="text-sm font-semibold text-slate-700">${ssrInterpolate(__props.label)} `);
        if (__props.required) {
          _push(`<span class="text-red-500">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><button type="button" class="${ssrRenderClass([
        "w-full flex items-center justify-between px-4 py-2.5 rounded-xl border bg-white text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500",
        isOpen.value ? "border-primary-500 ring-2 ring-primary-500/20" : "border-slate-200 hover:border-slate-300",
        !__props.modelValue ? "text-slate-400" : "text-slate-800",
        __props.error ? "border-red-300 focus:ring-red-500" : "",
        __props.buttonClass
      ])}"><span class="truncate block pr-4">${ssrInterpolate(displayValue.value)}</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        class: ["w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0", { "rotate-180": isOpen.value }]
      }, null, _parent));
      _push(`</button>`);
      if (isOpen.value) {
        _push(`<ul class="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1">`);
        if (__props.placeholder) {
          _push(`<li class="px-4 py-2.5 text-sm text-slate-400 cursor-pointer hover:bg-slate-50 transition-colors">${ssrInterpolate(__props.placeholder)}</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<li class="${ssrRenderClass([
            "px-4 py-2.5 text-sm cursor-pointer transition-colors",
            (typeof option === "string" ? option : option.value) === __props.modelValue ? "bg-primary-50 text-primary-800 font-medium" : "text-slate-700 hover:bg-slate-50"
          ])}">${ssrInterpolate(typeof option === "string" ? option : option.label)}</li>`);
        });
        _push(`<!--]--></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CustomSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=CustomSelect-7IRZxl6H.js.map
