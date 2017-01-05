/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { BookmarksService } from './bookmarks.service';

class HttpMock {}

describe('Service: Bookmarks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookmarksService,
        { provide: Http, useClass: HttpMock }
      ]
    });
  });

  it('should ...', inject([BookmarksService], (service: BookmarksService) => {
    expect(service).toBeTruthy();
  }));
});
