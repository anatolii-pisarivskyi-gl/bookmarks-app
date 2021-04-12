import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarksListPageComponent } from './containers/bookmarks-list-page/bookmarks-list-page.component';
import { BookmarkDetailsPageComponent } from './containers/bookmark-details-page/bookmark-details-page.component';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';
import * as fromBookmarks from './+state/reducers';
import { BookmarksListEffects } from './+state/effects/bookmarks.effects';
import { AddBookmarkModalComponent } from './components/add-bookmark-modal/add-bookmark-modal.component';
import { DeleteBookmarkModalComponent } from './components/delete-bookmark-modal/delete-bookmark-modal.component';

@NgModule({
  declarations: [
    BookmarksComponent,
    BookmarksListPageComponent,
    BookmarkDetailsPageComponent,
    BookmarkCardComponent,
    AddBookmarkModalComponent,
    DeleteBookmarkModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BookmarksRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    StoreModule.forFeature(
      fromBookmarks.bookmarksFeatureKey,
      fromBookmarks.reducers,
      {},
    ),
    EffectsModule.forFeature([BookmarksListEffects]),
  ]
})
export class BookmarksModule { }
