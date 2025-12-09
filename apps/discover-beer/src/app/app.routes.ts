import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'biertests',
    loadComponent: () =>
      import('./pages/beer-tests/beer-tests.component').then((m) => m.BeerTestsComponent),
  },
  {
    path: 'biersorten',
    loadComponent: () =>
      import('./pages/beer-styles/beer-styles.component').then((m) => m.BeerStylesComponent),
  },
  {
    path: 'shop-empfehlungen',
    loadComponent: () =>
      import('./pages/shop-recommendations/shop-recommendations.component').then(
        (m) => m.ShopRecommendationsComponent
      ),
  },
  {
    path: 'bier-test/:id',
    loadComponent: () =>
      import('./pages/beer-test-detail/beer-test-detail.component').then(
        (m) => m.BeerTestDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
