# RoleNavigation

## Identificación
Nombre: Navegación por perfil · Nombre técnico: `RoleNavigation` · Categoría: Navegación · Tipo: componente compuesto · Plataforma: **B** · Reutilización: Alta, 62 variantes responsive.

## Responsabilidad
Dar acceso ordenado a las seis pantallas del perfil actual y al portal principal.

## Cuándo utilizarlo
Cuando una persona cambia de tarea dentro de un mismo rol.

## Cuándo NO utilizarlo
Para acciones de formulario, acciones de registro o selector de permisos.

## Estructura (elementos internos)
Etiqueta de grupo, lista de seis links, marcador de orden/pantalla actual y link al portal.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `role` | `RoleId` | Sí | — | Perfil que selecciona el catálogo. |
| `items` | `ScreenDefinition[]` | Sí | `[]` | Screens que pertenecen al rol. |
| `activeScreenId` | `string` | Sí | — | Ruta activa para estilo y `aria-current`. |
| `expanded` | `boolean` | No | `false` | Control del drawer en móvil. |

## Eventos
`navigate(screenId)`, `close()`.

## Variantes
Sidebar permanente web; drawer móvil; portal con enlaces a cada dashboard.

## Estados
Default; activo/actual; foco; drawer expandido o colapsado; disabled solo si una ruta no está autorizada (caso backend futuro).

## Comportamiento
Lista derivada de `screensForRole`; orden ascendente según el flujo del wireframe. Toda ruta activa debe existir en el catálogo. No usa reglas RBAC locales.

## Responsive
### WEB (desktop y tablet)
Columna fija en escritorio; altura limitada al viewport, lista con scroll propio si fuese necesario.
### MÓVIL
Panel fuera del viewport hasta la activación del botón; tras navegar, vuelve a cerrarse.

## Accesibilidad
`nav` con nombre, enlaces HTML, foco visible, `aria-current="page"` en ruta activa, botón con nombre y `aria-expanded`.

## Componentes internos (hijos)
`Button`/link y `RoleCard` en acceso común.

## Dependencias
`ScreenDefinition`, Angular Router.

## Componentes relacionados
`ApplicationShell`, `PageHeader`, `Breadcrumbs`.

## Pantallas donde aparece
Todas las pantallas excepto la presentación sin shell.

## Roles que lo utilizan
Los cinco roles de trabajo.

## Reutilización
Alta: una navegación configurada por perfil; no seis barras duplicadas.

## Consideraciones de implementación
La demo representa los cinco perfiles desde un selector. La autorización de producción corresponde al servidor.
