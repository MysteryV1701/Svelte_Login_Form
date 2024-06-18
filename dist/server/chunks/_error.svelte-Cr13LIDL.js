import { c as create_ssr_component, a as subscribe, e as escape } from './ssr-CIFjU9jP.js';
import { p as page } from './stores-1wXTUDON.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <h4>${escape($page.error?.message)}</h4> `;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-Cr13LIDL.js.map
