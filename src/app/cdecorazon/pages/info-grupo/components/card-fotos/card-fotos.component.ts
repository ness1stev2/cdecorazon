import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'card-fotos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="columns-2 gap-3">
    @for(srcImg of srcImgs(); track $index){
      <img class="w-full aspect-auto rounded-xl mb-3" [src]="srcImg"
        alt="Local Otra Clase De Vuelo">
    }
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFotosComponent {

  srcImgs = input<string[]>();

}
