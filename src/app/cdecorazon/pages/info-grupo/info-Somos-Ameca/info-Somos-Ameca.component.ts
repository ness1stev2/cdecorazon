import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RedesGrupoComponent } from '../../encontrarnos/components/redes-grupo/redes-grupo.component';
import { CardFotosComponent } from '../components/card-fotos/card-fotos.component';
import { CardLogoTitleComponent } from '../components/card-logo-title/card-logo-title.component';
import { CardRutasCamionComponent } from '../components/card-rutas-camion/card-rutas-camion.component';
import { InfoGrupo } from '../components/info-grupo/info-grupo.component';

@Component({
  selector: 'app-info-somos-ameca',
  standalone: true,
  imports: [
    CommonModule, RedesGrupoComponent, CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent
  ],
  template: `
  <div class="container mx-auto pb-5">
  <div class="flex flex-col gap-5">

    <div class="flex flex-row gap-5">
      <div class="basis-3/12 bg-slate-300 rounded-xl px-10 py-5">
        <app-card-logo-title srcImg="assets/grupos/ameca.png" nombreGrupo="Grupo Somos Ameca"></app-card-logo-title>
      </div>
      <div class="basis-5/12 bg-slate-300 rounded-xl p-6">

        <info-grupo descripcion="Grupo de autoayuda AA" horarios="Lunes, Martes, Miércoles, Viernes y Sábados de 7 PM a 9 PM"
          telefono="3751467624" facebook="https://www.facebook.com/SomosDespertarAmeca"
          instagram="https://www.instagram.com/somosameca/" />

      </div>

      <div class="basis-2/12 bg-slate-300 rounded-xl p-6">
        <h2 class="text-4xl text-center text-gray-700 mb-2">Ubicación:</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7087459409295!2d-103.38563462475284!3d20.681425080882384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af6a87a3a571%3A0xf2d497a790fa8a7c!2sOtra%20Clase%20de%20Vuelo!5e0!3m2!1ses-419!2smx!4v1723310304560!5m2!1ses-419!2smx"
          width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>

    <div class="flex flex-row gap-5 ">
      <div class="basis-9/12 bg-slate-300 rounded-xl p-6">

        <h2 class="text-4xl text-gray-700 mb-2">Fotos:</h2>

        <card-fotos [srcImgs]="imageUrls"/>

      </div>
      <div class="basis-3/12 bg-slate-300 rounded-xl px-10 py-5">

        <h2 class="text-4xl text-gray-700 mb-2">Rutas de camión:</h2>

        <p>No hay rutas de camión</p>

      </div>
    </div>
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoSomosAmecaComponent {
  imageUrls: string[] = [
    'assets/grupos/SomosAmeca/1.jpeg',
    'assets/grupos/SomosAmeca/2.jpeg',
    'assets/grupos/SomosAmeca/3.jpeg',
    'assets/grupos/SomosAmeca/4.jpeg'
  ];


}
