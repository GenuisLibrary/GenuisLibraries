import { Components101Page } from './app.po';

describe('components101 App', () => {
  let page: Components101Page;

  beforeEach(() => {
    page = new Components101Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
