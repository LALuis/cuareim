import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 30; // encoge logo y barra
  }

  isMenuOpen = false;
  open = signal(false);
  langOpen = false;
  scrolled = false;

  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  toggle() {
    this.open.update((v) => !v);
  }
}
