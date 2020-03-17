
<script>
  import { flashMessage} from "../stores.js";

  export let label;
  export let isEmoji = false;

  function handleClick() {
    let newMessage = {label, isEmoji};
    flashMessage.update(m => newMessage);
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
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-size: 2rem;
  background: #f0f0f0;
  border-radius: 4px;
}
@media (max-width: 600px) {
  button {
    display: block !important;
    margin: 0 0 0.5rem;
    width: 100%;
  }
}

button:hover, button:active {
  cursor: pointer;
  background: #ddd;
  box-shadow: inset 0 0 4px #888;
}
</style>