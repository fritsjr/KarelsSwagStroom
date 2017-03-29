import { StroommeterAngularPage } from './app.po';

describe('stroommeter-angular App', function() {
  let page: StroommeterAngularPage;

  beforeEach(() => {
    page = new StroommeterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
