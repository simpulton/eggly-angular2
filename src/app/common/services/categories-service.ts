import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Category} from '../models/category-model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class CategoriesService {
    categories$: Observable<Array<Category>>;

    private URLS: {FETCH: string} = {
        FETCH: 'data/categories.json'
    };

    constructor(private http: Http) {
        this.categories$ = this.http.get(this.URLS.FETCH)
              .map(response => response.json())
              .share();
    }
}
