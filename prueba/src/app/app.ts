import { Component } from '@angular/core';
import { Menu } from './componentes/menu/menu';
import { Cuerpo } from './componentes/cuerpo/cuerpo';
import { Tarjeta } from './componentes/tarjeta/tarjeta';

@Component({
  selector: 'app-root',
  imports: [Menu, Cuerpo, Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
