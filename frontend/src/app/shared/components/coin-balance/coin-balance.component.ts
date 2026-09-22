import { Component, Input } from '@angular/core';
@Component({selector:'app-coin-balance',standalone:true,template:`<div class="balance"><span>🪙</span><div><strong>{{ saldo }} / {{ tope }}</strong><small>monedas disponibles</small></div></div>`,styles:[`.balance{display:flex;gap:.7rem;align-items:center;background:#fff6d8;padding:.9rem 1rem;border-radius:14px}.balance>span{font-size:1.7rem}.balance strong,.balance small{display:block}.balance strong{color:#8a6913}.balance small{font-size:.75rem;color:#9d884e}`]})
export class CoinBalanceComponent { @Input() saldo = 0; @Input() tope = 100; }
