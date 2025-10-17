import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Rutas, CardRutasCamionComponent } from '../components/card-rutas-camion/card-rutas-camion.component';
import { CardFotosComponent } from "../components/card-fotos/card-fotos.component";
import { InfoGrupo } from "../components/info-grupo/info-grupo.component";
import { CardLogoTitleComponent } from "../components/card-logo-title/card-logo-title.component";

@Component({
  selector: 'app-info-coincidir',
  standalone: true,
  imports: [
    CommonModule, CardRutasCamionComponent, CardFotosComponent, InfoGrupo, CardLogoTitleComponent
],
  template: `
  <div class="container mx-auto pb-5">
    <div class="flex flex-col gap-5 px-2">

      <div class="flex flex-wrap lg:flex-nowrap flex-row gap-5 justify-center">
        <div class="flex-auto lg:basis-3/12 bg-slate-300 rounded-xl px-10 py-5 max-w-fit">
          <app-card-logo-title srcImg="/assets/grupos/coincidir.png" nombreGrupo="Grupo Coincidir"/>
        </div>
        <div class="flex-auto lg:basis-5/12 bg-slate-300 rounded-xl p-6">

          <info-grupo descripcion="Grupo de autoayuda de Alcoholicos Anonimos" horarios="Lunes a Sábado de 8:00 PM a 10:00 PM."
            telefono="3314161065" facebook="https://www.facebook.com/share/ru3BPVVghEjwdD6D/?mibextid=LQQJ4d"
            instagram="https://www.instagram.com/grupocoincidir?igsh=MWdvcWd1MnJydDBoNA==" />

        </div>

        <div class="basis-full lg:basis-4/12 bg-slate-300 rounded-xl p-6">
          <h2 class="text-4xl text-center text-gray-700 mb-2">Ubicación:</h2>

          <iframe class="rounded-xl h-96" width="100%" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3641.9967118482077!2d-110.37588889999999!3d24.1016111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA2JzA1LjgiTiAxMTDCsDIyJzMzLjIiVw!5e0!3m2!1ses!2smx!4v1714769332528!5m2!1ses!2smx"style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export class InfoCoincidirComponent {
  imageUrls: string[] = [
    '/assets/grupos/Coincidir/2.jpeg',
    '/assets/grupos/Coincidir/3.jpeg',
  ];

  rutas: Rutas[] = [
    { tituloRuta: '', descripcion: '' },
  ];
}
