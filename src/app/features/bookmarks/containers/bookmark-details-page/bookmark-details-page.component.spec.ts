import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDetailsPageComponent } from './bookmark-details-page.component';

describe('BookmarkDetailsPageComponent', () => {
  let component: BookmarkDetailsPageComponent;
  let fixture: ComponentFixture<BookmarkDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkDetailsPageComponent ]
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
