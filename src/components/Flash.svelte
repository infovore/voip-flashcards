
<script>
  import stringHash from "string-hash";
  import { flashMessage, config } from "../stores.js";

  function clearFlash() {
    let newMessage = {};
    let hash = stringHash($flashMessage.label);
    flashMessage.update(m => newMessage);
    window.setTimeout(() => {
      const el = document.getElementById(hash);
      el.scrollIntoView({block: "center"});
    },50)
  }
</script>

<div class="outer {$config.invertColor ? "invert" : ""} {$config.mirror ? 'mirror' : ''}" on:click={clearFlash}>
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

.invert {
  color: white;
  background: black;
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
  padding: 0 1rem;
}

.isemoji {
  font-size: 200%;
}
</style>