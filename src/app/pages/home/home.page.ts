import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PreferencesService } from '../../shared/services/preferences/preferences.service';
import { SkillsService } from '../../shared/services/mocks/skills/skills.service';
import { SkillDto } from '../../shared/interfaces/skills/skills.dto';
import { CertificationsService } from '../../shared/services/mocks/certifications/certifications.service';
import { CertificationDto } from '../../shared/interfaces/certifications/certification.dto';
import { ExternalRedirect } from '../../shared/utils/ExternalLink';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  heroImg: string;
  skills: SkillDto[] = [];
  certifications: CertificationDto[] = [];

  private subscriptions = new Subscription();

  constructor(
    private readonly route: Router,
    private readonly preferencesService: PreferencesService,
    private readonly skillsService: SkillsService,
    private readonly certificationsService: CertificationsService,
  ) { }
// Fazer o formulario e acertar os botoes para as proximas paginas
  ngOnInit() {
    const theme = this.preferencesService.getThemePreference()
    this.heroImg = `assets/imgs/fotos/my-github-${theme}.png`;
    this.changeHeroImg();
    this.loadSkills();
    this.loadCertifications();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadSkills() {
    this.skillsService.list()
      .subscribe(data => {
        this.skills = data;
      });
  }

  loadCertifications() {
    this.certificationsService.list()
      .subscribe(data => {
        this.certifications = data;
      });
  }

  openLink(url: string) {
    ExternalRedirect.externalLinkHandle(url);
  }

  ionViewWillEnter() {

  }

  changeHeroImg() {
    this.preferencesService.themeSubscriber.subscribe(theme => {
      this.heroImg = `assets/imgs/fotos/my-github-${theme}.png`;
      console.log(this.heroImg);
    });
  }

  navigate(url: string){
    this.route.navigateByUrl(url);
  }

}