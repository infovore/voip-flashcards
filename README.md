# VOIP Flashcards

Because sometimes people can't hear you. Hat tip to Alice Taylor for the original idea.

## Suggesting content

Add it to `data/voipcard.json`: you can see how internationalisation works. Emoji with skin-tone variables should be in `skinEmoji`; generic emoji that are the same in all territories can be children of `emoji`.

Then, make a pull request; I'll probably accept. Or: run your own version of the repo! It deploys nicely to Netlify.

## Status

Moderately passable version 0.4.0. Options menu now lets you:

* pick language
* choose skin tone
* toggle mirroring


## Development

It's a [Svelte](https://svelte.dev) app.

Installing dependencies:

    npm install

Running in development mode:

    npm run dev

Build to `/public`

    npm run build

## Credits

Original code and English text by Tom Armitage  
Dutch translation by Dries De Roeck  
German translation by Kai Brueckers  
