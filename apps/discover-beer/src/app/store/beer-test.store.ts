import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerTest } from '../models/beer.model';
import { environment } from '../../environments/environment';
import { computed } from '@angular/core';

type BeerTestState = {
  beerTests: BeerTest[];
  isLoading: boolean;
  error: string | null;
  selectedBeerTest: BeerTest | null;
};

const initialState: BeerTestState = {
  beerTests: [],
  isLoading: false,
  error: null,
  selectedBeerTest: null,
};

export const BeerTestStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ beerTests }) => ({
    beerTestCount: computed(() => beerTests().length),
    hasBeerTests: computed(() => beerTests().length > 0),
  })),
  withMethods((store, http = inject(HttpClient)) => ({
    loadBeerTests(): void {
      patchState(store, { isLoading: true, error: null });

      http.get<BeerTest[]>(`${environment.apiUrl}/beer-tests`).subscribe({
        next: (beerTests) => {
          // Assign random beer test images
          const beerTestsWithImages = beerTests.map((test, index) => ({
            ...test,
            beer: {
              ...test.beer,
              imageUrl: `/beer-tests/${(index % 7) + 1}.avif`,
            },
          }));
          patchState(store, {
            beerTests: beerTestsWithImages,
            isLoading: false,
          });
        },
        error: (error) => {
          patchState(store, {
            error: 'Failed to load beer tests',
            isLoading: false,
          });
          console.error('Error loading beer tests:', error);
        },
      });
    },

    loadBeerTestById(id: string): void {
      patchState(store, { isLoading: true, error: null });

      http.get<BeerTest>(`${environment.apiUrl}/beer-tests/${id}`).subscribe({
        next: (beerTest) => {
          // Assign random beer test image based on ID
          const beerTestWithImage = {
            ...beerTest,
            beer: {
              ...beerTest.beer,
              imageUrl: `/beer-tests/${Math.floor(Math.random() * 7) + 1}.avif`,
            },
          };
          patchState(store, {
            selectedBeerTest: beerTestWithImage,
            isLoading: false,
          });
        },
        error: (error) => {
          patchState(store, {
            error: 'Failed to load beer test',
            isLoading: false,
          });
          console.error('Error loading beer test:', error);
        },
      });
    },

    clearSelectedBeerTest(): void {
      patchState(store, { selectedBeerTest: null });
    },
  })),
  withHooks({
    onInit(store) {
      store.loadBeerTests();
    },
  })
);
