import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Beer, RackSlot } from '../models/beer.model';

interface BeerState {
  slots: RackSlot[];
  isLoading: boolean;
  error: string | null;
}

const TOTAL_SLOTS = 100;

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
  withMethods((store) => ({
    loadBeers(): void {
      patchState(store, { isLoading: true, error: null });

      // Simulate API call with dummy data
      setTimeout(() => {
        const dummyBeers: Beer[] = [
          {
            id: '1',
            name: 'Krombacher Pils',
            brewery: 'Krombacher Brauerei',
            style: 'Pilsner',
            abv: 4.8,
            ibu: 27,
            description: 'Ein klassisches deutsches Pilsner',
            imageUrl: '/beers/1.png',
          },
          {
            id: '2',
            name: 'Warsteiner Premium Pilsner',
            brewery: 'Warsteiner Brauerei',
            style: 'Pilsner',
            abv: 4.8,
            ibu: 28,
            description: 'Prämienbier mit erlesenen Hopfensorten',
            imageUrl: '/beers/2.png',
          },
          {
            id: '3',
            name: 'Guinness Draught',
            brewery: 'St. James Gate Brewery',
            style: 'Stout',
            abv: 4.2,
            ibu: 45,
            description: 'Das legendäre irische Stout',
            imageUrl: '/beers/3.png',
          },
          {
            id: '4',
            name: 'Erdinger Weissbier',
            brewery: 'Erdinger Weissbräu',
            style: 'Hefeweizen',
            abv: 5.3,
            ibu: 14,
            description: 'Das beliebteste Weizenbier Deutschlands',
            imageUrl: '/beers/4.png',
          },
        ];

        const updatedSlots = [...store.slots()];
        updatedSlots[0].beer = dummyBeers[0]; // Position 1
        updatedSlots[4].beer = dummyBeers[1]; // Position 5
        updatedSlots[11].beer = dummyBeers[2]; // Position 12
        updatedSlots[22].beer = dummyBeers[3]; // Position 23

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
