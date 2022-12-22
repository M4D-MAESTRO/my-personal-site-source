import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Subject } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { PreferencesService } from './shared/services/preferences/preferences.service';
import { ThemeService } from './shared/services/theme/theme.service';
import { LoaderService } from './shared/services/app-loader/loader.service';
import { SYSTEM_INFO } from 'src/config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme = false;
  transacoesPendentes = 0;
  obs = new Subject();
  ref: DynamicDialogRef;
  blockUI = false;

  selectedCountry: any;
  teste = 'teste';

  countries: any[];

  public appPages = [
    { title: `'home.main-title' | translate`, url: '/home', icon: 'home' },
    { title: `${this.translateService.instant('home.title-welcome')}`, url: '/applications', icon: 'app' },
  ]; ;

  constructor(
    public readonly loaderService: LoaderService,
    public readonly dialogService: DialogService,
    private readonly preferencesService: PreferencesService,
    private readonly themeService: ThemeService,
    private readonly primeConfig: PrimeNGConfig,
    private readonly translateService: TranslateService
  ) {
    const theme = this.preferencesService.getThemePreference();
    document.body.setAttribute('color-theme', theme);

    if (theme === 'dark') {
      this.isDarkTheme = true;
      this.themeService.switchTheme('bootstrap4-dark-yellow');
    } else {
      this.isDarkTheme = false;
      this.themeService.switchTheme('saga-blue');
    }
  }

  ngOnInit() {
    this.setupTranslation();
    this.countries = [
      { name: 'Português', code: 'BR', language: 'pt-BR' },
      { name: 'English', code: 'US', language: 'en' }
    ];

  }

  ngAfterViewInit() {
  }

  ionWillOpen() {

  }

  ionDidClose(): void {
    this.obs.next();
    this.obs.complete();
  }

  toggleDetails(p) {
    if (p.showDetails) {
      p.showDetails = false;
      p.icon = 'ios-arrow-down';
    } else {
      p.showDetails = true;
      p.icon = 'ios-arrow-up';
    }
  }

  toggleThemes(event) {
    const { checked } = event.detail;
    if (checked) {
      document.body.setAttribute('color-theme', 'dark');
      this.themeService.switchTheme('bootstrap4-dark-yellow');
      this.preferencesService.setThemePreference('dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
      this.preferencesService.setThemePreference('light');
      this.themeService.switchTheme('saga-blue');
    }
  }


  setupTranslation() {
    this.translateService.setDefaultLang('pt-BR');
    this.translateService.use('pt-BR');
    this.translateService
      .get('primeng')
      .subscribe(res => {
        this.primeConfig.setTranslation(res);
      });
  }

  changeLanguage() {
    const { language } = this.selectedCountry;
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
    this.translateService
      .get('primeng')
      .subscribe(res => {
        this.primeConfig.setTranslation(res);
      });
  }


  getSystemInfo() {
    return SYSTEM_INFO;
  }

}
