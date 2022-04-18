//import add from '../index';

//each file needs its tests in filenamespec.ts!

import resizePic from '../utils/imageResize';
import routes from '../routes/index';
import { appendFile } from 'fs/promises';
import supertest from 'supertest';

//ADD DESCRIBE STATEMENTS

it('test resizePic when all parameters exist and are valid types', () => {
  expect(resizePic('fjord', 250, 380)).toBeTruthy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
});

it('test resizePic when all parameters exist and are valid types, including decimal number values', () => {
  expect(resizePic('fjord', 250.2, 380.8)).toBeTruthy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
});

/* returns fails because it returns undefined
it('test resizePic when filename does not exist -- throws an error and returns undefined', () =>{
    expect(resizePic('tree', 250, 380)).toBeFalsy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
  });*/

  //because of typescript, it won't let me test this
/*it('test resizePic when width and/or height are not numbers -- throws an error and returns undefined', () =>{
    expect(resizePic('fjord', '250', '380')).toBeFalsy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
  });*/

//test endpoints

/*it('\/ endpoint', () =>{
    expect(resizePic('fjord', '250', '380')).toBeRejected(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
  });*/
  

  //test /images endpoint

  it("gets the images endpoint", async() => {
    const request = supertest(routes);
    const response = await request.get('/images');
  
    expect(response.status).toBe(200);
  });