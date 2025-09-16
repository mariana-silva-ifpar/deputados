import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Busca } from './busca/busca';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: Inicio
    },
    {
        path: 'busca',
        component: Busca
    }
];
