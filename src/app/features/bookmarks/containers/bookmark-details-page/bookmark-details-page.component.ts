import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { withLatestFrom } from 'rxjs/operators';

import { deleteBookmark, loadBookmark, unloadBookmark } from '../../+state/actions/bookmarks.actions';
import { BookmarksStateInterface } from '../../+state/reducers';
import {
  getBookmarkDetails,
  getBookmarkDetailsPendingStatus,
} from '../../+state/selectors/bookmark-details.selectors';
import { DeleteBookmarkModalComponent } from '../../components/delete-bookmark-modal/delete-bookmark-modal.component';

@Component({
  selector: 'app-bookmark-details-page',
  templateUrl: './bookmark-details-page.component.html',
  styleUrls: ['./bookmark-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarkDetailsPageComponent implements OnInit, OnDestroy {
  isPending$ = this.store$.pipe(
    select(getBookmarkDetailsPendingStatus),
  )

  bookmark$ = this.store$.pipe(
    select(getBookmarkDetails),
  )

  constructor(
    private store$: Store<BookmarksStateInterface>,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.store$.dispatch(loadBookmark({ id }));
  }

  ngOnDestroy(): void {
    this.store$.dispatch(unloadBookmark());
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(DeleteBookmarkModalComponent, {
      width: '350px',
    });

    dialogRef.afterClosed()
      .pipe(
        withLatestFrom(this.bookmark$),
      )
      .subscribe(([result, bookmark]) => {
        if (result && bookmark) {
          this.store$.dispatch(deleteBookmark({ id: bookmark.id }));
          this.router.navigate(['../'], {
            relativeTo: this.route,
          })
        }
      });
  }

}
