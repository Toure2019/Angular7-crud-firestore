import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeComponent } from './employees/employe/employe.component';
import { EmployeListComponent } from './employees/employe-list/employe-list.component';
import { EmployeeService } from './shared/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeComponent,
    EmployeListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
