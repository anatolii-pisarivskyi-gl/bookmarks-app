import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BookmarksListEffects } from './bookmarks.effects';

describe('BookmarksListEffects', () => {
  let actions$: Observable<any>;
  let effects: BookmarksListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookmarksListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BookmarksListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
