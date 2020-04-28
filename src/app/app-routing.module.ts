import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';


const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component:TodoListComponent },
  {path: "details/:id", component: ListDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
