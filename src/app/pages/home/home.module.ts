import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TranslatePipe } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator';
import { AvatarModule } from 'primeng/avatar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DirectivesModule } from '../../shared/directive/directives.module';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    AvatarModule,
    InputSwitchModule,
    StyleClassModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    PaginatorModule,
    FontAwesomeModule,
    SplitterModule,
    HomePageRoutingModule,
    DirectivesModule,
    PipeModule,
  ],
  declarations: [
    HomePage,
    TranslatePipe,
  ]
})
export class HomePageModule { }
