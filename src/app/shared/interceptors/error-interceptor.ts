import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, finalize, timeout } from 'rxjs/operators';

import { ToastEnum, ToastPrimeSeverityEnum } from '../constants/toast.constant';
import { LoaderService } from '../services/app-loader/loader.service';
import { API_CONFIG } from 'src/config/api.config';
import { ToastMessageService } from '../services/toast/toast-message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private timeoutTiming = 10000;

  constructor(
    private readonly alertContr: AlertController,
    private readonly loaderService: LoaderService,
    private readonly router: Router,
    private readonly menu: MenuController,
    private readonly toastMessageService: ToastMessageService,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    this.loadBlock(true);
    return (
      next
        .handle(req)
        //Pipe para Erros
        .pipe(
          catchError(async (response) => {
            const { statusText } = response;
            if (statusText === 'Unknown Error') {
              return throwError('Timeout');
            }
            const { status } = response;

            if (response.error instanceof Blob) {
              response.error = JSON.parse(await response.error.text());
            }

            const { message } = response.error;
            const convertedMessage = this.convertErrorList(message);

            switch (Number(status)) {
              case 400:
                this.handle400(convertedMessage);
                break;

              case 403:
                this.handle403(convertedMessage);
                break;

              case 401:
                this.handle401(convertedMessage);
                break;

              case 422:
                this.handle422(convertedMessage);
                break;

              case 404:
                this.handle404(convertedMessage);
                break;

              default:
                this.handleDefaultError(convertedMessage, status);
            }

            return throwError(convertedMessage);
          })
        )
        //Pipe para Timeout
        .pipe(
          timeout(this.timeoutTiming),
          catchError((response) => {
            if (response !== 'Timeout') {
              return;
            }
            const e = `Tempo de espera excedido: ${API_CONFIG.baseURL}`;
            this.handle408(e);
            return throwError(e);
          })
        )
        //Pipe para loading de requisições
        .pipe(
          finalize(() => {
            this.loaderService.isLoading.next(false);
            this.loadBlock(false);
          })
        ) as any);
  }

  handle400(error: string) {
    this.toastMessageService.presentToast({
      titulo: '400 - Requisição com problema',
      detalhe: error,
      gravidade: ToastPrimeSeverityEnum.ATENCAO,
      duracao: ToastEnum.mediumDuration,
    });
  }

  handle401(error: string) {
    if (error == 'Invalid token' || error == 'Token is missing') {
      this.toastMessageService.presentToast({
        titulo: '401 - Acesse novamente',
        detalhe: 'É preciso autenticar-se novamente',
        gravidade: ToastPrimeSeverityEnum.ATENCAO,
        duracao: ToastEnum.longDuration,
      });

      this.menu.close();
      this.router.navigateByUrl('login');
    } else {
      this.toastMessageService.presentToast({
        titulo: '401 - Não autorizado',
        detalhe: error,
        gravidade: ToastPrimeSeverityEnum.ATENCAO,
        duracao: ToastEnum.mediumDuration,
      });
    }
  }

  handle403(error: string) {
    this.toastMessageService.presentToast({
      titulo: '403 - Proibido',
      detalhe: error,
      gravidade: ToastPrimeSeverityEnum.ATENCAO,
      duracao: ToastEnum.mediumDuration,
    });

    //this.storage.setLocalUser(null);
  }

  handle404(error: string) {
    this.toastMessageService.presentToast({
      titulo: '404 - Não encontrado',
      detalhe: error,
      gravidade: ToastPrimeSeverityEnum.ATENCAO,
      duracao: ToastEnum.mediumDuration,
    });
  }

  handle408(error: string) {
    this.toastMessageService.presentToast({
      titulo: '408 - Request Timeout',
      detalhe: error,
      gravidade: ToastPrimeSeverityEnum.ERRO,
      duracao: ToastEnum.longDuration,
    });
  }

  async handle422(error: string) {
    this.toastMessageService.presentToast({
      titulo: '422 - Não processável',
      detalhe: error,
      gravidade: ToastPrimeSeverityEnum.ERRO,
      duracao: ToastEnum.longDuration,
    });
  }

  handleDefaultError(message: string, status = 500) {
    this.toastMessageService.presentToast({
      gravidade: ToastPrimeSeverityEnum.ERRO,
      detalhe: message,
      duracao: ToastEnum.longDuration,
      titulo: status.toString(),
    });

  }

  private async createAlert(error) {
    let titulo = error.error;
    let message = error.msg;

    if (!titulo) {
      titulo = 'Falha';
    }

    if (!message) {
      message = error.message;
    }

    const alert = await this.alertContr.create({
      header: error.status + ': ' + titulo,
      message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
        },
      ],
    });

    await alert.present();
  }

  private convertErrorList(error: any) {
    if (!error.length) {
      return error;
    }

    let errorList = '';
    error.forEach(e => {
      errorList = errorList.concat(`- ${e}`);
      errorList = errorList.concat('\n')
    });
    return errorList;
  }

  private loadBlock(isBlock = false): void {
    const value = isBlock ? 'none' : 'all';
    document.documentElement.style.setProperty('--load-block', value);
  }
}

export const errorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
