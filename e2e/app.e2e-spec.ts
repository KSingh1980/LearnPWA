import { LearnPWAPage } from './app.po';

describe('learn-pwa App', () => {
  let page: LearnPWAPage;

  beforeEach(() => {
    page = new LearnPWAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
