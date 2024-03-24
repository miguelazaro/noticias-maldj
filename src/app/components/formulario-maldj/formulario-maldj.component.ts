import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'maldj-app-formulario-maldj',
  templateUrl: './formulario-maldj.component.html',
  styleUrls: ['./formulario-maldj.component.css']
})
export class FormularioMaldjComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'mx';

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'bussines', nombre: 'Negocios'},
    {value: 'entertaiment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'tecnology', nombre: 'Tecnologia'},
  ];
  paises: any[] = [
    {value: 'mx', nombre: 'Mexico'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'hu', nombre: 'Hungria'},
    {value: 'gb', nombre: 'Reino Unido'},
    {value: 'ru', nombre: 'Rusia'},
    {value: 'jp', nombre: 'Japón'},
    {value: 'se', nombre: 'Suecia'},
    {value: 'si', nombre: 'Slovenia'},
    {value: 'id', nombre: 'Indonesia'},
    {value: 'in', nombre: 'India'},
    {value: 'nz', nombre: 'Nueva Zelanda'},
    {value: 'gr', nombre: 'Grecia'},
    {value: 'co', nombre: 'Colombia'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    
  this.parametrosSeleccionados.emit(PARAMETROS)
  }
}
