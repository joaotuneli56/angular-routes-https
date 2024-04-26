import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  constructor() { }

  //Esta lista virá da API
  tarefas:Tarefa[] = [
    {id:"15155151515",titulo: "titulo 1", descricao: "eu sou o titulo 1", dataValidade: "01/01/2000"},
    {id:"asasca44444",titulo: "titulo 2", descricao: "eu sou o titulo 2", dataValidade: "01/01/2000"}
  ];

  listar():Tarefa[]{
    return this.tarefas;
  }

  remover(id:string){
    const tarefa = this.tarefas.find(c => c.id == id);

    if(tarefa){
       const index = this.tarefas.indexOf(tarefa);
       this.tarefas.splice(index,1);
    }
  }

  adicionar(tarefa:Tarefa){
    this.tarefas.push(tarefa);
  }
}
