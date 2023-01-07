import { AplicacaoDto } from './../../shared/interfaces/aplicacoes/aplicacao.dto';
import { ApplicationsService } from './../../shared/services/mocks/applications/applications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {
  apps: AplicacaoDto[];
  appImages: string[];
  appName = '';

  showDialog = false;

  constructor(
    private readonly applicationsService: ApplicationsService,
  ) { }

  ngOnInit() {
    this.loadApps();
  }

  loadApps() {
    this.applicationsService.list()
      .subscribe(data => {
        this.apps = data;
      })
  }

  showImgs(app: AplicacaoDto) {
    this.appImages = app.images;
    this.appName = app.title;
    this.showDialog = true;
  }

  closeDialog() {
    this.appImages = undefined;
    this.appName = undefined;
    this.showDialog = false;
  }


}
