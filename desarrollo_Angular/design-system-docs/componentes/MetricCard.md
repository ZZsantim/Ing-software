# MetricCard

## Identificación
Nombre: Tarjeta de indicador · Nombre técnico: `MetricCard` · Categoría: Dashboard / datos · Tipo: básico · Plataforma: **A** · Reutilización: Media, 18+ indicadores.

## Responsabilidad
Resumir una métrica operacional con valor y contexto.

## Cuándo utilizarlo
En dashboard de cliente, mecánico, sede, logística y administrador; en rendimiento.

## Cuándo NO utilizarlo
Para sustituir una tabla de registros, explicar tendencia compleja o representar una acción primaria.

## Estructura (elementos internos)
Indicador decorativo, etiqueta, valor principal, caption/unidad y trend opcional con descripción.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `label` | `string` | Sí | — | Nombre conciso de medida. |
| `value` | `string \| number` | Sí | — | Resultado y unidad si aplica. |
| `caption` | `string` | Sí | — | Periodo, alcance o comparación. |
| `tone` | `primary \| success \| warning \| neutral` | No | `neutral` | Acento semántico. |
| `trend` | `{value:string; direction:string} \| null` | No | `null` | Variación accesible. |

## Eventos
Ninguno; la tarjeta solo es interactiva cuando abre un detalle definido.

## Variantes
Dashboard, resumen del portal y KPI de reporte.

## Estados
Default, loading skeleton si datos remotos, empty/error explícitos en contenedor. Hover/focus no aplica si pasiva.

## Comportamiento
El valor visible siempre acompaña etiqueta/caption; unidades y periodos no se infieren del número; no promediar datos en componente.

## Responsive
### WEB (desktop y tablet)
Grid de cuatro o dos columnas según ancho.
### MÓVIL
Dos columnas para indicadores cortos; uno por fila cuando el texto o cifra lo requiera.

## Accesibilidad
Etiqueta y valor en texto; tendencia anuncia dirección más valor; no usar tono como único significado.

## Componentes internos (hijos)
Label, cifra, caption; icono opcional.

## Dependencias
Tokens y modelo `ScreenMetric`.

## Componentes relacionados
`PerformanceChart`, `StatusBadge`, `EmptyState`.

## Pantallas donde aparece
Portal, cinco dashboards y rendimiento de sede.

## Roles que lo utilizan
Cliente, mecánico, jefe de sede, logística y administrador.

## Reutilización
Media, valores diferentes desde configuración.

## Consideraciones de implementación
Componente `MetricCardComponent` real; el color superior no reemplaza lectura del KPI.
