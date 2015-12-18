import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {BookmarksService} from './app/providers/bookmarks-service';
import {App} from './app/app';

export function main() {
  return bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS,
    BookmarksService
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
