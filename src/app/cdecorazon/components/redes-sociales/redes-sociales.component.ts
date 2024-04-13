import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [],
  templateUrl: './redes-sociales.component.html',
  styles: ``
})
export class RedesSocialesComponent {

  @Input() color: string = '#3c383b'
}
