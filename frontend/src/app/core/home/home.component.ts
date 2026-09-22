import { Component } from '@angular/core';
// Angular Material: MatTabsModule
import { MatTabsModule } from '@angular/material/tabs';
import { StreakCounterComponent } from '../../shared/components/streak-counter/streak-counter.component';
import { CoinBalanceComponent } from '../../shared/components/coin-balance/coin-balance.component';
import { GoalProgressRingComponent } from '../../shared/components/goal-progress-ring/goal-progress-ring.component';
import { ScheduleLockBannerComponent } from '../../shared/components/schedule-lock-banner/schedule-lock-banner.component';
import { NotificationItemComponent } from '../../shared/components/notification-item/notification-item.component';
import { DailyTriviaCardComponent } from '../../features/trivia/daily-trivia-card/daily-trivia-card.component';
import { RewardItemComponent } from '../../shared/components/reward-item/reward-item.component';
import { AnonymousPostComponent } from '../../features/expresion-anonima/anonymous-post/anonymous-post.component';
import { ParentDashboardWidgetComponent } from '../../features/panel-control/parent-dashboard-widget/parent-dashboard-widget.component';
import { WeeklySummaryChartComponent } from '../../features/panel-control/weekly-summary-chart/weekly-summary-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, StreakCounterComponent, CoinBalanceComponent, GoalProgressRingComponent, ScheduleLockBannerComponent, NotificationItemComponent, DailyTriviaCardComponent, RewardItemComponent, AnonymousPostComponent, ParentDashboardWidgetComponent, WeeklySummaryChartComponent],
  template: `
    <section class="hero">
      <div><p class="eyebrow">MARTES, 22 DE SEPTIEMBRE</p><h1>Tu bienestar,<br><span>en racha.</span></h1><p class="intro">Pequeños hábitos hoy construyen grandes logros mañana. ¿Listo para cuidar tu atención?</p><app-schedule-lock-banner /></div>
      <div class="hero-art"><div class="sun">☀️</div><div class="plant">🌱</div></div>
    </section>
    <section class="stats"><div class="stat-card"><app-streak-counter [dias]="7" /><app-goal-progress-ring [progreso]="75" /></div><div class="stat-card"><app-coin-balance [saldo]="24" [tope]="100" /><p class="hint">Gana monedas completando tus retos diarios.</p></div></section>
    <mat-tab-group class="dashboard-tabs" animationDuration="0ms"><mat-tab label="Panel de control"><span class="tab-copy">Vista general de tus hábitos</span></mat-tab><mat-tab label="Reto diario"><span class="tab-copy">Completa tu reto para ganar monedas</span></mat-tab><mat-tab label="Espacio anónimo"><span class="tab-copy">Comparte y apoya a la comunidad</span></mat-tab></mat-tab-group>
    <section class="columns">
      <div class="main-column"><h2 id="reto">Tu día en RachaSana</h2><app-daily-trivia-card (iniciar)="retoIniciado = true" /><div class="panel"><div class="panel-title"><h3>Resumen semanal</h3><span>Últimos 7 días⌄</span></div><app-weekly-summary-chart /></div><app-parent-dashboard-widget /></div>
      <aside class="side-column"><div class="panel"><div class="panel-title"><h3>Recompensas</h3><span class="link">Ver todas</span></div><app-reward-item emoji="🎧" nombre="30 min de música" [costo]="20" (canjear)="recompensa = '¡Canje solicitado!'" /><app-reward-item emoji="🍿" nombre="Snack favorito" [costo]="35" [disponible]="false" /></div><div class="panel" id="comunidad"><div class="panel-title"><h3>Espacio anónimo</h3><span class="link">Explorar</span></div><app-anonymous-post (apoyar)="apoyos = apoyos + 1" [apoyos]="apoyos" /></div><div class="panel"><div class="panel-title"><h3>Actividad reciente</h3></div><app-notification-item titulo="Racha de 7 días" detalle="¡Sigue así!" hora="Hoy" /><app-notification-item icono="🪙" titulo="Ganaste 5 monedas" detalle="Reto completado" hora="Ayer" /></div></aside>
    </section>
    @if (retoIniciado || recompensa) { <div class="feedback" role="status">{{ retoIniciado ? '✨ ¡Reto iniciado! Mucho éxito.' : recompensa }}</div> }
  `,
  styles: [`.hero{display:flex;justify-content:space-between;align-items:center;max-width:1120px;margin:auto;padding:3rem 1rem 2rem}.eyebrow{font-size:.7rem;letter-spacing:.12em;color:#71868c;font-weight:800}.hero h1{font-size:clamp(2.3rem,5vw,4rem);line-height:1.02;color:#173b45;margin:.7rem 0}.hero h1 span{color:#22b573}.intro{max-width:430px;color:#71868c;line-height:1.6}.hero app-schedule-lock-banner{display:block;margin-top:1.5rem;max-width:440px}.hero-art{width:230px;height:200px;border-radius:50%;background:#d8f4e5;display:grid;place-items:center;position:relative}.sun{font-size:5rem}.plant{font-size:4rem;position:absolute;bottom:5px;right:35px}.stats,.columns{max-width:1120px;margin:auto;padding:0 1rem;display:grid;gap:1rem}.stats{grid-template-columns:1fr 1fr}.stat-card,.panel{background:#fff;border-radius:16px;padding:1.2rem;box-shadow:0 3px 15px #204b3510}.stat-card{display:flex;justify-content:space-between;align-items:center}.hint{font-size:.8rem;color:#71868c;max-width:180px;line-height:1.5}.dashboard-tabs{max-width:1120px;margin:1rem auto 0;padding:0 1rem}.tab-copy{display:block;padding:1rem;color:#557078}.columns{grid-template-columns:1.35fr 1fr;margin-top:1.5rem;padding-bottom:3rem}.main-column,.side-column{display:flex;flex-direction:column;gap:1rem}.columns h2{color:#173b45;margin:.3rem 0}.panel-title{display:flex;justify-content:space-between;align-items:center}.panel-title h3{margin:0;color:#173b45}.panel-title span{font-size:.75rem;color:#71868c}.link{color:#168554!important;font-weight:700}.feedback{position:fixed;bottom:24px;right:24px;background:#173b45;color:#fff;border-radius:10px;padding:1rem;box-shadow:0 5px 20px #0003}@media(max-width:750px){.hero-art{display:none}.stats,.columns{grid-template-columns:1fr}.hero{padding-top:2rem}}`],
})
export class HomeComponent {
  retoIniciado = false;
  recompensa = '';
  apoyos = 12;
}
