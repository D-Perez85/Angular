import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import {kmAMillaPipe} from '../../app/pipes/km-a-millas'; 
import {AlumnoService} from '../services/alumno.service'
@Component({
  selector: 'app-padre-component',
  templateUrl: './padre-component.component.html',
  styleUrls: ['./padre-component.component.css'],
  providers: [kmAMillaPipe]
})
export class PadreComponentComponent implements OnInit {
  padreForm: FormGroup
  nombrePadre: any; 
  valorCallback=""; 
  distancia = 1; 
  distanciaEnmillas: number; 
  alumnos: any [] = [];

  fecha =  new Date(); 
  nombre = "diego maradona"

  constructor(private AlumnoService: AlumnoService, private kmPipe: kmAMillaPipe, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.distanciaEnmillas = this.kmPipe.transform(this.distancia)
    this.initPadreForm() 

    this.getAlumnos();
  }

  getAlumnos(){this.AlumnoService.getAlumnos().subscribe((alumnos: any)=>{
      this.alumnos = alumnos; 
    })
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
