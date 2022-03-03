import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { Country, Translation } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  //puede ser null
  pais!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ idPais }) => this.paisService.getPaisPorCodigo(idPais)),
        tap(console.log)
      )
      .subscribe((pais) => {
       this.pais = pais;
      });

    // this.activatedRoute.params.subscribe(({ idPais }) => {
    //   this.paisService.getPaisPorCodigo(idPais).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }



}
