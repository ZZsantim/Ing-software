# FormField

## Identificación
Nombre: Campo de formulario · Nombre técnico: `FormField` · Categoría: Formularios / básico · Tipo: wrapper compuesto · Plataforma: **A** · Reutilización: Alta, 30+ campos.

## Responsabilidad
Relacionar etiqueta, control de entrada, ayuda y estado de validación.

## Cuándo utilizarlo
En formularios de reserva, usuario, diagnóstico, sede y operaciones de inventario.

## Cuándo NO utilizarlo
Para una celda editable de hoja de cálculo o para reemplazar un control HTML nativo.

## Estructura (elementos internos)
`label[for]`, control con `id`, hint y error enlazados; indicador de obligatoriedad.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `id` | `string` | Sí | — | Clave DOM única. |
| `label` | `string` | Sí | — | Etiqueta visible. |
| `type` | `FieldType` | Sí | `text` | Tipo del control nativo. |
| `required` | `boolean` | No | `false` | Validación de presencia. |
| `value` | `string` | No | `''` | Valor controlado. |
| `hint` | `string \| null` | No | `null` | Ayuda que no duplica la etiqueta. |
| `error` | `string \| null` | No | `null` | Mensaje de validación accionable. |

## Eventos
`valueChange(value)`, `blur`, `submit` del formulario padre.

## Variantes
Texto, email, número, textarea y upload (este último compone `FileUpload`).

## Estados
Default, focus, invalid, disabled, readonly. Loading no aplica al campo individual.

## Comportamiento
El control mantiene su valor ante validación; error se limpia al corregirlo; trim y validación de negocio se definen en servicio. Campos requeridos usan restricción HTML más validación de servidor en producción.

## Responsive
### WEB (desktop y tablet)
Grilla de dos columnas si el formulario lo permite; textarea ocupa ancho completo.
### MÓVIL
Una columna; control de 44 px mínimo; textarea con expansión vertical.

## Accesibilidad
Etiqueta asociada, `aria-describedby` para hint/error, `aria-invalid`, required nativo y foco visible; mostrar texto de error además del color.

## Componentes internos (hijos)
Label, control HTML, hint y mensaje de error.

## Dependencias
Tokens de formulario, validadores tipados y Forms API si se adopta.

## Componentes relacionados
`SelectField`, `DateTimeField`, `FileUpload`, `FormActions`.

## Pantallas donde aparece
Agendar/modificar/cancelar cita; diagnóstico, repuestos y cierre; transferencias; aprobación de lote.

## Roles que lo utilizan
Cliente, mecánico, jefe de sede, logística.

## Reutilización
Alta; props diferencian control y validación.

## Consideraciones de implementación
La implementación demo configura fields desde `ScreenDefinition` y genera label/controles de forma tipada. Usar `FormField` como wrapper si se requieren errores o reglas de negocio más ricas.
