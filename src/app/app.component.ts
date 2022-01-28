import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { orderBy } from 'lodash';

import { AppService } from './app.service';
import {UIPeaje} from './model/peaje'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  peajes: UIPeaje[] = []
  toggler: boolean = true;
  nameSort: string = '';

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.appService.getPeajes().subscribe((response: any) => {
        this.peajes = response;
    });

  }
  
  onClickNuevoPasaje() {
    console.log('Agregar un nuevo pasaje');
  }

  onClickVer() {
    console.log('ver los pasajes');
  }

  onClickEditar() {
    console.log('Editar los pasajeros');
  }

  onClickEliminar() {
    console.log('Eliminar pasajeros');
  }

  onClickSortOrder(name: string){
    this.nameSort = name;
    this.toggler = !this.toggler; 
    this.peajes = orderBy(this.peajes, name, !this.toggler ? "asc": "desc")
  }

  onClassTogglerArrow(name: string){
    if(name === this.nameSort){
      if(this.toggler){
        return 'arrow-up'
      }else{
        return 'arrow-down'
      }
    }
    return 'arrow-down'
  }

}
