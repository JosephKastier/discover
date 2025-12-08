import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
const prisma = new PrismaClient();

// Disable ETag generation (causes 304 responses)
app.set('etag', false);

// Middleware
app.use(cors());
app.use(express.json());

// Disable caching for all API responses
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  next();
});

// Routes

// GET all beers
app.get('/api/beers', async (req, res) => {
  try {
    const beers = await prisma.beer.findMany({
      orderBy: { position: 'asc' },
    });
    res.json(beers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch beers' });
  }
});

// GET beer by id
app.get('/api/beers/:id', async (req, res) => {
  try {
    const beer = await prisma.beer.findUnique({
      where: { id: req.params.id },
    });
    if (!beer) {
      return res.status(404).json({ error: 'Beer not found' });
    }
    res.json(beer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch beer' });
  }
});

// POST new beer
app.post('/api/beers', async (req, res) => {
  try {
    const newBeer = await prisma.beer.create({
      data: req.body,
    });
    res.status(201).json(newBeer);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create beer' });
  }
});

// PUT update beer
app.put('/api/beers/:id', async (req, res) => {
  try {
    const updatedBeer = await prisma.beer.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(updatedBeer);
  } catch (error) {
    res.status(404).json({ error: 'Beer not found' });
  }
});

// DELETE beer
app.delete('/api/beers/:id', async (req, res) => {
  try {
    const deletedBeer = await prisma.beer.delete({
      where: { id: req.params.id },
    });
    res.json(deletedBeer);
  } catch (error) {
    res.status(404).json({ error: 'Beer not found' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
  console.log(`[ api ] http://${host}:${port}/api/beers`);
});
