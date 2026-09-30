# PageHeader

## Identificación
Nombre: Encabezado de pantalla · Nombre técnico: `PageHeader` · Categoría: Navegación / datos · Tipo: básico · Plataforma: **A** · Reutilización: Alta, 31 pantallas de perfil.

## Responsabilidad
Comunicar título, rol, nombre de la pantalla y resumen de la tarea.

## Cuándo utilizarlo
Como entrada visual principal de una página interna y como encabezado de contexto en el portal.

## Cuándo NO utilizarlo
Para repetir títulos dentro de cada panel de tabla o cada campo de un formulario.

## Estructura (elementos internos)
Etiqueta eyebrow, título h1, descripción breve y badge contextual opcional.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `title` | `string` | Sí | — | Tarea/pantalla en una frase. |
| `roleLabel` | `string` | Sí | — | Contexto de perfil. |
| `screenName` | `string` | Sí | — | Nombre legible del frame. |
| `description` | `string` | Sí | — | Propósito en lenguaje sencillo. |
| `status` | `string \| null` | No | `null` | Estado contextual no obligatorio. |

## Eventos
Ninguno; acciones del encabezado usan `Button` o navegación adyacente.

## Variantes
Portal hero con encabezado ampliado; encabezado de proceso operativo; variante compacta.

## Estados
Default y layout responsive. Loading no aplica salvo carga de datos futuros (mantener skeleton no anunciable hasta listo).

## Comportamiento
Un solo h1 por ruta; el texto procede del catálogo. Evitar descripciones duplicadas y headings largos sin wrap.

## Responsive
### WEB (desktop y tablet)
Título fluido con status alineado en la columna opuesta cuando hay espacio.
### MÓVIL
Status pasa debajo del texto y el h1 se limita a ancho disponible.

## Accesibilidad
Jerarquía H1 → H2; título no depende de color; el status usa `StatusBadge` con texto.

## Componentes internos (hijos)
Eyebrow, título, descripción, badge opcional.

## Dependencias
`ScreenDefinition`.

## Componentes relacionados
`Breadcrumbs`, `StatusBadge`, `ApplicationShell`.

## Pantallas donde aparece
30 pantallas de perfiles; portal usa la variante hero.

## Roles que lo utilizan
Todos.

## Reutilización
Alta: se alimenta de los metadatos tipados de cada screen.

## Consideraciones de implementación
Mantener title/description editorialmente breves; no copiar en la página nombre de rol si ya lo anuncia la barra global.
