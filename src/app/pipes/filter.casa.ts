import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';
@Pipe({
  name: 'filterCasa'
})
export class FilterCasa implements PipeTransform {
/**
 * Filtro para buscar en una coleccion de Casas, no es CaseSensitive
 * @param casas: es un Casa[](array de Casas)
 * @param searchText: es un string con el nombre o direccion de Casa
 */
transform(casas: Casa[], searchText: string, alquiler: boolean, venta:boolean, min:number=0,max:number=0):Casa[] {
console.log(alquiler);
//Si no hay recetas => vacio
    if(!casas) return [];
//Si no hay busqueda y seAlquila => Solo casas Con alquiler
    if(!searchText && alquiler &&!venta){
        return casas.filter( it => {
            if(it.alquiler){
                return it;
            }
        });
    }
//Si no hay busqueda y si venta => Solo casas Con venta
    else if(!searchText && venta &&!alquiler){
        return casas.filter( it => {
            if(!it.alquiler){
                return it;
            }
        });
    }   
//Filtro de precio
if(min!=0){
    let precio=0;
    casas.filter(it =>{
        precio=it.precio;
        return precio>min;
    });
}
if(max!=0){
    let precio=0;
    casas.filter(it =>{
        precio=it.precio;
        return precio<max;
    });
}

//Si hay busquedas todas
    if(!searchText) return casas;

   
        let nombreDireccion="";
        searchText = searchText.toLowerCase();
        return casas.filter( it => {
            if(alquiler&&!venta){
                if(it.alquiler){
                    nombreDireccion=it.nombre+it.direccion;
                    nombreDireccion=nombreDireccion.toLowerCase();
                return nombreDireccion.toLowerCase().includes(searchText);
                }
            }else if(venta&&!alquiler){
                if(!it.alquiler){
                    nombreDireccion=it.nombre+it.direccion;
                    nombreDireccion=nombreDireccion.toLowerCase();
                return nombreDireccion.toLowerCase().includes(searchText);
                }
            }else{
                nombreDireccion=it.nombre+it.direccion;
                nombreDireccion=nombreDireccion.toLowerCase();
                return nombreDireccion.toLowerCase().includes(searchText);
            }
        });
    }
    

}