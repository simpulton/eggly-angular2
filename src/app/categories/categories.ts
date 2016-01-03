import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {CategoriesService} from '../providers/categories-service';

@Component({
  selector: 'categories',
  providers: [ CategoriesService ],
  pipes: [],
  template: require('./categories.tmpl.html'),
  styles: [require('./categories.css')]
})

export class Categories {
    public categories: Object[];

    constructor(public CategoriesService: CategoriesService) {};

    ngOnInit() {
        this.CategoriesService.getCategories()
            .then(
                (data: Object[]) => this.categories = data,
                error => console.error(error)
            );
    }
}
