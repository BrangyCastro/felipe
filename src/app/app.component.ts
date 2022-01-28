import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'felipe';

  data = [
    {
      id: '1',
      nombre_pasaje: 'Nombre 1',
      departamento: 'depa 1',
      municipio: 'Municipio 1',
      estado_solicitud: 'activo',
      categoria: 'n/d',
      usuario: 'n/d',
    },
    {
      id: '2',
      nombre_pasaje: 'Nombre 1',
      departamento: 'depa 1',
      municipio: 'Municipio 1',
      estado_solicitud: 'activo',
      categoria: 'n/d',
      usuario: 'n/d',
    },
    {
      id: '3',
      nombre_pasaje: 'Nombre 1',
      departamento: 'depa 1',
      municipio: 'Municipio 1',
      estado_solicitud: 'activo',
      categoria: 'n/d',
      usuario: 'n/d',
    },
    {
      id: '4',
      nombre_pasaje: 'Nombre 1',
      departamento: 'depa 1',
      municipio: 'Municipio 1',
      estado_solicitud: 'activo',
      categoria: 'n/d',
      usuario: 'n/d',
    },
  ]

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
}
