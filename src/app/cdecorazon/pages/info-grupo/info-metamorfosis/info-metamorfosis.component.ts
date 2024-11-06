import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLogoTitleComponent } from "../components/card-logo-title/card-logo-title.component";
import { InfoGrupo } from "../components/info-grupo/info-grupo.component";
import { CardFotosComponent } from "../components/card-fotos/card-fotos.component";
import { Rutas, CardRutasCamionComponent } from '../components/card-rutas-camion/card-rutas-camion.component';

@Component({
  selector: 'app-info-metamorfosis',
  standalone: true,
  imports: [
    CommonModule, CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent
],
  template: `
     <div class="container mx-auto pb-5">
  <div class="flex flex-col gap-5 px-2">

    <div class="flex flex-wrap lg:flex-nowrap flex-row gap-5 justify-center">
      <div class="flex-auto lg:basis-3/12 bg-slate-300 rounded-xl px-10 py-5 max-w-fit">
        <app-card-logo-title srcImg="assets/grupos/alateen.png" nombreGrupo="Metamorfosis Alateen"/>
      </div>
      <div class="flex-auto lg:basis-5/12 bg-slate-300 rounded-xl p-6">

        <info-grupo descripcion="Grupo de Alateen" horarios="Sábados de 1 PM a 3 PM y Domingos de 11 AM a 1 PM"
          telefono="3333613699" facebook="https://www.facebook.com/metamorfosisalateen"
          instagram="https://www.instagram.com/metamorfosis_alateen" />

      </div>

      <div class="basis-full lg:basis-4/12 bg-slate-300 rounded-xl p-6">
        <h2 class="text-4xl text-center text-gray-700 mb-2">Ubicación:</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0368794344204!2d-103.38924961786338!3d20.66807855082086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af520e12d53b%3A0x1e8546f6719a07ea!2sMetamorfosis%20Alateen!5e0!3m2!1ses-419!2smx!4v1723490227971!5m2!1ses-419!2smx" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export class InfoMetamorfosisComponent {

  imageUrls: string[] = [
    'assets/grupos/metamorfosis/1.jpeg',
    'assets/grupos/metamorfosis/3.jpeg',
    'assets/grupos/metamorfosis/4.jpeg',
    'assets/grupos/metamorfosis/6.jpeg',
    'assets/grupos/metamorfosis/7.jpeg',
    'assets/grupos/metamorfosis/1.webp',
    'assets/grupos/metamorfosis/2.webp',
    'assets/grupos/metamorfosis/3.webp',
    'assets/grupos/metamorfosis/4.webp',
    'assets/grupos/metamorfosis/5.webp',
    'assets/grupos/metamorfosis/6.webp',
    'assets/grupos/metamorfosis/7.webp',
    'assets/grupos/metamorfosis/8.webp',
    'assets/grupos/metamorfosis/9.webp',
    'assets/grupos/metamorfosis/10.webp',
    'assets/grupos/metamorfosis/11.webp',
    'assets/grupos/metamorfosis/12.webp',
    'assets/grupos/metamorfosis/13.webp',
    'assets/grupos/metamorfosis/14.webp',
    'assets/grupos/metamorfosis/15.webp',
    'assets/grupos/metamorfosis/16.webp',
    'assets/grupos/metamorfosis/17.webp',
    'assets/grupos/metamorfosis/18.webp',
    'assets/grupos/metamorfosis/19.webp',
  ];

  rutas: Rutas[] = [
    { tituloRuta: 'Ruta 629 via 1 o 2', descripcion: '' },
    { tituloRuta: 'Ruta 622', descripcion: '' },
    { tituloRuta: 'Ruta c109', descripcion: '' },
    { tituloRuta: 'Ruta 51A-51AB', descripcion: '' },
    { tituloRuta: 'Ruta 258', descripcion: '' },
  ];

}
