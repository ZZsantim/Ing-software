# BranchBayManager

## Identificación
Nombre: Configuración de sedes y bahías · Nombre técnico: `BranchBayManager` · Categoría: Administración / negocio · Tipo: editor de capacidad · Plataforma: **B** · Reutilización: Baja.

## Responsabilidad
Mantener sedes, bahías, servicios admitidos y capacidad/horario de atención.

## Cuándo utilizarlo
En el catálogo administrativo de sedes y bahías y lectura de capacidad.

## Cuándo NO utilizarlo
Para reservar una franja de cita ni consultar únicamente disponibilidad del día.

## Estructura (elementos internos)
Sede, dirección/estado, relación de bahías, servicio compatible, horario, límite de reservas.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `branches` | `Branch[]` | Sí | `[]` | Sedes del sistema. |
| `selectedBranchId` | `string \| null` | No | `null` | Contexto seleccionado. |
| `bays` | `Bay[]` | Sí | `[]` | Capacidad configurada. |
| `readonly` | `boolean` | No | `true` | Solo consulta si falta permiso. |

## Eventos
`branchSelect(id)`, `saveBranch(branch)`, `saveBay(bay)`, `deactivate(id)`.

## Variantes
Resumen de sede; detalle de bahías; calendario de capacidad asociado.

## Estados
Default; loading; empty; invalid configuration; disabled por sede inactiva; conflict si cita existe.

## Comportamiento
Evitar bahía duplicada/servicio incompatible; no borrar sede referenciada; desactivación auditada; recálculo de capacidad notificado.

## Responsive
### WEB (desktop y tablet)
Lista de sedes y panel de bahías/edit form.
### MÓVIL
Detalle en navegación apilada; tabla de bahías se convierte en cards.

## Accesibilidad
Control de selección claramente nombrado, labels de horarios/estado, no depender del color para marcar sede inactiva.

## Componentes internos (hijos)
`RecordList`, `FormField`, `SelectField`, `DateTimeField`, `StatusBadge`.

## Dependencias
Servicio de configuración, calendario y agenda; permiso administrador.

## Componentes relacionados
`AppointmentBookingForm`, `SiteBayCalendar`, `UserTable`.

## Pantallas donde aparece
Administrador · sedes y bahías; jefe de sede · calendario y capacidad.

## Roles que lo utilizan
Administrador edita; jefe de sede consulta.

## Reutilización
Baja para administrar, media como fuente compartida de datos.

## Consideraciones de implementación
La demo lista tres sedes ilustrativas y no persiste capacidad.
