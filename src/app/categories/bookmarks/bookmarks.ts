import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {clone} from 'lodash';
import {BookmarksService} from '../../providers/bookmarks-service';
import {Bookmark} from '../../providers/bookmark-model';
import {CategoriesService} from '../../providers/categories-service';
import {Category} from '../../providers/category-model';
import {CategoryFilter} from '../category-filter';

@Component({
  selector: 'bookmarks',
  providers: [ CategoriesService ],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [ CategoryFilter ],
  template: require('./bookmarks.tmpl.html')
})

export class Bookmarks {
  bookmarks: Bookmark[] = undefined;

  constructor(
    public BookmarksService: BookmarksService,
    public CategoriesService: CategoriesService,
    private RouteParams: RouteParams
  ) { }

  ngOnInit() {
    this.CategoriesService.setCurrentCategory(this.RouteParams.get('category'));
    this.getBookmarks();
  }

  getBookmarks(): void {
    this.BookmarksService.getBookmarks()
      .then(
        (data: Bookmark[]) => this.bookmarks = clone(data),
        error => console.error(error)
      );
  }

  deleteBookmark(bookmark): void {
    this.BookmarksService.deleteBookmark(bookmark);

    this.getBookmarks();
  }
}
