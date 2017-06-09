import { JsheroesPage } from './app.po';

describe('jsheroes App', () => {
  let page: JsheroesPage;

  beforeEach(() => {
    page = new JsheroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
