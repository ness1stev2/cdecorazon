import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [],
  templateUrl: './redes-sociales.component.html',
  styles: `
  .redes-sociales{
    a{
        animation: fadeInUp 2s forwards;
        opacity: 0;
      &:nth-child(1){
        animation-delay: 2s;
      }
      &:nth-child(2){
        animation-delay: 2.4s;

      }
      &:nth-child(3){
        animation-delay: 2.8s;

      }
      &:nth-child(4){
        animation-delay: 3.2s;

      }
    }
  }
  `
})
export class RedesSocialesComponent {

  @Input() color: string = '#3c383b'
}
