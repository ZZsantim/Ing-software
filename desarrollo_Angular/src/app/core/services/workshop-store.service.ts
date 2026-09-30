import { Injectable, signal } from '@angular/core';
import { DEMO_APPOINTMENTS } from '../data/screen-catalog';
import { AppointmentDemo, ScreenDefinition, ScreenRecord } from '../models/screen.model';

type FormValue = string | File;

@Injectable({ providedIn: 'root' })
export class WorkshopStoreService {
  private nextAppointmentId = 1058;
  readonly notice = signal('');
  readonly appointments = signal<AppointmentDemo[]>(
    DEMO_APPOINTMENTS.map((appointment) => ({ ...appointment })),
  );
  readonly statusOverrides = signal<Record<string, string>>({});

  submitForm(screen: ScreenDefinition, values: Record<string, FormValue>): void {
    if (screen.id === 'cliente-agendar') {
      this.appointments.update((items) => [
        ...items,
        {
          id: String(this.nextAppointmentId++),
          service: this.value(values, 'service', 'Servicio'),
          branch: this.value(values, 'branch', 'Sede'),
          bay: this.value(values, 'bay', 'Bahía pendiente'),
          date: this.value(values, 'date', 'Fecha pendiente'),
          time: this.value(values, 'time', 'Hora pendiente'),
          status: 'Pendiente',
        },
      ]);
      this.notify('Solicitud de cita guardada en esta demostración.');
      return;
    }

    if (screen.id === 'cliente-modificar') {
      const appointmentId = this.selectedAppointmentId(values);
      this.appointments.update((items) =>
        items.map((appointment, index) =>
          appointment.id === appointmentId || (!appointmentId && index === 0)
            ? {
                ...appointment,
                date: this.value(values, 'date', appointment.date),
                time: this.value(values, 'time', appointment.time),
                status: 'Actualizada',
              }
            : appointment,
        ),
      );
      this.notify('Cambios de la cita guardados localmente.');
      return;
    }

    if (screen.id === 'cliente-cancelar') {
      const appointmentId = this.selectedAppointmentId(values);
      this.appointments.update((items) =>
        items.map((appointment, index) =>
          appointment.id === appointmentId || (!appointmentId && index === 0)
            ? { ...appointment, status: 'Cancelada' }
            : appointment,
        ),
      );
      this.notify('La cita quedó marcada como cancelada en esta demostración.');
      return;
    }

    this.notify(`${screen.actions?.[0]?.label ?? 'Cambios'} guardados localmente.`);
  }

  advanceRecord(record: ScreenRecord): void {
    const nextStatus: Record<string, string> = {
      'Pendiente': 'En proceso',
      'En proceso': 'Completado',
      'Stock bajo': 'Solicitud creada',
      'Preparando': 'En tránsito',
      'En tránsito': 'Entregado',
      'Urgente': 'En revisión',
      'Aprobada': 'En tránsito',
      'Requiere atención': 'En revisión',
      'Activo': 'Revisión solicitada',
      'Activa': 'Revisión solicitada',
    };
    const status = nextStatus[record.status] ?? 'Revisado';
    this.statusOverrides.update((items) => ({ ...items, [record.id]: status }));
    this.notify(`${record.primary}: estado actualizado a “${status}”.`);
  }

  statusFor(record: ScreenRecord): string {
    return this.statusOverrides()[record.id] ?? record.status;
  }

  notify(message: string): void {
    this.notice.set(message);
  }

  clearNotice(): void {
    this.notice.set('');
  }

  private value(values: Record<string, FormValue>, key: string, fallback: string): string {
    const value = values[key];
    return typeof value === 'string' && value.trim() ? value.trim() : fallback;
  }

  private selectedAppointmentId(values: Record<string, FormValue>): string | undefined {
    const label = this.value(values, 'appointment', '');
    const id = label.match(/#(\w+)/)?.[1];
    return id ?? this.appointments()[0]?.id;
  }
}
