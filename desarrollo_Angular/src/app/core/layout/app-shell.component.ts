import { DestroyRef, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { findScreen, ROLE_OPTIONS, screensForRole } from '../data/screen-catalog';
import { RoleId, ScreenDefinition } from '../models/screen.model';
import { WorkshopStoreService } from '../services/workshop-store.service';

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShellComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly store = inject(WorkshopStoreService);
  readonly roleOptions = ROLE_OPTIONS;
  readonly currentScreen = signal<ScreenDefinition | null>(this.resolveScreen(this.router.url));
  readonly currentRole = computed<RoleId>(() => this.currentScreen()?.role ?? 'portal');
  readonly currentNavigation = computed(() => screensForRole(this.currentRole()));
  readonly menuOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        this.currentScreen.set(this.resolveScreen(event.urlAfterRedirects));
        this.menuOpen.set(false);
      });
  }

  selectRole(event: Event): void {
    const selectedRole = (event.target as HTMLSelectElement).value;
    const destination = ROLE_OPTIONS.find((role) => role.id === selectedRole)?.dashboard;
    if (destination) {
      void this.router.navigate(['/', destination]);
    }
  }

  closeNotice(): void {
    this.store.clearNotice();
  }

  private resolveScreen(url: string): ScreenDefinition | null {
    const screenId = url.split('?')[0].split('/').filter(Boolean)[0] ?? 'portal-principal';
    return findScreen(screenId) ?? null;
  }
}
