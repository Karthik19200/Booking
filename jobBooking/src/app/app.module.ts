import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { JobComponent } from './components/job/job.component';
import { HeaderComponent } from './components/header/header.component';
import { SenderComponent } from './components/sender/sender.component';
import { ReciverComponent } from './components/reciver/reciver.component';
import { ProductsComponent } from './components/products/products.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {ThemePalette} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {FormBuilder, FormControl,  ReactiveFormsModule} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';


// import { NgSelectModule } from '@ng-select/ng-select';




// import {MatSnackBar} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    HeaderComponent,
    SenderComponent,
    ReciverComponent,
    ProductsComponent,
    JobsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    NgbModule,
    MatDatepickerModule,
    MatSnackBarModule,
    HttpClientModule
  
    // NgSelectModule
    // MatSnackBar
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
