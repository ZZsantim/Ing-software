# PartsConsumptionForm

## Identificación
Nombre: Consumo de repuestos · Nombre técnico: `PartsConsumptionForm` · Categoría: Negocio / formularios · Tipo: formulario de inventario · Plataforma: **A** · Reutilización: Baja, órdenes mecánicas.

## Responsabilidad
Registrar la referencia y cantidad real de repuesto utilizada por una orden.

## Cuándo utilizarlo
Al actualizar una orden de trabajo durante reparación.

## Cuándo NO utilizarlo
Para reponer stock sin vincular a una orden o transferir entre sedes.

## Estructura (elementos internos)
Orden, selector de repuesto/lote, stock disponible, cantidad, nota y resumen de consumo.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `workOrderId` | `string` | Sí | — | Orden que se costea. |
| `parts` | `PartOption[]` | Sí | `[]` | Referencias disponibles en sede. |
| `quantity` | `number` | No | `1` | Unidades consumidas. |
| `lotId` | `string \| null` | No | `null` | Lote para trazabilidad. |
| `notes` | `string` | No | `''` | Observación adicional. |

## Eventos
`partChange(partId)`, `submitConsumption(payload)`.

## Variantes
Consumo de una referencia; múltiples partidas en una misma orden si la operación lo necesita.

## Estados
Default, loading stock, invalid, insufficient stock, saving, saved y error.

## Comportamiento
Validar cantidad positiva y disponible; descontar inventario en una transacción; no permitir stock negativo; servidor concilia reservas y concurrencia.

## Responsive
### WEB (desktop y tablet)
Selector y cantidad en línea; detalle de lotes expandible.
### MÓVIL
Una partida por bloque y teclado numérico para cantidad.

## Accesibilidad
Etiqueta expresa unidad (unidades/litros), stock asociado al campo, errores por cantidad, labels de lote descriptivos.

## Componentes internos (hijos)
`SelectField`, `FormField`, `StatusBadge`, `FormActions`.

## Dependencias
Inventario de la sede, unidad de medida y órdenes activas.

## Componentes relacionados
`BranchInventoryTable`, `ReplenishmentQueue`, `DiagnosticChecklist`.

## Pantallas donde aparece
Mecánico · consumo de repuestos.

## Roles que lo utilizan
Mecánico autorizado.

## Reutilización
Baja, con fuerte regla transaccional de stock.

## Consideraciones de implementación
Demo: guarda notificación local; no descuenta las cantidades de inventario.
