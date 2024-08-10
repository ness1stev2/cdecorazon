import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-logo-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="flex flex-col justify-center items-center">
    <img class="rounded-full w-60" [src]="srcImg()" alt="">
    <h1 class="text-4xl text-center my-2 text-gray-700">{{nombreGrupo()}}</h1>
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLogoTitleComponent {
  nombreGrupo = input<string>('Datos Vasios');
  srcImg = input<string>();
 }
