import {Pipe} from 'angular2/core';

@Pipe({
    name: 'category'
})

export class CategoryFilter {
    transform(value, [category]) {
        if (value) {
            return value.filter((item) => item.category === category);
        }
    }
}
