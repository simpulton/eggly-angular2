import {Pipe} from 'angular2/core';

@Pipe({
    name: 'category'
})

export class CategoryFilter {
    transform(value = [], [category]) {
        return category
            ? value.filter((item) => item.category === category)
            : value;
    }
}
