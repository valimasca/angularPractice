import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';
import { ToDo } from '../todoModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  myList: ToDo;
  id: number;

  constructor(
    private todoData:ListDataService, 
    private route: ActivatedRoute) { }

//this will bring in the details of a list
//this will turn it in to a number
  ngOnInit(): void {
    this.route.params.subscribe(params => { // there is goig to be an id in the url
      this.id = +params["id"]; //as soon as it shows up give me a copy of it
      this.todoData //then sent that to my service to get me an item back
      .getTodoById(this.id)
      .subscribe(l => (this.myList = l));
    });
  }

}
