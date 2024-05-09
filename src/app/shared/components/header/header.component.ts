import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styles: `
  .svg-ruta-activa{
    fill: #f0565d;
    color: #f0565d;
  }
  .custom-li {
  border-bottom: 2px solid transparent;
  transition: all 1s ease-in-out;

  &:hover {
    border-color: #f0565d;

    .custom-svg, span {
      fill: #f0565d;
      color: #f0565d;
    }
  }

  .custom-svg {
    fill: #3b383b;
  }
}
  .desktop {
    ul{
      li{
        animation: fadeInDown 2s forwards;
        opacity: 0;
        &:nth-child(1) {
          animation-delay: 0.5s;
        }
        &:nth-child(2) {
          animation-delay: 1s;
        }
        &:nth-child(3) {
          animation-delay: 1.5s;
        }
        &:nth-child(4) {
          animation-delay: 2s;
        }
      }
    }
  }
  .mobile-menu {
    ul{
      li{
        animation: fadeInDown 2s forwards;
        opacity: 0;
        &:nth-child(1) {
          animation-delay: 0.5s;
        }
        &:nth-child(2) {
          animation-delay: 1s;
        }
        &:nth-child(3) {
          animation-delay: 1.5s;
        }
        &:nth-child(4) {
          animation-delay: 2s;
        }
      }
    }
  }
  `
})
export class HeaderComponent {

  visible: boolean = true;

  toggleMenu() {
    this.visible = !this.visible;
  }
}
