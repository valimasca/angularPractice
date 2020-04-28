import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';
import { ToDo } from '../todoModel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: ToDo[];

  constructor(private todoData:ListDataService) {
    this.todoData.getTodo().subscribe(l => (this.list = l));
   }

  ngOnInit(): void {
    
  }

}
