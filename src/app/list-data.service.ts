import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ToDo } from './todoModel';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  todoUrl: string = "http://localhost:3000/list";

  getTodo(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.todoUrl);
  }

  getTodoById = (id: number) : Observable<ToDo> => {
    return this.http.get<ToDo>(this.todoUrl + "/" +id);
  }

  constructor(private http: HttpClient) { }
}
