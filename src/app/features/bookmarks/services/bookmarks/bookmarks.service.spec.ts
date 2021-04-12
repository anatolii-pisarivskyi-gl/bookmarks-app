import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ENV_TOKEN } from 'src/app/tokens/environment.token';
import { environment } from 'src/environments/environment';

import { BookmarksService } from './bookmarks.service';

describe('BookmarksService', () => {
  let service: BookmarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ENV_TOKEN,
          useValue: environment,
        },
      ],
    });
    service = TestBed.inject(BookmarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
