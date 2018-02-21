import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import {HomeComponent} from './home/home.component';
import { ProjectDetailsComponent } from './AddProject/project-details/project-details.component';
import { ClientDetailsComponent } from './AddProject/client-details/client-details.component';
import { PaymentComponent } from './AddProject/payment/payment.component';
import { TaskAllocationComponent } from './AddProject/task-allocation/task-allocation.component';
import { ProjectNotesComponent } from './AddProject/shared/project-notes/project-notes.component';
import { UserService } from './services/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProjectDetailsComponent,
    ClientDetailsComponent,
    PaymentComponent,
    TaskAllocationComponent,
    ProjectNotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatTabsModule,
    MatFormFieldModule,
    //ReactiveFormsModule,
   // FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent }
    ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
