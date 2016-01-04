import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Categories} from './categories/categories';
import {Bookmarks} from './categories/bookmarks/bookmarks';
import {BookmarkCreate} from './categories/bookmarks/create/bookmark-create';
import {BookmarksService} from './providers/bookmarks-service';

@Component({
  selector: 'app',
  providers: [ BookmarksService ],
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
  { path: '/', component: Bookmarks, name: 'Bookmarks' },
  { path: '/:category/bookmarks/create', component: BookmarkCreate, name: 'Create' }
])

export class App { }
