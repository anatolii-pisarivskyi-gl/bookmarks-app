import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-bookmark-modal',
  templateUrl: './delete-bookmark-modal.component.html',
  styleUrls: ['./delete-bookmark-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteBookmarkModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteBookmarkModalComponent>,
  ) { }

  ngOnInit(): void {
  }

}
