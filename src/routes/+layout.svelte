<script lang="ts">
	import '../app.postcss';
    import { inject } from '@vercel/analytics';
    import { dev } from '$app/environment';

    inject({ mode: dev ? 'development' : 'production' });
</script>
<svelte:head>
    <link rel="icon" type="image/svg" href={"%sveltekit.assets%/favicon.png"} />
</svelte:head>
<slot />