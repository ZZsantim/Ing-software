import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { ScreenPageComponent } from './screen-page.component';

describe('ScreenPageComponent', () => {
  it('renders the appointment form route from the screen catalog', async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenPageComponent],
      providers: [
        provideRouter([{ path: ':screenId', component: ScreenPageComponent }]),
      ],
    }).compileComponents();

    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/cliente-agendar', ScreenPageComponent);

    expect(component.screen()?.id).toBe('cliente-agendar');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(
      'Agendar una nueva cita',
    );
    expect(harness.routeNativeElement?.querySelectorAll('form input, form select, form textarea')).toHaveLength(6);
  });
});
