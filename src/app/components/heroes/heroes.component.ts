import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  /**
   * Creamos una arreglo y lo inicializamos vacio
   * 
   * @type {Heroe[]} indicamos que el array es de tipo de la interfaz Heroe
   * @memberof HeroesComponent.heroes
   */
  heroes: Heroe[] = [];



  /**
   * El constructor se ejecuta primero que el ngOnInit
   * @param {HeroesService} _heroesService 
   * @param {Router} router
   * @memberof HeroesComponent.constructor
  / */
  constructor(
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  /**
   * Inicializamos el componente una vez se ha renderizado
   * 
   * @memberof HeroesComponent.ngOnInit
  / */
  ngOnInit() {
    /*Llamamos a array HeroesComponent.heroes y le asignamos lo que retoarna el metodo getHeroes() */
    this.heroes = this._heroesService.getHeroes();
  }

  /**
   * Utilizamos la funcion para redireccionar a la descripcion del heroe
   * Llamamos a la variable router creada en el constructor
   * @param {number} idx 
   * @memberof HeroesComponent.verHeroe  */
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }


}
