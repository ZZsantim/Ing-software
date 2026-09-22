import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button [type]="type" [disabled]="disabled" [class]="variant" (click)="pressed.emit($event)">{{ label }}</button>`,
  styles: [`button{border:0;border-radius:9px;padding:.65rem 1rem;font-weight:700;cursor:pointer}.primary{background:#22b573;color:#fff}.secondary{background:#e9f7f1;color:#168554}.danger{background:#fdebea;color:#b33b3b}button:disabled{opacity:.5;cursor:not-allowed}`],
})
export class ButtonComponent {
  @Input() label = 'Continuar';
  @Input() variant = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Output() pressed = new EventEmitter<MouseEvent>();
}
