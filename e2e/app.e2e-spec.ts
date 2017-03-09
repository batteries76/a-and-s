import { AAndSPage } from './app.po';

describe('a-and-s App', function() {
  let page: AAndSPage;

  beforeEach(() => {
    page = new AAndSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
