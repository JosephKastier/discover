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
});
