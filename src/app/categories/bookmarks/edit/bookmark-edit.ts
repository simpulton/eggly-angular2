import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {BookmarksService} from '../../../providers/bookmarks-service';

@Component({
  selector: 'bookmark-edit',
  providers: [ FORM_PROVIDERS],
  directives: [ ],
  pipes: [],
  template: require('./bookmark-edit.tmpl.html')
})

export class BookmarkEdit {
    public bookmark;
    public editedBookmark;

    constructor(
        public BookmarksService: BookmarksService,
        private RouteParams: RouteParams,
        private Router: Router
    ) {}

    ngOnInit() {
        this.bookmark = this.editedBookmark = {};

        this.BookmarksService.getBookmarkById(this.RouteParams.get('bookmarkId'))
            .subscribe(bookmark => {
                if (bookmark) {
                    this.bookmark = bookmark;
                    this.editedBookmark = _.extend(this.bookmark, {});
                } else {
                    this.returnToBookmarks();
                }
            });
    }

    returnToBookmarks() {
        this.Router.navigate(['/Bookmarks', {
            category: this.RouteParams.get('category')
        }]);
    }

    updateBookmark() {
        this.bookmark = _.extend(this.editedBookmark, {});
        this.BookmarksService.updateBookmark(this.editedBookmark);
        this.returnToBookmarks();
    }

    cancelEditing() {
        this.returnToBookmarks();
    }
}
