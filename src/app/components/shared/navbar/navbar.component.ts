import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * /
   * Funcion que redirecciona al componente buscarHeroe
   * @param {string} termino 
   * @memberof NavbarComponent.buscarHeroe
   */
  buscarHeroe(termino: string) {
    this.router.navigate(['/buscar', termino])
  }

}
