# SelectField

## Identificación
Nombre: Selector · Nombre técnico: `SelectField` · Categoría: Formularios · Tipo: control básico · Plataforma: **A** · Reutilización: Alta, 15+ selectores estimados.

## Responsabilidad
Elegir un valor dentro de un conjunto finito conocido.

## Cuándo utilizarlo
Para servicio, sede, bahía, estado, repuesto, motivo o lote definidos por catálogo.

## Cuándo NO utilizarlo
Para búsqueda de miles de resultados o selección múltiple no contemplada en el wireframe.

## Estructura (elementos internos)
Label, opción inicial no elegible, lista nativa de opciones y hint/error cuando aplica.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `label` | `string` | Sí | — | Nombre persistente del campo. |
| `options` | `{value:string;label:string;disabled?:boolean}[]` | Sí | `[]` | Valores disponibles. |
| `value` | `string \| null` | No | `null` | Valor seleccionado. |
| `required` | `boolean` | No | `false` | Requiere selección no vacía. |
| `disabled` | `boolean` | No | `false` | Impide selección mientras falte contexto. |
| `error` | `string \| null` | No | `null` | Error enlazado al control. |

## Eventos
`selectionChange(value)`.

## Variantes
Select nativo; lista custom solo si la cantidad de opciones y el diseño lo justifican.

## Estados
Default, expanded nativo, selected, focus, error, disabled. Loading solo al cargar opciones remotas.

## Comportamiento
Opciones dependientes se vacían al cambiar sede/servicio; invalidar selección antigua; no esconder un valor seleccionado.

## Responsive
### WEB (desktop y tablet)
Ancho de campo alineado al formulario.
### MÓVIL
Control del sistema operativo, área táctil >=44 px y labels completas.

## Accesibilidad
`<label>`, `<select>` nativo, required y mensaje accesible; conservar acceso por teclado y orden DOM.

## Componentes internos (hijos)
`FormField` y option list.

## Dependencias
Catálogo de servicios/sedes/bahías del dominio.

## Componentes relacionados
`DateTimeField`, `FormField`, `AppointmentBookingForm`.

## Pantallas donde aparece
Cliente agendar/modificar/cancelar; mecánico diagnóstico/estado/repuesto; sede transferencia; logística aprobación.

## Roles que lo utilizan
Cliente, mecánico, jefe de sede y logística.

## Reutilización
Alta, con listas de opciones específicas de cada proceso.

## Consideraciones de implementación
La demo lee opciones del catálogo local. En producción revalidar disponibilidad con API justo antes de confirmar.
