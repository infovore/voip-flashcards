
<script>
  import { config } from "../stores.js";

  function handleClick() {
    let newMirror = !$config.mirror;
    let newConfig = Object.assign({}, $config);
    newConfig.mirror = newMirror;
    config.update(m => newConfig);
  }
</script>

<button on:click={handleClick}>
{#if $config.mirror}
Text will be mirrored!
{:else}
Text will not be mirrored
{/if}
</button>

<style>
button {
  padding: 1rem;
  border: 1px solid #888;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  background: #f0f0f0;
  border-radius: 4px;
  float: right;
}

button:hover, button:active {
  cursor: pointer;
  background: #ddd;
  box-shadow: inset 0 0 4px #888;
}
</style>