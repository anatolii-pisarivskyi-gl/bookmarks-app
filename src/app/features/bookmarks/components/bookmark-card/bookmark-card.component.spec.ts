import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkInterface } from 'src/app/models/bookmark.model';

import { BookmarkCardComponent } from './bookmark-card.component';

const bookmark: BookmarkInterface = {
  id: 1,
  name: 'test bookmark',
  group: 'test group',
  url: 'https://test.com/',
};

@Component({
  template: '<app-bookmark-card [bookmark]="bookmark" (delete)="onDelete($event)"></app-bookmark-card>',
})
class TestComponent {
  bookmark: BookmarkInterface = bookmark;

  constructor() {}

  onDelete(id: number) {}
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

  it('should display bookmark data', () => {
    const element = fixture.nativeElement;
    const link: HTMLAnchorElement = element.querySelector('._link');

    expect(link.href).toBe(bookmark.url);
    expect(link.innerText).toBe(bookmark.name);
  });

  it('should emit delete event', () => {
    const element = fixture.nativeElement;
    const btn: HTMLButtonElement = element.querySelector('._delete-btn');
    btn.dispatchEvent(new Event('click'));

    spyOn(component, 'onDelete').and.callThrough();

    expect(component.onDelete).toHaveBeenCalledOnceWith(bookmark.id);
  });
});
