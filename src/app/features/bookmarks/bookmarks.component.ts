import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
