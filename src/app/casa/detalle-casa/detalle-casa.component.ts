import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';

@Component({
  selector: 'app-detalle-casa',
  templateUrl: './detalle-casa.component.html',
  styleUrls: ['./detalle-casa.component.scss']
})
export class DetalleCasaComponent implements OnInit {
  @Input('c1') c1 : Casa; // casa para mostrar
  constructor() { }

  ngOnInit() {
  }

}
