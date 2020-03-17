import { writable } from 'svelte/store';

export const flashMessage = writable({});

const localConfig = localStorage.getItem("voipcardsConfig");
const defaultConfig = {mirror: false, skinTone: "0", language: "en"};

export const config = writable(localConfig ? JSON.parse(localConfig) : defaultConfig);