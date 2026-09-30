import { Component, input } from '@angular/core';
import { ScreenMetric } from '../../core/models/screen.model';

@Component({
  selector: 'app-metric-card',
  template: `
    <article
      class="metric-card"
      [class.metric-card--primary]="metric().tone === 'primary'"
      [class.metric-card--success]="metric().tone === 'success'"
      [class.metric-card--warning]="metric().tone === 'warning'"
    >
      <p class="metric-card__label">{{ metric().label }}</p>
      <p class="metric-card__value">{{ metric().value }}</p>
      <p class="metric-card__caption">{{ metric().caption }}</p>
    </article>
  `,
  styleUrl: './metric-card.component.css',
})
export class MetricCardComponent {
  readonly metric = input.required<ScreenMetric>();
}
