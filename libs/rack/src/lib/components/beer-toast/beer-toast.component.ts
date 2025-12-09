import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer } from '../../models/beer.model';
import { environment } from 'apps/beer-rack/src/environments/environment';

@Component({
  selector: 'lib-beer-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beer-toast.component.html',
  styleUrls: ['./beer-toast.component.scss'],
})
export class BeerToastComponent {
  @Input() beer: Beer | null = null;
  @Output() closeBeerToast = new EventEmitter<void>();

  onClose(): void {
    this.closeBeerToast.emit();
  }

  goToShop(): void {
    // Hier könnte die Weiterleitung zum Shop erfolgen
    // Beispiel: window.location.href = 'https://shop.example.com/beer/' + this.beer?.id;
    console.log('Zum Shop für:', this.beer?.name);
  }

  getImageUrl(imageUrl: string | undefined): string {
    if (!imageUrl) return '/dummy.png';
    return `${environment.apiUrl.replace('/api', '')}${imageUrl}`;
  }
}
