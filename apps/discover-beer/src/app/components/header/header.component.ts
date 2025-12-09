import { Component, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;
  bierRegalUrl = isDevMode() ? 'http://localhost:4202' : 'https://bierregal.kastier.de';

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
