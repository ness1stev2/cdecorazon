import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./cdecorazon/cdecorazon.component'),
  },
  {
    path: 'donde-encontrarnos',
    title: 'Donde Encontrarnos',
    loadComponent: () => import('./cdecorazon/pages/encontrarnos/encontrarnos.component'),
  },
  {
    path: 'reflexiones',
    title: 'Reflexiones Diarias',
    loadComponent: () => import('./cdecorazon/pages/reflexiones/reflexiones.component')
  },
  {
    path: 'ayuda-fa-ma',
    title: 'Ayuda a un familiar o amigo',
    loadComponent: () => import('./cdecorazon/pages/ayuda-am-fa/ayuda-am-fa.component'),
  },

  {
    path: 'autodiagnostico-aa',
    title: 'Autodiagnóstico',
    loadComponent: () => import('./cdecorazon/pages/autodiagnostico-aa/autodiagnostico-aa.component').then(m => m.AutodiagnosticoAaComponent)
  },

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
