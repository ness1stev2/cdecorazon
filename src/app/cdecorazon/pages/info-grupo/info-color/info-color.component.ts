import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardFotosComponent } from '../components/card-fotos/card-fotos.component';
import { CardLogoTitleComponent } from '../components/card-logo-title/card-logo-title.component';
import { CardRutasCamionComponent, Rutas } from '../components/card-rutas-camion/card-rutas-camion.component';
import { InfoGrupo } from '../components/info-grupo/info-grupo.component';

@Component({
  selector: 'app-info-color',
  standalone: true,
  imports: [
    CommonModule, CardLogoTitleComponent, InfoGrupo, CardFotosComponent, CardRutasCamionComponent
],
  template: `
  <div class="container mx-auto pb-5">
  <div class="flex flex-col gap-5 px-2">

    <div class="flex flex-wrap lg:flex-nowrap flex-row gap-5 justify-center">
      <div class="flex-auto lg:basis-3/12 bg-slate-300 rounded-xl px-10 py-5 max-w-fit">
        <app-card-logo-title srcImg="assets/grupos/color.png" nombreGrupo="El Color del Despertar"/>
      </div>
      <div class="flex-auto lg:basis-5/12 bg-slate-300 rounded-xl p-6">

        <info-grupo descripcion="Somos un grupo de personas LGBT+ que utilizamos los doce pasos de recuperación de alcohólicos anónimos para trabajar con problemas de alcoholismo, adicción, falta de aceptación, codependencia, depresión y ansiedad. No importa quien seas o a quien ames, nosotros te comprendemos y juntos haremos nuestro mejor esfuerzo para salir de la desolación y caminar hacia la libertad." horarios="Lunes, Martes y Jueves de 7:00 PM a 9:00 PM"
          telefono="3327659858" facebook="https://www.facebook.com/elcolordeldespertar/"
          instagram="https://www.instagram.com/elcolordeldespertar/" />

      </div>

      <div class="basis-full lg:basis-4/12 bg-slate-300 rounded-xl p-6">
        <h2 class="text-4xl text-center text-gray-700 mb-2">Ubicación:</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.827409502945!2d-103.34159262459957!3d20.6765994997806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae6b222ead6b%3A0xa3df8ca670064144!2sEl%20Color%20del%20Despertar!5e0!3m2!1ses-419!2smx!4v1723505439206!5m2!1ses-419!2smx" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export class InfoColorComponent {
  imageUrls: string[] = [
    'assets/grupos/color/3.webp',
    'assets/grupos/color/4.webp',
    'assets/grupos/color/5.webp',
    'assets/grupos/color/6.webp',
    'assets/grupos/color/1.webp',
    'assets/grupos/color/1.jpeg',
    'assets/grupos/color/2.jpeg',
    'assets/grupos/color/2.webp',
  ];

  rutas: Rutas[] = [
    { tituloRuta: 'Referencias', descripcion: 'Fachada del edificio "progreso" arriba de los helados "Dolphy", 3er piso, vista del logo del color del despertar, y de "AA", en las ventanas. y al fondo, a la izquierda, la cúpula del "instituto cultural cabañas".' },

  ];
}
