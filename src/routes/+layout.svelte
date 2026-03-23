<script lang="ts">
    import type { PageData } from './$types';
    import "../app.css";
    import { onMount } from 'svelte';
    interface Props {
        data: PageData;
        children?: import('svelte').Snippet;
    }

    let { data, children }: Props = $props();

    let loaded = $state(false);
    onMount(() => {
        const handleVisibilityChange = () => loaded = document.visibilityState === 'visible';
        document.addEventListener('visibilitychange', handleVisibilityChange);
        handleVisibilityChange();
    });
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.quote} />
    <!-- <meta name="theme-color" content="#00e1ff" /> -->
</svelte:head>

{#if loaded}
    {@render children?.()}
{/if}