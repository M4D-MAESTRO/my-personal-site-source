import { NotificacaoTipoEnum } from "../constants/notificacao.constant";


export class NotificacaoUtils {
    static getIconByTipo(tipo: string) {
        switch (tipo) {
            case NotificacaoTipoEnum.CARGA:
                return 'pi pi-cloud-upload';

            case NotificacaoTipoEnum.MENSAGEM_COMUM:
                return 'pi pi-comment';

            case NotificacaoTipoEnum.MENSAGEM_PRIORITARIA:
                return 'pi pi-info-circle';

            default:
                return 'pi pi-comment';
        }
    }
} 
