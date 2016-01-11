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
    bookmark: Bookmark;
    editedBookmark: Bookmark = {
        id: null,
        title: '',
        url: '',
        category: ''
    };

    constructor(
        private bookmarksService: BookmarksService,
        private routeParams: RouteParams,
        private router: Router
    ) {}

    ngOnInit() {
        let id = this.routeParams.get('bookmarkId');
        this.bookmark = this.bookmarksService.getBookmarkById(id);
        if (this.bookmark) this.editedBookmark = clone(this.bookmark);
    }

    returnToBookmarks(): void {
        this.router.navigate(['/Bookmarks', {
            category: this.routeParams.get('category')
        }]);
    }

    saveBookmark(): void {
        if (this.editedBookmark.id) {
            this.bookmarksService.updateBookmark(this.editedBookmark);
        } else {
            this.bookmarksService.createBookmark(this.editedBookmark);
        }
        this.returnToBookmarks();
    }

    cancel(): void {
        this.returnToBookmarks();
    }
}
