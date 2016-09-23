import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryPipe } from './categories/category.pipe';
import { BookmarksComponent } from './categories/bookmarks/bookmarks.component';
import { CreateComponent } from './categories/bookmarks/create/create.component';
import { EditComponent } from './categories/bookmarks/edit/edit.component';
import { CategoriesService, BookmarksService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryPipe,
    CategoryPipe,
    BookmarksComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CategoriesService,
    BookmarksService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
