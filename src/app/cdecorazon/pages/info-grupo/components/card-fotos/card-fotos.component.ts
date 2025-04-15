import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-fotos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div *ngFor="let src of srcImgs" class="overflow-hidden rounded-lg">
        <img [src]="src" alt="Foto del grupo" class="w-full h-48 object-cover hover:scale-110 transition-transform duration-300">
      </div>
    </div>
  `,
  styles: ``
})
export class CardFotosComponent {
  @Input() srcImgs: string[] = [];
}
