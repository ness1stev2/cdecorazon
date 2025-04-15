import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-logo-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center">
      <img [src]="srcImg" [alt]="nombreGrupo" class="max-w-full h-auto max-h-40 mb-3 rounded-full shadow-lg">
      <h1 class="text-4xl text-center text-gray-700 font-bold">{{ nombreGrupo }}</h1>
    </div>
  `,
  styles: ``
})
export class CardLogoTitleComponent {
  @Input() srcImg: string = '';
  @Input() nombreGrupo: string = '';
}
