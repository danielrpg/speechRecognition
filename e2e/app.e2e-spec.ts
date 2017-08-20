import { SpeachRecognitionPage } from './app.po';

describe('speach-recognition App', () => {
  let page: SpeachRecognitionPage;

  beforeEach(() => {
    page = new SpeachRecognitionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
