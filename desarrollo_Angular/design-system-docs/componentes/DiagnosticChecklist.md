# DiagnosticChecklist

## Identificación
Nombre: Lista de diagnóstico · Nombre técnico: `DiagnosticChecklist` · Categoría: Negocio / formularios · Tipo: formulario funcional · Plataforma: **A** · Reutilización: Baja, pantalla de diagnóstico mecánico.

## Responsabilidad
Capturar criterios inspeccionables, resultado por criterio y hallazgos vinculados a una orden.

## Cuándo utilizarlo
En diagnóstico/checklist de la orden activa.

## Cuándo NO utilizarlo
Para una lista genérica de tareas, permisos o checkboxes sin resultado mecánico.

## Estructura (elementos internos)
Orden y vehículo; ítem inspeccionado; opciones correcto/atención/no aplica; nota; resumen y acción guardar.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `workOrderId` | `string` | Sí | — | Orden de contexto. |
| `items` | `ChecklistItem[]` | Sí | Catálogo asignado | Criterios aplicables a servicio. |
| `answers` | `Record<string,Result>` | No | `{}` | Respuestas previas. |
| `notes` | `string` | No | `''` | Hallazgos adicionales. |
| `readonly` | `boolean` | No | `false` | Presentación finalizada. |

## Eventos
`answerChange(itemId,result)`, `save(diagnostic)`.

## Variantes
Inspección editable; resultados completados de solo lectura.

## Estados
Default; incomplete/invalid; saving; saved; readonly; error; empty si no hay criterios de servicio.

## Comportamiento
Validar respuesta para cada ítem obligatorio; “no aplica” requiere habilitación del catálogo; guardar versión y autor; errores conservan capturas.

## Responsive
### WEB (desktop y tablet)
Secciones agrupadas por sistema del vehículo.
### MÓVIL
Un ítem por bloque, opciones apiladas y target táctil 44 px.

## Accesibilidad
`fieldset/legend` por pregunta; estado y criterio en texto; error inline asociado; keyboard radio native.

## Componentes internos (hijos)
`FormField`, `SelectField`, `StatusBadge`, `FormActions`.

## Dependencias
Orden y checklist por servicio; API mecánica.

## Componentes relacionados
`EvidenceUpload`, `PartsConsumptionForm`, `AppointmentSummary`.

## Pantallas donde aparece
Mecánico · diagnóstico/checklist.

## Roles que lo utilizan
Mecánico asignado y roles de consulta autorizados.

## Reutilización
Baja; la variante depende del tipo de mantenimiento.

## Consideraciones de implementación
La demo usa selects estáticos para tres inspecciones; adaptar el catálogo por servicio antes de producción.
