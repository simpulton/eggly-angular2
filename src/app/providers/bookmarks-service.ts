import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import * as Rx from 'rxjs';
import {find, remove, findIndex} from 'lodash';

interface IBookmark {
    id: number; title: string; url: string; category: string;
}

@Injectable()
export class BookmarksService {
    private currentCategory: IBookmark;
    private bookmarks: IBookmark[];
    private URLS: {FETCH: string} = {
        FETCH: 'data/bookmarks.json'
    };

    constructor(public http: Http) {};

    getBookmarks() {
        return this.bookmarks
            ? Rx.Observable.of(this.bookmarks)
            : this.http.get(this.URLS.FETCH)
                .map(res => {
                    return this.cacheBookmarks(res.json());
                });
    }

    cacheBookmarks(result) {
        this.bookmarks = result;
        return this.bookmarks;
    }

    findBookmark(bookmarkId) {
        return find(this.bookmarks, function (bookmark) {
            return bookmark.id === parseInt(bookmarkId, 10);
        });
    }

    getBookmarkById(bookmarkId) {
        let findBookmark = (bookmarks) => {
            return find(bookmarks, {id: parseInt(bookmarkId)});
        };

        if (this.bookmarks) {
            return Rx.Observable.of(this.bookmarks)
                .map(bookmarks => findBookmark(bookmarks));
        } else {
            return this.getBookmarks()
                .map(bookmarks => findBookmark(bookmarks));
        }
    };

    createBookmark(bookmark) {
        bookmark.id = this.bookmarks.length;
        this.bookmarks.push(bookmark);
    };

    updateBookmark(bookmark) {
        var index = findIndex(this.bookmarks, function (b) {
            return b.id === bookmark.id;
        });

        this.bookmarks[index] = bookmark;
    };

    deleteBookmark(bookmark) {
        remove(this.bookmarks, function (b) {
            return b.id === bookmark.id;
        });
    };
}
