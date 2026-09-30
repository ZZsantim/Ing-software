# DispatchList

## Identificación
Nombre: Listado de despachos · Nombre técnico: `DispatchList` · Categoría: Datos / negocio · Tipo: listado de envíos · Plataforma: **B** · Reutilización: Baja, pantalla de despacho/logística.

## Responsabilidad
Dar visibilidad de los lotes liberados, transportista, sede receptora y ETA.

## Cuándo utilizarlo
Seguimiento de despacho desde logística de fábrica.

## Cuándo NO utilizarlo
Para decisión de liberar un lote o consultar cada etapa histórica de trazabilidad.

## Estructura (elementos internos)
Folio, sede, partidas/cantidades, transportista, fecha estimada y estado actual.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `dispatches` | `Dispatch[]` | Sí | `[]` | Envíos autorizados a consultar. |
| `statusFilter` | `DispatchStatus \| null` | No | `null` | Estado visible. |
| `sort` | `string` | No | Fecha de salida desc | Orden explícito. |
| `loading` | `boolean` | No | `false` | Carga de API. |

## Eventos
`open(dispatchId)`, `track(dispatchId)`, `filter(status)`.

## Variantes
Tabla web con ETA; cards móviles compactas con CTA de rastreo.

## Estados
Default, in-preparation, transit, delivered, delayed, loading, empty y error.

## Comportamiento
ETA usa zona horaria local; retraso se anuncia como texto/alerta; recibido no significa stock contabilizado hasta confirmación.

## Responsive
### WEB (desktop y tablet)
Columnas de folio, sede, referencias, transporte y ETA.
### MÓVIL
Sede/folio/estado y tiempo previsto se priorizan; demás datos en detalle accesible.

## Accesibilidad
Encabezados de tabla, status textual y fecha legible; CTA con folio completo.

## Componentes internos (hijos)
`RecordList`, `StatusBadge`, `SearchField`, `TrackingTimeline`.

## Dependencias
API de despacho y proveedor de transporte.

## Componentes relacionados
`LotApprovalPanel`, `ReplenishmentQueue`, `TrackingTimeline`.

## Pantallas donde aparece
Logística fábrica · despacho.

## Roles que lo utilizan
Logística; jefe de sede solo si está permitido.

## Reutilización
Baja; presentación general reutiliza componente de registros.

## Consideraciones de implementación
La lista demo usa tres estados ilustrativos; no se conecta a transportadora.
