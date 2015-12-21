import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs';
import {find, remove, findIndex} from 'lodash';
import {Bookmark} from './bookmark-model';

@Injectable()
export class BookmarksService {
    private currentCategory: Bookmark;
    private bookmarks: Bookmark[];
    private URLS: {FETCH: string} = {
        FETCH: 'data/bookmarks.json'
    };

    constructor(public http: Http) {};

    getBookmarks(): Observable<Bookmark[]> {
        return this.bookmarks
            ? Observable.of(this.bookmarks)
            : this.http.get(this.URLS.FETCH)
                .map(res => {
                    return this.cacheBookmarks(res.json());
                });
    }

    cacheBookmarks(result: Bookmark[]): Bookmark[] {
        this.bookmarks = result;
        return this.bookmarks;
    }

    findBookmark(bookmarkId: string): Bookmark {
        return find(this.bookmarks, function (bookmark: Bookmark) {
            return bookmark.id === parseInt(bookmarkId, 10);
        });
    }

    getBookmarkById(bookmarkId: string): Observable<Bookmark> {
        let findBookmark = (bookmarks: Bookmark[]) => {
            return find(bookmarks, {id: parseInt(bookmarkId)});
        };

        if (this.bookmarks) {
            return Observable.of(this.bookmarks)
                .map(bookmarks => findBookmark(bookmarks));
        } else {
            return this.getBookmarks()
                .map(bookmarks => findBookmark(bookmarks));
        }
    };

    createBookmark(bookmark: Bookmark): void {
        bookmark.id = this.bookmarks.length;
        this.bookmarks.push(bookmark);
    };

    updateBookmark(bookmark: Bookmark): void {
        var index = findIndex(this.bookmarks, function (b: Bookmark) {
            return b.id === bookmark.id;
        });

        this.bookmarks[index] = bookmark;
    };

    deleteBookmark(bookmark: Bookmark): void {
        remove(this.bookmarks, function (b: Bookmark) {
            return b.id === bookmark.id;
        });
    };
}
