import request from 'supertest';
import { app } from './server.js';
describe('GET /posts', () => {
    it('should return all posts', async () => {
        const response = await request(app).get('/posts');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body)).toBe(true);
    });
    it('should handle errors gracefully', async () => {
        const response = await request(app).get('/posts');
        expect(response.status).not.toBe(500);
    });
});
