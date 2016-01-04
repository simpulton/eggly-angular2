import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {BookmarksService} from '../../../providers/bookmarks-service';
import {Bookmark} from '../../../providers/bookmark-model';
import {clone} from 'lodash';

@Component({
  selector: 'bookmark-edit',
  providers: [ FORM_PROVIDERS ],
  template: require('./bookmark-edit.tmpl.html')
})

export class BookmarkEdit {
  public bookmark: Bookmark = {
    id: 0,
    title: '',
    url: '',
    category: ''
  };
  public editedBookmark: Bookmark = {
    id: 0,
    title: '',
    url: '',
    category: ''
  };

  constructor(
    public BookmarksService: BookmarksService,
    private RouteParams: RouteParams,
    private Router: Router
  ) { }

  ngOnInit() {
    this.BookmarksService.getBookmarkById(this.RouteParams.get('bookmarkId'))
      .then(bookmark => {
        if (bookmark) {
          this.bookmark = bookmark;
          this.editedBookmark = clone(this.bookmark);
        } else {
          this.returnToBookmarks();
        }
    });
  }

  returnToBookmarks(): void {
    this.Router.navigate(['/Bookmarks', {
      category: this.RouteParams.get('category')
    }]);
  }

  updateBookmark(): void {
    this.bookmark = clone(this.editedBookmark);
    this.BookmarksService.updateBookmark(this.editedBookmark);
    this.returnToBookmarks();
  }

  cancelEditing(): void {
    this.returnToBookmarks();
  }
}
