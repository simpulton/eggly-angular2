import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Bookmark} from './bookmark-model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookmarksService {
    private bookmarks: Bookmark[] = undefined;
    private URLS: {FETCH: string} = {
        FETCH: 'data/bookmarks.json'
    };

    constructor(public http: Http) {};

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

    createBookmark(bookmark: Bookmark): void {
        bookmark.id = this.bookmarks.length;
        this.bookmarks.push(bookmark);
    };
}
