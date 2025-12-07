import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BeerRackDomain } from './beer-rack-domain';

describe('BeerRackDomain', () => {
  let spectator: Spectator<BeerRackDomain>;
  const createComponent = createComponentFactory({
    component: BeerRackDomain,
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
