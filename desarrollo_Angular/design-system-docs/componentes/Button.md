# Button

## Identificación
Nombre: Botón · Nombre técnico: `Button` · Categoría: Primitivos / UI Foundations · Tipo: interactivo básico · Plataforma: **A** · Reutilización: Alta, 60+ acciones estimadas.

## Responsabilidad
Iniciar una acción explícita sin alterar la semántica del control.

## Cuándo utilizarlo
Para guardar, aprobar, continuar, cancelar o actualizar estado.

## Cuándo NO utilizarlo
Para navegación: usar enlace/routerLink con aspecto de botón; para controles nativos de selección.

## Estructura (elementos internos)
Etiqueta verbal y opcional icono decorativo; indicador loading al iniciar una operación.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `variant` | `primary \| secondary \| danger \| quiet` | No | `primary` | Jerarquía visual semántica. |
| `size` | `sm \| md \| lg` | No | `md` | Altura/tamaño de control. |
| `disabled` | `boolean` | No | `false` | Impide la interacción. |
| `loading` | `boolean` | No | `false` | Previene envío repetido y anuncia actividad. |
| `type` | `button \| submit \| reset` | No | `button` | Semántica en formularios HTML. |
| `label` | `string` | Sí | — | Nombre visible y accesible de acción. |

## Eventos
`click` para acción local; `submit` se delega al formulario; enlace no emite click artificial para navegar.

## Variantes
Primary (sienna AA), secondary/outline, quiet y danger. Solo cambia la prioridad, no la responsabilidad.

## Estados
Default, hover, focus-visible, active, disabled y loading (si hay operación real).

## Comportamiento
Evitar doble activación durante loading; estado disabled nativo; no cambiar etiqueta sin aviso de resultado.

## Responsive
### WEB (desktop y tablet)
Ancho intrínseco, agrupación de acciones y separación clara entre primaria/secundaria.
### MÓVIL
44×44 px como mínimo; los botones de envío pueden ocupar todo el ancho.

## Accesibilidad
`<button>` para acciones, `<a>` para navegación; nombre concreto; foco visible; `aria-disabled` solo para custom control, `disabled` en botón nativo; `aria-busy` durante carga.

## Componentes internos (hijos)
Label, icono decorativo y spinner etiquetado si `loading`.

## Dependencias
Tokens `color.primary.dark`, error, foco y alturas.

## Componentes relacionados
`FormActions`, `AppointmentActions`, `NotificationToast`.

## Pantallas donde aparece
Formularios, navegación, aprobación, acciones de registros y portal.

## Roles que lo utilizan
Todos según permisos del backend.

## Reutilización
Alta; texto/ícono/destino son datos, no componentes derivados.

## Consideraciones de implementación
En el prototipo se aplica la clase `button` compartida desde la vista parametrizada; integrar con `ButtonComponent` standalone si varios equipos adoptan la biblioteca.
