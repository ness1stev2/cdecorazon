import { InfoGrupoComponent } from './cdecorazon/pages/info-grupo/info-grupo.component';
import { AutodiagnosticoAlanonComponent } from './cdecorazon/pages/autodiagnostico-alanon/autodiagnostico-alanon.component';
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
    path: 'info-grupo',
    title: 'Información del Grupo',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-grupo.component').then(m => m.InfoGrupoComponent)
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
    path: 'autodiagnostico-alanon',
    title: 'Autodiagnóstico - al-anon',
    loadComponent: () => import('./cdecorazon/pages/autodiagnostico-alanon/autodiagnostico-alanon.component').then(m => m.AutodiagnosticoAlanonComponent)
  },

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
