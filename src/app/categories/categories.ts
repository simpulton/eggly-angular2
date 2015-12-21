import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {CategoriesService} from '../providers/categories-service';
import {Category} from '../providers/category-model';

@Component({
  selector: 'categories',
  providers: [ CategoriesService ],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [],
  template: require('./categories.tmpl.html')
})

export class Categories {
    public categories: Category[];

    constructor(public CategoriesService: CategoriesService) {};

    ngOnInit() {
        this.CategoriesService.getCategories()
            .subscribe(
                (data: Category[]) => this.categories = data,
                error => console.error(error)
            );
    }
}
