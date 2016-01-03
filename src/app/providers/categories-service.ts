import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {find} from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriesService {
    private categories: Object[];
    private URLS: {FETCH: string} = {
        FETCH: 'data/categories.json'
    };

    constructor(public http: Http) {};

    cacheCategories(result: Object[]): Object[] {
        this.categories = result;
        return this.categories;
    };

    getCategories(): Promise<Object[]> {
        return this.categories
            ? Promise.resolve(this.categories)
            : this.http.get(this.URLS.FETCH)
                .map(res => this.cacheCategories(res.json()))
                .toPromise();
    };
}
