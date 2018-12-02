import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TodoComponent } from './components/todo/todo.component';
import { CibcComponent } from "./components/cibc/cibc.component";
import { LandingComponent } from "./components/landing/landing.component";
import { DocumentsComponent } from "./components/documents/documents.component"
import { LoginComponent } from "./components/login/login.component"
import { SummaryComponent} from "./components/summary/summary.component";
import { ProfileComponent} from "./components/profile/profile.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ReviewComponent} from "./components/review/review.component";
import {ApproveComponent} from "./components/approve/approve.component";

//services
import { TodosService } from './services/todos.service';
import { CibcService } from './services/cibc.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'list', component: ListViewComponent},
  { path: 'todo/:id', component: TodoComponent},
  { path: 'cibc', component: CibcComponent},
  { path: 'landing', component: LandingComponent},
  { path: 'documents', component: DocumentsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'approve', component: ApproveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosService, CibcService]
})
export class AppRoutingModule { }
