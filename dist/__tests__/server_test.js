import request from 'supertest';
import app from '../server.ts'; // Importa il tuo server
describe('GET /posts', () => {
    test('Deve restituire lo stato 200 e un array di post', async () => {
        const response = await request(app).get('/posts');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
describe('GET /posts-filtered', () => {
    test('Deve restituire lo stato 200 e un array di post filtrati', async () => {
        const response = await request(app).get('/posts-filtered?title=test&items=5');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeLessThanOrEqual(5); // Verifica che non ci siano più di 5 post
    });
});
