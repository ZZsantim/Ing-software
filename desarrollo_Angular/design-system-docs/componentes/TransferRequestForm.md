# TransferRequestForm

## Identificación
Nombre: Solicitud de transferencia · Nombre técnico: `TransferRequestForm` · Categoría: Negocio / formularios · Tipo: flujo de stock entre sedes · Plataforma: **A** · Reutilización: Baja.

## Responsabilidad
Crear una solicitud para mover un artículo disponible desde sede origen hacia destino.

## Cuándo utilizarlo
Jefe de sede solicita apoyo de otra sede.

## Cuándo NO utilizarlo
Para una solicitud de fábrica a sede (usar reposición) ni como confirmación de un despacho ya aprobado.

## Estructura (elementos internos)
Referencia, origen/destino, existencias, cantidad, motivo, revisión y submit.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `sourceBranch` | `BranchOption` | Sí | Sede del perfil | Origen autorizado. |
| `branches` | `BranchOption[]` | Sí | `[]` | Destinos elegibles. |
| `part` | `PartOption \| null` | No | `null` | Referencia y unidad. |
| `quantity` | `number` | Sí | — | Cantidad positiva disponible. |
| `reason` | `string` | Sí | — | Justificación operacional. |

## Eventos
`sourceChange(branchId)`, `destinationChange(branchId)`, `submit(request)`.

## Variantes
Solicitud completa; borrador si backend contempla guardado diferido.

## Estados
Default, loading stock, invalid, destination unavailable, submitting, submitted, error.

## Comportamiento
Origen distinto al destino; comprobar stock reservable, compatibilidad y duplicado; descontar/reservar solo tras confirmación transaccional.

## Responsive
### WEB (desktop y tablet)
Origen/destino y referencia alineados, resumen previo a envío.
### MÓVIL
Campos apilados y stock/unidad visibles sin scroll horizontal.

## Accesibilidad
Selectores nominados origen/destino, mensaje de stock bajo asociado al campo, orden de foco lógico.

## Componentes internos (hijos)
`SelectField`, `FormField`, `FormActions`, resumen de solicitud.

## Dependencias
Inventario por sede y permisos de transferencia.

## Componentes relacionados
`BranchInventoryTable`, `ReplenishmentQueue`, `DispatchList`.

## Pantallas donde aparece
Jefe de sede · transferencia entre sedes.

## Roles que lo utilizan
Jefe de sede autorizado.

## Reutilización
Baja, proceso diferente a abastecimiento desde fábrica.

## Consideraciones de implementación
La demo acepta los campos sin reserva ni movimiento real entre sedes.
