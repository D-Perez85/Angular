import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PadreComponentComponent } from './padre-component/padre-component.component';
import { HijoComponentComponent } from './hijo-component/hijo-component.component';
import {FormsModule} from '@angular/forms';
//From Angular Material
import {MatBadgeModule} from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import{ReactiveFormsModule} from '@angular/forms';
import {kmAMillaPipe} from './pipes/km-a-millas'
import {AlumnoService} from './services/alumno.service'; 
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PadreComponentComponent,
    HijoComponentComponent,
kmAMillaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatBadgeModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatInputModule, 
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule
    
    
    
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
