import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { ListViewComponent } from './list-view/list-view.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { CibcComponent } from './components/cibc/cibc.component';
import { LandingComponent } from './components/landing/landing.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { CofirmComponent } from './components/cofirm/cofirm.component';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ReviewComponent } from './components/review/review.component';
import { ApproveComponent } from './components/approve/approve.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavComponent,
    ListViewComponent,
    TodoComponent,
    CibcComponent,
    LandingComponent,
    DocumentsComponent,
    CofirmComponent,
    LoginComponent,
    SummaryComponent,
    ProfileComponent,
    ContactsComponent,
    ReviewComponent,
    ApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CofirmComponent]
})
export class AppModule { }
