import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-component',
  templateUrl: './hijo-component.component.html',
  styleUrls: ['./hijo-component.component.css']
})

export class HijoComponentComponent implements OnInit {
  @Input() dataPadre : any;
  @Output() nombreEvento = new EventEmitter <string>(); 
  nombre = ""; 

  constructor() { }

  ngOnInit(): void {
   
    this.dataPadre; 
  }
  callback(){
   this.dataPadre.nombre = this.nombre
   this.nombreEvento.emit(this.dataPadre.nombre); 
   
  }




}
