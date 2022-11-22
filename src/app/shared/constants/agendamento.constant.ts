
import { SelectItem } from 'primeng/api';

export enum TipoAgendamento {
    PESSOAL = 'Compromisso Pessoal',
    EVENTO = 'Evento',
    SERVICO = 'Serviço',
}

export enum LocalAgendamento {
    LOCAL = 'Local',
    EXTERNO = 'Externo',
    REMOTO = 'Remoto',
}

export const TipoAgendamentoItens: SelectItem[] = [
    {
        label: TipoAgendamento.EVENTO,
        value: TipoAgendamento.EVENTO,
    },
    {
        label: TipoAgendamento.PESSOAL,
        value: TipoAgendamento.PESSOAL,
    },
    {
        label: TipoAgendamento.SERVICO,
        value: TipoAgendamento.SERVICO,
    },
]

export const LocalAgendamentoItens: SelectItem[] = [
    {
        label: LocalAgendamento.LOCAL,
        value: LocalAgendamento.LOCAL,
    },
    {
        label: LocalAgendamento.EXTERNO,
        value: LocalAgendamento.EXTERNO,
    },
    {
        label: LocalAgendamento.REMOTO,
        value: LocalAgendamento.REMOTO,
    },
]
