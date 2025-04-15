import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'info-grupo',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="flex flex-col gap-3">
      <div>
        <h2 class="text-2xl font-semibold text-gray-700">Descripción</h2>
        <p class="text-gray-600">{{ descripcion }}</p>
      </div>
      <div>
        <h2 class="text-2xl font-semibold text-gray-700">Horarios</h2>
        <p class="text-gray-600">{{ horarios }}</p>
      </div>
      <div>
        <h2 class="text-2xl font-semibold text-gray-700">Contacto</h2>
        <div class="flex items-center">
          <img src="assets/icon/telefono.svg" alt="Teléfono" class="w-6 h-6 mr-2">
          <p class="text-gray-600">{{ telefono }}</p>
        </div>
      </div>
      <div *ngIf="facebook || instagram" class="mt-3">
        <h2 class="text-2xl font-semibold text-gray-700">Redes Sociales</h2>
        <div class="flex gap-4 mt-2">
          <a *ngIf="facebook" [href]="facebook" target="_blank" class="flex items-center">
            <img src="assets/icon/facebook.svg" alt="Facebook" class="w-8 h-8">
          </a>
          <a *ngIf="instagram" [href]="instagram" target="_blank" class="flex items-center">
            <img src="assets/icon/instagram.svg" alt="Instagram" class="w-8 h-8">
          </a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoGrupo {
  @Input() descripcion: string = '';
  @Input() horarios: string = '';
  @Input() telefono: string = '';
  @Input() facebook?: string;
  @Input() instagram?: string;
}
