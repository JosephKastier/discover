import express from 'express';
import cors from 'cors';
import beerRoutes from './routes/beer.routes';
import beerTestRoutes from './routes/beer-test.routes';

const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Disable ETag generation (causes 304 responses)
app.set('etag', false);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (beer images)
app.use('/assets', express.static('apps/api/public'));

// Disable caching for all API responses
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private, max-age=0');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  next();
});

// Routes
app.use('/api', beerRoutes);
app.use('/api', beerTestRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
  console.log(`[ api ] http://${host}:${port}/api/beers`);
  console.log(`[ api ] http://${host}:${port}/api/beer-tests`);
});
