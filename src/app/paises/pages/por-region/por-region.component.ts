import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService : PaisService ) { }

  ngOnInit(): void {
  }

  getClaseCSS( region: string):string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ){

    if( region === this.regionActiva){ return; } 
    this.regionActiva = region;
    this.paises = [];
  }

  buscar(termino: string) {
    
    this.hayError = false;
    this.termino = termino;

    this.paisService.getRegiones(termino).subscribe({
      next: (paises) => {
        this.paises = paises;
                
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      },
    });
  }
}
