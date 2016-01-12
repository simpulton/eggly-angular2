import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {BookmarksService} from '../../../common/services/bookmarks-service';
import {Bookmark} from '../../../common/models/bookmark-model';
import {clone} from 'lodash';

@Component({
  selector: 'bookmark-save',
  providers: [ FORM_PROVIDERS],
  template: require('./bookmark-save.tmpl.html')
})

export class BookmarkSave {
    bookmarks: Bookmark[];
    bookmark: Bookmark;
    editedBookmark: Bookmark = {
        id: null,
        title: '',
        url: '',
        category: null
    };

    constructor(
        private bookmarksService: BookmarksService,
        private routeParams: RouteParams,
        private router: Router
    ) {}

    ngOnInit() {
        this.bookmarksService.bookmarks$
          .subscribe(updatedBookmarks => {
              let id = this.routeParams.get('bookmarkId');
              this.bookmarks = updatedBookmarks;
              this.initBookmarks(updatedBookmarks, id);
              this.initEditedBookmark();
          });

        this.bookmarksService.getBookmarks();
    }

    initEditedBookmark(): void {
        this.editedBookmark.category = this.routeParams.get('category');
    }

    initBookmarks(bookmarks, id): void {
        this.bookmark = this.bookmarksService.getBookmarkById(this.bookmarks, id);
        if (this.bookmark) this.editedBookmark = clone(this.bookmark);
    }

    returnToBookmarks(): void {
        this.router.navigate(['/Bookmarks', {
            category: this.routeParams.get('category')
        }]);
    }

    saveBookmark(): void {
        if (this.editedBookmark.id) {
            this.bookmarksService.updateBookmark(this.bookmarks, this.editedBookmark);
        } else {
            this.bookmarksService.createBookmark(this.bookmarks, this.editedBookmark);
        }
        this.returnToBookmarks();
    }

    cancel(): void {
        this.returnToBookmarks();
    }
}
