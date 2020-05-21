import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    Todos:

    <app-todo *ngFor="let t of todos" [todo]="t"></app-todo>

    <p *ngIf="isBusy">Loading ...</p>
    <p *ngIf="hasError">Getting data failed!</p>


  </div>`,
})
export class AppComponent implements OnInit {
  isBusy = false;
  todos: Todo[] = [];
  hasError = false;

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.isBusy = true;
    this.todoService.getTodos().subscribe(t => {
      this.todos = t;
      this.isBusy = false;
    }, e => {
      this.hasError = true;
      console.error('getting todos failed', e);
    });
  }

}
