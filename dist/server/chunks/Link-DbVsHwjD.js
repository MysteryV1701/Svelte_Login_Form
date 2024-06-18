import { c as create_ssr_component, f as add_attribute } from './ssr-CIFjU9jP.js';

const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { testId = void 0 } = $$props;
  let { fontBold = false } = $$props;
  let { typeText = false } = $$props;
  let { fixedSize = false } = $$props;
  let { underline = false } = $$props;
  let className = "";
  if (typeText) {
    className = /*tw*/
    `${fixedSize ? "w-32" : ""}  ${underline ? "underline" : ""} rounded-xl p-2 text-base flex justify-center items-center  hover:text-blue-600 transition-all duration-200 ${fontBold ? "font-semibold" : "font-normal"}`;
  } else {
    className = `${fixedSize ? "w-32" : ""} rounded-xl bg-blue-400 p-2 text-base flex justify-center items-center hover:bg-blue-600 hover:text-gray-200 transition-all duration-200 ${fontBold ? "font-semibold" : "font-normal"}`;
  }
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.testId === void 0 && $$bindings.testId && testId !== void 0)
    $$bindings.testId(testId);
  if ($$props.fontBold === void 0 && $$bindings.fontBold && fontBold !== void 0)
    $$bindings.fontBold(fontBold);
  if ($$props.typeText === void 0 && $$bindings.typeText && typeText !== void 0)
    $$bindings.typeText(typeText);
  if ($$props.fixedSize === void 0 && $$bindings.fixedSize && fixedSize !== void 0)
    $$bindings.fixedSize(fixedSize);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  return `${href ? `<a${add_attribute("class", className, 0)}${add_attribute("href", href, 0)}${add_attribute("data-testid", testId, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<span${add_attribute("class", className, 0)}${add_attribute("data-testid", testId, 0)}>${slots.default ? slots.default({}) : ``}</span>`}`;
});

export { Link as L };
//# sourceMappingURL=Link-DbVsHwjD.js.map
