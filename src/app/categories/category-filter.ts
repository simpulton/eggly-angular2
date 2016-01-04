import {Pipe} from 'angular2/core';
import {Bookmark} from '../providers/bookmark-model';

@Pipe({
  name: 'category'
})

export class CategoryFilter {
  transform(value: Bookmark[] = [], [categoryName]: [string]) {
    return categoryName
      ? value.filter((item) => item.category === categoryName)
      : value;
  }
}
