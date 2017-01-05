import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { clone } from 'lodash';
import { BookmarksService } from '../../shared/bookmarks.service';
import { Bookmark } from '../../shared/bookmark';
import { CategoriesService } from '../../shared/categories.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})

export class BookmarksComponent implements OnInit {
  bookmarks: Bookmark[] = undefined;
  params: Params = {};

  constructor(
    public BookmarksService: BookmarksService,
    public CategoriesService: CategoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.params = params;
      this.CategoriesService.setCurrentCategory(params['category']);
    });

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
