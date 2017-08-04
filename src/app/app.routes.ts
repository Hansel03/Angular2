import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },

    /*Si no encuentra una ruta valida entonces... */
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

/*exportamos la configuración para poder importarla en el app.module */
export const APP_ROUtING = RouterModule.forRoot(APP_ROUTES);