<script lang="ts">
    import { getTimeIn, randomStr } from "$lib";
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import {
        blur,
        fade,
        fly,
    } from 'svelte/transition';
    import {
        cubicOut
    } from 'svelte/easing';
    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    let time = $derived(getTimeIn(data.timezone));
    let charAmount = $state(0);

    let audio: HTMLAudioElement;
    let showNotification = $state(false);

    function playAudio() {
        if (audio.paused) {
            audio.volume = 0.5;
            audio.play().then(() => {
                showNotification = true;
                setTimeout(() => showNotification = false, 3000);
            }).catch(() => {});
        }
    }

    onMount(() => {
        charAmount = Math.floor(window.innerWidth / 20);
        window.onkeydown = (e) => {
            if (e.code === "Space") {
                playAudio();
                window.onkeydown = null;
            }
        };
    });
</script>

<audio bind:this={audio} src="/hk-white-palace-ost.mp3" loop></audio>

<a href="https://hackclub.com" target="_blank" class="z-50 fixed top-24 sm:top-12 md:top-4 -left-2 hover:left-0">
  <img src="https://assets.hackclub.com/flag-orpheus-left.svg" alt="Hack Club Orpheus Flag" class="h-16">
</a>

<nav class="flex flex-col gap-0 items-center z-50 fixed top-24 sm:top-12 md:top-4 right-0 font-semibold bg-ctp-surface0 pr-4 pl-2 py-1 rounded-l-xl border-y border-l border-ctp-sky">
    <a href="https://nixwebr.ing" class="no-underline text-sm text-ctp-text">nix-webring</a>
    <div class="text-2xl">
        <a href="https://nixwebr.ing/prev/satr14" class="no-underline text-ctp-text">&lt;</a>
        <a href="https://nixwebr.ing/rand" class="no-underline text-ctp-text">&#9858;</a>
        <a href="https://nixwebr.ing/next/satr14" class="no-underline text-ctp-text">&gt;</a>
    </div>
</nav>

{#if showNotification}
    <div class="z-50 fixed top-6 right-6 left-6 flex justify-center items-center">
        <div class="flex items-center gap-3 bg-ctp-surface0 text-ctp-text px-4 py-3 rounded-xl shadow-lg border border-ctp-sky" transition:fly={{ y: 20, duration: 300, easing: cubicOut }}>
            <span class="text-lg">♪</span>
            <div class="text-sm">
                <p class="m-0 font-medium">Now Playing</p>
                <p class="m-0 text-ctp-subtext0 text-xs">White Palace — Hollow Knight OST</p>
            </div>
        </div>
    </div>
{/if}

<div class="fixed top-0 left-0 w-full h-full animate-[rainbow_20s_linear_infinite,breathing_8s_ease-in-out_infinite]" style="background: linear-gradient(-6deg, hsl(var(--rainbow-hue-bottom), 70%, 60%), transparent, hsl(var(--rainbow-hue-top), 70%, 60%));" transition:fade={{
    duration: 1500, easing: cubicOut
}}></div>



<div class="fixed top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center select-none" transition:blur={{
    duration: 1000, easing: cubicOut,
}}>
    <div class="font-[Stray,monospace] group whitespace-nowrap text-center text-5xl my-4 cursor-default -rotate-6 leading-10 text-ctp-overlay1 hover:text-ctp-base">
        <div class="inline-flex relative overflow-hidden">
            <span class="animate-[marquee_10s_linear_infinite] whitespace-nowrap">
                {randomStr(charAmount)}
            </span>
            <span class="absolute top-0 animate-[marquee2_10s_linear_infinite] whitespace-nowrap">
                {randomStr(charAmount)}
            </span>
        </div><br>
        <span class="block">{randomStr(Math.round(charAmount-data.name.length/2))}<a href="https://git.satr14.my.id/satr14/5th-site-expanded" target="_blank" class="group-hover:px-8 no-underline text-ctp-subtext1 group-hover:text-ctp-text">{data.name.toUpperCase()}</a>{randomStr(Math.round(charAmount-data.name.length/2))}</span>
        <div class="inline-flex relative overflow-hidden">
            <span class="animate-[marquee_10s_linear_infinite_reverse] whitespace-nowrap">
                {randomStr(charAmount)}
            </span>
            <span class="absolute top-0 animate-[marquee2_10s_linear_infinite_reverse] whitespace-nowrap">
                {randomStr(charAmount)}
            </span>
        </div><br>
    </div>
</div>

<div class="fixed top-0 left-0 w-full text-base flex justify-center items-center">
    <nav class="py-2 px-4 backdrop-blur rounded-t-3xl border-ctp-base hover:border-ctp-sky">
        <p class="animate-pulse italic text-base text-center">
            <span>"{data.quote}"</span><br>
            <span class="hidden sm:block">Press [Space] to continue.</span>
            <span class="sm:hidden">Scroll to continue.</span>
        </p>
    </nav>
</div>
    
<div class="h-[calc(100%-7rem)] sm:h-[calc(100%-6rem)]"></div>

<div class="backdrop-blur-md backdrop-brightness-75 w-[calc(100%-2rem)] ml-4 pt-4 border-t-2 border-x-2 border-ctp-surface1 hover:border-ctp-sky shadow-inner rounded-t-3xl" transition:fly={{
    duration: 1500, easing: cubicOut, y: 200, opacity: 0,
}}>
    <div class="max-w-3xl mx-auto px-4 pt-2 sm:pt-4">
        <header>
            <nav class="overflow-hidden flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center sm:gap-4 text-lg max-w-full w-full px-4 overflow-y-auto text-nowrap">
                <div class="flex justify-center gap-4 sm:gap-6">
                    {#each Object.entries(data.socials) as [name, url]}
                        <a href={url} target="_blank">
                          <img src="https://cdn.simpleicons.org/{name}/cdd6f4" alt={name} class="h-6 sm:h-4 aspect-square" />
                        </a>
                    {/each}
                </div>
                <a href="/#abt" id="abt" class="text-center no-underline text-xl font-extrabold" onclick={playAudio}>&uarr;</a>
                <p class="text-center m-0 font-mono italic hidden md:block">curl https://satr14.my.id</p>
            </nav>
        </header>
        
        <main>
            <article>
                <p class="text-center">
                  {#each data.roles as role, i}
                    {i ? " // " : ""}
                    <b>{role}</b>
                  {/each}
                </p>
                <p>{data.description}</p>
                <p class="text-sm"><i>
                    Located in <b>{data.location}</b>. It's <b>{time}</b> in <b>{data.timezone}</b>.
                </i></p>
                <p class="flex flex-wrap gap-2 text-sm">
                    {#each data.skills as skill}
                        <span class="bg-ctp-surface0 text-ctp-text px-2 py-1 rounded-full no-underline text-xs sm:text-sm">{skill}</span>
                    {/each}
                </p>
                <div class="flex flex-row gap-1">
                    {#each Object.entries(data.links) as [title, url]}
                        <a href={url} target="_blank" class="flex items-center justify-between rounded-lg px-2 py-1 hover:bg-ctp-surface0 text-sm">
                            {title}
                            <span class="text-ctp-overlay1 text-xs">↗</span>
                        </a>
                    {/each}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-4">
                    {#each Object.entries(data.communities) as [name, details]}
                        <a href={details.url} target="_blank" class="flex items-center gap-3 rounded-lg p-2 hover:bg-ctp-surface0">
                            <img src={details.icon} alt={name} class="size-9 rounded-lg" loading="lazy" />
                            <div>
                                <span class="text-sm block leading-tight text-ctp-text font-bold">{name}</span>
                                <span class="text-xs text-ctp-subtext0">{details.role}</span>
                            </div>
                        </a>
                    {/each}
                </div>
            </article>
        </main>
    </div>
</div>