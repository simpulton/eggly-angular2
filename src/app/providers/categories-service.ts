import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import * as Rx from 'rxjs';
import * as _ from 'lodash';

interface ICategory {
    id: number; name: string;
}

@Injectable()
export class CategoriesService {
    private currentCategory: ICategory;
    private categories: ICategory[];
    private URLS: {FETCH: string} = {
        FETCH: 'data/categories.json'
    };

    constructor(public http: Http) {};

    cacheCategories(result) {
        this.categories = result;
        return this.categories;
    };

    getCategories() {
        return this.categories
            ? Rx.Observable.from(this.categories)
            : this.http.get(this.URLS.FETCH)
                .map(res => this.cacheCategories(res.json()));
    };

    setCurrentCategory(category) {
        this.getCategoryByName(category)
            .subscribe((category: ICategory) => this.currentCategory = category);
    };

    getCurrentCategory() {
        return this.currentCategory;
    };

    getCurrentCategoryName() {
        return this.currentCategory ? this.currentCategory.name : '';
    };

    getCategoryByName(categoryName: string) {
        let findCategory = (categories) => {
            return _.find(categories, {name: categoryName});
        };

        if (this.categories) {
            return Rx.Observable.from(this.categories)
                .map(categories => findCategory(categories));
        } else {
            return this.getCategories()
                .map(categories => findCategory(categories));
        }
    };

}
