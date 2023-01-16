'use strict';

window.onload = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/third-troubled-wineberry/sw.js");
  }
};
