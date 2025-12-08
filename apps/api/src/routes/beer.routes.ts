import { Router } from 'express';
import { BeerController } from '../controllers/beer.controller';

const router = Router();
const beerController = new BeerController();

router.get('/beers', beerController.getAllBeers);
router.get('/beers/:id', beerController.getBeerById);
router.post('/beers', beerController.createBeer);
router.put('/beers/:id', beerController.updateBeer);
router.delete('/beers/:id', beerController.deleteBeer);

export default router;
