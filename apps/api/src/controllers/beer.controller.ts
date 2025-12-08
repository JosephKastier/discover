import { Request, Response } from 'express';
import { BeerService } from '../services/beer.service';

export class BeerController {
  private beerService: BeerService;

  constructor() {
    this.beerService = new BeerService();
  }

  getAllBeers = async (req: Request, res: Response) => {
    try {
      const beers = await this.beerService.getAllBeers();
      res.json(beers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch beers' });
    }
  };

  getBeerById = async (req: Request, res: Response) => {
    try {
      const beer = await this.beerService.getBeerById(req.params.id);
      if (!beer) {
        return res.status(404).json({ error: 'Beer not found' });
      }
      res.json(beer);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch beer' });
    }
  };

  createBeer = async (req: Request, res: Response) => {
    try {
      const newBeer = await this.beerService.createBeer(req.body);
      res.status(201).json(newBeer);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create beer' });
    }
  };

  updateBeer = async (req: Request, res: Response) => {
    try {
      const updatedBeer = await this.beerService.updateBeer(req.params.id, req.body);
      res.json(updatedBeer);
    } catch (error) {
      res.status(404).json({ error: 'Beer not found' });
    }
  };

  deleteBeer = async (req: Request, res: Response) => {
    try {
      const deletedBeer = await this.beerService.deleteBeer(req.params.id);
      res.json(deletedBeer);
    } catch (error) {
      res.status(404).json({ error: 'Beer not found' });
    }
  };
}
