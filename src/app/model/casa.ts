import { Servicio } from "./servicio";

export class Casa{
    nombre:string;
    precio:number;
    alquiler:boolean;
    habitaciones: number;
    foto: string;
    direccion: string;
    servicio: Servicio[];

    constructor(nombre: string,
    precio:number,
    alquiler:boolean,
    habitaciones: number,
    foto: string,
    direccion: string
    ){
        console.log('Casa constructor');
        this.nombre=nombre;
        this.precio = precio;
        this.alquiler= alquiler;
        this.habitaciones= habitaciones;
        this.foto = foto;
        this.direccion=direccion;
        this.servicio=[];

    }
   /* addServicio(servicio: Servicio[]){
        this.servicio.push(servicio);
      }*/
}