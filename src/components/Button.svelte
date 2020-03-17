
<script>
  import { flashMessage} from "../stores.js";

  export let label;

  function handleClick() {
    flashMessage.update(m => label);
  }
</script>

<button on:click={handleClick}>
{label}
</button>

<style>
button {
  padding: 1rem;
  border: 1px solid #888;
  display: inline-block;
  margin: 0.5rem;
  font-size: 2rem;
  background: #f0f0f0;
}

button:hover {
  cursor: pointer;
}
</style>