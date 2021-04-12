import { EventEmitter } from '@angular/core';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
} from '@angular/core';

import { BookmarkInterface } from 'src/app/models/bookmark.model';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarkCardComponent implements OnInit {
  @Input() bookmark!: BookmarkInterface;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.delete.emit(this.bookmark.id);
  }

}
