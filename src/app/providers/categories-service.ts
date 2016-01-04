import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {find} from 'lodash';
import {Category} from './category-model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriesService {
  private currentCategory: Category = {
    id: 0,
    name: ''
  };
  private categories: Category[] = undefined;
  private URLS: { FETCH: string } = {
    FETCH: 'data/categories.json'
  };

  constructor(public http: Http) { };

  cacheCategories(result: Category[]): Category[] {
    this.categories = result;
    return this.categories;
  }

  getCategories(): Promise<Category[]> {
    return this.categories
      ? Promise.resolve(this.categories)
      : this.http.get(this.URLS.FETCH)
        .map(res => this.cacheCategories(res.json()))
        .toPromise();
  }

  setCurrentCategory(categoryName: string): void {
    this.getCategoryByName(categoryName)
      .then((category: Category) => this.currentCategory = category);
  }

  getCurrentCategory(): Category {
    return this.currentCategory;
  }

  getCurrentCategoryName(): string {
    return this.currentCategory ? this.currentCategory.name : '';
  }

  getCategoryByName(categoryName: string): Promise<Category> {
    let findCategory = (categories: Category[]) => {
      return find(categories, { name: categoryName });
    };

    if (this.categories) {
      return Promise.resolve(this.categories)
        .then((categories: Category[]) => findCategory(categories));
    } else {
      return this.getCategories()
        .then((categories: Category[]) => findCategory(categories));
    }
  }
}
