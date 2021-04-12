import { createAction, props } from '@ngrx/store';

import { BookmarkInterface } from 'src/app/models/bookmark.model';

/**
 * Add bookmark actions
 */
export const addBookmark = createAction(
  '[Bookmarks] Add Bookmarks',
  props<{ bookmark: Partial<BookmarkInterface> }>()
);

export const addBookmarkSuccess = createAction(
  '[Bookmarks] Add Bookmarks Success',
  props<{ payload: BookmarkInterface }>(),
);

export const addBookmarkFailure = createAction(
  '[Bookmarks] Add Bookmarks Failure',
  props<{ error: any }>(),
);

/**
 * Load bookmarks actions
 */
export const loadBookmarks = createAction(
  '[Bookmarks] Load Bookmarks',
);

export const loadBookmarksSuccess = createAction(
  '[Bookmarks] Load Bookmarks Success',
  props<{ payload: BookmarkInterface[] }>(),
);

export const loadBookmarksFailure = createAction(
  '[Bookmarks] Load Bookmarks Failure',
  props<{ error: any }>(),
);

/**
 * Load single bookmark actions
 */
export const loadBookmark = createAction(
  '[Bookmarks] Load Bookmark',
  props<{ id: number }>(),
);

export const loadBookmarkSuccess = createAction(
  '[Bookmarks] Load Bookmark Success',
  props<{ payload: BookmarkInterface }>(),
);

export const loadBookmarkFailure = createAction(
  '[Bookmarks] Load Bookmark Failure',
  props<{ error: any }>(),
);

export const unloadBookmark = createAction(
  '[Bookmarks] Unload Bookmark',
);

/**
 * Delete single bookmark actions
 */
export const deleteBookmark = createAction(
  '[Bookmarks] Delete Bookmark',
  props<{ id: number }>(),
);

export const deleteBookmarkSuccess = createAction(
  '[Bookmarks] Delete Bookmark Success',
);

export const deleteBookmarkFailure = createAction(
  '[Bookmarks] Delete Bookmark Failure',
  props<{ error: any }>(),
);
