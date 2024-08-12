import { Component } from '@angular/core';
import { RedesGrupoComponent } from '../encontrarnos/components/redes-grupo/redes-grupo.component';
import { AutodiagnosticoComponent } from '../../components/autodiagnostico/autodiagnostico.component';
import { RedesSocialesComponent } from '../../components/redes-sociales/redes-sociales.component';
import { RouterLink } from '@angular/router';
import { BotonMasInformacionComponent } from "../encontrarnos/components/boton-mas-informacion/boton-mas-informacion.component";

@Component({
  standalone: true,
  imports: [RedesGrupoComponent, AutodiagnosticoComponent, RedesSocialesComponent, RouterLink, BotonMasInformacionComponent],
  templateUrl: './ayuda-am-fa.component.html',
})
export default class AyudaAmFaComponent {

}
