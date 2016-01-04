import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {CategoriesService} from '../providers/categories-service';
import {Category} from '../providers/category-model';

@Component({
  selector: 'categories',
  providers: [ CategoriesService ],
  directives: [ ROUTER_DIRECTIVES ],
  template: require('./categories.tmpl.html'),
  styles: [ require('./categories.css') ]
})

export class Categories {
  categories: Category[] = undefined;

  constructor(public CategoriesService: CategoriesService) {};

  ngOnInit() {
    this.CategoriesService.getCategories()
      .then(
        (data: Category[]) => this.categories = data,
        error => console.error(error)
      );
  }
}
