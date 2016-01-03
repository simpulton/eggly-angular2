import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {App} from './app/app';

export function main() {
  return bootstrap(App, [
    ELEMENT_PROBE_PROVIDERS
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
