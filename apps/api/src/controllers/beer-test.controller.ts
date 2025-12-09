import { Request, Response } from 'express';
import { BeerTestService } from '../services/beer-test.service';

export class BeerTestController {
  private beerTestService: BeerTestService;

  constructor() {
    this.beerTestService = new BeerTestService();
  }

  getAllBeerTests = async (req: Request, res: Response) => {
    try {
      const beerTests = await this.beerTestService.getAllBeerTests();
      res.json(beerTests);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch beer tests' });
    }
  };

  getBeerTestById = async (req: Request, res: Response) => {
    try {
      const beerTest = await this.beerTestService.getBeerTestById(req.params.id);
      if (!beerTest) {
        return res.status(404).json({ error: 'Beer test not found' });
      }
      res.json(beerTest);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch beer test' });
    }
  };

  getBeerTestsByBeerId = async (req: Request, res: Response) => {
    try {
      const beerTests = await this.beerTestService.getBeerTestsByBeerId(req.params.beerId);
      res.json(beerTests);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch beer tests for beer' });
    }
  };

  createBeerTest = async (req: Request, res: Response) => {
    try {
      const beerTest = await this.beerTestService.createBeerTest(req.body);
      res.status(201).json(beerTest);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create beer test' });
    }
  };

  updateBeerTest = async (req: Request, res: Response) => {
    try {
      const beerTest = await this.beerTestService.updateBeerTest(req.params.id, req.body);
      res.json(beerTest);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update beer test' });
    }
  };

  deleteBeerTest = async (req: Request, res: Response) => {
    try {
      await this.beerTestService.deleteBeerTest(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete beer test' });
    }
  };
}
