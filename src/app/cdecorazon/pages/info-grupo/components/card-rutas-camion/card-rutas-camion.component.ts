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
    <div class="space-y-4">
      @for(ruta of rutas(); track ruta.tituloRuta; let i = $index){
        <div class="group relative p-4 bg-gradient-to-r from-orange-50 to-red-50
                    rounded-xl border border-orange-200 hover:border-orange-300
                    hover:shadow-lg transition-all duration-300 transform
                    hover:scale-105 hover:-translate-y-1 cursor-pointer ruta-item">

          <!-- Icono de autobús -->
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500
                        rounded-full flex items-center justify-center shadow-lg
                        group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="font-bold text-orange-800 group-hover:text-orange-900
                         transition-colors duration-300 text-base mb-1 leading-tight">
                {{ruta.tituloRuta}}
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800
                       transition-colors duration-300">
                {{ruta.descripcion}}
              </p>
            </div>
          </div>

          <!-- Efecto de brillo en hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-red-400/10 to-orange-400/10
                      rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      }
    </div>
  `,
  styles: `
    .ruta-item {
      animation: fadeInRight 0.6s ease-out forwards;
      animation-fill-mode: both;
    }

    .ruta-item:nth-child(1) { animation-delay: 0ms; }
    .ruta-item:nth-child(2) { animation-delay: 150ms; }
    .ruta-item:nth-child(3) { animation-delay: 300ms; }
    .ruta-item:nth-child(4) { animation-delay: 450ms; }
    .ruta-item:nth-child(5) { animation-delay: 600ms; }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardRutasCamionComponent {
  rutas = input<Rutas[]>();
}
