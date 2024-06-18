import { r as redirect } from './index-DzcLzHBX.js';

const load = ({ locals }) => {
  const { user } = locals;
  if (user) {
    redirect(302, "/");
  }
  return {};
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DQ1QRGvY.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/5.f5VYe0fl.js","_app/immutable/chunks/scheduler.DTn6sg0E.js","_app/immutable/chunks/index.BrvKFv8V.js","_app/immutable/chunks/index.Ck7fa_ST.js","_app/immutable/chunks/entry.xM4ousmE.js","_app/immutable/chunks/loginSession.Bmowu5Lj.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-CYxHVO_B.js.map
