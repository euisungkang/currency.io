

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Z200pxoC.js","_app/immutable/chunks/scheduler.SvYxWDf0.js","_app/immutable/chunks/index.tReDjvA9.js"];
export const stylesheets = ["_app/immutable/assets/0.rtzfn8T5.css"];
export const fonts = [];
