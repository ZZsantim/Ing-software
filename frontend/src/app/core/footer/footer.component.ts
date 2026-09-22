import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer><span>© 2026 RachaSana</span><span>Bienestar digital para aprender mejor 💚</span><span>Privacidad · Ayuda</span></footer>`,
  styles: [`footer{display:flex;justify-content:space-between;gap:1rem;padding:1.3rem clamp(1rem,5vw,5rem);color:#71868c;font-size:.8rem;border-top:1px solid #e7edf0;background:#fff}@media(max-width:600px){footer{flex-direction:column;text-align:center}}`],
})
export class FooterComponent {}
