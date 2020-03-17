<script>
  import appData from "../data/voipcards.json";
  import { config, flashMessage } from "./stores.js";
  import { onDestroy } from 'svelte';

  import Button from "./components/Button.svelte";
  import Flash from "./components/Flash.svelte";
  import Options from "./components/Options.svelte";

  const configUnsub = config.subscribe(configJson => localStorage.setItem("voipcardsConfig", JSON.stringify(configJson)));

  onDestroy(configUnsub);

</script>

<main>
  {#if $flashMessage.label}
  <Flash />
  {:else}
  <div id="buttons">
    <Options />
    <h1>VOIP Flashcards</h1>
    <p>Designed for mobile. Tap to pick a message. Tap to clear. Hold up to your video conference. Choose mirroring, skin tone, and language, from the options picker.</p>
    <p class='small'>Made by <a href="https://tomarmitage.com">Tom Armitage</a> (<a href="https://twitter.com/tom_armitage">@tom_armitage</a>). It's <a href="https://github.com/infovore/voip-flashcards">on Github</a>. (Like it? <a class='tipjar' href="https://monzo.me/thomasarmitage/3.00?d=Thanks%20for%20VOIPcards!">Buy me a coffee!</a>)</p>
    {#each appData.text[$config.language] as message}
    <Button {...message} />
    {/each}
    {#each appData.skinEmoji[$config.skinTone] as message}
    <Button {...message} isEmoji={true} />
    {/each}
    {#each appData.emoji as message}
    <Button {...message} isEmoji={true} />
    {/each}
  </div>
  <footer>
    Made by <a href="https://tomarmitage.com">Tom Armitage</a> (<a href="https://twitter.com/tom_armitage">@tom_armitage</a>). It's <a href="https://github.com/infovore/voip-flashcards">on Github</a>. (Like it? <a class='tipjar' href="https://monzo.me/thomasarmitage/3.00?d=Thanks%20for%20VOIPcards!">Buy me a coffee!</a>)
  </footer>
  {/if}
</main>

<style>
main {
  height: 100%;
}
h1 {
  margin: 0 0 1rem;
}
#buttons {
  margin: 2rem 0;
}

.small {
  font-size: 0.85rem;
}

.tipjar {
  font-weight: bold;
}

footer {
  font-size: 0.85rem;
  border-top: 1px solid #ccc;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
}
</style>