import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {find} from 'lodash';
import {Category} from '../models/category-model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class CategoriesService {
    categories$: Observable<Array<Category>>;
    private categoriesObserver: any;
    private dataStore: {
        categories: Category[]
    };

    private URLS: {FETCH: string} = {
        FETCH: 'data/categories.json'
    };

    constructor(private http: Http) {
        this.categories$ = new Observable(observer =>
            this.categoriesObserver = observer)
            .share();

        this.dataStore = { categories: [] };
    }

    getCategories() {
        this.http.get(this.URLS.FETCH)
            .map(response => response.json())
            .subscribe(data => {
              this.dataStore.categories = data;
              this.categoriesObserver.next(this.dataStore.categories);
            }, error => console.log('Could not load categories'));
    };
}
