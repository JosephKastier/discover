import { inject, Injectable } from '@angular/core';
import { BeerStore } from '../store/beer.store';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root',
})
export class BeerFacade {
  private readonly store = inject(BeerStore);

  // Selectors
  readonly beers = this.store.beers;
  readonly beerCount = this.store.beerCount;
  readonly hasBeer = this.store.hasBeer;
  readonly isLoading = this.store.isLoading;
  readonly error = this.store.error;

  // Actions
  loadBeers(): void {
    this.store.loadBeers();
  }

  addBeer(beer: Beer): void {
    this.store.addBeer(beer);
  }

  removeBeer(id: string): void {
    this.store.removeBeer(id);
  }

  clearBeers(): void {
    this.store.clearBeers();
  }
}
