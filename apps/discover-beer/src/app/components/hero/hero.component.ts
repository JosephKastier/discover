import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BeerTestStore } from '../../store/beer-test.store';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly store = inject(BeerTestStore);

  get newestBeerTestId(): string | null {
    const tests = this.store.beerTests();
    return tests.length > 0 ? tests[0].id : null;
  }
}
