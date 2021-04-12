import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BookmarksListEffects } from './bookmarks.effects';
import { ENV_TOKEN } from 'src/app/tokens/environment.token';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('BookmarksListEffects', () => {
  let actions$: Observable<any>;
  let effects: BookmarksListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
      providers: [
        BookmarksListEffects,
        provideMockActions(() => actions$),
        {
          provide: ENV_TOKEN,
          useValue: environment,
        },
      ]
    });

    effects = TestBed.inject(BookmarksListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
