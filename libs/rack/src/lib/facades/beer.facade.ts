import { inject, Injectable } from '@angular/core';
import { BeerStore } from '../store/beer.store';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root',
})
export class BeerFacade {
  private readonly store = inject(BeerStore);

  // Selectors
  readonly slots = this.store.slots;
  readonly beerCount = this.store.beerCount;
  readonly emptySlots = this.store.emptySlots;
  readonly hasBeer = this.store.hasBeer;
  readonly isLoading = this.store.isLoading;
  readonly error = this.store.error;

  // Actions
  loadBeers(): void {
    this.store.loadBeers();
  }

  addBeerToSlot(beer: Beer, position: number): void {
    this.store.addBeerToSlot(beer, position);
  }

  removeBeerFromSlot(position: number): void {
    this.store.removeBeerFromSlot(position);
  }

  clearAllBeers(): void {
    this.store.clearAllBeers();
  }
}
