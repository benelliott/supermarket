import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Bella } from './pages/bella/bella';
import { Arthur } from './pages/arthur/arthur';
import { Daria } from './pages/daria/daria';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'bella',
    component: Bella,
  },
  {
    path: 'arthur',
    component: Arthur,
  },
  {
    path: 'daria',
    component: Daria,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
