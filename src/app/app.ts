import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Categories} from './categories/categories';
import {Bookmarks} from './categories/bookmarks/bookmarks';
import {BookmarkCreate} from './categories/bookmarks/create/bookmark-create';
import {BookmarkEdit} from './categories/bookmarks/edit/bookmark-edit';

@Component({
  selector: 'app',
  providers: [],
  directives: [ ROUTER_DIRECTIVES, Categories ],
  pipes: [],
  styleUrls: [],
  template: `
    <main>
        <div class="container-fluid">
            <div class="row">
                <categories></categories>
                <router-outlet></router-outlet>
            </div>
        </div>
    </main>
  `
})

@RouteConfig([
  { path: '/', component: Bookmarks, name: 'Bookmarks' },
  { path: '/:category/bookmarks/create', component: BookmarkCreate, name: 'Create' },
  { path: '/:category/bookmarks/:bookmarkId/edit', component: BookmarkEdit, name: 'Edit' }
])

export class App { }
