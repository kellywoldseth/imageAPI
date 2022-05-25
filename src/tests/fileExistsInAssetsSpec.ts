//this file contains tests for the fileExistsInAssets function

import fileExistsInAssets from '../utils/fileExistsInAssets';

describe('testing fileExistsInAssets function', () => {
  it('file exists', async () => {
    const resp = await fileExistsInAssets('fjord.jpg');
    expect(resp).toBe(true);
  });

  it('file does not exist', async () => {
    const resp = await fileExistsInAssets('fjordabc.jpg');
    expect(resp).toBe(false);
  });
});
