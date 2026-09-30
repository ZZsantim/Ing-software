# AppointmentActions

## Identificación
Nombre: Acciones de cita · Nombre técnico: `AppointmentActions` · Categoría: Negocio / navegación · Tipo: grupo de acciones · Plataforma: **A** · Reutilización: Baja, 3+ estados/vistas.

## Responsabilidad
Ofrecer acciones disponibles para la cita elegida según estado, fecha y permisos.

## Cuándo utilizarlo
En detalle y dashboard de cliente junto al resumen de cita.

## Cuándo NO utilizarlo
Para todo tipo de acción de orden o para un proceso con política de aprobación logística.

## Estructura (elementos internos)
Links a modificar, cancelar y seguimiento; alternativa de reprogramar si cancelación cerrada.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `appointmentId` | `string` | Sí | — | Cita en contexto. |
| `status` | `AppointmentStatus` | Sí | — | Controla acciones elegibles. |
| `permissions` | `AppointmentPermission[]` | Sí | `[]` | Acciones autorizadas. |
| `busy` | `boolean` | No | `false` | Bloqueo durante mutation. |

## Eventos
`edit(id)`, `cancelRequest(id)`, `track(id)`.

## Variantes
Cita futura; en servicio; completada/cancelada con disponibilidad específica.

## Estados
Default; disabled/loading durante envío; selected no aplica; error al fallar mutación con reintento disponible.

## Comportamiento
No mostrar una acción irreversible sin confirmación de política; servidor es autoridad sobre permisos y ventana de cancelación.

## Responsive
### WEB (desktop y tablet)
Acciones alineadas al extremo del resumen.
### MÓVIL
Acciones en columna y targets de 44×44 px.

## Accesibilidad
Links para navegación, botones para mutación; nombres incorporan número de cita; foco vuelve al detalle con status actualizado.

## Componentes internos (hijos)
`Button`, `NotificationToast`, diálogo de confirmación solo si política lo requiere.

## Dependencias
API de citas, reglas de cancelación/modificación y autorización.

## Componentes relacionados
`AppointmentSummary`, `AppointmentBookingForm`, `FormActions`.

## Pantallas donde aparece
Cliente · detalle / modificar / cancelar.

## Roles que lo utilizan
Cliente.

## Reutilización
Baja; la lógica debe permanecer en servicio compartido, no replicada en botones.

## Consideraciones de implementación
El prototipo expone rutas ilustrativas y marca cambios como locales; su selección de cita es una simplificación de demo.
