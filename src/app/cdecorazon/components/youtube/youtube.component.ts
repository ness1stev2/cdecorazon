import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [],
  templateUrl: './youtube.component.html',
  styles: `
  iframe{
    opacity: 0;
    animation: fadeInUp 2s forwards;
    &:nth-child(1){
      animation-delay: 1s;
    }
    &:nth-child(2){
      animation-delay: 1.5s;
    }
    &:nth-child(3){
      animation-delay: 2s;
    }
    &:nth-child(4){
      animation-delay: 2.5s;
    }
  }
  `
})
export class YoutubeComponent {

}
