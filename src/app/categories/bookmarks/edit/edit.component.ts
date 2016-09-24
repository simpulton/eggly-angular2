import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { BookmarksService } from '../../../shared/bookmarks.service';
import { Bookmark } from '../../../shared/bookmark';
import { clone } from 'lodash';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public bookmark: Bookmark = {
    id: 0,
    title: '',
    url: '',
    category: ''
  };

  public editedBookmark: Bookmark = {
    id: 0,
    title: '',
    url: '',
    category: ''
  };

  params: Params = {};

  constructor(
    public BookmarksService: BookmarksService,
    private Route: ActivatedRoute,
    private Router: Router
  ) { }

  ngOnInit() {
    this.Route.params.forEach((params: Params) => {
      this.params = params;
      this.getBookmark();
    });
  }

  getBookmark(): void {
    this.BookmarksService.getBookmarkById(this.params['bookmarkId'])
      .then(bookmark => {
        if (bookmark) {
          this.bookmark = bookmark;
          this.editedBookmark = clone(this.bookmark);
        } else {
          this.returnToBookmarks();
        }
      });
  }

  returnToBookmarks(): void {
    this.Router.navigate([this.params['category']]);
  }

  updateBookmark(): void {
    this.bookmark = clone(this.editedBookmark);
    this.BookmarksService.updateBookmark(this.editedBookmark);
    this.returnToBookmarks();
  }

  cancelEditing(): void {
    this.returnToBookmarks();
  }
}
