import { enableProdMode, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { errorInterceptorProvider } from './shared/interceptors/error-interceptor';
import { PipeModule } from './shared/pipes/pipe.module';
import { DirectivesModule } from './shared/directive/directives.module';

registerLocaleData(localeBr, 'pt-BR');

enableProdMode();


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
  ],
  entryComponents: [],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule,
    DropdownModule,
    PipeModule,
    ProgressBarModule,
    FontAwesomeModule,
    ProgressSpinnerModule,
    DirectivesModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MessageService,
    ConfirmationService,
    DialogService,
    errorInterceptorProvider,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent, ],
  exports: [ToastModule, PipeModule, ProgressBarModule, TranslatePipe],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(far);
    library.addIconPacks(fab);
  }
}

defineCustomElements(window);
