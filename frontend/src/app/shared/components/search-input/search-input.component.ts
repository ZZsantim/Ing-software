import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  template: `<label class="search"><span>⌕</span><input [value]="value" [placeholder]="placeholder" (input)="changed.emit($any($event.target).value)" /><button type="button" aria-label="Limpiar búsqueda" (click)="cleared.emit()">×</button></label>`,
  styles: [`.search{display:flex;align-items:center;gap:.5rem;border:1px solid #d9e7e3;border-radius:9px;padding:.5rem .7rem;background:#fff}.search input{border:0;outline:0;flex:1;min-width:0;color:#173b45}.search button{border:0;background:transparent;color:#71868c;cursor:pointer}`],
})
export class SearchInputComponent {
  @Input() value = '';
  @Input() placeholder = 'Buscar';
  @Output() changed = new EventEmitter<string>();
  @Output() cleared = new EventEmitter<void>();
}
