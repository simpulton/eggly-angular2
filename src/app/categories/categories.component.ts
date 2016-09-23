import { Component, OnInit } from '@angular/core';
import {Category, CategoriesService} from '../shared';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = undefined;

  constructor(public CategoriesService: CategoriesService) {};

  ngOnInit() {
    this.CategoriesService.getCategories()
      .then(
        (data: Category[]) => this.categories = data,
        error => console.error(error)
      );
  }
}

