import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {CategoriesService} from '../providers/categories-service';
import 'rxjs';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'categories', // <app></app>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ FORM_PROVIDERS, CategoriesService],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [ ROUTER_DIRECTIVES ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
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
