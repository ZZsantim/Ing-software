import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  template: `<button class="avatar" [attr.aria-label]="label" (click)="selected.emit()"><img [src]="src" [alt]="label" /><span>{{ initials }}</span></button>`,
  styles: [`.avatar{width:42px;height:42px;padding:0;border:0;border-radius:50%;overflow:hidden;background:#d8f4e5;color:#168554;font-weight:800;cursor:pointer}.avatar img{width:100%;height:100%;object-fit:cover}.avatar img:not([src]),.avatar img[src=""]{display:none}.avatar span{display:block;margin-top:-28px}`],
})
export class AvatarComponent {
  @Input() src = '';
  @Input() initials = 'RS';
  @Input() label = 'Avatar de usuario';
  @Output() selected = new EventEmitter<void>();
}
