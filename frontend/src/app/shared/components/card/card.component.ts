import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `<article class="card" [class.compact]="compact"><header>{{ title }}</header><div class="content"><ng-content /></div></article>`,
  styles: [`.card{background:#fff;border-radius:16px;padding:1.2rem;box-shadow:0 3px 15px #204b3510}.card header{font-weight:800;color:#173b45;margin-bottom:.7rem}.compact{padding:.8rem}`],
})
export class CardComponent {
  @Input() title = '';
  @Input() compact = false;
}
