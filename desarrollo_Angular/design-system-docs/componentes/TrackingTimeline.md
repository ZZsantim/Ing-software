# TrackingTimeline

## Identificación
Nombre: Cronología de seguimiento · Nombre técnico: `TrackingTimeline` · Categoría: Negocio / datos · Tipo: compuesto · Plataforma: **B** · Reutilización: Baja, dos procesos.

## Responsabilidad
Mostrar hitos ordenados de un servicio de taller o un movimiento logístico.

## Cuándo utilizarlo
Seguimiento de una cita/orden y trazabilidad de un lote hasta la sede.

## Cuándo NO utilizarlo
Para estados mutables aislados o listas que no representan secuencia temporal.

## Estructura (elementos internos)
Hitos con estado, fecha local, descripción, indicador y conexión visual entre etapas.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `items` | `TimelineItem[]` | Sí | `[]` | Eventos ordenados cronológicamente. |
| `currentStep` | `string \| null` | No | Derivado de eventos | Hito actual. |
| `timeZone` | `string` | Sí | Zona del proceso | Presentación local de fecha/hora. |

## Eventos
`selectEvent(eventId)` solo si existe detalle asociado.

## Variantes
Servicio del cliente; flujo de abastecimiento/JIT logístico.

## Estados
Default, loading, empty/no event, error de sincronización y completed.

## Comportamiento
Orden temporal real; evento no recibido no se muestra como terminado; diferencias entre hora estimada y confirmada etiquetadas.

## Responsive
### WEB (desktop y tablet)
Lista vertical con fecha alineada.
### MÓVIL
Rail vertical y texto apilado; alternativo a hitos horizontales ilegibles.

## Accesibilidad
`ol` semántica; número/nombre/estado/fecha en texto; icono es decorativo; estado actual distinguible por texto.

## Componentes internos (hijos)
Marcador, status textual, fecha y descripción.

## Dependencias
API eventos/ETA; zona horaria.

## Componentes relacionados
`AppointmentSummary`, `DispatchList`, `StatusBadge`.

## Pantallas donde aparece
Cliente · seguimiento; logística · trazabilidad/JIT.

## Roles que lo utilizan
Cliente y logística fábrica.

## Reutilización
Baja, comparte renderizador con contexto de dos dominios.

## Consideraciones de implementación
Figma muestra seguimiento/trazabilidad como pantallas; el orden, datos y tiempos del prototipo son ilustrativos.
