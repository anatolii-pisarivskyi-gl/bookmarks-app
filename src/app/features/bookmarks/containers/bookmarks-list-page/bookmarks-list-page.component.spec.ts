import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { DestroyService } from 'src/app/services/destroy/destroy.service';
import { BookmarksStateInterface } from '../../+state/reducers';
import { getBookmarksListState } from '../../+state/selectors/bookmarks-list.selectors';

import { BookmarksListPageComponent } from './bookmarks-list-page.component';

describe('BookmarksListPageComponent', () => {
  let component: BookmarksListPageComponent;
  let fixture: ComponentFixture<BookmarksListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookmarksListPageComponent,
      ],
      imports: [
        MatDialogModule,
      ],
      providers: [
        provideMockStore<BookmarksStateInterface>({
          selectors: [
            {
              selector: getBookmarksListState,
              value: {
                bookmarks: [],
              },
            },
          ],
        }),
        DestroyService,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
