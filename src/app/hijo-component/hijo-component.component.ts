import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-component',
  templateUrl: './hijo-component.component.html',
  styleUrls: ['./hijo-component.component.css']
})
export class HijoComponentComponent implements OnInit {
  @Input() dataPadre: any;
  @Output() nombreEvento = new EventEmitter <string>(); 
  constructor() { }

  ngOnInit(): void {
  }
  callback(){
   this.nombreEvento.emit("NUEVO NOMBRE")
  }

}
