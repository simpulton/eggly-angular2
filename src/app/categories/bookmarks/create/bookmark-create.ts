import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {BookmarksService} from '../../../providers/bookmarks-service';
import {Bookmark} from '../../../providers/bookmark-model';

@Component({
  selector: 'bookmark-create',
  providers: [ FORM_PROVIDERS ],
  directives: [ ],
  pipes: [],
  template: require('./bookmark-create.tmpl.html')
})

export class BookmarkCreate {
    public newBookmark: Bookmark;

    constructor(
        public RouteParams: RouteParams,
        public Router: Router,
        public BookmarksService: BookmarksService
    ) {}

    ngOnInit() {
        this.resetForm();

        this.BookmarksService.getBookmarks();
    }

    returnToBookmarks(): void {
        this.Router.navigate(['Bookmarks', {
            category: this.RouteParams.get('category')
        }]);
    }

    cancelCreating(): void {
        this.returnToBookmarks();
    }

    createBookmark(): void {
        this.BookmarksService.createBookmark(this.newBookmark);
        this.returnToBookmarks();
    }

    resetForm(): void {
        this.newBookmark = {
            id: 0,
            title: '',
            url: '',
            category: this.RouteParams.get('category')
        };
    }
}