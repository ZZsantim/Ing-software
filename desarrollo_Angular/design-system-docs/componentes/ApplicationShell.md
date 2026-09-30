# ApplicationShell

## Identificación
Nombre: Marco de aplicación · Nombre técnico: `ApplicationShell` · Categoría: Layout · Tipo: componente compuesto · Plataforma: **B** · Reutilización: Alta, en 62 variantes.

## Responsabilidad
Mantener estructura, contexto de perfil, navegación principal, contenido enrutado y feedback de la aplicación.

## Cuándo utilizarlo
En todas las pantallas bajo el portal autenticado o su modo de demostración. Proporciona un único marco estable entre procesos.

## Cuándo NO utilizarlo
Para una landing pública fuera del producto, diálogo modal o contenido sin navegación de taller.

## Estructura (elementos internos)
Enlace para saltar al contenido, marca, selector de rol, `RoleNavigation`, `TopBar`, `RouterOutlet`, `NotificationToast` y pie del espacio.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `activeRole` | `RoleId` | Sí | — | Perfil activo de la ruta. |
| `activeScreen` | `ScreenDefinition \| null` | Sí | — | Breadcrumb/título contextual. |
| `navigation` | `ScreenDefinition[]` | Sí | `[]` | Navegación del perfil, ordenada por flujo. |
| `notice` | `string \| null` | No | `null` | Mensaje accesible de confirmación. |
| `mobileMenuOpen` | `boolean` | No | `false` | Visibilidad del drawer en viewport estrecho. |

## Eventos
`roleChange(RoleId)`, `navigate(screenId)`, `toggleMenu()`, `dismissNotice()`.

## Variantes
Composición completa (rol operativo), composición de acceso común (portal) y drawer compacto.

## Estados
Default; menú móvil expandido/colapsado; enlace activo; aviso visible; ruta no disponible.

## Comportamiento
Datos de entrada: rol y screen de Router/catálogo. Datos de salida: cambios de ruta. Errores: id inválido muestra fallback, nunca un shell vacío. El toast se puede descartar y anuncia estado con `aria-live`. No bloquea una pantalla durante cargas locales.

## Responsive
### WEB (desktop y tablet)
Desktop: navegación lateral persistente. Tablet: conserva menú lateral hasta el breakpoint y pasa a drawer al estrecharse el viewport.
### MÓVIL
Drawer superpuesto con control mínimo 44×44 px, botón de cierre y overlay; la ruta activa queda anunciada.

## Accesibilidad
Landmarks `header/nav/main/footer`; enlace skip-to-content; orden de tabulación lógico; `aria-expanded` en drawer; foco visible; cierre del menú tras navegar; contraste de texto y controles AA.

## Componentes internos (hijos)
`RoleNavigation`, `TopBar`, `Breadcrumbs`, `NotificationToast`.

## Dependencias
Angular Router y `WorkshopStoreService` para avisos.

## Componentes relacionados
`PageHeader`, `Button`, `EmptyState`.

## Pantallas donde aparece
Portal y las 30 pantallas de los cinco perfiles.

## Roles que lo utilizan
Cliente, mecánico, jefe de sede, logística fábrica y administrador; portal común.

## Reutilización
Alta: un shell para todas las rutas de web y móvil.

## Consideraciones de implementación
Implementado como `AppShellComponent` standalone. Resolver rol a partir de la ruta; el selector de rol es solo un control de demo, no un sistema de autenticación/RBAC.
