import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TodoComponent } from './components/todo/todo.component';
import { CibcComponent } from "./components/cibc/cibc.component";

//services
import { TodosService } from './services/todos.service';
import { CibcService } from './services/cibc.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'list', component: ListViewComponent},
  { path: 'todo/:id', component: TodoComponent},
  { path: 'cibc', component: CibcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosService, CibcService]
})
export class AppRoutingModule { }
