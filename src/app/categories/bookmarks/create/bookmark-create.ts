import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {BookmarksService} from '../../../providers/bookmarks-service';

@Component({
  selector: 'bookmark-create',
  providers: [ FORM_PROVIDERS],
  directives: [ ],
  pipes: [],
  template: require('./bookmark-create.tmpl.html')
})

export class BookmarkCreate {
    public newBookmark: any;

    constructor(
        public RouteParams: RouteParams,
        public Router: Router,
        public BookmarksService: BookmarksService
    ) {}

    ngOnInit() {
        this.resetForm();

        this.BookmarksService.getBookmarks().subscribe();
    }

    returnToBookmarks() {
        this.Router.navigate(['Bookmarks', {
            category: this.RouteParams.get('category')
        }]);
    }

    cancelCreating() {
        this.returnToBookmarks();
    }

    createBookmark() {
        this.BookmarksService.createBookmark(this.newBookmark);
        this.returnToBookmarks();
    }

    resetForm() {
        this.newBookmark = {
            title: '',
            url: '',
            category: this.RouteParams.get('category')
        };
    }
}
