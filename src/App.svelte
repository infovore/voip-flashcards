<script>
  import messageData from "../data/messages.json";
  import { flashMessage} from "./stores.js";
  import { mirror } from "./stores.js";
  import Button from "./components/Button.svelte";
  import Flash from "./components/Flash.svelte";
  import MirrorToggle from "./components/MirrorToggle.svelte";

  console.log(messageData);
</script>

<main>
  {#if $flashMessage.label}
  <Flash />
  {:else}
  <div id="buttons">
    <MirrorToggle />
    <h1>VOIP Flashcards</h1>
    <p>Designed for mobile. Choose mirroring or not. Tap to pick a message. Tap to clear. Hold up to your video conference.</p>
    <p class='small'>Made by <a href="https://tomarmitage.com">Tom Armitage</a> (<a href="https://twitter.com/tom_armitage">@tom_armitage</a>). It's <a href="https://github.com/infovore/voip-flashcards">on Github</a>. (Like it? <a class='tipjar' href="https://monzo.me/thomasarmitage/3.00?d=Thanks%20for%20VOIPcards!">Buy me a coffee!</a>)</p>
    {#each messageData as message}
    <Button {...message} />
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