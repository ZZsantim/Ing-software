import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  template: `
    <span class="status-badge" [class]="'status-badge status-badge--' + tone()">
      <span class="status-badge__dot" aria-hidden="true"></span>
      {{ label() }}
    </span>
  `,
  styleUrl: './status-badge.component.css',
})
export class StatusBadgeComponent {
  readonly status = input.required<string>();
  readonly label = computed(() => this.status());
  readonly tone = computed(() => {
    const status = this.status().toLowerCase();
    if (/cancel|urgente|bajo|atención/.test(status)) return 'danger';
    if (/pendiente|proceso|tránsito|preparando|revisión/.test(status)) return 'warning';
    if (/complet|confirm|aprob|entregado|correcto|activo|disponible|revisado/.test(status)) return 'success';
    return 'neutral';
  });
}
