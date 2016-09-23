import {Pipe} from '@angular/core';
import {Bookmark} from '../shared';

@Pipe({
  name: 'category'
})

export class CategoryPipe {
  transform(value: Bookmark[] = [], categoryName: string) {
    return categoryName
      ? value.filter((item) => item.category === categoryName)
      : value;
  }
}
