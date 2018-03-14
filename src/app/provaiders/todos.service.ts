import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todos';
import {GLOBAL} from '../global';
const END_POINT="http://192.168.0.42:3000";//va a ser donde esta nuestro servicio
@Injectable()
export class TodosService {
  

  constructor( public http: HttpClient) { 
    console.log('TodosService constructor');
  }


  getTodos():Observable<any>{

    //let url = END_POINT + '/todos?userId=2';
    let url = END_POINT + '/todos';
    console.log(`TodosService getTodos ${url}`);
    return this.http.get(url);

  }
  getId(id:number){
    let url = END_POINT + '/todos/'+id;
    console.log(`TodosService get ${url}`);
    return this.http.get(url);
  }

  delete(id){
    let url = END_POINT + '/todos/'+id;
    console.log(`TodosService delete ${url}`);
    return this.http.delete(url);
  }

post(todo:Todo){
    let url = END_POINT + '/todos/';
    console.log(`TodosService put ${url}`);

    let body = {
                  // "id": todo.id,
                  "userId": todo.idUser,
                  "title": todo.title,
                  "completed": todo.completed    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }
  patch(todo:Todo){
    let url = END_POINT + '/todos/'+todo.id;
    console.log(`TodosService put ${url}`);

    let body = {
                  "completed": !todo.completed    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.patch( url, body , httpOptions );
  }


}