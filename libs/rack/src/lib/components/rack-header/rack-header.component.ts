import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-rack-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rack-header.component.html',
  styleUrl: './rack-header.component.scss',
})
export class RackHeaderComponent {
  @Input() beerCount = 0;
  @Input() emptySlots = 0;
}
