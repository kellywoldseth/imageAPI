//this file tests the /image endpoints of the server

import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('testing all server endpoints', () => {

  it('images endpoint with no parameters should work and send error message', async () => {
    const response = await request.get('/images');
    expect(response.status).toBe(200);
  });

  it('images endpoint with negative width should work and send error message', async () => {
    const response = await request.get(
      '/images/?filename=fjord&width=-200&height=350'
    );
    expect(response.status).toBe(200);
  });

  it('images endpoint with negative height should work and send error message', async () => {
    const response = await request.get(
      '/images/?filename=fjord&width=200&height=-350'
    );
    expect(response.status).toBe(200);
  });

  it('images endpoint with invalid filename should work and send error message', async () => {
    const response = await request.get(
      '/images/?filename=test&width=200&height=350'
    );
    expect(response.status).toBe(200);
  });

  it('images endpoint with NaN for width or height should work and send error messaage', async () => {
    const response = await request.get(
      '/images/?filename=fjord&width=200&height='
    );
    expect(response.status).toBe(200);
  });

  it('images endpoint with NaN for width should work and send error messaage', async () => {
    const response = await request.get(
      '/images/?filename=fjord&width=&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('images endpoint with valid parameters should work', async () => {
    const response = await request.get(
      '/images/?filename=fjord&width=200&height=350'
    );
    expect(response.status).toBe(200);
  });
});
