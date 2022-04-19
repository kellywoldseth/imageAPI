import resizePic from '../utils/imageResize';

//ADD DESCRIBE STATEMENTS

//this test works
it('valid paramaters should work', async () => {
  const resp = await resizePic('fjord', 250, 380);
  expect(resp).toEqual('src/thumbs/fjord_thumb250x380.jpg');
});

//please help with this test. Related - should I my resizePic function return Promise<string> or something else?
it('invalid parameters with decimal values for numbers should give error', async () => {
  const resp = await resizePic('fjord', 250.2, 380.9);
  expect(resp).toBeRejectedWithError('Expected Error: Expected positive integer for width but received 250.2 of type number');
});


//I think if I get the above test to work I can make this one work too
/*
it('invalid parameter query with filename missing', async () => {
  const resp = await resizePic('tree', 250, 380);
  expect(resp).toEqual('Expected Error: Input file is missing');
});*/







//---------This is everything I've already tried (plus more that was deleted) that I wwant to keep until I resolve my issues -------
/*
describe('test', function() {
    it('should resolve to something', function(done) {
      function resizePic('fjord', 250, 380) {
        expect(resizePic('fjord', 250, 380)).toBe('something');
        done();
      }
   
      const promise = something.withPromise();
      promise.then(resizePic('fjord', 250, 380), done.fail);
    });
  });
/*
/*
it('test resizePic when all parameters exist and are valid types', () => {
  expect(resizePic('fjord', 250, 380)).toBeTruthy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
});

it('test resizePic when all parameters exist and are valid types, including decimal number values', () => {
  expect(resizePic('fjord', 250.2, 380.8)).toBeTruthy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
});*/

//or rejected //or rejectedWith(new Error('Input file is missing););

/*
it('expects resolve', async () => {
    await resizePic('tree', 250, 380).toBeRejectedWith((new Error('Input file is missing'););
   });*/

/* returns fails because it returns undefined
it('test resizePic when filename does not exist -- throws an error and returns undefined', () =>{
    expect(resizePic('tree', 250, 380)).toBeFalsy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
  });*/

//because of typescript, it won't let me test this
/*it('test resizePic when width and/or height are not numbers -- throws an error and returns undefined', () =>{
    expect(resizePic('fjord', '250', '380')).toBeFalsy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
  });*/
/*
  it('expects asyncFun() result to equal value', async () => {
   return asyncFun().then(result =>'{
    expect(result).toBeResolved(value);
   });
  });*/
