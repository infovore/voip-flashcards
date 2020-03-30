<script>
  import appData from "../../data/voipcards.json";
  import { config, flashMessage } from "../stores.js";
  import { onDestroy } from 'svelte';

  import Button from "../components/Button.svelte";
  import Options from "../components/Options.svelte";

  const configUnsub = config.subscribe(configJson => localStorage.setItem("voipcardsConfig", JSON.stringify(configJson)));

  onDestroy(configUnsub);
</script>
  <div id="buttons">
    <Options />
    <h1>VOIP Flashcards</h1>
    <p>Designed for mobile. Tap to pick a message. Tap to clear. Hold up to your video conference. Choose mirroring, colour scheme, skin tone, and language, from the options picker.</p>
    <p class='small'><a href="https://tomarmitage.com/2020/03/25/voipcards-or-on-solutionising/">II wrote about this app, and why I'm not sure this is actually that good, here.</a></p>
    <p class='small'>Made by <a href="https://tomarmitage.com">Tom Armitage</a> (<a href="https://twitter.com/tom_armitage">@tom_armitage</a>). It's <a href="https://github.com/infovore/voip-flashcards">on Github</a>.</p>

    {#each appData.text[$config.language] as message}
    <Button {...message} />
    {/each}
    {#each appData.skinEmoji[$config.skinTone] as message}
    <Button {...message} isEmoji={true} />
    {/each}
    {#each appData.emoji as message}
    <Button {...message} isEmoji={true} />
    {/each}
  </div>
  <footer>
    Made by <a href="https://tomarmitage.com">Tom Armitage</a> (<a href="https://twitter.com/tom_armitage">@tom_armitage</a>). It's <a href="https://github.com/infovore/voip-flashcards">on Github</a>.
  </footer>

<style>
h1 {
  margin: 0 0 1rem;
}
#buttons {
  margin: 2rem 0;
}

.small {
  font-size: 0.85rem;
}

footer {
  font-size: 0.85rem;
  border-top: 1px solid #ccc;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
}
</style>