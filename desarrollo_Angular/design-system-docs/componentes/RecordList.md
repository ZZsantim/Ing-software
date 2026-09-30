# RecordList

## Identificación
Nombre: Lista de registros · Nombre técnico: `RecordList` · Categoría: Datos · Tipo: compuesto · Plataforma: **B** · Reutilización: Alta, 20+ pantallas estimadas.

## Responsabilidad
Presentar filas de dominio comparables y su estado/acción principal.

## Cuándo utilizarlo
Para citas, órdenes, existencias, solicitudes, lotes, usuarios y eventos.

## Cuándo NO utilizarlo
Para un resumen único (usar `DetailSummary`) o línea de tiempo ordenada por etapa.

## Estructura (elementos internos)
Lista semántica o tabla; columnas/atributos principales; `StatusBadge`; acción secundaria; caption de fecha.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `records` | `ScreenRecord[]` | Sí | `[]` | Registros ordenados. |
| `columns` | `ColumnDefinition[]` | Sí | Configuración de dominio | Encabezados, orden y etiquetas responsive. |
| `rowAction` | `ScreenAction \| null` | No | `null` | Acción permitida en la fila. |
| `loading` | `boolean` | No | `false` | Carga de origen. |
| `emptyMessage` | `string` | No | Copy contextual | Estado sin registros. |

## Eventos
`selectRecord(id)`, `rowAction(id, action)`, `sortChange(column)`.

## Variantes
Tabla desktop; lista de cards apilada en mobile; compacta para dashboard; historial de actividad.

## Estados
Default, hover/focus de acción, selected cuando aplica, loading, empty, error y disabled por permisos.

## Comportamiento
Orden por prioridad/fecha fijado y explicado; paginar si API supera el límite; no usar truncado para ocultar errores. Las acciones no alteran otro registro.

## Responsive
### WEB (desktop y tablet)
Filas con columnas coherentes, alineación numérica y sort anunciable.
### MÓVIL
Cards con campos en orden de prioridad; ocultar columnas auxiliares solo si el detalle sigue accesible.

## Accesibilidad
`<table>` con captions/headers para datos realmente tabulares; `<ul>` cuando sean cards; botones por fila con nombre incluyendo entidad/ID; `aria-sort` al ordenar.

## Componentes internos (hijos)
`SearchField`, `StatusBadge`, `Button`, `EmptyState`.

## Dependencias
Modelo de cada recurso y API futuro.

## Componentes relacionados
`DetailSummary`, `InventoryTable`, `DispatchList`, `AuditLogTable`.

## Pantallas donde aparece
Dashboards, calendario, inventario, solicitudes, despacho, usuarios y auditoría.

## Roles que lo utilizan
Los cinco roles según pantalla.

## Reutilización
Alta: una estructura configurable, no tabla nueva por recurso.

## Consideraciones de implementación
En demo se representa cada registro como fila responsive de lectura y prueba búsquedas/acciones; en producción utilizar `<table>` para los datos de comparación estricta.
