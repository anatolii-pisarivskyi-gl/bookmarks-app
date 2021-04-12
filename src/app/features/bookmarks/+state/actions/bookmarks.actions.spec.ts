import * as BookmarkActions from './bookmarks.actions';

describe('Bookmark', () => {
  it('should create an instance', () => {
    expect(BookmarkActions.addBookmark({ bookmark: {} })).toBeTruthy();
  });
});
