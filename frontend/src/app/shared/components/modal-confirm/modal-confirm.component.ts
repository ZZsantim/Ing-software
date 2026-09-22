import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  template: `@if (open) {<div class="backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true"><h2>{{ title }}</h2><p>{{ message }}</p><div class="actions"><button (click)="cancelled.emit()">Cancelar</button><button class="confirm" (click)="confirmed.emit()">Confirmar</button></div></section></div>}`,
  styles: [`.backdrop{position:fixed;inset:0;background:#173b4566;display:grid;place-items:center;z-index:10}.modal{background:#fff;border-radius:16px;padding:1.5rem;max-width:360px;margin:1rem}.modal h2{margin-top:0;color:#173b45}.modal p{color:#71868c;line-height:1.5}.actions{display:flex;justify-content:flex-end;gap:.7rem}.actions button{border:0;border-radius:8px;padding:.6rem .8rem;cursor:pointer}.confirm{background:#22b573;color:#fff}`],
})
export class ModalConfirmComponent {
  @Input() open = false;
  @Input() title = 'Confirmar acción';
  @Input() message = '¿Deseas continuar?';
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
}
