import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { App } from './app';
import { RouterModule } from '@angular/router';

describe('App', () => {
  let spectator: Spectator<App>;
  const createComponent = createComponentFactory({
    component: App,
    imports: [RouterModule.forRoot([])],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have title "discover-beer"', () => {
    expect(spectator.component.title).toBe('discover-beer');
  });

  it('should render title in h1', () => {
    const h1 = spectator.query('h1');
    expect(h1).toBeTruthy();
    expect(h1?.textContent).toContain('discover-beer');
  });
});
