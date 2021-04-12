import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BookmarkInterface } from 'src/app/models/bookmark.model';
import { EnvironmentInterface } from 'src/app/models/environment.model';
import { ENV_TOKEN } from 'src/app/tokens/environment.token';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(
    private http: HttpClient,
    @Inject(ENV_TOKEN) private env: EnvironmentInterface,
  ) { }

  getAll(): Observable<BookmarkInterface[]> {
    return this.http.get<BookmarkInterface[]>(`${this.env.apiHost}/bookmarks`);
  }

  getById(id: number): Observable<BookmarkInterface> {
    return this.http.get<BookmarkInterface>(`${this.env.apiHost}/bookmarks/${id}`);
  }

  save(bookmark: Partial<BookmarkInterface>): Observable<BookmarkInterface> {
    return this.http.post<BookmarkInterface>(`${this.env.apiHost}/bookmarks`, bookmark);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.env.apiHost}/bookmarks/${id}`);
  }
}
