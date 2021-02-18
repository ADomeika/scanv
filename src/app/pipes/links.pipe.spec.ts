import { LinksPipe } from './links.pipe';

describe('LinksPipe', () => {
  let pipe: LinksPipe;
  beforeEach(() => {
    pipe = new LinksPipe();
  })
  it('should return null if value is empty', () => {
    expect(pipe.transform('')).toBeNull();
  });

  it('should return a link if a link is passed', () => {
    const value = 'https://test.com';
    
    expect(pipe.transform(value)).toContain(value);
  });

  it('should return two links if a value contains two links separated with spaces', () => {
    const value = 'https://test.com https://testing.com';
    
    expect(pipe.transform(value)).toContain('href="https://test.com"');
    expect(pipe.transform(value)).toContain('href="https://testing.com"');
  });
});
