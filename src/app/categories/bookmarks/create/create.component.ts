import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookmarksService} from '../../../shared/bookmarks.service';
import {Bookmark} from '../../../shared/bookmark';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit{
  newBookmark: Bookmark = {
    id: 0,
    title: '',
    url: '',
    category: ''
  };

  params: Params = {};

  constructor(
    public Route: ActivatedRoute,
    public Router: Router,
    public BookmarksService: BookmarksService
  ) { }

  ngOnInit() {
    this.Route.params.forEach((params: Params) => {
      this.params = params;
      this.newBookmark.category = params['category'];
    });

    this.BookmarksService.getBookmarks();
  }

  returnToBookmarks(): void {
    this.Router.navigate(['Bookmarks', {
      category: this.params['category']
    }]);
  }

  cancelCreating(): void {
    this.returnToBookmarks();
  }

  createBookmark(): void {
    this.BookmarksService.createBookmark(this.newBookmark);
    this.returnToBookmarks();
  }

  resetForm(): void {
    this.newBookmark = {
      id: 0,
      title: '',
      url: '',
      category: this.params['category']
    };
  }
}

