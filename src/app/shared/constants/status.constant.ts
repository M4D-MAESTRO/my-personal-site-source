export const StatusUser = [
    { nome: "ATIVO", value: "ATIVO" },
    { nome: "AFASTADO", value: "AFASTADO" },
    { nome: "FÉRIAS", value: "FERIAS" },
    { nome: "SUSPENSO", value: "SUSPENSO" },
    { nome: "DESLIGADO", value: "DESLIGADO" },
]

export const StatusPatrimonio = [
    { nome: "ATIVO", value: "ATIVO" },
    { nome: "INATIVO", value: "INATIVO" },
    { nome: "MANUTENÇÃO", value: "MANUTENCAO" },
]


export const StatusTransacao = [
    { nome: "PENDENTE", value: 0 },
    { nome: "REJEITADO", value: 1 },
    { nome: "APROVADO", value: 2 },
]

export enum CargaStatus{
    FALHA="FALHA",
    EM_EXECUCAO="EM EXECUCAO",
    CONCLUIDO="CONCLUIDO",
}