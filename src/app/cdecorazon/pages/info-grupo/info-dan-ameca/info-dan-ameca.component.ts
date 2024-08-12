import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardFotosComponent } from '../components/card-fotos/card-fotos.component';
import { CardLogoTitleComponent } from '../components/card-logo-title/card-logo-title.component';
import { CardRutasCamionComponent, Rutas } from '../components/card-rutas-camion/card-rutas-camion.component';
import { InfoGrupo } from '../components/info-grupo/info-grupo.component';

@Component({
  selector: 'app-info-dan-ameca',
  standalone: true,
  imports: [
    CommonModule, CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent
],
  template: `
  <div class="container mx-auto pb-5">
  <div class="flex flex-col gap-5 px-2">

    <div class="flex flex-wrap lg:flex-nowrap flex-row gap-5 justify-center">
      <div class="flex-auto lg:basis-3/12 bg-slate-300 rounded-xl px-10 py-5 max-w-fit">
        <app-card-logo-title srcImg="assets/grupos/dan-ameca.png" nombreGrupo="Despertar al Nucleo"/>
      </div>
      <div class="flex-auto lg:basis-5/12 bg-slate-300 rounded-xl p-6">

        <info-grupo descripcion="Grupo de Alanon" horarios="Jueves de 6 PM a 8 PM y Sábados de 5 PM a 7 PM"
          telefono="3338741737" facebook="https://www.facebook.com/AlanonAmeca"
          instagram="https://www.instagram.com/dan_ameca?igsh=MTRnZzEwZjNxbmF2Zg==" />

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
export class InfoDanAmecaComponent {
  imageUrls: string[] = [
    'assets/grupos/dan-ameca/10.jpeg',
    'assets/grupos/dan-ameca/2.jpeg',
    'assets/grupos/dan-ameca/4.jpeg',
    'assets/grupos/dan-ameca/9.jpeg',
    'assets/grupos/dan-ameca/5.jpeg',
    'assets/grupos/dan-ameca/7.jpeg',
    'assets/grupos/dan-ameca/8.jpeg',
  ];

  rutas: Rutas[] = [
    { tituloRuta: 'N/A', descripcion: 'No hay rutas de camion' },
  ];
}
