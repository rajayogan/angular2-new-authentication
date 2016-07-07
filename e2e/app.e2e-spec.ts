import { AngnewrouterPage } from './app.po';

describe('angnewrouter App', function() {
  let page: AngnewrouterPage;

  beforeEach(() => {
    page = new AngnewrouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
