import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Rutas {
  tituloRuta: string;
  descripcion: string;
}

@Component({
  selector: 'card-rutas-camion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <ul class="flex flex-col gap-2">
      @for(ruta of rutas(); track $index){
        <li class="text-lg"><strong> {{ruta.tituloRuta}}:</strong> {{ruta.descripcion}}</li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardRutasCamionComponent {
  rutas = input<Rutas[]>();
}
