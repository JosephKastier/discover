import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Beer, RackSlot } from '../models/beer.model';

interface BeerState {
  slots: RackSlot[];
  isLoading: boolean;
  error: string | null;
}

const TOTAL_SLOTS = 96;

// Initialize 96 empty slots
const initialSlots: RackSlot[] = Array.from(
  { length: TOTAL_SLOTS },
  (_, i) => ({
    position: i + 1,
    beer: null,
  })
);

const initialState: BeerState = {
  slots: initialSlots,
  isLoading: false,
  error: null,
};

export const BeerStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ slots }) => ({
    beerCount: computed(
      () => slots().filter((slot) => slot.beer !== null).length
    ),
    emptySlots: computed(
      () => slots().filter((slot) => slot.beer === null).length
    ),
    hasBeer: computed(() => slots().some((slot) => slot.beer !== null)),
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
            imageUrl: 'https://placehold.co/150x300/FF9800/fff?text=IPA',
          },
          {
            id: '2',
            name: 'Dark Lager',
            brewery: 'Traditional Brewers',
            style: 'Lager',
            abv: 5.0,
            ibu: 22,
            description: 'A smooth and malty dark lager',
            imageUrl: 'https://placehold.co/150x300/795548/fff?text=Lager',
          },
          {
            id: '3',
            name: 'Wheat Wonder',
            brewery: 'Local Beer House',
            style: 'Wheat Beer',
            abv: 4.8,
            ibu: 15,
            description: 'Refreshing wheat beer with banana and clove notes',
            imageUrl: 'https://placehold.co/150x300/FFC107/333?text=Wheat',
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
            imageUrl: 'https://placehold.co/150x300/212121/fff?text=Stout',
          },
          {
            id: '5',
            name: 'Pilsner Gold',
            brewery: 'Golden Brewery',
            style: 'Pilsner',
            abv: 4.9,
            ibu: 35,
            description: 'Crisp and refreshing pilsner',
            imageUrl: 'https://placehold.co/150x300/FFEB3B/333?text=Pilsner',
          },
          {
            id: '6',
            name: 'Red Ale',
            brewery: 'Red House Brewing',
            style: 'Red Ale',
            abv: 5.5,
            ibu: 28,
            description: 'Malty red ale with caramel notes',
            imageUrl: 'https://placehold.co/150x300/D32F2F/fff?text=Red+Ale',
          },
        ];

        // Place beers in specific slots (e.g., positions 1, 5, 12, 23, 45, 78)
        const updatedSlots = [...store.slots()];
        updatedSlots[0].beer = dummyBeers[0]; // Position 1
        updatedSlots[4].beer = dummyBeers[1]; // Position 5
        updatedSlots[11].beer = dummyBeers[2]; // Position 12
        updatedSlots[22].beer = dummyBeers[3]; // Position 23
        updatedSlots[44].beer = dummyBeers[4]; // Position 45
        updatedSlots[77].beer = dummyBeers[5]; // Position 78

        patchState(store, {
          slots: updatedSlots,
          isLoading: false,
        });
      }, 500);
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
  }))
);
