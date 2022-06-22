export class Producto{
    _id?: number;
    descripcion: string;
    precio: number;
    categoria: string;
    unidadMedida: string;

    constructor(descripcion: string, precio: number, unidadMedida: string,categoria: string){
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.unidadMedida = unidadMedida;
    }
}