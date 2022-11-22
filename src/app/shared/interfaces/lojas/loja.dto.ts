import { EnderecoDto } from "../enderecos/endereco.dto";
import { EstoqueProdutoDto } from "../estoques/estoque.dto";

export interface LojaBasicDto{
    id: string;
    codigo: string;
    nome: string;
    descricao: string;
    endereco: EnderecoDto
}

export interface LojaDto extends LojaBasicDto{
    endereco: EnderecoDto
    estoques: EstoqueProdutoDto;
}

export interface CreateLojaDto{
    codigo: string;
    nome: string;
    descricao: string;
}

export interface UpdateLojaDto{
    codigo: string;
    nome: string;
    descricao: string;
}