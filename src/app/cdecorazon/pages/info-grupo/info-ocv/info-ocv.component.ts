import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Rutas, CardRutasCamionComponent } from '../components/card-rutas-camion/card-rutas-camion.component';
import { CardLogoTitleComponent } from "../components/card-logo-title/card-logo-title.component";
import { InfoGrupo } from "../components/info-grupo/info-grupo.component";
import { CardFotosComponent } from "../components/card-fotos/card-fotos.component";

@Component({
  selector: 'app-info-ocv',
  standalone: true,
  imports: [
    CommonModule, CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent
],
  template: `
  <div class="container mx-auto pb-5">
  <div class="flex flex-col gap-5 px-2">

    <div class="flex flex-wrap lg:flex-nowrap flex-row gap-5 justify-center">
      <div class="flex-auto lg:basis-3/12 bg-slate-300 rounded-xl px-10 py-5 max-w-fit">
        <app-card-logo-title srcImg="assets/grupos/ocv.png" nombreGrupo="Otra Clase de Vuelo"/>
      </div>
      <div class="flex-auto lg:basis-5/12 bg-slate-300 rounded-xl p-6">

        <info-grupo descripcion="Grupo de autoayuda AA" horarios="Lunes a Viernes de 7:00 PM a 9:00 PM"
          telefono="3319112483" facebook="https://www.facebook.com/Otra-clase-de-vuelo-2313460758736069/"
          instagram="https://www.instagram.com/otraclasedevuelo/" />

      </div>

      <div class="basis-full lg:basis-4/12 bg-slate-300 rounded-xl p-6">
        <h2 class="text-4xl text-center text-gray-700 mb-2">Ubicación:</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7087459409295!2d-103.38563462475284!3d20.681425080882384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af6a87a3a571%3A0xf2d497a790fa8a7c!2sOtra%20Clase%20de%20Vuelo!5e0!3m2!1ses-419!2smx!4v1723310304560!5m2!1ses-419!2smx"
          width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoOcvComponent {
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
