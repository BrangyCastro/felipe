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
  filteredData: UIPeaje[] = []
  toggler: boolean = true;
  nameSort: string = '';

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.appService.getPeajes().subscribe((response: any) => {
        this.peajes = response;
        this.filteredData = this.peajes;
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
    this.filteredData = orderBy(this.filteredData, name, !this.toggler ? "asc": "desc")
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

  searchData(searchValue: any, name: any) {
    if (searchValue.length >= 2) {
      this.filteredData = this.peajes.filter((item: any) => {
        return item[name].toString().toLowerCase().includes(searchValue.toLowerCase());
      });
    } else if (searchValue.length < 1) {
      this.filteredData = this.peajes
    }
 }

}
