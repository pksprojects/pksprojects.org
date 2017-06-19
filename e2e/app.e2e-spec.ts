import { PksprojectsOrgPage } from './app.po';

describe('pksprojects-org App', () => {
  let page: PksprojectsOrgPage;

  beforeEach(() => {
    page = new PksprojectsOrgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
