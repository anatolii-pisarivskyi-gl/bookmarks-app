import {createSelector } from '@ngrx/store';

import { getBookmarksState } from './bookmarks.selectors';

export const getBookmarksDetailsState = createSelector(
  getBookmarksState,
  (state) => state.bookmarkDetails,
);

export const getBookmarkDetailsPendingStatus = createSelector(
  getBookmarksDetailsState,
  (state) => state.isPending,
);

export const getBookmarkDetails = createSelector(
  getBookmarksDetailsState,
  (state) => state.bookmark,
);
