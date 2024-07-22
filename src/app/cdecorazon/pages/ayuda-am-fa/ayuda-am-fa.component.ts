import { Component } from '@angular/core';
import { RedesGrupoComponent } from '../encontrarnos/components/redes-grupo/redes-grupo.component';
import { AutodiagnosticoComponent } from '../../components/autodiagnostico/autodiagnostico.component';
import { RedesSocialesComponent } from '../../components/redes-sociales/redes-sociales.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RedesGrupoComponent, AutodiagnosticoComponent, RedesSocialesComponent, RouterLink],
  templateUrl: './ayuda-am-fa.component.html',
})
export default class AyudaAmFaComponent {

}
