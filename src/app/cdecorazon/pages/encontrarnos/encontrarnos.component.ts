import { Component } from '@angular/core';
import { RedesSocialesComponent } from '../../components/redes-sociales/redes-sociales.component';
import { AutodiagnosticoComponent } from '../../components/autodiagnostico/autodiagnostico.component';

@Component({
  standalone: true,
  imports: [RedesSocialesComponent, AutodiagnosticoComponent],
  templateUrl: './encontrarnos.component.html',
})
export default class EncontrarnosComponent {
}
