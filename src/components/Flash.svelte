
<script>
  import { flashMessage} from "../stores.js";

  function clearFlash() {
    flashMessage.update(m => null);
  }
</script>

<div class="outer" on:click={clearFlash}>
  {#if $flashMessage}
  <div class="inner">
  {$flashMessage}
  </div>
  {/if}
</div>

<style>
.outer {
  font-size: 4rem;
  text-align: center;
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  height: 100%;
}
.inner {
  flex: 1 1;
}
</style>