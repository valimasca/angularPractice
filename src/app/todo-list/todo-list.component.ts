import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list;

  constructor(private todoData:ListDataService) { }

  ngOnInit(): void {
    this.todoData.getTodo().subscribe(l => (this.list = l));
    console.log(this.list)
  }

}
