import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardFotosComponent } from '../components/card-fotos/card-fotos.component';
import { CardLogoTitleComponent } from '../components/card-logo-title/card-logo-title.component';
import { CardRutasCamionComponent, Rutas } from '../components/card-rutas-camion/card-rutas-camion.component';
import { InfoGrupo } from '../components/info-grupo/info-grupo.component';

@Component({
  selector: 'app-info-dan',
  standalone: true,
  imports: [
    CommonModule, CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent
],
  template: `
  <div class="container mx-auto pb-5">
  <div class="flex flex-col gap-5 px-2">

    <div class="flex flex-wrap lg:flex-nowrap flex-row gap-5 justify-center">
      <div class="flex-auto lg:basis-3/12 bg-slate-300 rounded-xl px-10 py-5 max-w-fit">
        <app-card-logo-title srcImg="/assets/grupos/al-anon.png" nombreGrupo="Despertar al Nucleo Ameca"/>
      </div>
      <div class="flex-auto lg:basis-5/12 bg-slate-300 rounded-xl p-6">

        <info-grupo descripcion="Grupo de Alanon" horarios="Lunes, Miercoles y Viernes de 6:30 PM a 8:30 PM"
          telefono="3312415702" facebook="https://www.facebook.com/DANalanon/"
          instagram="https://www.instagram.com/despertar.al.nucleo/" />

      </div>

      <div class="basis-full lg:basis-4/12 bg-slate-300 rounded-xl p-6">
        <h2 class="text-4xl text-center text-gray-700 mb-2">Ubicación:</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.9733176197124!2d-104.0447624246023!3d20.548272604107826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842677117a7b4a71%3A0x67a09d0abdc18844!2sDespertar%20al%20Nucleo%20Ameca%20Al-Anon!5e0!3m2!1ses-419!2smx!4v1723503450517!5m2!1ses-419!2smx" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export class InfoDanComponent {
  imageUrls: string[] = [
    '/assets/grupos/metamorfosis/1.jpeg',
    '/assets/grupos/metamorfosis/3.jpeg',
    '/assets/grupos/metamorfosis/4.jpeg',
    '/assets/grupos/metamorfosis/6.jpeg',
    '/assets/grupos/metamorfosis/7.jpeg',
    '/assets/grupos/dan/1.webp',
    '/assets/grupos/dan/2.webp',
    '/assets/grupos/dan/3.webp',
    '/assets/grupos/dan/4.webp',
  ];

  rutas: Rutas[] = [
    { tituloRuta: 'Ruta 629 via 1 o 2', descripcion: '' },
    { tituloRuta: 'Ruta 622', descripcion: '' },
    { tituloRuta: 'Ruta c109', descripcion: '' },
    { tituloRuta: 'Ruta 51A-51AB', descripcion: '' },
    { tituloRuta: 'Ruta 258', descripcion: '' },
  ];
}
