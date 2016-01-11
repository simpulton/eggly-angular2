import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {find, remove, findIndex} from 'lodash';
import {Bookmark} from '../models/bookmark-model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class BookmarksService {
    bookmarks$: Observable<Array<Bookmark>>;
    private bookmarksObserver: any;
    private dataStore: {
        bookmarks: Bookmark[]
    };

    private URLS: {FETCH: string} = {
        FETCH: 'data/bookmarks.json'
    };

    constructor(private http: Http) {
        this.bookmarks$ = new Observable(
            observer => this.bookmarksObserver = observer
          )
          .share();

        this.dataStore = { bookmarks: [] };
    }

    getBookmarks() {
        this.http.get(this.URLS.FETCH)
            .map(response => response.json())
            .subscribe(data => {
              this.dataStore.bookmarks = data;
              this.bookmarksObserver.next(this.dataStore.bookmarks);
            }, error => console.log('Could not load categories'));
    };

    getBookmarkById(bookmarkId: string): Bookmark {
        return find(this.dataStore.bookmarks, function (bookmark: Bookmark) {
            return bookmark.id === bookmarkId;
        });
    };

    createBookmark(bookmark: Bookmark): void {
        bookmark.id = this.generateUUID();
        this.dataStore.bookmarks.push(bookmark);
        this.bookmarksObserver.next(this.dataStore.bookmarks);
    };

    updateBookmark(bookmark: Bookmark): void {
        this.dataStore.bookmarks.forEach((b, i) => {
            if (b.id === bookmark.id) { this.dataStore.bookmarks[i] = bookmark; }
        });

        this.bookmarksObserver.next(this.dataStore.bookmarks);
    };

    deleteBookmark(bookmark: Bookmark): void {
        this.dataStore.bookmarks.forEach((b, index) => {
            if (b.id === bookmark.id) { this.dataStore.bookmarks.splice(index, 1); }
        });

        this.bookmarksObserver.next(this.dataStore.bookmarks);
    };

    // NOTE: Utility function to simulate server generated IDs
    private generateUUID(): string {
      return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
        .replace(/1|0/g, function() {
          return (0 | Math.random() * 16).toString(16);
        });
    };
}
