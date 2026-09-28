import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {

  @Input() categoria = '';
  @Input() titulo = '';
  @Input() descripcion = '';
  @Input() precio = '';
  @Input() imagen = '';
  @Input() enlace = '';
  @Input() textoBoton = 'Ver producto';
  @Input() alt = '';

}