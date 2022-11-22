import { LojaBasicDto, LojaDto } from "../lojas/loja.dto";
import { ProdutoBasicDto } from "../produtos/produto.dto";

export interface EstoqueBasicDto{
    quantidade: number;
}

export interface EstoqueLojaDto extends EstoqueBasicDto{
    loja: LojaBasicDto;
}

export interface EstoqueProdutoDto extends EstoqueBasicDto{
    loja: ProdutoBasicDto;
}
