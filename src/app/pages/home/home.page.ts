import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { ThemeService } from '../../shared/services/theme/theme.service';
import { PreferencesService } from '../../shared/services/preferences/preferences.service';
import { SkillsService } from '../../shared/services/mocks/skills.service';
import { SkillDto } from '../../shared/interfaces/skills/skills.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  heroImg: string;
  skills: SkillDto[] = [];

  private subscriptions = new Subscription();

  constructor(
    private readonly route: Router,
    private readonly skillsService: SkillsService,
    private readonly preferencesService: PreferencesService,
  ) { }

  ngOnInit() {
    const theme = this.preferencesService.getThemePreference()
    this.heroImg = `assets/imgs/fotos/my-github-${theme}.png`;
    this.changeHeroImg();
    this.loadSkills();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadSkills() {
    this.skillsService.listSkills()
      .subscribe(data => {
        this.skills = data;
      });
  }

  ionViewWillEnter() {

  }

  changeHeroImg() {
    this.preferencesService.themeSubscriber.subscribe(theme => {
      this.heroImg = `assets/imgs/fotos/my-github-${theme}.png`;
      console.log(this.heroImg);
    });
  }


}