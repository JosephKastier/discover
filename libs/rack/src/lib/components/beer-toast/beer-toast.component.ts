import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'lib-beer-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beer-toast.component.html',
  styleUrls: ['./beer-toast.component.scss'],
})
export class BeerToastComponent {
  @Input() beer: Beer | null = null;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
