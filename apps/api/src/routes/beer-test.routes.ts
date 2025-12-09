import { Router } from 'express';
import { BeerTestController } from '../controllers/beer-test.controller';

const router = Router();
const beerTestController = new BeerTestController();

router.get('/beer-tests', beerTestController.getAllBeerTests);
router.get('/beer-tests/:id', beerTestController.getBeerTestById);
router.get('/beers/:beerId/tests', beerTestController.getBeerTestsByBeerId);
router.post('/beer-tests', beerTestController.createBeerTest);
router.put('/beer-tests/:id', beerTestController.updateBeerTest);
router.delete('/beer-tests/:id', beerTestController.deleteBeerTest);

export default router;
