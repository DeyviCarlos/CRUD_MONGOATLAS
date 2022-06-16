export class Usuario{
    _id?: number;
    nombre: string;
    email: string;
    password: string;
    rol: String

    constructor(nombre: string, email: string,password: string,rol: string){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}