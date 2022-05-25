//this file contains tests for the fileExistsInThumbs function

import fileExistsInThumbs from '../utils/fileExistsInThumbs';

describe('testing fileExistsInThumbs function', () => {
  it('file exists', async () => {
    const resp = await fileExistsInThumbs('fjord', 200, 350);
    expect(resp).toBe(true);
  });

  it('file does not exist', async () => {
    const resp = await fileExistsInThumbs('fjordabc', 200, 350);
    expect(resp).toBe(false);
  });
});
