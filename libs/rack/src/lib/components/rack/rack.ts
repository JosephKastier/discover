import { Component, inject, OnInit, signal } from '@angular/core';
import { BeerFacade } from '../../facades/beer.facade';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'lib-rack',
  imports: [FooterComponent, CommonModule],
  templateUrl: './rack.html',
  styleUrl: './rack.scss',
})
export class Rack implements OnInit {
  protected readonly beerFacade = inject(BeerFacade);
  protected selectedBeer = signal<Beer | null>(null);

  ngOnInit(): void {
    this.beerFacade.loadBeers();
  }

  onBeerClick(beer: Beer): void {
    this.selectedBeer.set(beer);
  }

  closeBeerToast(): void {
    this.selectedBeer.set(null);
  }
}
