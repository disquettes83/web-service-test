/**
 * Importa i moduli e imposta il server.
 */
import express, { Request, Response } from 'express';
import { swaggerDocs } from './swagger.js';
import axios from 'axios';
import { Redis } from 'ioredis';

const app = express();
const port = process.env.PORT || 3000;

const redisClient = new Redis();

/**
 * Funzione per recuperare i post dall'API di WordPress.
 * 
 * @returns {Promise<any[]>} Un array contenente i post recuperati.
 * @throws {Error} Se si verifica un errore durante il recupero dei post.
 */

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://22hbg.com/wp-json/wp/v2/posts/');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Recupera tutti i post
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                
 *       500:
 *         description: Internal Server Error
 */


app.get('/posts', async (_req: Request, res: Response) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

/**
 * @swagger
 * /posts-filtered:
 *   get:
 *     summary: Recupera i post filtrati per titolo e numero
 *     parameters:
 *       - name: title
 *         in: query
 *         description: Testo da cercare nei titoli dei post
 *         required: true
 *         schema:
 *           type: string
 *       - name: items
 *         in: query
 *         description: Numero massimo di post da restituire
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                
 *       500:
 *         description: Internal Server Error
 */

app.get('/posts-filtered', async (req: Request, res: Response) => {
  try {
    const title = req.query.title as string;
    const items = parseInt(req.query.items as string, 10);

    const cachedPosts = await redisClient.get(`posts:${title}:${items}`);
    if (cachedPosts) {
      console.log('Serving posts from cache');
      res.json(JSON.parse(cachedPosts));
      return;
    }

    const posts = await fetchPosts();
    const filteredPosts = posts
      .filter((post) => post.title.rendered.includes(title))
      .slice(0, items);

    await redisClient.set(`posts:${title}:${items}`, JSON.stringify(filteredPosts));
    res.json(filteredPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Restituisce un messaggio di benvenuto
 *     responses:
 *       200:
 *         description: Messaggio di benvenuto restituito con successo
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Benvenuto
 *       500:
 *         description: Errore interno del server
 */

app.get('/', (_req: Request, res: Response) => {
  res.send('Benvenuto');
});

swaggerDocs(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
