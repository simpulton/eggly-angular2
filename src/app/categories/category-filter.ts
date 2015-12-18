import {Pipe} from 'angular2/core';

@Pipe({
    name: 'category'
})

export class CategoryFilter {
    transform(value, [category]) {
        console.log('filtering');
        if (value) {
            return category
                ? value.filter((item) => item.category === category)
                : value;
        }
    }
}
