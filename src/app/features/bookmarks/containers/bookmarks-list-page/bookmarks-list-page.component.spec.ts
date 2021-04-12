import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksListPageComponent } from './bookmarks-list-page.component';

describe('BookmarksListPageComponent', () => {
  let component: BookmarksListPageComponent;
  let fixture: ComponentFixture<BookmarksListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksListPageComponent ]
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
