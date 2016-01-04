import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Bookmark} from './bookmark-model';
import {find, findIndex, remove} from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = undefined;
  private URLS: { FETCH: string } = {
    FETCH: 'data/bookmarks.json'
  };

  constructor(public http: Http) { };

  getBookmarks(): Promise<Bookmark[]> {
    return this.bookmarks
      ? Promise.resolve(this.bookmarks)
      : this.http.get(this.URLS.FETCH)
        .map(res => {
          return this.cacheBookmarks(res.json());
        }).toPromise();
  }

  cacheBookmarks(result: Bookmark[]): Bookmark[] {
    this.bookmarks = result;
    return this.bookmarks;
  }


  findBookmark(bookmarkId: string): Bookmark {
    return find(this.bookmarks, function(bookmark: Bookmark) {
      return bookmark.id === parseInt(bookmarkId, 10);
    });
  }

  getBookmarkById(bookmarkId: string): Promise<Bookmark> {
    let findBookmark = (bookmarks: Bookmark[]) => {
      return find(bookmarks, { id: parseInt(bookmarkId) });
    };

    if (this.bookmarks) {
      return Promise.resolve(this.bookmarks)
        .then(bookmarks => findBookmark(bookmarks));
    } else {
      return this.getBookmarks()
        .then(bookmarks => findBookmark(bookmarks));
    }
  }

  createBookmark(bookmark: Bookmark): void {
    bookmark.id = this.bookmarks.length;
    this.bookmarks.push(bookmark);
  }

  updateBookmark(bookmark: Bookmark): void {
    var index = findIndex(this.bookmarks, function(b: Bookmark) {
      return b.id === bookmark.id;
    });

    this.bookmarks[index] = bookmark;
  }

  deleteBookmark(bookmark: Bookmark): void {
    remove(this.bookmarks, function (b: Bookmark) {
      return b.id === bookmark.id;
    });
  }
}
