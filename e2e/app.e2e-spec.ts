import { Ng4ServicesPage } from './app.po';

describe('ng4-services App', () => {
  let page: Ng4ServicesPage;

  beforeEach(() => {
    page = new Ng4ServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
