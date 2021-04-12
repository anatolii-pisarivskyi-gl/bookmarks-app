import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BookmarkInterface } from 'src/app/models/bookmark.model';
import { DestroyService } from 'src/app/services/destroy/destroy.service';
import { deleteBookmark, loadBookmarks } from '../../+state/actions/bookmarks.actions';
import { BookmarksStateInterface } from '../../+state/reducers';
import { getBookmarks, getBookmarksPendingStatus } from '../../+state/selectors/bookmarks-list.selectors';
import { AddBookmarkModalComponent } from '../../components/add-bookmark-modal/add-bookmark-modal.component';
import { DeleteBookmarkModalComponent } from '../../components/delete-bookmark-modal/delete-bookmark-modal.component';

@Component({
  selector: 'app-bookmarks-list-page',
  templateUrl: './bookmarks-list-page.component.html',
  styleUrls: ['./bookmarks-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DestroyService,
  ],
})
export class BookmarksListPageComponent implements OnInit {
  data$ = new BehaviorSubject<Map<string, BookmarkInterface[]>>(
    new Map<string, BookmarkInterface[]>(),
  );

  bookmarks$: Observable<BookmarkInterface[]> = this.store$.pipe(
    select(getBookmarks),
  );

  isPending$ = this.store$.pipe(
    select(getBookmarksPendingStatus),
  );

  constructor(
    private store$: Store<BookmarksStateInterface>,
    private dialog: MatDialog,
    private destroy$: DestroyService,
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(loadBookmarks());

    this.bookmarks$
      .pipe(takeUntil(this.destroy$))
      .subscribe((bookmarks) => {
        const data = this.getData(bookmarks);
        this.data$.next(data);
      });
  }

  trackBy(_: number, item: BookmarkInterface): number {
    return item.id;
  }

  onAddBookmark(): void {
    const dialogRef = this.dialog.open(AddBookmarkModalComponent, {
      width: '350px',
      data: {
        groups: [...this.data$.value.keys()],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.store$.dispatch(loadBookmarks());
      }
    });
  }

  onBookmarkDelete(id: number): void {
    const dialogRef = this.dialog.open(DeleteBookmarkModalComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store$.dispatch(deleteBookmark({ id }));
        this.store$.dispatch(loadBookmarks());
      }
    });
  }

  private getData(bookmarks: BookmarkInterface[]): Map<string, BookmarkInterface[]> {
    const data = new Map<string, BookmarkInterface[]>();

    for (const bookmark of bookmarks) {
      const { group } = bookmark;

      if (data.has(group)) {
        data.get(group)?.push(bookmark);
      } else {
        data.set(group, [bookmark]);
      }
    }

    return data;
  }
}
