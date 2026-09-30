import { findScreen, SCREEN_CATALOG } from '../data/screen-catalog';
import { WorkshopStoreService } from './workshop-store.service';

describe('WorkshopStoreService', () => {
  it('records a new appointment in local demo state and reports the outcome', () => {
    const store = new WorkshopStoreService();
    const screen = findScreen('cliente-agendar');

    expect(screen).toBeDefined();
    store.submitForm(screen!, {
      service: 'Revisión preventiva',
      branch: 'Sede Centro',
      bay: 'Bahía 01',
      date: '2026-10-02',
      time: '09:30',
    });

    expect(store.appointments()).toHaveLength(11);
    expect(store.appointments()[10]).toMatchObject({
      service: 'Revisión preventiva',
      branch: 'Sede Centro',
      date: '2026-10-02',
      time: '09:30',
      status: 'Pendiente',
    });

    expect(store.notice()).toContain('guardada');
  });

  it('starts with ten sample appointments shared with the screen catalog', () => {
    const store = new WorkshopStoreService();

    expect(store.appointments()).toHaveLength(10);
    expect(new Set(store.appointments().map((appointment) => appointment.id)).size).toBe(10);
  });

  it('updates only the requested record status', () => {
    const store = new WorkshopStoreService();
    const first = SCREEN_CATALOG.find((screen) => screen.id === 'mecanico-dashboard')?.records?.[0];
    const second = SCREEN_CATALOG.find((screen) => screen.id === 'mecanico-dashboard')?.records?.[1];

    expect(first).toBeDefined();
    expect(second).toBeDefined();
    store.advanceRecord(first!);

    expect(store.statusFor(first!)).toBe('Completado');
    expect(store.statusFor(second!)).toBe(second!.status);
  });
});
