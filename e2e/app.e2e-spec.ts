import { AppPage } from './app.po';

describe('angular-test-di App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
    expect(page.getParagraphText2()).toEqual('Current mode - Test');
  });
});
