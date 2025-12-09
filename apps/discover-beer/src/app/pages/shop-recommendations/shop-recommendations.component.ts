import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-recommendations.component.html',
  styleUrl: './shop-recommendations.component.scss',
})
export class ShopRecommendationsComponent {
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
