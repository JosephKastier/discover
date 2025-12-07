import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Rack } from './rack';

describe('Rack', () => {
  let spectator: Spectator<Rack>;
  const createComponent = createComponentFactory({
    component: Rack,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render component', () => {
    expect(spectator.element).toBeTruthy();
  });
});
