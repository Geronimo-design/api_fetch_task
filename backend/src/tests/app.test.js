/** @format */

// Importing all necessary modules and libraries
const request = require('supertest');
const app = require('../app');

// Using mock data for this test that exists on the endpoint
const artistData = {
  artistName: 'Jack Johnson',
  artistWork: 'music',
};

// Performing the test
describe('Test the route path', () => {
  // Checking if the post request is being sent and returning the data associated with the mock test data
  test('It should respond with data after a post request', async () => {
    const response = await request(app)
      .post('/')
      .send(artistData)
      .set('Content-Type', 'application/json');

    // The request is expected to be successful with a status code of 200 and the retrieved data is expected to be in array format with a length greater than 0
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
