
export interface BasicServicoReturnDto{

    id: string;
    nome: string;
}


export class ServicosDto {
    id: string;
    nome: string;
    descricao: string;
    custo_servico: number;
    preco_servico: number;
    is_remoto: boolean;
    is_domicilio: boolean;
}

export interface SearchServicosDto{
    nome?: string;
    descricao?: string;
}