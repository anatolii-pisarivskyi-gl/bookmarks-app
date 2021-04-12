import { ActionReducerMap } from '@ngrx/store';

import * as fromBookmarksList from './bookmarks-list/bookmarks-list.reducer';
import * as fromBookmarkDetails from './bookmark-details/bookmark-details.reducer';

export const bookmarksFeatureKey = 'bookmarks';

export interface BookmarksStateInterface {

  [fromBookmarksList.bookmarksListFeatureKey]: fromBookmarksList.BookmarksListStateInterface;
  [fromBookmarkDetails.bookmarkDetailsFeatureKey]: fromBookmarkDetails.BookmarkDetailsStateInterface;
}

export const reducers: ActionReducerMap<BookmarksStateInterface> = {

  [fromBookmarksList.bookmarksListFeatureKey]: fromBookmarksList.reducer,
  [fromBookmarkDetails.bookmarkDetailsFeatureKey]: fromBookmarkDetails.reducer,
};

