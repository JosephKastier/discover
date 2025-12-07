import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { RackHeaderComponent } from './rack-header.component';

describe('RackHeaderComponent', () => {
  let spectator: Spectator<RackHeaderComponent>;
  const createComponent = createComponentFactory(RackHeaderComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display beer count and empty slots', () => {
    spectator.setInput('beerCount', 4);
    spectator.setInput('emptySlots', 96);
    spectator.detectChanges();

    expect(spectator.element.textContent).toContain('4 Biere');
    expect(spectator.element.textContent).toContain('96 freie Plätze');
  });
});
