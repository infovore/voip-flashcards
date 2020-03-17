
<script>
  import { flashMessage, config } from "../stores.js";

  function clearFlash() {
    let newMessage = {};
    flashMessage.update(m => newMessage);
  }
</script>

<div class="outer {$config.mirror ? 'mirror' : ''}" on:click={clearFlash}>
  {#if $flashMessage}
  <div class="inner {$flashMessage.isEmoji ? "isemoji" : ""}">
  {$flashMessage.label}
  </div>
  {/if}
</div>

<style>
.outer {
  font-size: 4rem;
  text-align: center;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  height: 100%;
}

.mirror {
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
.inner {
  flex: 1 1;
}

.isemoji {
  font-size: 200%;
}
</style>