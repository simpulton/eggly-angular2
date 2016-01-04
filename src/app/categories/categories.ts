import {Component} from 'angular2/core';

@Component({
  selector: 'categories',
  template: require('./categories.tmpl.html'),
  styles: [ require('./categories.css') ]
})

export class Categories {
    public categories: Object[] = [
        {'id': 0, 'name': 'Development'},
        {'id': 1, 'name': 'Design'},
        {'id': 2, 'name': 'Exercise'},
        {'id': 3, 'name': 'Humor'}
    ];
}
