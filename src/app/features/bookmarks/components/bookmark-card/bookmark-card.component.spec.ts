import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkInterface } from 'src/app/models/bookmark.model';

import { BookmarkCardComponent } from './bookmark-card.component';

@Component({
  template: '<app-bookmark-card [bookmark]="bookmark"></app-bookmark-card>',
})
class TestComponent {
  bookmark: BookmarkInterface = {
    id: 1,
    name: 'test bookmark',
    group: 'test group',
    url: 'https://test.com',
  };

  constructor() {}
}

describe('BookmarkCardComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookmarkCardComponent,
        TestComponent,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
