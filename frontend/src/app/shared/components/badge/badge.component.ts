import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<span class="badge" [class]="tone">{{ text }}</span>`,
  styles: [`.badge{display:inline-block;border-radius:20px;padding:.25rem .65rem;font-size:.72rem;font-weight:800}.success{background:#e2f7ed;color:#168554}.warning{background:#fff6d8;color:#8a6913}.info{background:#e9f2ff;color:#3c6ea8}.danger{background:#fdebea;color:#b33b3b}`],
})
export class BadgeComponent {
  @Input() text = 'Estado';
  @Input() tone = 'info';
}
