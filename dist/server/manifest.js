const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icon-google.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DkUG7mVV.js","app":"_app/immutable/entry/app.B3blHwbL.js","imports":["_app/immutable/entry/start.DkUG7mVV.js","_app/immutable/chunks/entry.xM4ousmE.js","_app/immutable/chunks/scheduler.DTn6sg0E.js","_app/immutable/entry/app.B3blHwbL.js","_app/immutable/chunks/scheduler.DTn6sg0E.js","_app/immutable/chunks/index.BrvKFv8V.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-ByoXp9VM.js')),
			__memo(() => import('./chunks/1-Byg3xE7d.js')),
			__memo(() => import('./chunks/2-7Hbqz3BH.js')),
			__memo(() => import('./chunks/3-BhXsQFBJ.js')),
			__memo(() => import('./chunks/4-uvVKQ8CW.js')),
			__memo(() => import('./chunks/5-CYxHVO_B.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/auth/dashboard",
				pattern: /^\/auth\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/auth/[slug]",
				pattern: /^\/auth\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-jEdV4atD.js'))
			},
			{
				id: "/initialize_database",
				pattern: /^\/initialize_database\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DyHFUjDm.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
