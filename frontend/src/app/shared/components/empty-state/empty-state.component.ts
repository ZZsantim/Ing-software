import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `<section class="empty"><div class="icon">{{ icon }}</div><h3>{{ title }}</h3><p>{{ message }}</p><button (click)="action.emit()">{{ actionLabel }}</button></section>`,
  styles: [`.empty{text-align:center;padding:2rem 1rem;color:#71868c}.icon{font-size:2.2rem}.empty h3{color:#173b45;margin:.6rem 0}.empty p{margin:0 auto 1rem;max-width:300px;font-size:.85rem}.empty button{border:0;border-radius:8px;padding:.6rem .9rem;background:#22b573;color:#fff;font-weight:700;cursor:pointer}`],
})
export class EmptyStateComponent {
  @Input() icon = '🌱';
  @Input() title = 'Todavía no hay elementos';
  @Input() message = 'Cuando tengas actividad, aparecerá aquí.';
  @Input() actionLabel = 'Explorar';
  @Output() action = new EventEmitter<void>();
}
