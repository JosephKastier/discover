import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BeerTest } from '../../models/beer.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-beer-test-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './beer-test-card.component.html',
  styleUrl: './beer-test-card.component.scss',
})
export class BeerTestCardComponent {
  beerTest = input.required<BeerTest>();

  getImageUrl(imageUrl: string | null): string {
    if (!imageUrl) return '';
    // Images are now served from public folder
    return imageUrl;
  }

  getExcerpt(text: string, maxLength = 120): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength).trim() + '...';
  }
}
