# PerformanceChart

## Identificación
Nombre: Gráfico de rendimiento · Nombre técnico: `PerformanceChart` · Categoría: Dashboard / datos · Tipo: visualización de datos · Plataforma: **B** · Reutilización: Media, 5 dashboards/reportes.

## Responsabilidad
Mostrar tendencia de capacidad, tiempo de servicio y actividad temporal.

## Cuándo utilizarlo
En rendimiento del jefe de sede y gráficos explícitos del dashboard wireframe.

## Cuándo NO utilizarlo
Para un KPI puntual o cuando falten datos válidos.

## Estructura (elementos internos)
Título, periodo, ejes/serie, tooltip teclado/hover y resumen equivalente en texto/tabla.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `series` | `{label:string;value:number;unit:string}[]` | Sí | `[]` | Datos ordenados. |
| `period` | `string` | Sí | — | Rango temporal local. |
| `metric` | `string` | Sí | — | Métrica, unidad y sentido positivo. |
| `loading` | `boolean` | No | `false` | Estado asíncrono. |

## Eventos
`pointSelect(index)` solo si seleccionarlo tiene acción de negocio.

## Variantes
Barras/capacidad web; vista móvil reducida con resumen y control de desplazamiento si indispensable.

## Estados
Default; loading; empty; error; seleccionado solo si se interactúa.

## Comportamiento
Escala honesta con eje/unidad; describir periodos y valores; ocultar o indicar datos incompletos; inferir tendencias requiere regla documentada.

## Responsive
### WEB (desktop y tablet)
Gráfico a ancho disponible con leyenda no solapada.
### MÓVIL
Reflow a barras simples, o listado de puntos accesible; no depender de hover.

## Accesibilidad
Nombre/description, resumen textual o tabla equivalente, contraste de series >=3:1 y patrones/títulos además del color.

## Componentes internos (hijos)
Plot, ejes, leyenda y tabla alternativa.

## Dependencias
Datos agregados del backend; sin librería obligatoria en el wireframe.

## Componentes relacionados
`MetricCard`, `EmptyState`, `AlertPanel`.

## Pantallas donde aparece
Sede · rendimiento/diagramas; dashboard donde se muestre actividad.

## Roles que lo utilizan
Jefe de sede; otros roles solo si la capa de datos lo permite.

## Reutilización
Media y dependiente de métricas agregadas fiables.

## Consideraciones de implementación
La vista Angular usa barras CSS ilustrativas señaladas como demo; sustituirlas por datos reales y una alternativa tabular antes de producción.
