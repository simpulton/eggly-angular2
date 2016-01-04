import {Component} from 'angular2/core';
import {CategoriesService} from '../providers/categories-service';

@Component({
  selector: 'categories',
  providers: [ CategoriesService ],
  template: require('./categories.tmpl.html'),
  styles: [ require('./categories.css') ]
})

export class Categories {
  categories: Object[] = undefined;

  constructor(public CategoriesService: CategoriesService) {};

  ngOnInit() {
    this.CategoriesService.getCategories()
      .then(
        (data: Object[]) => this.categories = data,
        error => console.error(error)
      );
  }
}
