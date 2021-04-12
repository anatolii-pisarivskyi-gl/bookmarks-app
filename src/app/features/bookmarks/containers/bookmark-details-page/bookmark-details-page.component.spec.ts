import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { getBookmarkDetails, getBookmarksDetailsState } from '../../+state/selectors/bookmark-details.selectors';

import { BookmarkDetailsPageComponent } from './bookmark-details-page.component';

describe('BookmarkDetailsPageComponent', () => {
  let component: BookmarkDetailsPageComponent;
  let fixture: ComponentFixture<BookmarkDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookmarkDetailsPageComponent,
      ],
      imports: [
        RouterTestingModule,
        MatDialogModule,
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: getBookmarksDetailsState,
              value: {},
            },
          ],
        }),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
