# NotificationToast

## Identificación
Nombre: Aviso no bloqueante · Nombre técnico: `NotificationToast` · Categoría: Feedback · Tipo: live region · Plataforma: **B** · Reutilización: Media, operaciones con feedback.

## Responsabilidad
Confirmar el resultado de una acción breve y permitir continuar en contexto.

## Cuándo utilizarlo
Guardado, cambio local de estado, exportación iniciada o error recuperable.

## Cuándo NO utilizarlo
Para errores con resolución compleja, confirmación destructiva o estado crítico persistente.

## Estructura (elementos internos)
Icono/tono, texto claro, acción/cierre accesible y región viva.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `message` | `string` | Sí | — | Resultado concreto de la acción. |
| `tone` | `success \| info \| warning \| error` | No | `success` | Semántica. |
| `durationMs` | `number \| null` | No | `null` persistente | Autocierre solo cuando no perjudica lectura. |
| `dismissible` | `boolean` | No | `true` | Permite cierre manual. |

## Eventos
`dismiss()`, `action()` cuando hay CTA.

## Variantes
Toast discreto; snackbar con acción; error persistente.

## Estados
Visible, dismissed, loading no aplica. No anunciar la misma alerta de forma duplicada.

## Comportamiento
No bloquear, no descartar formularios; no autocerrar error antes de leerlo; apilar con límite razonable.

## Responsive
### WEB (desktop y tablet)
Anclaje inferior/derecho fuera del contenido principal.
### MÓVIL
Ancho disponible con margen de safe area; botón táctil 44×44 px.

## Accesibilidad
`role=status`/`aria-live=polite` para confirmación; `role=alert` solo para error urgente; botón nombrado; foco no se roba por un mensaje de éxito.

## Componentes internos (hijos)
Texto, `Button` de cierre y acción opcional.

## Dependencias
Evento resultado del dominio.

## Componentes relacionados
`FormActions`, `EmptyState`, `StatusBadge`.

## Pantallas donde aparece
Todas las operaciones de formulario/lista que requieren confirmación; inferido.

## Roles que lo utilizan
Todos.

## Reutilización
Media hasta incorporar resultados de API.

## Consideraciones de implementación
Servicio local `notice` vive en memoria y usa `role=status`; errores de backend futuros deben incluir recuperación y registro, no éxito por defecto.
