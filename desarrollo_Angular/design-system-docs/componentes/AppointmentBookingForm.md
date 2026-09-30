# AppointmentBookingForm

## Identificación
Nombre: Formulario de cita · Nombre técnico: `AppointmentBookingForm` · Categoría: Negocio / formularios · Tipo: flujo compuesto · Plataforma: **A** · Reutilización: Baja, web y móvil; el mismo flujo aparece en ambas.

## Responsabilidad
Capturar y enviar una solicitud de servicio para un vehículo en una sede, bahía y horario disponibles.

## Cuándo utilizarlo
En `cliente · 2 · agendar cita`.

## Cuándo NO utilizarlo
Para modificar una cita existente (variante `AppointmentForm` prellenada) o un calendario administrativo.

## Estructura (elementos internos)
`SelectField` servicio/sede/bahía; `DateTimeField`; motivo; resumen de selección y `FormActions`.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `customerId` | `string` | Sí | — | Cliente autenticado. |
| `vehicleId` | `string` | Sí | Vehículo activo solo si es unívoco | Vehículo para el servicio. |
| `services` | `ServiceOption[]` | Sí | `[]` | Servicios ofrecidos por sede. |
| `branches` | `BranchOption[]` | Sí | `[]` | Sedes habilitadas. |
| `availability` | `TimeSlot[]` | Sí | `[]` | Horarios/bahías libres vigentes. |
| `submitting` | `boolean` | No | `false` | Previene envío duplicado. |

## Eventos
`availabilityQuery({service,branch,date})`, `submit(AppointmentRequest)`, `cancel()`.

## Variantes
Crear nueva cita; móvil con el placeholder/imagen de servicio si ese asset final existe.

## Estados
Default, invalid/error, checking availability, unavailable/empty, submitting y success.

## Comportamiento
Seleccionar servicio filtra sedes/bahías; elegir fecha consulta disponibilidad; validar campos y evitar intervalos ya reservados; confirmación de backend precede al éxito. A falta de slots, sugerir otra fecha/sede sin borrar datos.

## Responsive
### WEB (desktop y tablet)
Campos agrupados como en Figma, grid de dos columnas cuando cabe.
### MÓVIL
Una columna; fecha/hora y servicio accesibles en controles nativos; conservar Guardar/Cancelar visibles.

## Accesibilidad
Labels persistentes, campos required, errores descriptivos, anillo de foco, región `aria-live` para disponibilidad; selección de fecha/hora por teclado.

## Componentes internos (hijos)
`FormField`, `SelectField`, `DateTimeField`, `FormActions`, `NotificationToast`.

## Dependencias
Servicio/API de clientes, vehículos, catálogo, sedes y disponibilidad; no provistos.

## Componentes relacionados
`AppointmentSummary`, `AppointmentActions`, `TrackingTimeline`.

## Pantallas donde aparece
Cliente · agendar cita y su variante móvil.

## Roles que lo utilizan
Cliente.

## Reutilización
Baja pero alto valor funcional; no duplicar para modificación.

## Consideraciones de implementación
El form dinámico de Angular cubre la captura principal con datos demo. Id de cliente/vehículo y disponibilidad son contratos por definir; no se hace una reserva real.
