# DetailSummary

## Identificación
Nombre: Resumen de detalle · Nombre técnico: `DetailSummary` · Categoría: Datos / negocio · Tipo: compuesto · Plataforma: **B** · Reutilización: Media, 5+ detalles.

## Responsabilidad
Agrupar atributos y estado de un recurso para tomar una acción con contexto.

## Cuándo utilizarlo
En detalle de cita, orden de trabajo y solicitud de reabastecimiento.

## Cuándo NO utilizarlo
Para edición de varios datos, historial temporal o conjunto tabular.

## Estructura (elementos internos)
Identificador/título, estado, pares de etiqueta/valor, metadata y grupo de acciones contextual.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `title` | `string` | Sí | — | Recurso y referencia. |
| `fields` | `{label:string;value:string}[]` | Sí | `[]` | Datos legibles del resumen. |
| `status` | `string` | Sí | — | Estado actual del recurso. |
| `actions` | `ScreenAction[]` | No | `[]` | Transiciones permitidas por backend. |

## Eventos
`action(actionId, resourceId)`.

## Variantes
Cita de cliente; orden de taller; solicitud logística.

## Estados
Default; loading; not-found/error de carga; acciones disabled por transición no permitida.

## Comportamiento
Mantener identificador, estado y contexto esencial visibles; no asumir que todos los roles pueden mutar el recurso.

## Responsive
### WEB (desktop y tablet)
Campos en grilla de dos columnas; acciones separadas.
### MÓVIL
Pares etiqueta/valor apilados, orden lógico y botones full-width según prioridad.

## Accesibilidad
Título jerárquico; pares agrupados como definition list; estado textual; enlaces y acciones nombrados por el recurso.

## Componentes internos (hijos)
`StatusBadge`, definition list, `AppointmentActions`/acciones apropiadas.

## Dependencias
Recurso y permisos de la persona.

## Componentes relacionados
`AppointmentSummary`, `AppointmentActions`, detalle de orden/solicitud.

## Pantallas donde aparece
Cliente · detalle; Mecánico · orden de trabajo; Logística · detalle de solicitud.

## Roles que lo utilizan
Cliente, mecánico y logística.

## Reutilización
Media por sus variantes de datos de dominio.

## Consideraciones de implementación
Separar el componente neutro de las reglas específicas del flujo; la demo presenta datos semilla no persistidos.
