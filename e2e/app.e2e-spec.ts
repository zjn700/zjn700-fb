import { Zjn700Page } from './app.po';

describe('zjn700 App', () => {
  let page: Zjn700Page;

  beforeEach(() => {
    page = new Zjn700Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
