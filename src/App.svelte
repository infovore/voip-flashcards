<script>
  import { flashMessage} from "./stores.js";
  import Button from "./components/Button.svelte";
  import Flash from "./components/Flash.svelte";
</script>

<main>
  {#if $flashMessage.label}
  <Flash />
  {:else}
  <div id="buttons">
    <h1>VOIP Flashcards</h1>
    <p>Tap to pick a message. Tap to clear. Hold up to your video conference.</p>
    <p class='small'>Made by <a href="https://tomarmitage.com">Tom Armitage</a> (tom@infovore.org)</p>
    <Button label="You're on mute" />
    <Button label="Everyone is talking." />
    <Button label="One at a time." />
    <Button label="I'd like to speak." />
    <Button label="Someone else would like to speak." />
    <Button label="You have been talking a long time." />
    <Button isEmoji={true} label="👍" />
    <Button isEmoji={true} label="👎" />
    <Button isEmoji={true} label="👋" />
    <Button isEmoji={true} label="🙌" />
    <Button isEmoji={true} label="👏" />
    <Button isEmoji={true} label="👌" />
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