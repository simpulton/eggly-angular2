import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { BookmarksComponent } from './categories/bookmarks/bookmarks.component';
import { CreateComponent } from './categories/bookmarks/create/create.component';
import { EditComponent } from './categories/bookmarks/edit/edit.component';

const appRoutes: Routes = [
  { path: '', component: BookmarksComponent },
  { path: ':category', component: BookmarksComponent},
  { path: ':category/bookmarks/create', component: CreateComponent },
  { path: ':category/bookmarks/:bookmarkId/edit', component: EditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
