
<script>
  import { mirror} from "../stores.js";

  function handleClick() {
    let newstate = !$mirror;
    mirror.update(m => newstate);
  }
</script>

<button on:click={handleClick}>
{#if $mirror}
Text will be mirrored!
{:else}
Text will not be mirrored
{/if}
</button>

<style>
button {
  padding: 1rem;
  border: 1px solid #888;
  display: inline-block;
  margin: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  background: #f0f0f0;
  border-radius: 2px;
  float: right;
}

button:hover, button:active {
  cursor: pointer;
  background: #ddd;
  box-shadow: inset 0 0 4px #888;
}
</style>