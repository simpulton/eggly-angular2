import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Category} from './category-model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriesService {
  private categories: Category[] = undefined;
  private URLS: {FETCH: string} = {
      FETCH: 'data/categories.json'
  };

  constructor(public http: Http) {};

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
}
