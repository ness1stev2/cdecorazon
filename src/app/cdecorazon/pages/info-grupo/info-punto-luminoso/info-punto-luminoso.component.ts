import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Rutas, CardRutasCamionComponent } from '../components/card-rutas-camion/card-rutas-camion.component';
import { CardLogoTitleComponent } from "../components/card-logo-title/card-logo-title.component";
import { InfoGrupo } from "../components/info-grupo/info-grupo.component";
import { CardFotosComponent } from "../components/card-fotos/card-fotos.component";

@Component({
  selector: 'app-info-punto-luminoso',
  standalone: true,
  imports: [
    CommonModule, CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent
],
  template: `
  <div class="container mx-auto pb-5">
  <div class="flex flex-col gap-5 px-2">

    <div class="flex flex-wrap lg:flex-nowrap flex-row gap-5 justify-center">
      <div class="flex-auto lg:basis-3/12 bg-slate-300 rounded-xl px-10 py-5 max-w-fit">
        <app-card-logo-title srcImg="assets/grupos/punto-luminoso.png" nombreGrupo="Punto Luminoso"/>
      </div>
      <div class="flex-auto lg:basis-5/12 bg-slate-300 rounded-xl p-6">

        <info-grupo descripcion="Grupo de autoayuda AA" horarios="Lunes a Viernes de 7:00 PM a 9:00 PM y Sábados de 5:00 PM a 7:00 PM"
          telefono="3329204848" facebook="https://www.facebook.com/puntoluminoso"
          instagram="https://www.instagram.com/grupo_puntoluminoso/" />

      </div>

      <div class="basis-full lg:basis-4/12 bg-slate-300 rounded-xl p-6">
        <h2 class="text-4xl text-center text-gray-700 mb-2">Ubicación:</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6919086641865!2d-103.42443172459946!3d20.68210969959431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae935be90517%3A0x733040f3277d3a3d!2sPunto%20Luminoso%20(Grupo%20de%20Alcoholicos%20Anonimos)!5e0!3m2!1ses-419!2smx!4v1723495638770!5m2!1ses-419!2smx" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>

    <div class="flex flex-wrap lg:flex-nowrap flex-row gap-5">
      <div class="basis-full lg:basis-9/12 bg-slate-300 rounded-xl p-6">

        <h2 class="text-4xl text-gray-700 mb-2">Fotos:</h2>

        <card-fotos [srcImgs]="imageUrls"/>

      </div>
      <div class="basis-full lg:basis-3/12 bg-slate-300 rounded-xl px-10 py-5 h-fit sticky top-24">

        <h2 class="text-4xl text-gray-700 mb-2">Rutas de camion:</h2>

        <card-rutas-camion [rutas]="rutas"/>

      </div>
    </div>
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPuntoLuminosoComponent {
  imageUrls: string[] = [
    'assets/grupos/OCV/1.jpeg',
  ];

  rutas: Rutas[] = [
    { tituloRuta: 'Ruta 629 Vía 1', descripcion: 'Esta ruta también pasa por la Av. Adolfo López Mateos y conecta varios puntos estratégicos de Guadalajara como Los Arcos, Plaza del Sol, y la Estación Juárez del Tren Ligero' },
    { tituloRuta: 'Ruta 622', descripcion: 'Esta ruta cubre varios puntos importantes de la ciudad, incluyendo la Av Adolfo López Mateos Norte. Es una de las rutas más completas en cuanto a cobertura de avenidas y puntos de interés como la Glorieta Minerva, Av. Agustín Yáñez, y Av. de las Américas' },
  ];
}
