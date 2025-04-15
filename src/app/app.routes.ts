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
    path: 'info-grupo/:nombreGrupo',
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
  // Rutas de compatibilidad para mantener enlaces antiguos funcionando
  {
    path: 'info-puntoluminoso',
    redirectTo: 'info-grupo/punto-luminoso',
    pathMatch: 'full'
  },
  {
    path: 'info-elcolor',
    redirectTo: 'info-grupo/color',
    pathMatch: 'full'
  },
  {
    path: 'info-somos-ameca',
    redirectTo: 'info-grupo/somos-ameca',
    pathMatch: 'full'
  },
  {
    path: 'info-ocv',
    redirectTo: 'info-grupo/ocv',
    pathMatch: 'full'
  },
  {
    path: 'info-coincidir',
    redirectTo: 'info-grupo/coincidir',
    pathMatch: 'full'
  },
  {
    path: 'info-valor-para-cambiar',
    redirectTo: 'info-grupo/valor-para-cambiar',
    pathMatch: 'full'
  },
  {
    path: 'info-metamorfosis',
    redirectTo: 'info-grupo/metamorfosis',
    pathMatch: 'full'
  },
  {
    path: 'info-almanova',
    redirectTo: 'info-grupo/almanova',
    pathMatch: 'full'
  },
  {
    path: 'info-dan',
    redirectTo: 'info-grupo/dan',
    pathMatch: 'full'
  },
  {
    path: 'info-dan-ameca',
    redirectTo: 'info-grupo/dan-ameca',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
