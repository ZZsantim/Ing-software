# Breadcrumbs

## Identificación
Nombre: Ruta de navegación · Nombre técnico: `Breadcrumbs` · Categoría: Navegación · Tipo: básico · Plataforma: **B** · Reutilización: Alta, 31 pantallas de perfil.

## Responsabilidad
Mostrar dónde se encuentra la persona y permitir volver al portal o a un nivel superior definido.

## Cuándo utilizarlo
En rutas operativas con contexto de perfil y nombre de pantalla.

## Cuándo NO utilizarlo
Como reemplazo de la navegación principal o para una cadena de botones sin jerarquía.

## Estructura (elementos internos)
Lista ordenada de enlaces/segmentos y separadores decorativos.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `items` | `{ label: string; href?: string }[]` | Sí | `[]` | Ruta desde portal a pantalla. |
| `maxVisible` | `number` | No | `3` | Máximo de segmentos completos en un viewport reducido. |

## Eventos
`navigate(href)` delegado al router.

## Variantes
Completo web; colapsado móvil con portal y título actual preservados.

## Estados
Default; último segmento actual no enlazado; foco en segmento con destino.

## Comportamiento
No crear rutas padre que no existen; separar segmentos con texto/icono decorativo; route activa no responde a click.

## Responsive
### WEB (desktop y tablet)
Muestra portal → perfil → screen con truncado solo para etiquetas extensas.
### MÓVIL
Oculta/cierra segmento intermedio no esencial y mantiene portal y página actual.

## Accesibilidad
`nav aria-label="Ruta de navegación"`; indicar `aria-current="page"` al último; separador oculto a AT; links con nombres comprensibles.

## Componentes internos (hijos)
Link, separador.

## Dependencias
Angular Router y nombres del catálogo.

## Componentes relacionados
`RoleNavigation`, `PageHeader`.

## Pantallas donde aparece
Todas las pantallas bajo shell.

## Roles que lo utilizan
Todos.

## Reutilización
Alta: los segmentos se derivan de rol/ruta.

## Consideraciones de implementación
La versión implementada muestra portal, perfil y screen en desktop, y permite wrap en móvil; el colapso más avanzado puede añadirse sin cambiar los datos.
