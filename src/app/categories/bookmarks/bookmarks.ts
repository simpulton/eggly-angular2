import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {clone} from 'lodash';
import {BookmarksService} from '../../common/services/bookmarks-service';
import {CategoriesService} from '../../common/services/categories-service';
import {Category} from '../../common/models/category-model';
import {Bookmark} from '../../common/models/bookmark-model';
import {CategoryFilter} from '../category-filter';

@Component({
  selector: 'bookmarks',
  providers: [CategoriesService],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [CategoryFilter],
  template: require('./bookmarks.tmpl.html')
})

export class Bookmarks {
    bookmarks: Bookmark[];
    categoryName: string = '';

    constructor(
        private bookmarksService: BookmarksService,
        private categoriesService: CategoriesService,
        private routeParams: RouteParams
    ) {}

    ngOnInit() {
        this.categoryName = this.routeParams.get('category');

        this.bookmarksService.bookmarks$
          .subscribe(updatedBookmarks => {
              this.bookmarks = updatedBookmarks;
          });

        this.bookmarksService.getBookmarks();
    }

    deleteBookmark(bookmark): void {
        this.bookmarksService.deleteBookmark(this.bookmarks, bookmark);
    }
}
