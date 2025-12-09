import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BeerTestStore } from '../../store/beer-test.store';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-beer-test-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './beer-test-detail.component.html',
  styleUrl: './beer-test-detail.component.scss',
})
export class BeerTestDetailComponent implements OnInit {
  readonly store = inject(BeerTestStore);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.loadBeerTestById(id);
    }
  }

  getImageUrl(imageUrl: string | null): string {
    if (!imageUrl) return '';
    // Images are now served from public folder
    return imageUrl;
  }
}
