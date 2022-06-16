export class Producto{
    _id?: number;
    descripcion: string;
    precio: number;

    constructor(descripcion: string, precio: number){
        this.descripcion = descripcion;
        this.precio = precio;
    }
}