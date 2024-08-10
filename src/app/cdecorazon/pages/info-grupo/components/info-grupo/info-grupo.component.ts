import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { RedesGrupoComponent } from '../../../encontrarnos/components/redes-grupo/redes-grupo.component';

@Component({
  selector: 'info-grupo',
  standalone: true,
  imports: [
    CommonModule,
    RedesGrupoComponent
  ],
  template: `
    <div class="flex flex-col gap-4">
          <div class="">
            <h2 class="text-3xl text-gray-700">Descripción:</h2>
            <p class="text-lg">{{descripcion()}}</p>
          </div>
          <div class="">
            <h2 class="text-3xl text-gray-700">Horarios:</h2>
            <p class="text-lg">{{horarios()}}</p>
          </div>
          <div class="">
            <h2 class="text-3xl text-gray-700">Contacto:</h2>
            <p class="text-lg">Telefono: <a [href]="'tel:+'+telefono()">{{telefono()}}</a></p>
            <app-redes-grupo [facebook]="facebook()" [instagram]="instagram()" [telefono]="telefono()" />
          </div>
        </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoGrupo {
  descripcion = input<string>('Descripcion del grupo');
  horarios = input<string>('Horarios del grupo');
  telefono = input<string>('3329204848');
  facebook = input<string>('https://www.facebook.com/');
  instagram = input<string>('https://www.instagram.com/');

 }
