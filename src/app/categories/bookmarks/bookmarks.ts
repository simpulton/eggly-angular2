import {Component, Pipe} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {BookmarksService} from '../../providers/bookmarks-service';
import {CategoriesService} from '../../providers/categories-service';
import {CategoryFilter} from '../category-filter';
import {BookmarkCreate} from './create/bookmark-create';
import {BookmarkEdit} from './edit/bookmark-edit';

@Component({
  selector: 'bookmarks',
  providers: [ FORM_PROVIDERS, CategoriesService],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [CategoryFilter],
  template: require('./bookmarks.tmpl.html')
})

export class Bookmarks {
    public bookmarks: any;
    public category: any;

    constructor(
        public BookmarksService: BookmarksService,
        public CategoriesService: CategoriesService,
        private RouteParams: RouteParams
    ) {}

    ngOnInit() {
        this.CategoriesService.setCurrentCategory(this.RouteParams.get('category'));

        this.getBookmarks();
    }

    getBookmarks() {
        this.BookmarksService.getBookmarks()
            .subscribe(
                data => this.bookmarks = data,
                error => console.error(error)
            );
    }

    deleteBookmark(bookmark) {
        this.BookmarksService.deleteBookmark(bookmark);

        this.getBookmarks();
    }
}
