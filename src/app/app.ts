import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Categories} from './categories/categories';
import {Bookmarks} from './categories/bookmarks/bookmarks';
import {BookmarkCreate} from './categories/bookmarks/create/bookmark-create';
import {BookmarkEdit} from './categories/bookmarks/edit/bookmark-edit';
import {BookmarksService} from './providers/bookmarks-service';
import {CategoriesService} from './providers/categories-service';

@Component({
  selector: 'app',
  providers: [BookmarksService, CategoriesService],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [],
  styleUrls: [],
  template: `
    <main>
        <div class="container-fluid">
            <div class="row">
                <router-outlet></router-outlet>
            </div>
        </div>
    </main>
  `
})

@RouteConfig([
  { path: '/', component: Categories, name: 'Categories' },
  { path: '/categories/:category', component: Bookmarks, name: 'Bookmarks' },
  { path: '/categories/:category/bookmarks/create', component: BookmarkCreate, name: 'Create' },
  { path: '/categories/:category/bookmarks/:bookmarkId/edit', component: BookmarkEdit, name: 'Edit' }
])

export class App {
  url: string = 'https://twitter.com/AngularClass';
}
