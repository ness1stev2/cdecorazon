import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLogoTitleComponent } from '../components/card-logo-title/card-logo-title.component';
import { CardFotosComponent } from '../components/card-fotos/card-fotos.component';
import { CardRutasCamionComponent, Rutas } from '../components/card-rutas-camion/card-rutas-camion.component';
import { InfoGrupo } from '../components/info-grupo/info-grupo.component';

@Component({
  selector: 'app-info-almanova',
  standalone: true,
  imports: [
    CommonModule,
    CardLogoTitleComponent,
    InfoGrupo,
    CardFotosComponent,
    CardRutasCamionComponent
  ],
  template: `
  <div class="container mx-auto pb-5">
    <div class="flex flex-col gap-5">

      <div class="flex flex-row gap-5">
        <div class="basis-3/12 bg-slate-300 rounded-xl px-10 py-5">
          <app-card-logo-title srcImg="assets/grupos/alma-nova.png" nombreGrupo="Almanova Alateen Hijos Adultos"></app-card-logo-title>
        </div>
        <div class="basis-5/12 bg-slate-300 rounded-xl p-6">

          <info-grupo descripcion="Grupo de Alateen Hijos Adultos" horarios="Martes y Jueves 6:30 PM a 8:30 PM, Sábados de 4 PM a 6 PM"
            telefono="3333613699" facebook="https://www.facebook.com/profile.php?id=100090134182744"
            instagram="https://www.instagram.com/alma_nova_alanon/" />

        </div>

        <div class="basis-2/12 bg-slate-300 rounded-xl p-6">
          <h2 class="text-4xl text-center text-gray-700 mb-2">Ubicación:</h2>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.035693558792!2d-103.38701852459971!3d20.66812680006706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afbe7a2e3177%3A0xb4615004dc44b593!2sAlma%20Nova%20(Al-Anon%20Hijos%20Adultos)!5e0!3m2!1ses-419!2smx!4v1723484061549!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

      <div class="flex flex-row gap-5 ">
        <div class="basis-9/12 bg-slate-300 rounded-xl p-6">

          <h2 class="text-4xl text-gray-700 mb-2">Fotos:</h2>

          <card-fotos [srcImgs]="imageUrls"/>

        </div>
        <div class="basis-3/12 bg-slate-300 rounded-xl px-10 py-5 h-fit sticky top-24">

          <h2 class="text-4xl text-gray-700 mb-2">Rutas de camion:</h2>

          <card-rutas-camion [rutas]="rutas"/>

        </div>
      </div>
    </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoAlmanovaComponent {
  imageUrls: string[] = [
    'assets/grupos/Alanon-Alateen-GDL/1.jpeg',
    'assets/grupos/Alanon-Alateen-GDL/2.jpeg',
    'assets/grupos/Alanon-Alateen-GDL/3.jpeg',
  ];

  rutas: Rutas[] = [
    { tituloRuta: 'Ruta 629 via 1 o 2', descripcion: '' },
    { tituloRuta: 'Ruta 622', descripcion: '' },
    { tituloRuta: 'Ruta c109', descripcion: '' },
    { tituloRuta: 'Ruta 51A-51AB', descripcion: '' },
    { tituloRuta: 'Ruta 258', descripcion: '' },
  ];
}
