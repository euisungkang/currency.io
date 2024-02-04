export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.QZzAUYeA.js","app":"_app/immutable/entry/app.BJejTnea.js","imports":["_app/immutable/entry/start.QZzAUYeA.js","_app/immutable/chunks/entry._7UcNvIT.js","_app/immutable/chunks/scheduler.SvYxWDf0.js","_app/immutable/chunks/index.62iC4oRv.js","_app/immutable/entry/app.BJejTnea.js","_app/immutable/chunks/scheduler.SvYxWDf0.js","_app/immutable/chunks/index.tReDjvA9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
