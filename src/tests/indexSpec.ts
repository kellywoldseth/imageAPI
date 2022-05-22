//this file tests the / endpoints of the server
import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('testing all server endpoints', () => {
  it('main endpoint should work', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
