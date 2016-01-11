import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {CategoriesService} from '../common/services/categories-service';
import {Category} from '../common/models/category-model';

@Component({
  selector: 'categories',
  providers: [ CategoriesService ],
  directives: [ ROUTER_DIRECTIVES ],
  template: `<div class="col-sm-3 col-md-2 sidebar">
      <a [routerLink]="['/Bookmarks']" class="logo">
          <img src="img/eggly-logo.png">
      </a>
      <ul class="nav nav-sidebar">
          <li *ngFor="#category of categories">
              <a [routerLink]="['/Bookmarks', {category: category.name}]">
                  {{category.name}}
              </a>
          </li>
      </ul>
  </div>
  `,
  styles: [require('./categories.css')]
})

export class Categories {
    public categories: Category[];

    constructor(private categoriesService: CategoriesService) {};

    ngOnInit() {
        this.categoriesService.categories$.subscribe(updatedCategories => {
            this.categories = updatedCategories;
        });

        this.categoriesService.getCategories();
    }
}
