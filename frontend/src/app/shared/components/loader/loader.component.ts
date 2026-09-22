import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `<span class="loader" [attr.aria-label]="label" role="status"></span>`,
  styles: [`.loader{display:inline-block;width:22px;height:22px;border:3px solid #cfe8dc;border-top-color:#22b573;border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}`],
})
export class LoaderComponent {
  @Input() label = 'Cargando';
}
