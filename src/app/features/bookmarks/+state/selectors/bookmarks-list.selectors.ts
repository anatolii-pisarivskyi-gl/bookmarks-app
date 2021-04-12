import { createSelector } from '@ngrx/store';

import { getBookmarksState } from './bookmarks.selectors';

export const getBookmarksListState = createSelector(
  getBookmarksState,
  (state) => state.bookmarksList,
);

export const getBookmarks = createSelector(
  getBookmarksListState,
  (state) => state.bookmarks,
);

export const getBookmarksPendingStatus = createSelector(
  getBookmarksListState,
  (state) => state.isPending,
);
