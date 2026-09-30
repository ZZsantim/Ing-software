# AppointmentSummary

## Identificación
Nombre: Resumen de cita · Nombre técnico: `AppointmentSummary` · Categoría: Negocio / datos · Tipo: compuesto · Plataforma: **A** · Reutilización: Baja, 4+ pantallas de cliente.

## Responsabilidad
Presentar servicio, vehículo, sede, bahía, fecha/hora y estado de una cita seleccionada.

## Cuándo utilizarlo
Dashboard de cliente, detalle de cita, modificar/cancelar y seguimiento.

## Cuándo NO utilizarlo
Para mostrar una lista de citas, editar el registro o describir hitos cronológicos.

## Estructura (elementos internos)
Id de cita, datos de vehículo/servicio, sede/bahía, fecha/hora, estado y metadata.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `appointment` | `Appointment` | Sí | — | Cita elegida por el cliente. |
| `compact` | `boolean` | No | `false` | Resumen compacto de dashboard. |
| `showVehicle` | `boolean` | No | `true` | Identifica vehículo cuando disponible. |
| `loading` | `boolean` | No | `false` | Carga de cita. |

## Eventos
`openDetails(appointmentId)`.

## Variantes
Card resumida de dashboard; detalle de dos columnas; móvil apilado.

## Estados
Default, loading, empty si no existe cita; error/not-found.

## Comportamiento
Ordenar por fecha de servicio próxima en dashboard; estado y hora se presentan sin exponer información a otros clientes.

## Responsive
### WEB (desktop y tablet)
Pares clave en grilla; acciones en su región propia.
### MÓVIL
Datos principales apilados, fecha/hora prominentemente visibles.

## Accesibilidad
Heading con referencia; lista de definiciones etiqueta/valor; fecha en formato legible; status textual.

## Componentes internos (hijos)
`StatusBadge`, `AppointmentActions` opcionales, `Button`.

## Dependencias
Servicio de citas y permisos del cliente autenticado.

## Componentes relacionados
`AppointmentBookingForm`, `TrackingTimeline`, `DetailSummary`.

## Pantallas donde aparece
Cliente · dashboard, detalle, modificar/cancelar y seguimiento.

## Roles que lo utilizan
Cliente.

## Reutilización
Baja/media, misma entidad y distintos niveles de detalle.

## Consideraciones de implementación
La demo usa registros semilla y un `DetailSummary` genérico; ids/demo deben sustituirse al conectar el servicio.
