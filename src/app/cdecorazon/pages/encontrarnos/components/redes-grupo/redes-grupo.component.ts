import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redes-grupo',
  standalone: true,
  imports: [],
  templateUrl: './redes-grupo.component.html',
  styles: ``
})
export class RedesGrupoComponent {
  @Input() facebook: string = '';
  @Input() instagram: string = '';
  @Input() telefono: string = '';
}
