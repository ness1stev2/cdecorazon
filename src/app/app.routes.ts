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
    path: 'info-puntoluminoso',
    title: 'Punto Luminoso',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-punto-luminoso/info-punto-luminoso.component').then(m => m.InfoPuntoLuminosoComponent)
  },
  {
    path: 'info-elcolor',
    title: 'El color del Despertar',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-color/info-color.component').then(m => m.InfoColorComponent)
  },
  {
    path: 'info-somos-ameca',
    title: 'Somos Ameca',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-Somos-Ameca/info-Somos-Ameca.component').then(m => m.InfoSomosAmecaComponent)
  },
  {
    path: 'info-ocv',
    title: 'Otra CLase de Vuelo',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-ocv/info-ocv.component').then(m => m.InfoOcvComponent)
  },
  {
    path: 'info-coincidir',
    title: 'Coincidir',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-coincidir/info-coincidir.component').then(m => m.InfoCoincidirComponent)
  },
  {
    path: 'info-metamorfosis',
    title: 'Metamorfosis Alateen',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-metamorfosis/info-metamorfosis.component').then(m => m.InfoMetamorfosisComponent)
  },
  {
    path: 'info-almanova',
    title: 'Alma Nova',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-almanova/info-almanova.component').then(m => m.InfoAlmanovaComponent)
  },
  {
    path: 'info-dan',
    title: 'Derpertar al Núcleo Guadalajara',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-dan/info-dan.component').then(m => m.InfoDanComponent)
  },
  {
    path: 'info-dan-ameca',
    title: 'Derpertar al Núcleo Ameca',
    loadComponent: () => import('./cdecorazon/pages/info-grupo/info-dan-ameca/info-dan-ameca.component').then(m => m.InfoDanAmecaComponent)
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
