import { EgglyAngular2Page } from './app.po';

describe('eggly-angular2 App', function() {
  let page: EgglyAngular2Page;

  beforeEach(() => {
    page = new EgglyAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
