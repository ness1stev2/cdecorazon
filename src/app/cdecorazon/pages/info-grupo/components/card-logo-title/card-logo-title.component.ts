import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-logo-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center group">
      <div class="relative mb-6">
        <img [src]="srcImg"
             [alt]="nombreGrupo"
             class="max-w-full h-auto max-h-40 rounded-full shadow-2xl
                    transition-all duration-500 group-hover:scale-110
                    group-hover:shadow-3xl ring-4 ring-white
                    group-hover:ring-blue-200 group-hover:ring-8">

        <!-- Efecto de brillo detrás del logo -->
        <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                    rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500
                    blur-lg group-hover:animate-pulse"></div>
      </div>

      <h1 class="text-3xl lg:text-4xl text-center font-bold
                 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                 bg-clip-text text-transparent
                 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600
                 transition-all duration-500 group-hover:scale-105
                 leading-tight">
        {{ nombreGrupo }}
      </h1>
    </div>
  `,
  styles: `
    .shadow-3xl {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
  `
})
export class CardLogoTitleComponent {
  @Input() srcImg: string = '';
  @Input() nombreGrupo: string = '';
}
