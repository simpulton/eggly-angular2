import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs';
import {find} from 'lodash';
import {Category} from './category-model';

@Injectable()
export class CategoriesService {
    private currentCategory: Category;
    private categories: Category[];
    private URLS: {FETCH: string} = {
        FETCH: 'data/categories.json'
    };

    constructor(public http: Http) {};

    cacheCategories(result: Category[]): Category[] {
        this.categories = result;
        return this.categories;
    };

    getCategories(): Observable<Category[]> {
        return this.categories
            ? Observable.from(this.categories)
            : this.http.get(this.URLS.FETCH)
                .map(res => this.cacheCategories(res.json()));
    };

    setCurrentCategory(categoryName: string): void {
        this.getCategoryByName(categoryName)
            .subscribe((category: Category) => this.currentCategory = category);
    };

    getCurrentCategory(): Category {
        return this.currentCategory;
    };

    getCurrentCategoryName(): string {
        return this.currentCategory ? this.currentCategory.name : '';
    };

    getCategoryByName(categoryName: string): Observable<Category> {
        let findCategory = (categories: Category[]) => {
            return find(categories, {name: categoryName});
        };

        if (this.categories) {
            return Observable.from(this.categories)
                .map((categories: Category[]) => findCategory(categories));
        } else {
            return this.getCategories()
                .map((categories: Category[]) => findCategory(categories));
        }
    };

}
