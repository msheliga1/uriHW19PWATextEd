import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}


/* If hot module replacement is enabled, then `module.hot` will be defined.
HMR is an opt-in feature, so it only runs in modules that contain HMR code.
It allows the developer to replace modules with new versions without having 
to restart the app or refresh the page. This feature doesn't need to be 
enabled on every module, because events will bubble up to the parent module. */
if (module.hot) {
  console.log("src/js/index.js ... module.hot true ... starting HMR server ... ");
  module.hot.accept((err) => {
    if (err) {
      console.error('Cannot apply HMR update.', err);
    }
  });
}