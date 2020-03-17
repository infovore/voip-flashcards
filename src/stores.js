import { writable } from 'svelte/store';

export const flashMessage = writable({});
export const config = writable({mirror: false, skinTone: "0", language: "en"});