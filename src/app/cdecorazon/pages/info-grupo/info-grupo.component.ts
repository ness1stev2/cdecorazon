import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RedesGrupoComponent } from "../encontrarnos/components/redes-grupo/redes-grupo.component";
import { CardLogoTitleComponent } from './components/card-logo-title/card-logo-title.component';
import { InfoGrupo } from './components/info-grupo/info-grupo.component';
import { CardFotosComponent } from './components/card-fotos/card-fotos.component';
import { CardRutasCamionComponent, Rutas } from './components/card-rutas-camion/card-rutas-camion.component';
import { GrupoInfo, GRUPOS_INFO } from './models/grupo-info.model';
import { SafeResourceUrlPipe } from '../../../shared/pipes/safe-url.pipe';

@Component({
  selector: 'app-info-grupo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RedesGrupoComponent,
    CardLogoTitleComponent,
    InfoGrupo,
    CardFotosComponent,
    CardRutasCamionComponent,
    SafeResourceUrlPipe
  ],
  templateUrl: './info-grupo.component.html',
  styles: `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out;
    }

    /* Animación para las cards */
    .basis-full {
      animation: slideInUp 0.6s ease-out;
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Efecto parallax suave para el sticky */
    .sticky {
      transition: all 0.3s ease;
    }
  `
})
export class InfoGrupoComponent implements OnInit {
  grupoInfo: GrupoInfo | undefined;
  imageUrls: string[] = [];
  rutas: Rutas[] = [];
  grupoId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.grupoId = params.get('nombreGrupo') || 'ocv'; // 'ocv' como valor por defecto
      this.cargarInformacionGrupo();
    });
  }

  cargarInformacionGrupo(): void {
    this.grupoInfo = GRUPOS_INFO[this.grupoId];

    if (this.grupoInfo) {
      this.imageUrls = this.grupoInfo.imageUrls;
      this.rutas = this.grupoInfo.rutas;
    } else {
      console.error(`No se encontró información para el grupo con ID: ${this.grupoId}`);
    }
  }
}
