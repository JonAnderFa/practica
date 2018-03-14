import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Casa } from '../model/casa';
const END_POINT="http://localhost:3000";//va a ser donde esta nuestro servicio



@Injectable()
export class CasaService {
casa:Casa[];
  constructor( public http: HttpClient) { 
    console.log('CasaService constructor');
  }
  getCasas():Observable<any>{

    //let url = END_POINT + '/todos?userId=2';
    let url = END_POINT + '/Casas';
    console.log(`CasaService getCasas ${url}`);
    return this.http.get(url);

  }
 
 
  getNombre(nombre:string){
    let url = END_POINT + '/casas?nombre='+nombre;
    console.log(`CasaService get ${url}`);
    return this.http.get(url);
  }

  delete(nombre){
    let url = END_POINT + '/casas?nombre='+nombre;
    console.log(`CasaService delete ${url}`);
    return this.http.delete(url);
  }

post(casa:Casa){
    let url = END_POINT + '/Casas/';
    console.log(`CasaService put ${url}`);

    let body = { 
                  "nombre":casa.nombre,
                  "precio":casa.precio,
                  "alquiler":casa.alquiler,
                  "habitaciones": casa.habitaciones,
                  "foto":casa.foto,
                  "direccion": casa.direccion
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }
  patch(casa:Casa){
    let url = END_POINT + '/casas?nombre='+casa.nombre;
    console.log(`CasaService put ${url}`);

    let body = {
                  "completed": !casa.alquiler   
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.patch( url, body , httpOptions );
  }
}
