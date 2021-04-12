import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookmarksComponent } from './bookmarks.component';
import { BookmarkDetailsPageComponent } from './containers/bookmark-details-page/bookmark-details-page.component';
import { BookmarksListPageComponent } from './containers/bookmarks-list-page/bookmarks-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookmarksComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: BookmarksListPageComponent,
      },
      {
        path: ':id',
        component: BookmarkDetailsPageComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule { }
