import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  template: `<div class="alert" [class]="tone" role="alert"><span>{{ message }}</span><button aria-label="Cerrar" (click)="closed.emit()">×</button></div>`,
  styles: [`.alert{display:flex;justify-content:space-between;gap:1rem;padding:.8rem 1rem;border-radius:10px}.success{background:#e2f7ed;color:#168554}.info{background:#e9f2ff;color:#3c6ea8}.warning{background:#fff6d8;color:#8a6913}.danger{background:#fdebea;color:#b33b3b}.alert button{border:0;background:transparent;color:inherit;font-size:1.2rem;cursor:pointer}`],
})
export class AlertComponent {
  @Input() message = '';
  @Input() tone = 'info';
  @Output() closed = new EventEmitter<void>();
}
