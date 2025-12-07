import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { RackPage } from './rack.page';

describe('RackPage', () => {
  let spectator: Spectator<RackPage>;
  const createComponent = createComponentFactory({
    component: RackPage,
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
