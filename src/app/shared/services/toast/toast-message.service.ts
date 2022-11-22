import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MessageService } from 'primeng/api';
import { ToastEnum } from '../../constants/toast.constant';
import { ToastMessageDto, ToastNotificacoDto } from '../../interfaces/others/toast-message.dto';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(
    private readonly toastService: MessageService,
    private readonly toastController: ToastController,
  ) { }

  presentToast(
    toast: ToastMessageDto,
    key = 'main',
  ) {
    this.toastService.clear();
    this.toastService.add({
      severity: toast.gravidade,
      summary: toast.titulo,
      detail: toast.detalhe,
      life: toast.duracao,
      key,
    });
  }

  async presentNotification(toast: ToastNotificacoDto,){
    const toastOverlay = await this.toastController.create({
      header: toast.titulo,
      message: toast.detalhe,
      duration: toast.duracao,
      color: toast.gravidade,
      position: 'top',
      keyboardClose: true,
      translucent: true,
    });
    toastOverlay.present();
  }
}
