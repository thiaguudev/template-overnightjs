import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

import { SampleServer } from './../src/server';

describe('Server is Running?', () => {
  test('called root path in server', async () => {
    const response = await request(new SampleServer().app).get('/');
    expect(response.status).toEqual(StatusCodes.NOT_FOUND);
  });
});
