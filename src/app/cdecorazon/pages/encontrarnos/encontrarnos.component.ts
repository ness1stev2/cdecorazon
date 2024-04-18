import { Component } from '@angular/core';
import { RedesSocialesComponent } from '../../components/redes-sociales/redes-sociales.component';
import { AutodiagnosticoComponent } from '../../components/autodiagnostico/autodiagnostico.component';
import { RedesGrupoComponent } from './components/redes-grupo/redes-grupo.component';

@Component({
  standalone: true,
  imports: [RedesSocialesComponent, AutodiagnosticoComponent, RedesGrupoComponent],
  templateUrl: './encontrarnos.component.html',
})
export default class EncontrarnosComponent {
}
