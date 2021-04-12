import { createReducer, on } from '@ngrx/store';

import { BookmarkInterface } from 'src/app/models/bookmark.model';
import {
  loadBookmark,
  loadBookmarkSuccess,
  unloadBookmark,
} from '../../actions/bookmarks.actions';

export const bookmarkDetailsFeatureKey = 'bookmarkDetails';

export interface BookmarkDetailsStateInterface {
  isPending: boolean;
  bookmark: BookmarkInterface | null;
}

export const initialState: BookmarkDetailsStateInterface = {
  isPending: false,
  bookmark: null,
};

export const reducer = createReducer(
  initialState,

  on(loadBookmark, (state) => {
    return {
      ...state,
      isPending: true,
    };
  }),

  on(loadBookmarkSuccess, (state, { payload }) => {
    return {
      ...state,
      isPending: false,
      bookmark: payload,
    };
  }),

  on(unloadBookmark, (state) => {
    return {
      ...state,
      isPending: false,
      bookmark: null,
    };
  }),

);
