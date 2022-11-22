import { LocalAgendamento, TipoAgendamento } from '../../constants/agendamento.constant';
import { CreateEnderecoDto, EnderecoDto } from '../enderecos/endereco.dto';
import { ServicosDto } from '../servicos/servicoes.dto';
import { UserDto } from '../users/user.dto';

interface BasicAgendaDto {
    id: string;
    nome: string;
    descricao: string;

    data_inicio: Date;
    data_fim: Date;

    hora_inicio: Date;
    hora_fim: Date;
}

export interface AgendamentoServicoDto {
    id: string;
    local: LocalAgendamento;
    endereco: EnderecoDto;
    servico: ServicosDto;
}

export interface EventoDto {
    id: string;
    nome: string;
    descricao: string;
    local: LocalAgendamento;
    custo: number;
    nota_fiscal: string;
    endereco: EnderecoDto;
    responsavel: UserDto;
}

export interface AgendaDto extends BasicAgendaDto {
    tipo: TipoAgendamento;
    agendamento_servico?: AgendamentoServicoDto;
    evento?: EventoDto;
}

export interface CreateCompromissoDto{
    nome: string;
	descricao: string;
	data_inicio: Date;
	data_fim: Date;
	hora_inicio: Date;
	hora_fim: Date;
}

export interface CreateEventoDto extends CreateCompromissoDto{
    local: LocalAgendamento;
    custo: number;
    endereco_compromisso?: CreateEnderecoDto;
}

export interface CreateAgendamentoServicoDto extends CreateCompromissoDto{
    local: LocalAgendamento;
    custo: number;
    servico_id: string;
    endereco_compromisso?: CreateEnderecoDto;
}
