import { Component, inject, OnInit, signal } from '@angular/core';
import { BeerFacade } from '../../facades/beer.facade';
import { FooterComponent } from '../../components/footer/footer.component';
import { BeerToastComponent } from '../../components/beer-toast/beer-toast.component';
import { RackHeaderComponent } from '../../components/rack-header/rack-header.component';
import { CommonModule } from '@angular/common';
import { Beer } from '../../models/beer.model';
import { environment } from 'apps/beer-rack/src/environments/environment';

@Component({
  selector: 'lib-rack',
  imports: [FooterComponent, BeerToastComponent, RackHeaderComponent, CommonModule],
  templateUrl: './rack.page.html',
  styleUrl: './rack.page.scss',
})
export class RackPage implements OnInit {
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

  getImageUrl(imageUrl: string | undefined): string {
    if (!imageUrl) return '/dummy.png';
    return `${environment.apiUrl.replace('/api', '')}${imageUrl}`;
  }
}
