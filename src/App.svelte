<script>
  import messageData from "../data/messages.json";
  import { flashMessage} from "./stores.js";
  import Button from "./components/Button.svelte";
  import Flash from "./components/Flash.svelte";

  console.log(messageData);
</script>

<main>
  {#if $flashMessage.label}
  <Flash />
  {:else}
  <div id="buttons">
    <h1>VOIP Flashcards</h1>
    <p>Tap to pick a message. Tap to clear. Hold up to your video conference.</p>
    <p class='small'>Made by <a href="https://tomarmitage.com">Tom Armitage</a> (tom@infovore.org)</p>
    {#each messageData as message}
    <Button {...message} />
    {/each}
  </div>
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
</style>