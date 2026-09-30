# LotApprovalPanel

## Identificación
Nombre: Aprobación de lote · Nombre técnico: `LotApprovalPanel` · Categoría: Negocio / aprobación · Tipo: workflow compuesto · Plataforma: **A** · Reutilización: Baja, una etapa logística.

## Responsabilidad
Validar existencia, cantidad autorizada y destino antes de liberar repuestos.

## Cuándo utilizarlo
Al aprobar lote/salida después de inspeccionar el detalle de reabastecimiento.

## Cuándo NO utilizarlo
Para despacho de lote aprobado o revisión de stock general.

## Estructura (elementos internos)
Contexto de solicitud/lote, stock disponible, destino, cantidad, notas y acciones aprobar/rechazar con motivo.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `request` | `ReplenishmentRequest` | Sí | — | Solicitud bajo revisión. |
| `lots` | `Lot[]` | Sí | `[]` | Lotes asignables y cantidades. |
| `canApprove` | `boolean` | Sí | `false` | Permiso confirmado por API. |
| `approvedQuantity` | `number` | Sí | Cantidad solicitada | Cantidad a liberar. |
| `destination` | `Branch` | Sí | — | Sede receptora. |

## Eventos
`approve(payload)`, `reject({requestId,reason})`, `cancel()`.

## Variantes
Aprobar total; aprobación parcial si inventario permite; rechazo motivado.

## Estados
Default, validation error, submitting/disabled, approved, rejected, conflict/stock changed y server error.

## Comportamiento
Revalidar cantidad/lote en servidor justo al aprobar; bloquear doble-submit; preservar rechazo e informar conflicto de stock sin perder detalle.

## Responsive
### WEB (desktop y tablet)
Resumen a la izquierda, cantidad/destino y acciones en panel.
### MÓVIL
Resumen y form apilados; confirmación contextual; CTAs accesibles.

## Accesibilidad
Describir lote, sede y cantidad en CTA; motivo requerido al rechazar; estado de submit en live region; no utilizar color solo para autorización.

## Componentes internos (hijos)
`DetailSummary`, `FormField`, `SelectField`, `StatusBadge`, `FormActions`.

## Dependencias
Servicio transaccional de inventario, permisos y registro de auditoría.

## Componentes relacionados
`ReplenishmentQueue`, `DispatchList`, `TrackingTimeline`, `AuditLogTable`.

## Pantallas donde aparece
Logística fábrica · aprobar lote/salida.

## Roles que lo utilizan
Logística autorizado.

## Reutilización
Baja por paso del proceso; formulario/base reutiliza fields.

## Consideraciones de implementación
La demo captura lote/cantidad/destino y muestra una notificación, sin afectar existencias ni autorizar salida real.
