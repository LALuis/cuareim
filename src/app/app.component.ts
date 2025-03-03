import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en', 'de', 'fr', 'pt']);
    this.translate.setDefaultLang(this.translate.getBrowserLang() || 'es');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
