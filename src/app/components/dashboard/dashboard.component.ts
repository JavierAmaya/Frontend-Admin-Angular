import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() onVerCategoriasEmpresas = new EventEmitter();
  @Output() onVerMotoristas = new EventEmitter();
  @Output() onVerOrdenes = new EventEmitter();
  @Output() onVerUsuarios = new EventEmitter();
  
  //rv = region Visible
  rv:any = '';
  constructor() { }

  ngOnInit(): void {
  }

  verCategoriasEmpresas(){
    this.rv = 'categoriasEmpresas';
    this.onVerCategoriasEmpresas.emit(this.rv);
  }

  verMotorista(){
    this.rv = 'motoristas';
    this.onVerMotoristas.emit(this.rv);
  }

  verOrdenes(){
    this.rv = 'ordenes';
    this.onVerOrdenes.emit(this.rv);
  }

  verUsuarios(){
    this.rv = 'usuarios';
    this.onVerUsuarios.emit(this.rv);
  }

  verFormularios(){
    console.log('ver formularios');
  }
}
