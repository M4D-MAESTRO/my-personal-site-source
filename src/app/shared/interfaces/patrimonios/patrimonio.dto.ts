export interface PatrimonioDto {
    id: string;
    nome: string;
    id_fisico: string | null;
    descricao: string;
    valor_patrimonio: number;
    status_patrimonio: string;
    criadoEm: Date;
    alteradoEm: Date;
    inativadoEm: Date | null;
}

export interface CreatePatrimonioDto {
    nome: string;
    descricao: string;
    valor_patrimonio: number;
    loja_id: string;
    id_fisico: string;
}

export interface UpdatePatrimonioDto {
    nome: string;
    descricao: string;
    valor_patrimonio: number;
    loja_id: string;
    id_fisico: string;
    status_patrimonio: string;
}