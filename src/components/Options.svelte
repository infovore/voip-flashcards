
<script>
  import { clickOutside } from '../clickOutside.js';
  import { config } from "../stores.js";
  import appData from "../../data/voipcards.json";

  let optionsVisible = false;
  let tones = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"];


  function handleToggle() {
    optionsVisible = !optionsVisible;
  }

  function handleTone(i) {
    let newConfig = Object.assign({}, $config);
    newConfig.skinTone = i.toString();
    config.update(m => newConfig);
  }

  function handleLanguage(event) {
    let newConfig = Object.assign({}, $config);
    newConfig.language = event.target.value;
    config.update(m => newConfig);
  }

  function toggleMirror() {
    let newMirror = !$config.mirror;
    let newConfig = Object.assign({}, $config);
    newConfig.mirror = newMirror;
    config.update(m => newConfig);
  }

  function handleClickOutside() {
    optionsVisible = false;
  }
</script>

<button class='options {optionsVisible ? "selected" : ""}' on:click={handleToggle}>
Options
</button>

{#if optionsVisible}
<div class='optionspanel' use:clickOutside on:click_outside={handleClickOutside}>
  <button class='closeoptions' on:click={handleClickOutside}>close</button>
  <h2>Configuration Options</h2>
  <h3>Mirror Text?</h3>
  <button on:click={toggleMirror}>
    {#if $config.mirror}
    Text will be mirrored
    {:else}
    Text will not be mirrored
    {/if}
  </button>

  <h3>Skin tone</h3>
  {#each tones as tone, i}
  <button class="{(i.toString() == $config.skinTone) ? "selected": ""}" on:click={event => handleTone(i)}>{tone}</button>
  {/each}

  <h3>Language</h3>

  <select value={$config.language} on:change="{event => (handleLanguage(event))}">
		{#each appData.languages as language}
			<option value={language.shortcode}>
				{language.name}
			</option>
		{/each}
	</select>
</div>
{/if}

<style>
h2 {
  line-height: 1;
  margin: 0 0 1rem;
}
button {
  padding: 1rem;
  border: 1px solid #888;
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  background: #f0f0f0;
  border-radius: 4px;
  display: inline-block;
}

button.options {
  float: right;
  display: block;
  margin: 0.5rem;
}

button.closeoptions {
  float: right;
  display: block;
  margin: -0.5rem -0.5rem 0.5rem 0.5rem;
  font-style: italic;
  font-weight: normal;
  padding: 0.3rem;
}


button:hover, button:active {
  cursor: pointer;
}

button:hover, button:active, button.selected {
  cursor: pointer;
  background: #ddd;
  box-shadow: inset 0 0 4px #888;
}
.optionspanel {
  position: absolute;
  border: 1px solid #444;
  border-radius: 4px;
  background: #eee;
  padding: 2rem;
  box-shadow: 4px 4px 4px #888;
  width: 80%;
}

@media (min-width: 601px) {
  .optionspanel {
    width: 50%;
    margin: 4rem 0 0 4rem;
  }
}
</style>