import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <p class="eyebrow">RUTA NO DISPONIBLE</p>
      <h1>No encontramos esa pantalla</h1>
      <p>Regresa al portal y elige uno de los perfiles disponibles.</p>
      <a class="button button--primary" routerLink="/portal-principal">Ir al portal</a>
    </section>
  `,
})
export class NotFoundComponent {}
