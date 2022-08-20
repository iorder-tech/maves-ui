import { defineComponent, useCssVars, unref, computed, resolveComponent, openBlock, createElementBlock, createBlock, createCommentVNode, renderSlot, createVNode, toDisplayString, withCtx, pushScopeId, popScopeId, createElementVNode, Transition, ref, resolveDirective, withDirectives, Fragment, normalizeStyle } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$b = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$a = ["disabled"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    type: null,
    disabled: { type: Boolean },
    iconName: null,
    icon: { type: Boolean },
    maxWidth: null
  },
  setup(__props) {
    const { type, icon, maxWidth } = __props;
    useCssVars((_ctx) => ({
      "77a5624e": unref(width),
      "7d11158c": __props.maxWidth,
      "5c24b5a6": unref(background),
      "768e63eb": unref(color),
      "57342d46": unref(iconMarginRight)
    }));
    const background = computed(() => {
      let bg = "--base-color-primary";
      if (type === "primary")
        bg = "--base-color-primary";
      if (type === "ghost")
        bg = "--base-color-transparent";
      return `var(${bg})`;
    });
    const color = computed(() => {
      let colorRes = "--base-text-color-white";
      if (type === "primary")
        colorRes = "--base-text-color-white";
      if (type === "ghost")
        colorRes = "--app-primary-color";
      return `var(${colorRes})`;
    });
    const width = computed(() => {
      let widthStyle = "100%";
      if (icon)
        widthStyle = "48px";
      return widthStyle;
    });
    const iconMarginRight = computed(() => icon ? "0" : "8px");
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      return openBlock(), createElementBlock("button", {
        class: "btn",
        disabled: __props.disabled
      }, [
        __props.iconName ? (openBlock(), createBlock(_component_Icon, {
          key: 0,
          name: __props.iconName
        }, null, 8, ["name"])) : createCommentVNode("", true),
        !__props.icon ? renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true) : createCommentVNode("", true)
      ], 8, _hoisted_1$a);
    };
  }
});
var index$c = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-1c08af69"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$a = "";
const _sfc_main$a = {};
const _hoisted_1$9 = { class: "card" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var index$b = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$3], ["__scopeId", "data-v-58fcf426"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$9 = "";
const _sfc_main$9 = {};
const _hoisted_1$8 = { class: "content" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var index$a = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$2], ["__scopeId", "data-v-28eaac94"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$8 = "";
const _sfc_main$8 = {};
const _hoisted_1$7 = { class: "list" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("ul", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var index$9 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$1], ["__scopeId", "data-v-b82127f4"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$7 = "";
const _hoisted_1$6 = { class: "list-item" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$6, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var index$8 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3af24db9"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$6 = "";
const _sfc_main$6 = {};
const _hoisted_1$5 = { class: "list-item-content" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var index$7 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__scopeId", "data-v-f36095a0"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$5 = "";
const _hoisted_1$4 = { class: "list-item-icon" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    name: null,
    size: { default: 18 },
    color: { default: "black" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_component_Icon, {
          name: __props.name,
          size: __props.size,
          color: __props.color
        }, null, 8, ["name", "size", "color"])
      ]);
    };
  }
});
var index$6 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-88a68f70"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$4 = "";
const _hoisted_1$3 = { class: "list-item-title" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    text: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1$3, toDisplayString(__props.text), 1);
    };
  }
});
var index$5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-56798ea0"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _withScopeId = (n) => (pushScopeId("data-v-c1b7050e"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "navbar" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "profile" }, "Ol\xE1, Rafael", -1));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    app: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7768d573": unref(width)
    }));
    const width = computed(
      () => props.app ? "calc(100% - var(--drawer-size))" : "100%"
    );
    return (_ctx, _cache) => {
      const _component_Card = resolveComponent("Card");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_Card, { class: "navbar__content" }, {
          default: withCtx(() => [
            _hoisted_2$2
          ]),
          _: 1
        })
      ]);
    };
  }
});
var index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c1b7050e"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$1 = { class: "navigation-drawer" };
const _hoisted_2$1 = {
  key: 0,
  class: "navigation-drawer--overlay"
};
const _hoisted_3$1 = {
  key: 0,
  class: "navigation-drawer__content"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    modelValue: { type: Boolean },
    location: null
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7b1e64ed": unref(position),
      "74ce6f80": unref(animation)
    }));
    const position = props.location === "right" ? 0 : "inherit";
    const animation = props.location === "left" ? "-100%" : "100%";
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_2$1)) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "slide" }, {
          default: withCtx(() => [
            __props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_3$1, "s")) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-14f14ee4"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _hoisted_1 = { class: "text-field" };
const _hoisted_2 = {
  key: 0,
  class: "text-field__label"
};
const _hoisted_3 = { class: "text-field__content" };
const _hoisted_4 = {
  key: 0,
  class: "text-field__content--icon"
};
const _hoisted_5 = ["disabled", "maxLength", "value", "placeholder"];
const _hoisted_6 = {
  key: 1,
  class: "text-field__error--message"
};
const _hoisted_7 = {
  key: 2,
  class: "text-field__count"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    placeholder: null,
    modelValue: null,
    label: null,
    count: { type: Boolean },
    maxLength: null,
    icon: null,
    mask: null,
    placeholderColor: null,
    disabled: { type: Boolean },
    error: { type: Boolean },
    errorMessage: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const { placeholderColor, maxLength, error } = __props;
    useCssVars((_ctx) => ({
      "53b90901": unref(background),
      "02557343": __props.placeholderColor
    }));
    const text = ref("");
    const updateValue = (e) => {
      text.value = e.target.value;
      emit("update:modelValue", e.target.value);
    };
    const countValue = computed(
      () => `${text.value.length}/${maxLength} caracteres`
    );
    const background = computed(
      () => error ? "var(--base-error-background-color)" : "var(--input-background-color)"
    );
    return (_ctx, _cache) => {
      const _component_icon = resolveComponent("icon");
      const _directive_maska = resolveDirective("maska");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.label ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3, [
          __props.icon ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(_component_icon, { name: __props.icon }, null, 8, ["name"])
          ])) : createCommentVNode("", true),
          withDirectives(createElementVNode("input", {
            onInput: updateValue,
            disabled: __props.disabled,
            maxLength: __props.maxLength,
            value: __props.modelValue,
            placeholder: __props.placeholder
          }, null, 40, _hoisted_5), [
            [_directive_maska, __props.mask]
          ])
        ]),
        __props.error ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(__props.errorMessage), 1)) : createCommentVNode("", true),
        __props.count ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(unref(countValue)), 1)) : createCommentVNode("", true)
      ]);
    };
  }
});
var index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-163307f7"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    type: { default: "h1" },
    fontWeight: { default: "500" },
    color: { default: "black" },
    marginTop: { default: "0" },
    marginBottom: { default: "0" }
  },
  setup(__props) {
    const { fontWeight, color, marginTop, marginBottom } = __props;
    const style = computed(() => ({
      fontWeight,
      color,
      marginTop,
      marginBottom
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.type === "h1" ? (openBlock(), createElementBlock("h1", {
          key: 0,
          class: "h1",
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true),
        __props.type === "h2" ? (openBlock(), createElementBlock("h2", {
          key: 1,
          class: "h2",
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true),
        __props.type === "h3" ? (openBlock(), createElementBlock("h3", {
          key: 2,
          class: "h3",
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true),
        __props.type === "subtitle" ? (openBlock(), createElementBlock("p", {
          key: 3,
          class: "subtitle",
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true),
        __props.type === "subtitle2" ? (openBlock(), createElementBlock("p", {
          key: 4,
          class: "subtitle2",
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true),
        __props.type === "body" ? (openBlock(), createElementBlock("p", {
          key: 5,
          class: "body",
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true),
        __props.type === "description" ? (openBlock(), createElementBlock("p", {
          key: 6,
          class: "description",
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true),
        __props.type === "caption" ? (openBlock(), createElementBlock("span", {
          key: 7,
          class: "caption",
          style: normalizeStyle(unref(style))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var index$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e69b8ee"]]);
var components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: index$c,
  Card: index$b,
  Content: index$a,
  List: index$9,
  ListItem: index$8,
  ListItemContent: index$7,
  ListItemIcon: index$6,
  ListItemTitle: index$5,
  NavBar: index$4,
  NavigationDrawer: index$3,
  TextField: index$2,
  Typography: index$1
}, Symbol.toStringTag, { value: "Module" }));
var main = "";
function install(app) {
  for (const key in components) {
    app.component(key, components[key]);
  }
}
var index = { install };
export { index as default };
