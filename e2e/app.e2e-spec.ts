import { Projects/egglyAngular2Page } from './app.po';

describe('projects/eggly-angular2 App', function() {
  let page: Projects/egglyAngular2Page;

  beforeEach(() => {
    page = new Projects/egglyAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
