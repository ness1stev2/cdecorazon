import { Component, OnInit } from '@angular/core';
import { RedesSocialesComponent } from '../../components/redes-sociales/redes-sociales.component';
import { AutodiagnosticoComponent } from '../../components/autodiagnostico/autodiagnostico.component';
import { RedesGrupoComponent } from './components/redes-grupo/redes-grupo.component';
import { ScrollTopService } from '../../../services/ScrollTop.service';
import { BotonMasInformacionComponent } from "./components/boton-mas-informacion/boton-mas-informacion.component";

@Component({
  standalone: true,
  imports: [RedesSocialesComponent, AutodiagnosticoComponent, RedesGrupoComponent, BotonMasInformacionComponent],
  templateUrl: './encontrarnos.component.html',
})
export default class EncontrarnosComponent implements OnInit {
  constructor(private scrollTopService: ScrollTopService) {}

  ngOnInit() {
    // El servicio ScrollTopService se inicializa automáticamente
  }
}
