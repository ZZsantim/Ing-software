import { DEMO_APPOINTMENTS, ROLE_OPTIONS, SCREEN_CATALOG, screensForRole } from './screen-catalog';

describe('SCREEN_CATALOG', () => {
  it('contains the portal and all six screens for each of the five roles', () => {
    expect(SCREEN_CATALOG).toHaveLength(31);
    expect(SCREEN_CATALOG.filter((screen) => screen.role === 'portal')).toHaveLength(1);
    for (const role of ROLE_OPTIONS) {
      expect(screensForRole(role.id)).toHaveLength(6);
    }
  });

  it('assigns a unique route identifier to every screen', () => {
    const ids = SCREEN_CATALOG.map((screen) => screen.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('provides ten sample client appointments with unique identifiers', () => {
    expect(DEMO_APPOINTMENTS).toHaveLength(10);
    expect(new Set(DEMO_APPOINTMENTS.map((appointment) => appointment.id)).size).toBe(10);
  });
});
