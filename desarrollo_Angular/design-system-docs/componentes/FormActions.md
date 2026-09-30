# FormActions

## Identificación
Nombre: Acciones de formulario · Nombre técnico: `FormActions` · Categoría: Formularios / navegación · Tipo: compuesto · Plataforma: **B** · Reutilización: Alta, 15+ formularios.

## Responsabilidad
Mostrar la acción primaria y alternativas de guardar, limpiar, volver o cancelar.

## Cuándo utilizarlo
Al pie de un formulario para hacer explícito el resultado y el carácter destructivo.

## Cuándo NO utilizarlo
Para acciones independientes de una tabla o toolbar persistente.

## Estructura (elementos internos)
Botón primario, acciones secundarias y, solo si se confirma, link/acción destructiva.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `primaryLabel` | `string` | Sí | — | Resultado del envío. |
| `secondaryLabel` | `string \| null` | No | `null` | Acción no destructiva secundaria. |
| `pending` | `boolean` | No | `false` | Bloquea duplicado durante submit. |
| `disabled` | `boolean` | No | `false` | Formulario inválido/incompleto. |
| `destructive` | `boolean` | No | `false` | Presenta variante danger solo en cancelar/eliminar. |

## Eventos
`primaryAction()`, `secondaryAction()`, `cancel()`.

## Variantes
Botones alineados a derecha web; full-width mobile; variante destructiva separada.

## Estados
Default, disabled, loading; focus y active por Button.

## Comportamiento
Submit solo se ejecuta con formulario válido; limpiar revierte valores sin enviar; cancelar no simula eliminación.

## Responsive
### WEB (desktop y tablet)
Acciones agrupadas al final, primaria primera en orden de tab.
### MÓVIL
Targets de 44 px; columna o wrap cuando falte espacio.

## Accesibilidad
Tipos de botón correctos; etiquetas basadas en resultado; mantener orden DOM y de foco; indicador de pending con `aria-busy`.

## Componentes internos (hijos)
`Button`, feedback de validación.

## Dependencias
HTML form y estado de submit.

## Componentes relacionados
`Button`, `FormField`, `AppointmentActions`.

## Pantallas donde aparece
Agendar, modificar y cancelar; diagnóstico, evidencias, repuestos, cierre, transferencias y aprobación.

## Roles que lo utilizan
Cliente, mecánico, jefe de sede y logística.

## Reutilización
Alta; variante por intención, nunca un componente `GuardarButton`.

## Consideraciones de implementación
Las acciones del prototipo se presentan en `ScreenPageComponent`; conectar estados pending/reintento al futuro API.
