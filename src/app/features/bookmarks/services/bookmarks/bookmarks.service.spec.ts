import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BookmarkInterface } from 'src/app/models/bookmark.model';
import { ENV_TOKEN } from 'src/app/tokens/environment.token';
import { environment } from 'src/environments/environment';

import { BookmarksService } from './bookmarks.service';

describe('BookmarksService', () => {
  let httpTestingController: HttpTestingController;
  let service: BookmarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ENV_TOKEN,
          useValue: environment,
        },
      ],
    });
    service = TestBed.inject(BookmarksService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.getAll', () => {

    it('should successfuly get all the bookmarks', () => {
      const mockData = [
        {
          id: 1,
          name: 'google',
          url: 'https://google.com',
          group: 'general'
        },
        {
          id: 2,
          name: 'facebook',
          url: 'https://fb.com',
          group: 'personal'
        },
      ];

      service.getAll()
        .subscribe((bookmarks: BookmarkInterface[]) => {
          expect(bookmarks).toEqual(mockData);
        });

      const req = httpTestingController.expectOne(`${environment.apiHost}/bookmarks`);

      expect(req.request.url).toEqual(`${environment.apiHost}/bookmarks`);
      expect(req.request.method).toEqual('GET');

      req.flush(mockData);
    });

  });

  describe('.getById', () => {

    it('should successfuly get bookmark by its id', () => {
      const mockData = {
        id: 1,
        name: 'google',
        url: 'https://google.com',
        group: 'general'
      };

      const id = 1;

      service.getById(id)
        .subscribe((bookmark: BookmarkInterface) => {
          expect(bookmark).toEqual(mockData);
        });

      const req = httpTestingController.expectOne(`${environment.apiHost}/bookmarks/${id}`);

      expect(req.request.url).toEqual(`${environment.apiHost}/bookmarks/${id}`);
      expect(req.request.method).toEqual('GET');

      req.flush(mockData);
    });

  });

  describe('.save', () => {

    it('should save bookmark', () => {
      const mockData = {
        id: 1,
        name: 'google',
        url: 'https://google.com',
        group: 'general'
      };

      service.save(mockData)
        .subscribe((bookmark: BookmarkInterface) => {
          expect(bookmark).toEqual(mockData);
        });

      const req = httpTestingController.expectOne(`${environment.apiHost}/bookmarks`);

      expect(req.request.url).toEqual(`${environment.apiHost}/bookmarks`);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(mockData);

      req.flush(mockData);
    });

  });

  describe('.delete', () => {

    it('should delete bookmark by id', () => {
      const id = 1;

      service.delete(id)
        .subscribe((data: any) => {
          expect(data).toEqual({});
        });

      const req = httpTestingController.expectOne(`${environment.apiHost}/bookmarks/${id}`);

      expect(req.request.url).toEqual(`${environment.apiHost}/bookmarks/${id}`);
      expect(req.request.method).toEqual('DELETE');

      req.flush({});
    });

  });
});
