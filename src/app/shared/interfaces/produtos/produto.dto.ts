import { EstoqueLojaDto } from "../estoques/estoque.dto";
import { UserDto } from "../users/user.dto";

export interface ProdutoBasicDto {
    id: string;
    nome: string;
    descricao: string;
    preco_unitario: number;
    preco_compra: number;
    preco_venda: number;
}

export interface ProdutoDto extends ProdutoBasicDto{
    user_registrou: UserDto;
    estoques: EstoqueLojaDto[];
}

export interface CreateProdutoDto {
    nome: string;
    descricao: string;
    preco_unitario: number;
}

export interface UpdateProdutoDto {
    nome: string;
    descricao: string;
    preco_unitario: number;
}