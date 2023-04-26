// ==UserScript==
// @name         ChatGPT Themes
// @namespace    jekyll.arw.gpt
// @version      1.0
// @description  A userscript that adds custom themes and a few other additional customization options to ChatGPT.
// @author       Jekyll
// @match        *://chat.openai.com/*
// @downloadURL  https://raw.githubusercontent.com/PowfuArras/ChatGPT-Themes/master/userscript.js
// @updateURL    https://raw.githubusercontent.com/PowfuArras/ChatGPT-Themes/master/userscript.js
// @run-at       document-start
// ==/UserScript==

"use strict";
async function init() {
	"use strict";
	console.log("Hello World");
}

init();

if (document.body == null) {
	const target = (typeof unsafewindow) === "undefined" ? window : unsafewindow;
	target.addEventListener("DOMContentLoaded", init);
} else init();
