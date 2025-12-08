import express from 'express';
import cors from 'cors';

const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Types
interface Beer {
  id: string;
  name: string;
  brewery: string;
  style: string;
  abv: number;
  ibu?: number;
  description?: string;
  imageUrl?: string;
  position: number;
}

// Mock Database
const beers: Beer[] = [
  {
    id: '1',
    name: 'Krombacher Pils',
    brewery: 'Krombacher Brauerei',
    style: 'Pilsner',
    abv: 4.8,
    ibu: 27,
    description: 'Ein klassisches deutsches Pilsner',
    imageUrl: '/beers/1.png',
    position: 1,
  },
  {
    id: '2',
    name: 'Warsteiner Premium Pilsner',
    brewery: 'Warsteiner Brauerei',
    style: 'Pilsner',
    abv: 4.8,
    ibu: 28,
    description: 'Prämienbier mit erlesenen Hopfensorten',
    imageUrl: '/beers/2.png',
    position: 5,
  },
  {
    id: '3',
    name: 'Guinness Draught',
    brewery: 'St. James Gate Brewery',
    style: 'Stout',
    abv: 4.2,
    ibu: 45,
    description: 'Das legendäre irische Stout',
    imageUrl: '/beers/3.png',
    position: 12,
  },
  {
    id: '4',
    name: 'Erdinger Weissbier',
    brewery: 'Erdinger Weissbräu',
    style: 'Hefeweizen',
    abv: 5.3,
    ibu: 14,
    description: 'Das beliebteste Weizenbier Deutschlands',
    imageUrl: '/beers/4.png',
    position: 23,
  },
];

// Routes

// GET all beers
app.get('/api/beers', (req, res) => {
  res.json(beers);
});

// GET beer by id
app.get('/api/beers/:id', (req, res) => {
  const beer = beers.find((b) => b.id === req.params.id);
  if (!beer) {
    return res.status(404).json({ error: 'Beer not found' });
  }
  res.json(beer);
});

// POST new beer
app.post('/api/beers', (req, res) => {
  const newBeer: Beer = {
    id: String(beers.length + 1),
    ...req.body,
  };
  beers.push(newBeer);
  res.status(201).json(newBeer);
});

// PUT update beer
app.put('/api/beers/:id', (req, res) => {
  const beerIndex = beers.findIndex((b) => b.id === req.params.id);
  if (beerIndex === -1) {
    return res.status(404).json({ error: 'Beer not found' });
  }
  beers[beerIndex] = { ...beers[beerIndex], ...req.body };
  res.json(beers[beerIndex]);
});

// DELETE beer
app.delete('/api/beers/:id', (req, res) => {
  const beerIndex = beers.findIndex((b) => b.id === req.params.id);
  if (beerIndex === -1) {
    return res.status(404).json({ error: 'Beer not found' });
  }
  const deletedBeer = beers.splice(beerIndex, 1);
  res.json(deletedBeer[0]);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
  console.log(`[ api ] http://${host}:${port}/api/beers`);
});
