# ReplenishmentQueue

## Identificación
Nombre: Cola de reabastecimiento · Nombre técnico: `ReplenishmentQueue` · Categoría: Datos / negocio · Tipo: cola de revisión · Plataforma: **B** · Reutilización: Baja, logística.

## Responsabilidad
Priorizar solicitudes de sede y permitir abrir detalle según estado.

## Cuándo utilizarlo
En la vista de solicitudes de reabastecimiento global.

## Cuándo NO utilizarlo
Para transferencias internas o como traza de un envío ya liberado.

## Estructura (elementos internos)
Filtro/orden, solicitud/sku, destino, cantidad, prioridad, estado y acción de detalle.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `requests` | `ReplenishmentRequest[]` | Sí | `[]` | Cola autorizada. |
| `priorityFilter` | `Priority \| null` | No | `null` | Prioridad seleccionada. |
| `statuses` | `RequestStatus[]` | No | Todos | Estado. |
| `loading` | `boolean` | No | `false` | Carga. |

## Eventos
`open(requestId)`, `filterChange(filter)`, `sortChange(order)`.

## Variantes
Tabla de operaciones web; cards priorizadas en móvil.

## Estados
Default, loading, empty, no-results, request-on-hold y error.

## Comportamiento
Prioridad no sustituye FIFO/reglas acordadas; estados se actualizan desde servidor; las acciones de aprobación ocurren en detalle.

## Responsive
### WEB (desktop y tablet)
Tabla ordenable por prioridad/fecha y filtro persistente.
### MÓVIL
Tarjeta con prioridad, destino, producto y CTA de detalle.

## Accesibilidad
Prioridad en texto; sort y filtros etiquetados; acción incluye folio y no activa fila por click implícito.

## Componentes internos (hijos)
`SearchField`, `RecordList`, `StatusBadge`, `EmptyState`.

## Dependencias
API de solicitudes y política de prioridad de negocio.

## Componentes relacionados
`BranchInventoryTable`, `TransferRequestForm`, `LotApprovalPanel`.

## Pantallas donde aparece
Logística · solicitudes de reabastecimiento y dashboard global.

## Roles que lo utilizan
Logística fábrica.

## Reutilización
Baja, aunque sus filas comparten `RecordList`.

## Consideraciones de implementación
El catálogo demo presenta tres folios; no determina SLA ni prioridad de negocio definitiva.
