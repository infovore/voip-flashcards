<script>
  import { flashMessage} from "./stores.js";
  import Button from "./components/Button.svelte";
  import Flash from "./components/Flash.svelte";
</script>

<main>
  {#if $flashMessage}
  <Flash />
  {:else}
  <div id="buttons">
    <Button label="You're on mute" />
    <Button label="Everyone is talking." />
    <Button label="One at a time." />
    <Button label="I'd like to speak." />
    <Button label="Someone else would like to speak." />
    <Button label="You have been talking a long time." />
    <Button label="👍" />
    <Button label="👎" />
    <Button label="👋" />
    <Button label="🙌" />
    <Button label="👏" />
    <Button label="👌" />
  </div>
  {/if}
</main>

<style>
main {
  height: 100%;
}
#buttons {
  margin: 2rem 0;
}
</style>