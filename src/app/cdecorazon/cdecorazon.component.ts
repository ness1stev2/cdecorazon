import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { AsisteComponent } from './components/asiste/asiste.component';
import { ScrollTopService } from '../services/ScrollTop.service';

@Component({
  standalone: true,
  imports: [RouterModule, QuienesSomosComponent, YoutubeComponent, RedesSocialesComponent, AsisteComponent],
  templateUrl: './cdecorazon.component.html',
})
export default class CdecorazonComponent implements OnInit {
  constructor(private scrollTopService: ScrollTopService) {}

  ngOnInit() {
    // El servicio ScrollTopService se inicializa automáticamente
  }
}
