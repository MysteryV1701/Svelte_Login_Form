const load = ({ locals }) => {
  const { user } = locals;
  return { user };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DJuEb1ym.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.AzpeHZ_L.js","_app/immutable/chunks/scheduler.DTn6sg0E.js","_app/immutable/chunks/index.BrvKFv8V.js","_app/immutable/chunks/loginSession.Bmowu5Lj.js","_app/immutable/chunks/entry.xM4ousmE.js","_app/immutable/chunks/Link.CK2OdIu8.js"];
const stylesheets = ["_app/immutable/assets/0.BGiq6rvL.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-ByoXp9VM.js.map
