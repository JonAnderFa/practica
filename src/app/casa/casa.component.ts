import { Component, OnInit } from '@angular/core';
import { CasaService } from '../provaiders/casa.service';
import { Casa } from '../model/casa';
import { Servicio } from '../model/servicio';


@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent implements OnInit {
  casas : Casa[];
  casa1 :Casa;
  searchText :string;
  venta:boolean;
  alquiler:boolean;
  max:number;
  min:number;

  constructor(public casaService:CasaService) {
    this.searchText="";
    this.max=0;
    this.min=0;
     console.log("constructor componetCasa");
    }

  ngOnInit() {
    this.getAll();
    console.log("ngINit componetCasa");
  }
  getAll(){
    console.log('CasasComponent cargarCasas');
    this.casas = [];
    this.casaService.getCasas().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
        this.casa1=this.casas[0];

      },
      error=>{
        console.warn('peticion incorrecta %o', error);
        console.warn(error.status);
      }
    );//subscribe
  }
  mapeo( result : any ){

    let casa:Casa;
    let servicios:Servicio[];
    let servicio: Servicio;
    result.forEach( element => {
      
      casa = new Casa( 
                        
        element.nombre,
        element.precio,
        element.alquiler,
        element.habitaciones,
        element.foto,
        element.direccion);
        servicios=[];
        element.servicios.forEach(service => {
          servicio=new Servicio(service.nombre,service.disponible)
          servicios.push(servicio);
        });
     casa.servicio=servicios;
     this.casas.push(casa);
     console.log(casa.foto);
  });
  

        console.debug('carga correcta %o', this.casas);
  }
  cambiarCasa(casa){
    this.casa1=casa;
  }
}
