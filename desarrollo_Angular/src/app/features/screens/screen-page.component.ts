import { DestroyRef, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { findScreen, ROLE_OPTIONS } from '../../core/data/screen-catalog';
import { ScreenAction, ScreenDefinition, ScreenField, ScreenRecord } from '../../core/models/screen.model';
import { WorkshopStoreService } from '../../core/services/workshop-store.service';
import { MetricCardComponent } from '../../shared/components/metric-card.component';
import { StatusBadgeComponent } from '../../shared/components/status-badge.component';

@Component({
  selector: 'app-screen-page',
  imports: [RouterLink, MetricCardComponent, StatusBadgeComponent],
  templateUrl: './screen-page.component.html',
  styleUrl: './screen-page.component.css',
})
export class ScreenPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly store = inject(WorkshopStoreService);
  readonly roles = ROLE_OPTIONS;
  readonly chartBars = [
    { day: 'Lun', value: 5 },
    { day: 'Mar', value: 7 },
    { day: 'Mié', value: 4 },
    { day: 'Jue', value: 8 },
    { day: 'Vie', value: 6 },
    { day: 'Sáb', value: 9 },
    { day: 'Dom', value: 5 },
  ];
  readonly screen = signal<ScreenDefinition | null>(null);
  readonly searchText = signal('');
  readonly visibleRecords = computed(() => {
    const screen = this.screen();
    const records =
      screen?.id === 'cliente-dashboard'
        ? this.store.appointments().map((appointment) => ({
            id: `appointment-${appointment.id}`,
            primary: `Cita #${appointment.id} · ${appointment.service}`,
            secondary: `${appointment.branch} · ${appointment.bay}`,
            detail: `${appointment.date} · ${appointment.time}`,
            status: appointment.status,
            date: appointment.date,
          }))
        : screen?.records ?? [];
    const term = this.searchText().trim().toLocaleLowerCase('es');
    return records
      .filter((record) => {
        const search = `${record.primary} ${record.secondary} ${record.detail} ${this.store.statusFor(record)}`;
        return search.toLocaleLowerCase('es').includes(term);
      })
      .map((record) => ({ ...record, status: this.store.statusFor(record) }));
  });

  constructor() {
    const update = (): void => {
      this.screen.set(findScreen(this.route.snapshot.paramMap.get('screenId') ?? 'portal-principal') ?? null);
      this.searchText.set('');
    };
    update();
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(update);
  }

  onSearch(event: Event): void {
    this.searchText.set((event.target as HTMLInputElement).value);
  }

  optionsFor(field: ScreenField): string[] {
    const screen = this.screen();
    if (
      field.id === 'appointment' &&
      (screen?.id === 'cliente-modificar' || screen?.id === 'cliente-cancelar')
    ) {
      return this.store.appointments().map(
        (appointment) =>
          `Cita #${appointment.id} · ${appointment.service}`,
      );
    }
    return field.options ?? [];
  }

  submitForm(event: Event): void {
    event.preventDefault();
    const screen = this.screen();
    const form = event.currentTarget;
    if (!screen || !(form instanceof HTMLFormElement)) return;

    const values = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([key, value]) => [
        key,
        value instanceof File ? value.name : value,
      ]),
    );
    this.store.submitForm(screen, values);
    form.reset();
  }

  performAction(action: ScreenAction): void {
    if (action.effect === 'export') {
      this.exportRecords();
      return;
    }
    this.store.notify(`${action.label}: acción disponible en esta demostración.`);
  }

  advanceRecord(record: ScreenRecord): void {
    this.store.advanceRecord(record);
  }

  recordTarget(): string | null {
    const destinations: Record<string, string> = {
      'cliente-dashboard': 'cliente-detalle',
      'sede-dashboard': 'sede-calendario',
      'logistica-dashboard': 'logistica-solicitudes',
      'logistica-solicitudes': 'logistica-detalle-solicitud',
      'logistica-despacho': 'logistica-trazabilidad',
      'admin-dashboard': 'admin-usuarios',
    };
    const id = this.screen()?.id;
    return id ? destinations[id] ?? null : null;
  }

  recordActionLabel(): string {
    const labels: Record<string, string> = {
      'cliente-dashboard': 'Ver cita',
      'mecanico-dashboard': 'Avanzar estado',
      'sede-dashboard': 'Ver calendario',
      'logistica-dashboard': 'Ver solicitudes',
      'logistica-solicitudes': 'Revisar solicitud',
      'logistica-despacho': 'Seguir despacho',
      'admin-dashboard': 'Ver usuarios',
    };
    const id = this.screen()?.id;
    return id ? labels[id] ?? 'Consultar registro' : 'Consultar registro';
  }

  showRecordAction(record: ScreenRecord): void {
    if (this.screen()?.id === 'mecanico-dashboard') {
      this.advanceRecord(record);
      return;
    }
    this.store.notify(`${record.primary}: registro de demostración en modo consulta.`);
  }

  trackById(_: number, record: ScreenRecord): string {
    return record.id;
  }

  private exportRecords(): void {
    const screen = this.screen();
    const rows = this.visibleRecords();
    if (!screen || rows.length === 0) {
      this.store.notify('No hay registros visibles para exportar.');
      return;
    }

    const header = ['Registro', 'Ubicación o contacto', 'Detalle', 'Estado', 'Fecha'];
    const lines = [
      header,
      ...rows.map((record) => [
        record.primary,
        record.secondary,
        record.detail,
        record.status,
        record.date,
      ]),
    ];
    const csv = lines.map((line) => line.map((cell) => `"${cell.replaceAll('"', '""')}"`).join(',')).join('\n');
    const file = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = `${screen.id}-registros.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
    this.store.notify('Archivo CSV generado con los registros visibles.');
  }
}
