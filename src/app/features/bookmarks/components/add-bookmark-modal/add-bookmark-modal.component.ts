import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DestroyService } from 'src/app/services/destroy/destroy.service';
import { addBookmark, addBookmarkFailure, addBookmarkSuccess } from '../../+state/actions/bookmarks.actions';
import { BookmarksStateInterface } from '../../+state/reducers';

@Component({
  selector: 'app-add-bookmark-modal',
  templateUrl: './add-bookmark-modal.component.html',
  styleUrls: ['./add-bookmark-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DestroyService,
  ],
})
export class AddBookmarkModalComponent implements OnInit {
  form!: FormGroup;
  isPending$ = new BehaviorSubject<boolean>(false);

  constructor(
    private dialogRef: MatDialogRef<AddBookmarkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { groups: string[] },
    private store$: Store<BookmarksStateInterface>,
    private actions$: Actions,
    private destroy$: DestroyService,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      url: new FormControl('', [
        Validators.required,
      ]),
      group: new FormControl('', [
        Validators.required,
      ]),
    });

    this.actions$
      .pipe(
        ofType(addBookmarkSuccess, addBookmarkFailure),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.isPending$.next(false);
      });

    this.actions$
      .pipe(
        ofType(addBookmarkSuccess),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.dialogRef.close('success');
      });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.form.updateValueAndValidity();

    if (this.form.valid) {
      this.isPending$.next(true);
      this.store$.dispatch(addBookmark({
        bookmark: this.form.value,
      }));
    }
  }

}
