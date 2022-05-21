//this file contains tests for the imageResize files, which contains the resizePic function

import resizePic from '../utils/imageResize';

//this test works
describe('testing resizePic function', () => {
  it('valid paramaters should work', async () => {
    const resp = await resizePic('fjord', 250, 380);
    expect(resp).toEqual('src/thumbs/fjord_thumb250x380.jpg');
  });

  it('invalid parameters with decimal values for numbers should give error', async () => {
    const resp = await resizePic('fjord', 250.2, 380.9);
    expect(resp).toEqual(
      'Error: Expected positive integer for width but received 250.2 of type number'
    );
  });

  it('invalid parameter query with filename missing should give error', async () => {
    const resp = await resizePic('tree', 250, 380);
    expect(resp).toEqual('Error: Input file is missing');
  });
});
