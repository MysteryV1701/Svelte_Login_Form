import { c as create_ssr_component, f as add_attribute, e as escape } from './ssr-CIFjU9jP.js';
import { w as writable, d as derived } from './index2-C_YCgMDo.js';

const InputText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let className;
  let { field } = $$props;
  let { label = "" } = $$props;
  let { id } = $$props;
  let { type = "text" } = $$props;
  let { placeholder } = $$props;
  let { value = "" } = $$props;
  let { invalidText } = $$props;
  let { required = true } = $$props;
  let { disable = false } = $$props;
  let { readonly = false } = $$props;
  let { pattern = "" } = $$props;
  let { classStyled = "" } = $$props;
  let { showMessage = false } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.disable === void 0 && $$bindings.disable && disable !== void 0)
    $$bindings.disable(disable);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  if ($$props.classStyled === void 0 && $$bindings.classStyled && classStyled !== void 0)
    $$bindings.classStyled(classStyled);
  if ($$props.showMessage === void 0 && $$bindings.showMessage && showMessage !== void 0)
    $$bindings.showMessage(showMessage);
  className = /*tw*/
  "h-fit  py-4 px-3 rounded-xl w-full border-2 border-gray-300 placeholder:font-medium focus:outline-none focus:border-gray-300 focus:bg-white bg-gray-50/100 data-[touched]:valid:text-green-700 data-[touched]:valid:border-green-700 data-[touched]:invalid:text-red-700 data-[touched]:invalid:border-red-700" + classStyled;
  return `${label ? `<label${add_attribute("for", id, 0)} class="font-semibold text-gray-800 text-base mb-1 block">${escape(label)}</label>` : ``} <input${add_attribute("class", className, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("id", id, 0)}${add_attribute("autocomplete", type, 0)} ${disable ? "disabled" : ""} ${readonly ? "readonly" : ""}${add_attribute("pattern", pattern, 0)}${add_attribute("value", value, 0)}> <div class="h-5"><span class="text-sm text-red-600" ${showMessage ? "hidden" : ""}>${escape(invalidText)}</span></div>`;
});
const InputPassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let className;
  let { field } = $$props;
  let { label = "" } = $$props;
  let { id } = $$props;
  let { min = 1 } = $$props;
  let { max = 4 } = $$props;
  let { placeholder } = $$props;
  let { value = "" } = $$props;
  let { invalidText } = $$props;
  let { required = true } = $$props;
  let { disable = false } = $$props;
  let { readonly = false } = $$props;
  let { classStyled = "" } = $$props;
  let { showMessage = false } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.disable === void 0 && $$bindings.disable && disable !== void 0)
    $$bindings.disable(disable);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.classStyled === void 0 && $$bindings.classStyled && classStyled !== void 0)
    $$bindings.classStyled(classStyled);
  if ($$props.showMessage === void 0 && $$bindings.showMessage && showMessage !== void 0)
    $$bindings.showMessage(showMessage);
  className = /*tw*/
  "h-fit py-4 px-3 rounded-xl w-full border-2 border-gray-300 placeholder:font-medium focus:outline-none focus:border-gray-300 focus:bg-white bg-gray-50 data-[touched]:valid:text-green-700 data-[touched]:valid:border-green-700 data-[touched]:invalid:text-red-700 data-[touched]:invalid:border-red-700" + classStyled;
  return `${label ? `<label${add_attribute("for", id, 0)} class="font-semibold text-gray-800 text-base mb-1 block">${escape(label)}</label>` : ``} <input type="password"${add_attribute("minlength", min, 0)}${add_attribute("maxlength", max, 0)}${add_attribute("class", className, 0)}${add_attribute("pattern", "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$", 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("id", id, 0)} autocomplete="current-password" ${disable ? "disabled" : ""} ${readonly ? "readonly" : ""}${add_attribute("value", value, 0)}> <div class="h-4"><span class="text-sm text-red-600" ${showMessage ? "hidden" : ""}>${escape(invalidText)}</span></div>`;
});
var M = { dirty: false, touched: false, show: false, message: "", badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: false, valueMissing: false };
function g(a, n) {
  let t = O(), { onDirty: i, onTouched: d, validator: b } = { onDirty: false, onTouched: true, ...n }, o = { id: t, ...M }, { subscribe: F, set: v } = writable(o), r = Object.assign((e) => {
    a.add(r);
    let m;
    async function l(c = false, s = false) {
      let E = m = new Object();
      if (e.checkValidity() && b && !(e instanceof HTMLFieldSetElement)) {
        let h = await b(e.value);
        if (E !== m)
          return;
        h && e.setCustomValidity(h);
      }
      o.dirty = o.dirty || s, o.touched = o.touched || c, o.show = !e.validity.valid && (i && o.dirty || d && o.touched), Object.assign(o, { message: e.validationMessage, ...x(e.validity) }), v(o), f(e, o.show, "data-show"), f(e, o.dirty, "data-dirty"), f(e, o.touched, "data-touched"), f(e, o.show, "aria-invalid", "true"), f(e, o.show, "aria-describedby", t);
    }
    function u(c) {
      l(true, false);
    }
    function y(c) {
      e.setCustomValidity(""), l(false, true);
    }
    return l(), e.addEventListener("blur", u), e.addEventListener("input", y), { destroy() {
      a.del(r), e.removeEventListener("blur", u), e.removeEventListener("input", y);
    } };
  }, { subscribe: F });
  return r;
}
function x(a) {
  let n = {};
  for (let t in a)
    n[t] = a[t];
  return n;
}
var S = 0, O = () => `form-help:${++S}`, f = (a, n, t, i = "") => {
  n ? a.setAttribute(t, i) : a.removeAttribute(t);
};
function I() {
  let { subscribe: a, set: n } = writable({ dirty: false, touched: false, valid: true }), t = [], i;
  function d(r, e) {
    e && e();
    let { subscribe: m } = derived(r, (l) => {
      let u = l.every((s) => s.valid), y = l.some((s) => s.dirty), c = l.some((s) => s.touched);
      return { dirty: y, touched: c, valid: u };
    });
    return m((l) => n(l));
  }
  let p = Object.assign((r) => (r.noValidate = true, i = d(t, i), { destroy() {
    i && i(), i = void 0;
  } }), { subscribe: a, field: (r) => g(p, r), add: (r) => {
    t.includes(r) || (t.push(r), i = d(t, i));
  }, del: (r) => {
    t = t.filter((e) => e !== r), i = d(t, i);
  } });
  return p;
}

export { I, InputText as a, InputPassword as b };
//# sourceMappingURL=index3-6a7PnAgg.js.map
