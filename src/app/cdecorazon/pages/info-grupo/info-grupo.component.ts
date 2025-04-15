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
  styles: ``
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
