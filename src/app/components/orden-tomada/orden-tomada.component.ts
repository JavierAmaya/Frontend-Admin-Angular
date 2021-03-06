import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-orden-tomada',
  templateUrl: './orden-tomada.component.html',
  styleUrls: ['./orden-tomada.component.css']
})
export class OrdenTomadaComponent implements OnInit {

  @Output() onVerDetalleOrden = new EventEmitter();

  ordenesTomadas:any=[];
  aux:any=[];
  constructor(
    private ordenesServices: OrdenesService
  ) { }

  ngOnInit(): void {
    this.renderizarOrdenesTomadas();
  }

  renderizarOrdenesTomadas(){
    this.ordenesTomadas = [];
    this.ordenesServices.getOrdenes()
    .subscribe(
      result => {
        this.aux = result;
        this.aux.forEach((orden:any) => {
          if (orden.estadoOrden == "tomada") {
            this.ordenesTomadas.push(orden);
          }
        });
        console.log("ordenes tomadas:", this.ordenesTomadas)
      }
    )
  }

  verOrdenTomada(idOrden:any){
    
  }

  verDetalleOrden(orden:any){
    let d = {
      region: 'detalleOrden',
      infoOrden: orden
    }
    this.onVerDetalleOrden.emit(d);
  }

}
