import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.mxIptFYY.js","_app/immutable/chunks/scheduler.SvYxWDf0.js","_app/immutable/chunks/index.tReDjvA9.js","_app/immutable/chunks/index.62iC4oRv.js"];
export const stylesheets = ["_app/immutable/assets/2.oq5aOWfL.css"];
export const fonts = [];
