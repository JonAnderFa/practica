export class Servicio{
    nombre: string;
    disponible: boolean;
    constructor(nombre: string,
        disponible:boolean
        ){
            console.log('Servicios constructor');
            this.nombre=nombre;
            this.disponible=disponible;
    
        }
}