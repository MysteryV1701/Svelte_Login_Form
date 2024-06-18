import { c as create_ssr_component, f as add_attribute } from './ssr-CIFjU9jP.js';

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "button" } = $$props;
  let { variant = "filled" } = $$props;
  let { disable = false } = $$props;
  let { loading = false } = $$props;
  let { id = null } = $$props;
  let { title } = $$props;
  let { classStyled = "" } = $$props;
  let { size = "sm" } = $$props;
  let className = `text-gray-900 text-center relative font-semibold whitespace-nowrap align-middle 
        outline-none inline-flex items-center justify-center select-none overflow-hidden gap-x-2  ${classStyled} `;
  if (size == "sm") {
    className += " px-2 py-1 ";
  } else if (size == "md") {
    className += " px-4 py-2 ";
  } else
    className += " px-6 py-3 ";
  if (variant == "ghost") {
    className += "rounded-lg border border-transparent hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none";
  } else if (variant == "outline") {
    className += /*tw*/
    "border border-gray-300 rounded-lg bg-gray-50";
  }
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.disable === void 0 && $$bindings.disable && disable !== void 0)
    $$bindings.disable(disable);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.classStyled === void 0 && $$bindings.classStyled && classStyled !== void 0)
    $$bindings.classStyled(classStyled);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<button${add_attribute("id", id, 0)}${add_attribute("type", type, 0)} ${disable || loading ? "disabled" : ""}${add_attribute("class", className, 0)}${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});

export { Button as B };
//# sourceMappingURL=Button-Vgin9XLY.js.map
