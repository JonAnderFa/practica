import { Component, OnInit } from '@angular/core';
import { TodosService } from '../provaiders/todos.service';
import { Todo } from '../model/todos';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
id:number;
status:number;
todos : Todo[];
texto: string;
descripcion:string;
  constructor(public todosService:TodosService) {
   this.id=0;
   this.status=0;
   this.texto=""
    console.log("constructor componetUNO");
   }

  ngOnInit() {
    console.log("ngOninit componetUNO");
  }
  buscarTarea(){
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todosService.getId(this.id).subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
        this.status=200;
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
        console.warn(error.status);
        this.status=error.status;
        this.texto=error.statusText;
      }
    );//subscribe
  }
  mapeo( result : any ){

    let todo:Todo;
    
    
        todo = new Todo( result.title );
        todo.id = result.id;
        todo.idUser = result.userId;
        todo.completed = result.completed;

        this.todos.push(todo);
   

  }
  buscar(){
    console.log("Hola numero:"+this.id);
    if (this.id==5){
      console.log("Correcto:"+this.id);
      this.descripcion="Claro que si ese es el numero";
    }else{
      console.log("incorrecto:"+this.id);
      this.descripcion="Nop este numero no existe";
    }
  }

}
