import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-autodiagnostico-alanon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './autodiagnostico-alanon.component.html',
  styles: `
  p{
    font-size: 18px;
  }
  `
})
export class AutodiagnosticoAlanonComponent {
  show = false;

  toggleModal(){
    this.show = !this.show;
  }
}
