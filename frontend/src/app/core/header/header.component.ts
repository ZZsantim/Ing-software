import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// Angular Material: MatBadgeModule
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatBadgeModule],
  template: `<header class="header"><a routerLink="/" class="brand"><span class="logo">✦</span><span>Racha<span class="accent">Sana</span></span></a><nav aria-label="Navegación"><a routerLink="/">Panel</a><a href="#reto">Reto diario</a><a href="#comunidad">Comunidad</a></nav><div class="profile">👋 <span>Hola, Alex</span><b matBadge="24" matBadgeColor="accent" matBadgeOverlap="false">🪙</b></div></header>`,
  styles: [`.header{height:68px;background:#fff;display:flex;align-items:center;gap:2rem;padding:0 clamp(1rem,5vw,5rem);border-bottom:1px solid #e7edf0}.brand{display:flex;align-items:center;gap:.5rem;font-weight:800;font-size:1.3rem;color:#173b45}.logo{display:grid;place-items:center;background:#22b573;color:white;border-radius:10px;width:34px;height:34px}.accent{color:#22b573}nav{display:flex;gap:1.5rem;flex:1}a{color:inherit;text-decoration:none}nav a{font-size:.9rem;color:#557078}.profile{display:flex;gap:.7rem;align-items:center;font-size:.9rem}.profile b{background:#fff6d8;color:#9b7411;border-radius:20px;padding:.45rem .7rem}@media(max-width:700px){nav{display:none}.header{justify-content:space-between}.profile span{display:none}}`],
})
export class HeaderComponent {}
