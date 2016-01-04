import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Categories} from './categories/categories';
import {Bookmarks} from './categories/bookmarks/bookmarks';

@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES, Categories ],
  template: `
    <main>
      <div class="container-fluid">
        <div class="row">
          <categories></categories>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [
    `
      .main {
        padding-top: 96px;
        padding-left: 24px;
      }
    `
  ]
})

@RouteConfig([
  { path: '/', component: Bookmarks, name: 'Bookmarks' }
])

export class App { }
