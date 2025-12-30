import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { AppShell } from './layouts/app-shell/app-shell';
import { Dashboard } from './pages/dashboard/dashboard';
import { Bodegas } from './pages/bodegas/bodegas';
import { BodegaDetail } from './pages/bodega-detail/bodega-detail';

export const routes: Routes = [
  { path: 'login', component: Login },

  {
    path: '',
    component: AppShell,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'bodegas', component: Bodegas },
      { path: 'bodegas/:id', component: BodegaDetail },
    ],
  },

  { path: '**', redirectTo: 'dashboard' },
];
