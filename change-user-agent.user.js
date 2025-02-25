// ==UserScript==
// @name           Change User-Agent
// @description    Changes the User-Agent header to a custom value
// @include        *
// ==/UserScript==

// Set the custom User-Agent string
const customUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML) Chrome/88.0.4324.150 Safari/537.36';

// Set the custom User-Agent header
Object.defineProperty(navigator, 'userAgent', {
    value: customUserAgent,
    configurable: true
});
