import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerTestStore } from '../../store/beer-test.store';
import { BeerTestCardComponent } from '../../components/beer-test-card/beer-test-card.component';

@Component({
  selector: 'app-beer-tests',
  standalone: true,
  imports: [CommonModule, BeerTestCardComponent],
  templateUrl: './beer-tests.component.html',
  styleUrl: './beer-tests.component.scss',
})
export class BeerTestsComponent {
  readonly store = inject(BeerTestStore);
}
