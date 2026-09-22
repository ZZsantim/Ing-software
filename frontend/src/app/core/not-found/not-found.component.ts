import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `<section class="empty"><div>🧭</div><h1>Página no encontrada</h1><p>Volvamos a tu camino saludable.</p><a routerLink="/" class="button">Ir al panel</a></section>`,
  styles: [`.empty{text-align:center;padding:8rem 1rem}.empty div{font-size:3rem}.empty h1{color:#173b45}.button{display:inline-block;background:#22b573;color:#fff;padding:.75rem 1.2rem;border-radius:10px;text-decoration:none;font-weight:700}`],
})
export class NotFoundComponent {}
