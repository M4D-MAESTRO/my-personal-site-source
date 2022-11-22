import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private themePreference: string;
  themeSubscriber = new ReplaySubject();

  constructor() { }

  setThemePreference(themePreference: string): void {
    localStorage.setItem('theme-preference', themePreference);
    this.themeSubscriber.next(themePreference);
  }

  getThemePreference(): string {
    return localStorage.getItem('theme-preference') || 'light';
  }
}
