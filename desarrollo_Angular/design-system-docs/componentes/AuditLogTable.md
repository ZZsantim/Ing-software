# AuditLogTable

## Identificación
Nombre: Registro de auditoría · Nombre técnico: `AuditLogTable` · Categoría: Administración / datos / feedback · Tipo: tabla de eventos · Plataforma: **B** · Reutilización: Baja, administrador.

## Responsabilidad
Rastrear actor, evento, recurso, fecha y resultado de acciones críticas.

## Cuándo utilizarlo
Para revisar cambios de permisos, acceso y exportación bajo `Auditoría y seguridad`.

## Cuándo NO utilizarlo
Para logs técnicos de servidor sin permisos de lectura para UI.

## Estructura (elementos internos)
Filtros por tipo/actor/fecha, timestamp local/UTC declarado, actor, acción, recurso, resultado y detalle seguro.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `events` | `AuditEvent[]` | Sí | `[]` | Eventos autorizados y paginados. |
| `timeZone` | `string` | Sí | Zona explícita | Presentación legible. |
| `filters` | `AuditFilter[]` | No | `[]` | Ventana y actor/evento. |
| `retentionNotice` | `string` | No | Política de seguridad | Periodo visible. |

## Eventos
`filterChange(filters)`, `openEvent(eventId)`, `export(query)`.

## Variantes
Tabla web; lista cronológica móvil; detalle de evento.

## Estados
Default, loading, empty, no results, error, readonly y export busy.

## Comportamiento
Append-only; fecha dentro de rango permitido; redacción de secretos/PII; exportación auditada; paginar eficientemente.

## Responsive
### WEB (desktop y tablet)
Tabla ordenada y filtros agrupados.
### MÓVIL
Cards cronológicas con actor/evento/fecha/resultado; filtros colapsables.

## Accesibilidad
Caption/headers; fechas con formato comprensible y valor machine-readable; filtros nombrados; tono/resultado en texto.

## Componentes internos (hijos)
`SearchField`, `RecordList`, `StatusBadge`, `DateTimeField`, `FormActions`.

## Dependencias
API de auditoría inmutable, políticas de seguridad y permisos.

## Componentes relacionados
`UserTable`, `PermissionMatrix`, `NotificationToast`.

## Pantallas donde aparece
Administrador · auditoría/seguridad.

## Roles que lo utilizan
Administrador de seguridad autorizado.

## Reutilización
Baja, fuente de datos sensible y read-only.

## Consideraciones de implementación
Los eventos demo son ficticios y no tienen integridad ni validez de auditoría.
