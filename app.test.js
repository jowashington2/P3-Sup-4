const request = require('supertest');
const app = require('../src/app');

/**
 * Unit tests for the POST / endpoint.
 */
describe('POST /', () => {
    it('should respond with the content field from the request body', async () => {
        const response = await request(app)
            .post('/')
            .send({ content: 'Hello, World!' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200); // Verify success status
        expect(response.body.content).toBe('Hello, World!'); // Verify content field
    });

    it('should return an error if "content" field is missing', async () => {
        const response = await request(app)
            .post('/')
            .send({ missingField: 'No content here' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(400); // Verify error status
        expect(response.body.error).toBe('"content" field is required'); // Verify error message
    });
});
