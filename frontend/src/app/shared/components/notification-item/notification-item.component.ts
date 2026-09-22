import { Component, Input, Output, EventEmitter } from '@angular/core';
// Angular Material: MatSnackBarModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({selector:'app-notification-item',standalone:true,imports:[MatSnackBarModule],template:`<button class="item" (click)="seleccionada.emit()"><span>{{ icono }}</span><span class="copy"><b>{{ titulo }}</b><small>{{ detalle }}</small></span><small>{{ hora }}</small></button>`,styles:[`.item{width:100%;border:0;background:transparent;display:flex;gap:.7rem;text-align:left;padding:.65rem 0;cursor:pointer;color:#71868c}.item>span:first-child{font-size:1.2rem}.copy{flex:1}.copy b,.copy small{display:block}.copy b{color:#173b45}.copy small{font-size:.75rem;margin-top:.15rem}`]})
export class NotificationItemComponent { @Input() icono='🔔'; @Input() titulo='Nuevo aviso'; @Input() detalle='Tienes una actualización'; @Input() hora='Ahora'; @Output() seleccionada = new EventEmitter<void>(); }
