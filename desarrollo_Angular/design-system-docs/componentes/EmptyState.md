# EmptyState

## Identificación
Nombre: Estado vacío · Nombre técnico: `EmptyState` · Categoría: Feedback · Tipo: componente básico · Plataforma: **A** · Reutilización: Media, listados y fallos de filtro.

## Responsabilidad
Explicar qué falta y orientar la próxima acción cuando no hay resultados.

## Cuándo utilizarlo
Búsqueda sin coincidencias, listado nuevo o ausencia legítima de datos.

## Cuándo NO utilizarlo
Para ocultar error de servidor como “sin datos” o para indicador de carga.

## Estructura (elementos internos)
Ilustración/icono decorativo, título, explicación y acción relevante opcional.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `title` | `string` | Sí | — | Condición simple. |
| `description` | `string` | Sí | — | Aclara si es filtro, primera visita o falta de datos. |
| `action` | `ScreenAction \| null` | No | `null` | Próximo paso seguro. |
| `type` | `empty \| no-results \| unavailable` | No | `empty` | Diferencia semántica; `error` separado. |

## Eventos
`action()` si se presenta CTA.

## Variantes
Empty list; no matches; no data yet; unavailable/error (mensaje y reintento).

## Estados
Empty, no-results, unavailable; hover/focus de CTA. Loading no aplica.

## Comportamiento
Preservar filtros al volver de una acción; mostrar botón limpiar filtro solo cuando corresponde; error no se maquilla como ausencia.

## Responsive
### WEB (desktop y tablet)
Panel horizontal/centrado según densidad de contexto.
### MÓVIL
Texto centrado breve y CTA ancho completo.

## Accesibilidad
Título visible, región ordenada; icono decorativo oculto; error anunciado con role alert solo cuando es urgente.

## Componentes internos (hijos)
Texto descriptivo, ilustración opcional, botón.

## Dependencias
Estado real de datos y filtro.

## Componentes relacionados
`SearchField`, `RecordList`, `NotificationToast`.

## Pantallas donde aparece
Listados vacíos/filtro sin resultados; estado inferido por el wireframe.

## Roles que lo utilizan
Los perfiles con registros.

## Reutilización
Media; diferenciar los tres motivos semánticos.

## Consideraciones de implementación
La demo incorpora “No hay coincidencias” al filtrar, sin inventar una pantalla vacía adicional.
