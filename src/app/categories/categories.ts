import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {CategoriesService} from '../providers/categories-service';

@Component({
  selector: 'categories',
  providers: [ FORM_PROVIDERS, CategoriesService],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [],
  template: require('./categories.tmpl.html')
})

export class Categories {
    public categories;

    constructor(public CategoriesService: CategoriesService) {};

    ngOnInit() {
        this.CategoriesService.getCategories()
            .subscribe(
                data => this.categories = data,
                error => console.error(error)
            );
    }
}
