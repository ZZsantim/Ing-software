import { Component, Input } from '@angular/core';
@Component({selector:'app-streak-counter',standalone:true,template:`<div class="card"><span class="icon">🔥</span><div><strong>{{ dias }} días</strong><small>racha sana</small></div></div>`,styles:[`.card{display:flex;gap:.8rem;align-items:center}.icon{font-size:2rem}.card strong,.card small{display:block}.card strong{font-size:1.3rem;color:#173b45}.card small{color:#71868c}`]})
export class StreakCounterComponent { @Input() dias = 0; }
