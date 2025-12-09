import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BeerTestStore } from '../../store/beer-test.store';
import { BeerTestCardComponent } from '../../components/beer-test-card/beer-test-card.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BeerTestCardComponent, HeroComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly store = inject(BeerTestStore);

  get topBeerTests() {
    return this.store.beerTests().slice(0, 4);
  }

  beerStyles = [
    {
      name: 'Pils',
      description: 'Klassisches deutsches Bier mit hopfiger Note und klarer, goldener Farbe.',
      imageUrl: '/beer-styles/pils.avif',
      characteristics: ['Hopfig', 'Herb', 'Klar', 'Erfrischend'],
    },
    {
      name: 'Weizenbier',
      description: 'Obergäriges Bier mit fruchtigen und würzigen Aromen.',
      imageUrl: '/beer-styles/weizen.avif',
      characteristics: ['Fruchtig', 'Würzig', 'Trüb', 'Spritzig'],
    },
    {
      name: 'Stout',
      description: 'Dunkles, kräftiges Bier mit Röstaromen und cremiger Textur.',
      imageUrl: '/beer-styles/stout.avif',
      characteristics: ['Röstmalzig', 'Cremig', 'Dunkel', 'Kräftig'],
    },
    {
      name: 'IPA',
      description: 'India Pale Ale mit intensivem Hopfenaroma und höherem Alkoholgehalt.',
      imageUrl: '/beer-styles/ipa.avif',
      characteristics: ['Hopfenbetont', 'Bitter', 'Fruchtig', 'Aromatisch'],
    },
  ];

  shops = [
    {
      name: 'Craft Beer Store',
      description: 'Spezialist für Craft Biere aus aller Welt mit über 500 Sorten im Sortiment.',
      url: 'https://craftbeerstore.de',
      category: 'Craft Beer',
      rating: 4.8,
    },
    {
      name: 'Hopfenhelden',
      description: 'Online-Shop für deutsche Bierspezialitäten und regionale Brauereien.',
      url: 'https://hopfenhelden.de',
      category: 'Regional',
      rating: 4.7,
    },
    {
      name: 'Beer Deluxe',
      description: 'Premium Biere und exklusive Limited Editions von internationalen Brauereien.',
      url: 'https://beerdeluxe.com',
      category: 'Premium',
      rating: 4.9,
    },
    {
      name: 'Bierwelt',
      description:
        'Große Auswahl an Bierstilen für jeden Geschmack, von klassisch bis experimentell.',
      url: 'https://bierwelt.shop',
      category: 'Vielfalt',
      rating: 4.6,
    },
  ];
}
