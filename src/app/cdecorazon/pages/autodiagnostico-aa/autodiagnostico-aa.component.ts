import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-autodiagnostico-aa',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './autodiagnostico-aa.component.html',
  styles: `
  p{
    font-size: 18px;
  }
  `
})
export class AutodiagnosticoAaComponent {
  show = false;

  toggleModal(){
    this.show = !this.show;
  }
}
