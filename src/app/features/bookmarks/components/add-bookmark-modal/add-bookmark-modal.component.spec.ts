import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {  MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { addBookmark } from '../../+state/actions/bookmarks.actions';

import { AddBookmarkModalComponent } from './add-bookmark-modal.component';

describe('AddBookmarkModalComponent', () => {
  let component: AddBookmarkModalComponent;
  let fixture: ComponentFixture<AddBookmarkModalComponent>;
  let actions$: Observable<any>;
  let matDialogRef: MatDialogRef<AddBookmarkModalComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddBookmarkModalComponent,
      ],
      imports: [
        MatInputModule,
        MatDialogModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: MatDialogRef,
          useValue: {
            close: (v?: string) => {},
          },
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    })
    .compileComponents();

    matDialogRef = TestBed.inject(MatDialogRef);
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookmarkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close on cancel button click', () => {
    const element: HTMLElement = fixture.nativeElement;
    const cancelBtn = element.querySelector('._cancel-btn');
    spyOn(matDialogRef, 'close').and.callThrough();
    cancelBtn?.dispatchEvent(new Event('click'));
    expect(matDialogRef.close).toHaveBeenCalledOnceWith();
  });

  it('should save bookmark to the store', () => {
    const element: HTMLElement = fixture.nativeElement;
    const nameEl: HTMLInputElement | null = element.querySelector('[formControlName="name"]');
    nameEl!.value = 'test name';
    nameEl!.dispatchEvent(new Event('input'));

    const groupEl: HTMLInputElement | null = element.querySelector('[formControlName="group"]');
    groupEl!.value = 'test group';
    groupEl!.dispatchEvent(new Event('input'));

    const urlEl: HTMLInputElement | null = element.querySelector('[formControlName="url"]');
    urlEl!.value = 'https://test.com/';
    urlEl!.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.form.value).toEqual({
      name: 'test name',
      group: 'test group',
      url: 'https://test.com/',
    });

    spyOn(component, 'onSubmit').and.callThrough();
    spyOn(store, 'dispatch').and.callThrough();

    const addBtn: HTMLButtonElement | null = element.querySelector('._add-btn');
    addBtn!.click();

    expect(component.onSubmit).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledOnceWith(addBookmark({ bookmark: component.form.value }));
    expect(component.isPending$.value).toBe(true);
  });
});
