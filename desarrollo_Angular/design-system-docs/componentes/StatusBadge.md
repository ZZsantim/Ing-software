# StatusBadge

## Identificación
Nombre: Indicador de estado · Nombre técnico: `StatusBadge` · Categoría: Feedback · Tipo: componente visual · Plataforma: **A** · Reutilización: Alta, 30+ registros.

## Responsabilidad
Expresar el estado actual con texto y tono semántico.

## Cuándo utilizarlo
En citas, órdenes, stock, lotes, despachos, usuarios y eventos.

## Cuándo NO utilizarlo
Para alertas con mensaje extenso o para representar un botón.

## Estructura (elementos internos)
Punto decorativo opcional más texto visible del estado.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `status` | `string` | Sí | — | Estado visible legible. |
| `tone` | `success \| warning \| danger \| info \| neutral` | No | Derivado/neutral | Semántica visual, validar con dominio. |
| `size` | `sm \| md` | No | `sm` | Tamaño de badge. |

## Eventos
Ninguno si es estático. Si se filtra, convertir en botón y emitir selección.

## Variantes
Confirmada/completada; pendiente/en proceso; stock urgente/error; neutral/informativo.

## Estados
Default y focus/hover únicamente en variante interactiva; loading/disabled no aplica en etiqueta pasiva.

## Comportamiento
El texto nunca se sustituye por color; estados nuevos usan neutral hasta una asignación semántica revisada.

## Responsive
### WEB (desktop y tablet)
Pill compacto y legible en celdas.
### MÓVIL
Se permite wrap sin recortar etiqueta; altura de lectura mínima.

## Accesibilidad
Texto de estado presente en DOM; color no es señal única; contraste AA del texto sobre fondo; no asignar `role=status` en cada badge para evitar ruido.

## Componentes internos (hijos)
Indicador decorativo y label.

## Dependencias
Tokens success/warning/error/info/neutros.

## Componentes relacionados
`RecordList`, `AppointmentSummary`, `NotificationToast`.

## Pantallas donde aparece
Dashboard, detalle, listas y trazabilidad.

## Roles que lo utilizan
Todos.

## Reutilización
Alta; el prototipo implementa la misma clase Angular standalone.

## Consideraciones de implementación
No deducir reglas de negocio complejas con coincidencias de texto. En producción mapear enums tipados por dominio a tonos.
