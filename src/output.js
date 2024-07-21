import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
document.querySelector('#app').innerHTML = '\n  <div>\n    <a href="https://vitejs.dev" target="_blank">\n      <img src="'.concat(viteLogo, '" class="logo" alt="Vite logo" />\n    </a>\n    <a href="https://www.typescriptlang.org/" target="_blank">\n      <img src="').concat(typescriptLogo, '" class="logo vanilla" alt="TypeScript logo" />\n    </a>\n    <h1>Vite + TypeScript</h1>\n    <div class="card">\n      <button id="counter" type="button"></button>\n    </div>\n    <p class="read-the-docs">\n      Click on the Vite and TypeScript logos to learn more\n    </p>\n  </div>\n');
setupCounter(document.querySelector('#counter'));

