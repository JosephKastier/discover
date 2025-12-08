import { computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Beer, RackSlot } from '../models/beer.model';

interface BeerState {
  slots: RackSlot[];
  isLoading: boolean;
  error: string | null;
}

const TOTAL_SLOTS = 100;
const API_URL = 'http://localhost:3000/api';

// Initialize 100 empty slots
const initialSlots: RackSlot[] = Array.from({ length: TOTAL_SLOTS }, (_, i) => ({
  position: i + 1,
  beer: null,
}));

const initialState: BeerState = {
  slots: initialSlots,
  isLoading: false,
  error: null,
};

export const BeerStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ slots }) => ({
    beerCount: computed(() => slots().filter((slot) => slot.beer !== null).length),
    emptySlots: computed(() => slots().filter((slot) => slot.beer === null).length),
    hasBeer: computed(() => slots().some((slot) => slot.beer !== null)),
  })),
  withMethods((store) => {
    const http = inject(HttpClient);

    return {
      loadBeers(): void {
        patchState(store, { isLoading: true, error: null });

        http.get<Beer[]>(`${API_URL}/beers`).subscribe({
          next: (beers) => {
            const updatedSlots = [...store.slots()];
            beers.forEach((beer, index) => {
              const positions = [0, 4, 11, 22]; // Positions 1, 5, 12, 23
              if (index < positions.length) {
                updatedSlots[positions[index]].beer = beer;
              }
            });

            patchState(store, {
              slots: updatedSlots,
              isLoading: false,
            });
          },
          error: (err) => {
            console.error('Failed to load beers:', err);
            patchState(store, {
              isLoading: false,
              error: 'Failed to load beers from API',
            });
          },
        });
      },

      addBeerToSlot(beer: Beer, position: number): void {
        if (position < 1 || position > TOTAL_SLOTS) {
          console.error('Invalid slot position');
          return;
        }

        patchState(store, (state) => {
          const updatedSlots = [...state.slots];
          updatedSlots[position - 1].beer = beer;
          return { slots: updatedSlots };
        });
      },

      removeBeerFromSlot(position: number): void {
        if (position < 1 || position > TOTAL_SLOTS) {
          console.error('Invalid slot position');
          return;
        }

        patchState(store, (state) => {
          const updatedSlots = [...state.slots];
          updatedSlots[position - 1].beer = null;
          return { slots: updatedSlots };
        });
      },

      clearAllBeers(): void {
        patchState(store, { slots: initialSlots });
      },
    };
  })
);
