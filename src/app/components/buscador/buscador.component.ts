import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;


  /**
   * /Importamos las dependencias necesarias
   * @param {ActivatedRoute} activatedRoute 
   * @param {HeroesService} _heroesService 
   * @memberof BuscadorComponent.constructor
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {

  }

  /**
   * Recibimos por medio de url el valor a buscar y colocamos como parametro en la funcion buscarHeroes del servicio de Heroes
   * 
   * @memberof BuscadorComponent.ngOnInit
  / */
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    })
  }

}
