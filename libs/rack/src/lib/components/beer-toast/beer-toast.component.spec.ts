import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { BeerToastComponent } from './beer-toast.component';

describe('BeerToastComponent', () => {
  let spectator: Spectator<BeerToastComponent>;
  const createComponent = createComponentFactory(BeerToastComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should emit closeBeerToast event when onClose is called', () => {
    jest.spyOn(spectator.component.closeBeerToast, 'emit');
    spectator.component.onClose();
    expect(spectator.component.closeBeerToast.emit).toHaveBeenCalled();
  });
});
