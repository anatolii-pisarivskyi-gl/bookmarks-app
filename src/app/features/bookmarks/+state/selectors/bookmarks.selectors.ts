import { createFeatureSelector } from '@ngrx/store';

import { bookmarksFeatureKey, BookmarksStateInterface } from '../reducers';

export const getBookmarksState = createFeatureSelector<BookmarksStateInterface>(bookmarksFeatureKey);
