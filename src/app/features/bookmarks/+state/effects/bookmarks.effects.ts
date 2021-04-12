import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

import { BookmarksService } from '../../services/bookmarks/bookmarks.service';
import {
  addBookmark,
  addBookmarkFailure,
  addBookmarkSuccess,
  deleteBookmark,
  deleteBookmarkFailure,
  deleteBookmarkSuccess,
  loadBookmark,
  loadBookmarkSuccess,
  loadBookmarkFailure,
  loadBookmarks,
  loadBookmarksFailure,
  loadBookmarksSuccess,
} from '../actions/bookmarks.actions';

@Injectable()
export class BookmarksListEffects {
  loadBookmarks$ = createEffect(() => this.actions$.pipe(
    ofType(loadBookmarks),
    mergeMap(() => this.bookmarksService.getAll()
      .pipe(
        map((bookmarks) => loadBookmarksSuccess({ payload: bookmarks})),
        catchError((error) => of(loadBookmarksFailure({ error }))),
      )),
    ),
  );

  loadBookmark$ = createEffect(() => this.actions$.pipe(
    ofType(loadBookmark),
    mergeMap(({ id }) => this.bookmarksService.getById(id)
      .pipe(
        map((bookmark) => loadBookmarkSuccess({ payload: bookmark })),
        catchError((error) => of(loadBookmarkFailure({ error }))),
      )),
    ),
  );

  addBookmark$ = createEffect(() => this.actions$.pipe(
    ofType(addBookmark),
    mergeMap(({ bookmark }) => this.bookmarksService.save(bookmark)
      .pipe(
        map((bookmark) => addBookmarkSuccess({ payload: bookmark })),
        catchError((error) => of(addBookmarkFailure({ error }))),
      )),
    ),
  );

  deleteBookmark$ = createEffect(() => this.actions$.pipe(
    ofType(deleteBookmark),
    mergeMap(({ id }) => this.bookmarksService.delete(id)
      .pipe(
        map(() => deleteBookmarkSuccess()),
        catchError((error) => of(deleteBookmarkFailure({ error }))),
      )),
    ),
  );

  errors$ = createEffect(() => this.actions$.pipe(
    ofType(loadBookmarksFailure,
      loadBookmarkFailure,
      addBookmarkFailure,
      deleteBookmarkFailure),
    tap(({ error }) => {
      let message = 'Error! Please, try again later.';

      if (error?.message) {
        message += `Details: ${error?.message}`;
      }

      this.snackBar.open(message, 'Ok', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    })),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private bookmarksService: BookmarksService,
    private snackBar: MatSnackBar,
  ) {}

}
