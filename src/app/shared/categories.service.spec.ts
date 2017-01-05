/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { CategoriesService } from './categories.service';

class HttpMock {}

describe('Service: Categories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoriesService,
        { provide: Http, useClass: HttpMock }
      ]
    });
  });

  it('should ...', inject([CategoriesService], (service: CategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
