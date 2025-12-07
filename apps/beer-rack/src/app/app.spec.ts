import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { App } from './app';
import { RouterModule } from '@angular/router';
import { BeerRackDomain } from '@discover/beer-rack-domain';

describe('App', () => {
  let spectator: Spectator<App>;
  const createComponent = createComponentFactory({
    component: App,
    imports: [RouterModule.forRoot([]), BeerRackDomain],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have title "beer-rack"', () => {
    expect(spectator.component.title).toBe('beer-rack');
  });

  it('should render title in h1', () => {
    const h1 = spectator.query('h1');
    expect(h1).toBeTruthy();
    expect(h1?.textContent).toContain('beer-rack');
  });

  it('should render BeerRackDomain component', () => {
    const beerRackDomain = spectator.query('lib-beer-rack-domain');
    expect(beerRackDomain).toBeTruthy();
  });
});
