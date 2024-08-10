import { Component } from '@angular/core';
import { RedesGrupoComponent } from "../encontrarnos/components/redes-grupo/redes-grupo.component";
import { CardLogoTitleComponent } from './components/card-logo-title/card-logo-title.component';
import { InfoGrupo } from './components/info-grupo/info-grupo.component';
import { CardFotosComponent } from './components/card-fotos/card-fotos.component';
import { CardRutasCamionComponent, Rutas } from './components/card-rutas-camion/card-rutas-camion.component';

@Component({
  selector: 'app-info-grupo',
  standalone: true,
  imports: [RedesGrupoComponent, CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent],
  templateUrl: './info-grupo.component.html',
  styles: ``
})
export class InfoGrupoComponent {
  imageUrls: string[] = [
    'assets/grupos/OCV/1.jpeg',
    'assets/grupos/OCV/3.jpeg',
    'assets/grupos/OCV/4.jpeg',
    'assets/grupos/OCV/5.jpeg'
  ];

  rutas: Rutas[] = [
    { tituloRuta: 'Ruta 629 Vía 1', descripcion: 'Esta ruta también pasa por la Av. Adolfo López Mateos y conecta varios puntos estratégicos de Guadalajara como Los Arcos, Plaza del Sol, y la Estación Juárez del Tren Ligero' },
    { tituloRuta: 'Ruta 622', descripcion: 'Esta ruta cubre varios puntos importantes de la ciudad, incluyendo la Av Adolfo López Mateos Norte. Es una de las rutas más completas en cuanto a cobertura de avenidas y puntos de interés como la Glorieta Minerva, Av. Agustín Yáñez, y Av. de las Américas' },
  ];
}
