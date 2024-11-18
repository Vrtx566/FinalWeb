export interface AuthResponse {
    id: string;
    email: string;
    alias: string;
    isActive: boolean;
    roles: string[];
}


export interface LoginResponse {
   alias: string;
    email: string;
    jwt: string;
}


export interface LoginResponse{
    user: User
}

export interface User {
    alias: string
    email: string
    jwt: string
}


export interface UserResponse {
    id: string;
    email: string;
    alias: string;
    isActive: boolean;
    roles: string[];
}

export interface OrganoResponse {
    id: string;
    tipo: string;
    precio: number;
    disponibilidad: boolean;
}

export interface ProveedorResponse {
    id: string;
    nombre: string;
    contacto: string;
    ubicacion: string;
}

export interface GarantiaResponse {
    id: string;
    descripcion: string;
    certificado: string;
    organo: OrganoResponse;
    proveedor: ProveedorResponse;
}


export interface ProveedorFullResponse{
    id: string
    nombre: string
    contacto: string
    ubicacion: string
    organos_proveidos: number
    organos: OrganoResponse[]
}
