//this file tests the endpoints of the server

import routes from '../routes/index';
//import { appendFile } from 'fs/promises';
import supertest from 'supertest';
const request = supertest(routes);
import "jasmine";


describe('testing all server endpoints', () => {
  //test endpoints
  /*
it('\/ endpoint', () =>{
  });*/

  it('main endpoint should work', async () => {
    console.log("test 1 test");

    const response =  await request.get('/');
    console.log("test test test");
    expect(response.status).toBe(200);
  });
});

