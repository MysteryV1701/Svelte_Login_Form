import { c as create_ssr_component, a as subscribe, b as set_store_value, v as validate_component, e as escape, d as add_styles } from './ssr-CIFjU9jP.js';
import { B as Button } from './Button-Vgin9XLY.js';
import { L as Link } from './Link-DbVsHwjD.js';
import './client-CjdeEz1m.js';
import { w as writable } from './index2-C_YCgMDo.js';
import './exports-DuWZopOC.js';

const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loginSession: loginSession2 } = $$props;
  if ($$props.loginSession === void 0 && $$bindings.loginSession && loginSession2 !== void 0)
    $$bindings.loginSession(loginSession2);
  return `<nav class="w-full py-6 bg-transparent grid" aria-label="Main Navigation"><ul class="list-none m-0 flex justify-between items-center" role="navigation"><li data-svelte-h="svelte-1f1bai4"><a class="text-3xl font-semibold" href="/">LOGO</a></li> ${loginSession2 ? `<li class="relative"><button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">${escape(loginSession2.name)}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button> <div id="dropdown" class="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"${add_styles({
    "visibility": "hidden"
  })}><ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">${loginSession2.role === "admin" ? `<li>${validate_component(Link, "Links").$$render($$result, { href: "/admin" }, {}, {
    default: () => {
      return `Dashboards`;
    }
  })}</li>` : `${loginSession2.role == "manager" ? `<li>${validate_component(Link, "Links").$$render($$result, { href: "/manager" }, {}, {
    default: () => {
      return `Simple`;
    }
  })}</li>` : `<li>${validate_component(Link, "Links").$$render($$result, { href: "/", typeText: true }, {}, {
    default: () => {
      return `Profile`;
    }
  })}</li>`}`} <li>${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      loading: false,
      disable: false,
      title: "Profile Button",
      classStyled: "text-center text-white"
    },
    {},
    {
      default: () => {
        return `Đăng xuất`;
      }
    }
  )}</li></ul></div></li>` : `<li><ul class="flex gap-5"><li>${validate_component(Link, "Links").$$render(
    $$result,
    {
      href: "/login",
      fixedSize: true,
      typeText: true
    },
    {},
    {
      default: () => {
        return `Đăng nhập`;
      }
    }
  )}</li> <li>${validate_component(Link, "Links").$$render(
    $$result,
    {
      href: "/register",
      fixedSize: true,
      fontBold: true
    },
    {},
    {
      default: () => {
        return `Đăng ký`;
      }
    }
  )}</li></ul></li>`}</ul></nav>`;
});
const loginSession = writable(void 0);
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loginSession, $$unsubscribe_loginSession;
  $$unsubscribe_loginSession = subscribe(loginSession, (value) => $loginSession = value);
  let { data } = $$props;
  const { user } = data;
  set_store_value(loginSession, $loginSession = user, $loginSession);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_loginSession();
  return `${validate_component(NavBar, "NavBar").$$render($$result, { loginSession: $loginSession }, {}, {})} <main class="w-full">${slots.default ? slots.default({}) : ``} </main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DJuEb1ym.js.map
