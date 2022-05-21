//this file tests the endpoints of the server

import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('testing all server endpoints', () => {
  it('main endpoint should work', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('images endpoint with no parameters should work', async () => {
    const response = await request.get('/images');
    expect(response.status).toBe(200);
  });

  it('images endpoint with valid parameters should work', async () => {
    const response = await request.get(
      '/images/?filename=fjord&width=200&height=350'
    );
    expect(response.status).toBe(200);
  });
});
