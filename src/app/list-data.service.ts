import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  todoUrl: "http://localhost:3000/todo";

  getTodo(){
    return this.http.get(this.todoUrl);
  }

  constructor(private http: HttpClient) { }
}
