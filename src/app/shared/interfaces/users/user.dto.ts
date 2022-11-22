
import { EnderecoDto } from "../enderecos/endereco.dto";
import { LojaDto } from "../lojas/loja.dto";
import { PerfilDto } from "../perfis/perfil.dto";
import { ServicosDto } from "../servicos/servicoes.dto";

export interface UserDto {
    id: string;
    nome: string;
    email: string;
    cpf: string;
    avatar_url: string | null;
    status: boolean;
    socket_id: string | null;
    perfil: PerfilDto | null;
    endereco: EnderecoDto | null;
    loja: LojaDto | null;
    servicos: ServicosDto[];
    
}

export interface LabedUser extends UserDto {
    label: string;
}

export interface CreateUserDto {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    perfilId: string;
    loterica_id: string;
}

export interface UpdateUserDto {
    nome?: string;
    email?: string;
    senha?: string;
    status?: string;
    is_admin?: boolean; 
    perfil_id?: string;
    unidadeLoterica?: string;
}