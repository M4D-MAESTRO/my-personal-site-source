import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TranslatePipe } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import {ImageModule} from 'primeng/image';


import { ApplicationsPageRoutingModule } from './applications-routing.module';

import { ApplicationsPage } from './applications.page';
import { PipeModule } from '../../shared/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RippleModule,
    GalleriaModule,
    ImageModule,
    ButtonModule,
    DialogModule,
    ApplicationsPageRoutingModule,
    PipeModule,
  ],
  declarations: [
    ApplicationsPage,
    TranslatePipe,
  ]
})
export class ApplicationsPageModule { }
