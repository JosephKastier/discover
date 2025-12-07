import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Beer } from '../models/beer.model';

interface BeerState {
  beers: Beer[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BeerState = {
  beers: [],
  isLoading: false,
  error: null,
};

export const BeerStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ beers }) => ({
    beerCount: computed(() => beers().length),
    hasBeer: computed(() => beers().length > 0),
  })),
  withMethods((store) => ({
    loadBeers(): void {
      patchState(store, { isLoading: true, error: null });

      // Simulate API call with dummy data
      setTimeout(() => {
        const dummyBeers: Beer[] = [
          {
            id: '1',
            name: 'IPA Supreme',
            brewery: 'Craft Brewery Co.',
            style: 'India Pale Ale',
            abv: 6.5,
            ibu: 65,
            description: 'A hoppy and aromatic IPA with citrus notes',
          },
          {
            id: '2',
            name: 'Dark Lager',
            brewery: 'Traditional Brewers',
            style: 'Lager',
            abv: 5.0,
            ibu: 22,
            description: 'A smooth and malty dark lager',
          },
          {
            id: '3',
            name: 'Wheat Wonder',
            brewery: 'Local Beer House',
            style: 'Wheat Beer',
            abv: 4.8,
            ibu: 15,
            description: 'Refreshing wheat beer with banana and clove notes',
          },
          {
            id: '4',
            name: 'Stout Night',
            brewery: 'Dark Ales Ltd.',
            style: 'Stout',
            abv: 7.2,
            ibu: 45,
            description:
              'Rich and creamy stout with coffee and chocolate flavors',
          },
        ];

        patchState(store, {
          beers: dummyBeers,
          isLoading: false,
        });
      }, 500);
    },

    addBeer(beer: Beer): void {
      patchState(store, (state) => ({
        beers: [...state.beers, beer],
      }));
    },

    removeBeer(id: string): void {
      patchState(store, (state) => ({
        beers: state.beers.filter((beer) => beer.id !== id),
      }));
    },

    clearBeers(): void {
      patchState(store, { beers: [] });
    },
  }))
);
