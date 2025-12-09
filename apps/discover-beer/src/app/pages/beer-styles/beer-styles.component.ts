import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beer-styles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beer-styles.component.html',
  styleUrl: './beer-styles.component.scss',
})
export class BeerStylesComponent {
  beerStyles = [
    {
      name: 'Pils',
      description: 'Klassisches deutsches Bier mit hopfiger Note und klarer, goldener Farbe.',
      imageUrl: '/assets/beers/1.png',
      characteristics: ['Hopfig', 'Herb', 'Klar', 'Erfrischend'],
    },
    {
      name: 'Weizenbier',
      description: 'Obergäriges Bier mit fruchtigen und würzigen Aromen.',
      imageUrl: '/assets/beers/2.png',
      characteristics: ['Fruchtig', 'Würzig', 'Trüb', 'Spritzig'],
    },
    {
      name: 'Stout',
      description: 'Dunkles, kräftiges Bier mit Röstaromen und cremiger Textur.',
      imageUrl: '/assets/beers/3.png',
      characteristics: ['Röstmalzig', 'Cremig', 'Dunkel', 'Kräftig'],
    },
    {
      name: 'IPA',
      description: 'India Pale Ale mit intensivem Hopfenaroma und höherem Alkoholgehalt.',
      imageUrl: '/assets/beers/4.png',
      characteristics: ['Hopfenbetont', 'Bitter', 'Fruchtig', 'Aromatisch'],
    },
  ];
}
