# DateTimeField

## Identificación
Nombre: Fecha y hora · Nombre técnico: `DateTimeField` · Categoría: Formularios · Tipo: grupo de controles · Plataforma: **A** · Reutilización: Media, 6+ valores de agenda.

## Responsabilidad
Capturar fecha/hora local y comunicar disponibilidad asociada a sede y bahía.

## Cuándo utilizarlo
Agendar/modificar una cita o filtrar calendario y despacho.

## Cuándo NO utilizarlo
Para historial inmutable, timestamps de auditoría o una fecha de nacimiento.

## Estructura (elementos internos)
Uno o dos `FormField` nativos date/time, zona horaria de sede y hint de rango/disponibilidad.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `date` | `string \| null` | No | `null` | Fecha ISO local `YYYY-MM-DD`. |
| `time` | `string \| null` | No | `null` | Hora local `HH:mm`. |
| `min` / `max` | `string \| null` | No | `null` | Límites de agenda provistos por negocio. |
| `timezone` | `string` | Sí | — | Zona horaria de la sede. |
| `availability` | `loading \| available \| unavailable` | No | `available` | Resultado de consulta. |

## Eventos
`dateChange(date)`, `timeChange(time)`.

## Variantes
Grupo side-by-side web; stack móvil; solo fecha u hora para filtros.

## Estados
Default, focus, error, disabled, loading y unavailable. `selected` cuando se elige una franja.

## Comportamiento
No permitir fecha pasada o slots no disponibles; evitar conversiones UTC no pedidas. Mostrar siguiente paso si no hay horario. El servidor confirma colisiones atómicamente.

## Responsive
### WEB (desktop y tablet)
Controles alineados en un grupo y ancho claro.
### MÓVIL
Apilados o date/time nativos; teclado específico de la plataforma.

## Accesibilidad
Labels completos, formato esperado visible, error con sugerencia y `aria-invalid`; foco se mantiene cuando se actualiza disponibilidad.

## Componentes internos (hijos)
Dos `FormField`, `SelectField` de sede/bahía y mensaje de disponibilidad.

## Dependencias
Servicio de disponibilidad y zona horaria de sede en integración futura.

## Componentes relacionados
`AppointmentBookingForm`, `SiteBayCalendar`, `FormActions`.

## Pantallas donde aparece
Agendar/modificar cita, calendario/capacidad y despacho.

## Roles que lo utilizan
Cliente, jefe de sede y logística.

## Reutilización
Media; el grupo se comparte aunque cada pantalla capture distintas partes de la fecha/hora.

## Consideraciones de implementación
La demo usa `<input type=date/time>` nativo sin reservar slots ni definir zona real.
