import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-padre-component',
  templateUrl: './padre-component.component.html',
  styleUrls: ['./padre-component.component.css']
})
export class PadreComponentComponent implements OnInit {
  padreForm: FormGroup
  nombrePadre: any; 
  valorCallback=""; 
  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initPadreForm()
    
  }
  initPadreForm(){
    this.padreForm = this.fb.group({
      nombre: '',
      apellido: '',
      edad: ['', Validators.required]
    }); 
  }
  guardar(){
    debugger; 
    this.padreForm.value;
    this.nombrePadre = this.padreForm.value; 
   } 

   recibePadre(event: string){
    debugger; 

    this.valorCallback = event; 
  }


}
