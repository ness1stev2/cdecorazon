import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-fotos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Grid de fotos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div *ngFor="let src of srcImgs; let i = index"
           class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl
                  transition-all duration-500 transform hover:scale-105 hover:-translate-y-2
                  bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer
                  ring-1 ring-gray-200 hover:ring-purple-300 hover:ring-2"
           [style.animation-delay]="i * 100 + 'ms'"
           (click)="openModal(i)">

        <!-- Imagen principal -->
        <img [src]="src"
             alt="Foto del grupo {{i + 1}}"
             class="w-full h-48 sm:h-56 md:h-48 lg:h-52 object-cover
                    transition-all duration-700 group-hover:scale-110 group-hover:brightness-110
                    group-hover:contrast-105 group-hover:saturate-110">

        <!-- Overlay con efecto hover -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <!-- Icono de zoom -->
        <div class="absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                    transform scale-50 group-hover:scale-100">
          <div class="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
            </svg>
          </div>
        </div>

        <!-- Número de foto -->
        <div class="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span class="text-white text-sm font-medium">{{i + 1}}/{{srcImgs.length}}</span>
        </div>

        <!-- Efecto de brillo -->
        <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
                    rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500
                    blur-sm group-hover:animate-pulse"></div>
      </div>
    </div>

    <!-- Modal de galería -->
    <div *ngIf="isModalOpen" 
         class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm
                animate-fadeIn"
         (click)="closeModal()">
      
      <!-- Contenedor del modal -->
      <div class="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center p-4"
           (click)="$event.stopPropagation()">
        
        <!-- Imagen principal -->
        <div class="relative flex items-center justify-center max-w-full max-h-full">
          <img [src]="srcImgs[currentImageIndex]"
               [alt]="'Foto del grupo ' + (currentImageIndex + 1)"
               class="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl
                      animate-zoomIn transform transition-all duration-500"
               [class.animate-slideInRight]="slideDirection === 'right'"
               [class.animate-slideInLeft]="slideDirection === 'left'">
        </div>

        <!-- Botón cerrar -->
        <button (click)="closeModal()"
                class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30
                       rounded-full p-3 transition-all duration-300 group z-10
                       hover:scale-110 transform">
          <svg class="w-6 h-6 text-white group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Navegación anterior -->
        <button *ngIf="srcImgs.length > 1"
                (click)="previousImage()"
                class="absolute left-4 top-1/2 transform -translate-y-1/2
                       bg-white/20 backdrop-blur-sm hover:bg-white/30
                       rounded-full p-4 transition-all duration-300 group
                       hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                [disabled]="currentImageIndex === 0">
          <svg class="w-6 h-6 text-white group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <!-- Navegación siguiente -->
        <button *ngIf="srcImgs.length > 1"
                (click)="nextImage()"
                class="absolute right-4 top-1/2 transform -translate-y-1/2
                       bg-white/20 backdrop-blur-sm hover:bg-white/30
                       rounded-full p-4 transition-all duration-300 group
                       hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                [disabled]="currentImageIndex === srcImgs.length - 1">
          <svg class="w-6 h-6 text-white group-hover:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Información de la imagen -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2
                    bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-3
                    flex items-center gap-4">
          <span class="text-white font-medium">
            {{currentImageIndex + 1}} de {{srcImgs.length}}
          </span>
          
          <!-- Indicadores de puntos -->
          <div class="flex gap-2" *ngIf="srcImgs.length <= 10">
            <button *ngFor="let img of srcImgs; let i = index"
                    (click)="goToImage(i)"
                    class="w-2 h-2 rounded-full transition-all duration-300
                           hover:scale-125 transform"
                    [class]="i === currentImageIndex ? 
                             'bg-white shadow-lg' : 
                             'bg-white/50 hover:bg-white/70'">
            </button>
          </div>
        </div>

        <!-- Thumbnails navegación (solo si hay muchas fotos) -->
        <div *ngIf="srcImgs.length > 10" 
             class="absolute bottom-4 left-1/2 transform -translate-x-1/2
                    flex gap-2 max-w-xs overflow-x-auto scrollbar-hide
                    bg-black/50 backdrop-blur-sm rounded-2xl p-2">
          <button *ngFor="let img of srcImgs; let i = index"
                  (click)="goToImage(i)"
                  class="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden
                         ring-2 transition-all duration-300 hover:scale-105"
                  [class]="i === currentImageIndex ? 
                           'ring-white' : 
                           'ring-white/30 hover:ring-white/60'">
            <img [src]="img" [alt]="'Thumbnail ' + (i + 1)" 
                 class="w-full h-full object-cover">
          </button>
        </div>
      </div>
    </div>
  `,
  styles: `
    .group {
      animation: fadeInUp 0.6s ease-out forwards;
      animation-fill-mode: both;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }

    .animate-zoomIn {
      animation: zoomIn 0.4s ease-out;
    }

    .animate-slideInRight {
      animation: slideInRight 0.3s ease-out;
    }

    .animate-slideInLeft {
      animation: slideInLeft 0.3s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes zoomIn {
      from { 
        opacity: 0; 
        transform: scale(0.8); 
      }
      to { 
        opacity: 1; 
        transform: scale(1); 
      }
    }

    @keyframes slideInRight {
      from { 
        opacity: 0; 
        transform: translateX(50px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }

    @keyframes slideInLeft {
      from { 
        opacity: 0; 
        transform: translateX(-50px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }

    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `
})
export class CardFotosComponent {
  @Input() srcImgs: string[] = [];
  
  isModalOpen = false;
  currentImageIndex = 0;
  slideDirection: 'left' | 'right' | null = null;

  // Listener para teclas del teclado
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isModalOpen) return;

    switch (event.key) {
      case 'Escape':
        this.closeModal();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.previousImage();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextImage();
        break;
      case 'Home':
        event.preventDefault();
        this.goToImage(0);
        break;
      case 'End':
        event.preventDefault();
        this.goToImage(this.srcImgs.length - 1);
        break;
    }
  }

  // Prevenir scroll del body cuando el modal está abierto
  @HostListener('document:keydown.space', ['$event'])
  @HostListener('document:keydown.pageUp', ['$event'])
  @HostListener('document:keydown.pageDown', ['$event'])
  preventScroll(event: KeyboardEvent) {
    if (this.isModalOpen) {
      event.preventDefault();
    }
  }

  openModal(index: number) {
    this.currentImageIndex = index;
    this.isModalOpen = true;
    this.slideDirection = null;
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.slideDirection = null;
    // Restaurar scroll del body
    document.body.style.overflow = '';
  }

  nextImage() {
    if (this.currentImageIndex < this.srcImgs.length - 1) {
      this.slideDirection = 'right';
      this.currentImageIndex++;
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.slideDirection = 'left';
      this.currentImageIndex--;
    }
  }

  goToImage(index: number) {
    if (index >= 0 && index < this.srcImgs.length && index !== this.currentImageIndex) {
      this.slideDirection = index > this.currentImageIndex ? 'right' : 'left';
      this.currentImageIndex = index;
    }
  }
}
