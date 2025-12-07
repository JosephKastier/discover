import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { App } from './app';
import { RouterModule } from '@angular/router';
import { Rack } from '@discover/rack';

describe('App', () => {
  let spectator: Spectator<App>;
  const createComponent = createComponentFactory({
    component: App,
    imports: [RouterModule.forRoot([]), Rack],
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

  it('should render Rack component', () => {
    const rack = spectator.query('lib-rack');
    expect(rack).toBeTruthy();
  });
});
