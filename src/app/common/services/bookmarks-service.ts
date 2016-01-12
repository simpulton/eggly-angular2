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
        return (this.dataStore.bookmarks.length !== 0) ?
          this.bookmarksObserver.next(this.dataStore.bookmarks) :
          this.getFreshBookmarks();
    };

    getFreshBookmarks() {
        return this.http.get(this.URLS.FETCH)
            .map(response => response.json())
            .subscribe(data => {
              this.dataStore.bookmarks = data;
              this.bookmarksObserver.next(this.dataStore.bookmarks);
            }, error => console.log('Could not load bookmarks'));
    };

    getBookmarkById(bookmarks: Bookmark[], bookmarkId: string): Bookmark {
        return find(bookmarks, bookmark => bookmark.id === bookmarkId);
    };

    createBookmark(bookmarks: Bookmark[], bookmark: Bookmark): any {
        bookmark.id = this.generateUUID(); // NOTE: Simulating server

        return this.bookmarksObserver.next([...bookmarks, bookmark]);
    };

    updateBookmark(bookmarks: Bookmark[], bookmark: Bookmark): any {
        let index = findIndex(bookmarks, (b) => b.id === bookmark.id);

        return this.bookmarksObserver.next([
          ...bookmarks.slice(0, index),
          bookmark,
          ...bookmarks.slice(index + 1)
        ]);
    };

    deleteBookmark(bookmarks: Bookmark[], bookmark: Bookmark): any {
        let index = findIndex(bookmarks, (b) => b.id === bookmark.id);

        return this.bookmarksObserver.next([
          ...bookmarks.slice(0, index),
          ...bookmarks.slice(index + 1)
        ]);
    };

    // NOTE: Utility function to simulate server generated IDs
    private generateUUID(): string {
      return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
        .replace(/1|0/g, function() {
          return (0 | Math.random() * 16).toString(16);
        });
    };
}
