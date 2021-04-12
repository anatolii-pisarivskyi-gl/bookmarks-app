import { createReducer, on } from '@ngrx/store';

import { BookmarkInterface } from 'src/app/models/bookmark.model';
import {
  loadBookmarks,
  loadBookmarksFailure,
  loadBookmarksSuccess,
} from '../../actions/bookmarks.actions';

export const bookmarksListFeatureKey = 'bookmarksList';

export interface BookmarksListStateInterface {
  isPending: boolean;
  bookmarks: BookmarkInterface[];
}

export const initialState: BookmarksListStateInterface = {
  isPending: false,
  bookmarks: [],
};

export const reducer = createReducer(
  initialState,

  on(loadBookmarks, (state) => {
    return {
      ...state,
      isPending: true,
    };
  }),

  on(loadBookmarksSuccess, (state, { payload }) => {
    return {
      ...state,
      isPending: false,
      bookmarks: payload
    };
  }),

  on(loadBookmarksFailure, (state) => {
    return {
      ...state,
      isPending: false,
    };
  }),

);
