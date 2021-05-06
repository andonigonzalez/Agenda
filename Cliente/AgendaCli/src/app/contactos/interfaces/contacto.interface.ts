export interface BuscarContactosResponse{
    datos: Contacto[];
}

export interface Contacto {
    id?:         number;
    nombre:     string;
    apellidos:  string;
    telefono:   string;
    email:      string;
}
