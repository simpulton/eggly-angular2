/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookmarksService } from './bookmarks.service';

describe('Service: Bookmarks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarksService]
    });
  });

  it('should ...', inject([BookmarksService], (service: BookmarksService) => {
    expect(service).toBeTruthy();
  }));
});
