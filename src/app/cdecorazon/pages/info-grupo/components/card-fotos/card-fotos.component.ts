import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'card-fotos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="columns-1 md:columns-2 xl:columns-3 gap-3">
    @for(srcImg of srcImgs(); track $index){
      <img class="w-full aspect-auto rounded-xl mb-3" [src]="srcImg"
        alt="Fotos del Local">
    }
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFotosComponent {

  srcImgs = input<string[]>();

}
