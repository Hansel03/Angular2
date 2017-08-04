import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {




  heroe: any = {};

  /**
   * Utilizamos el ActivatedRoute para obtener parametros por url
   * @param {ActivatedRoute} activatedRoute
   * @memberof HeroeComponent.constructor
  / */
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      // Para conocer el objeto que retorna los parametros
      console.log(params);
      // Para obtener el valor de un parametro especifico
      console.log(params['id']);

      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit() {
  }

}


