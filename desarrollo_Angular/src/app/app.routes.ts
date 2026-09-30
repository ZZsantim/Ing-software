import { Routes } from '@angular/router';
import { AppShellComponent } from './core/layout/app-shell.component';
import { ScreenPageComponent } from './features/screens/screen-page.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'portal-principal' },
      { path: ':screenId', component: ScreenPageComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
