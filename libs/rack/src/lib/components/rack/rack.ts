import { Component, inject, OnInit } from '@angular/core';
import { BeerFacade } from '../../facades/beer.facade';

@Component({
  selector: 'lib-rack',
  imports: [],
  templateUrl: './rack.html',
  styleUrl: './rack.scss',
})
export class Rack implements OnInit {
  protected readonly beerFacade = inject(BeerFacade);

  ngOnInit(): void {
    this.beerFacade.loadBeers();
  }
}
