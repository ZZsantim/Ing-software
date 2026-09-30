# RoleCard

## Identificación
Nombre: Acceso por perfil · Nombre técnico: `RoleCard` · Categoría: Navegación / compuesto · Tipo: tarjeta enlazada · Plataforma: **A** · Reutilización: Baja, cinco accesos en el portal.

## Responsabilidad
Explicar una zona de trabajo y dirigir a su dashboard inicial.

## Cuándo utilizarlo
En el portal principal para seleccionar uno de los cinco perfiles.

## Cuándo NO utilizarlo
Para representar métricas, citas, solicitudes o acciones destructivas.

## Estructura (elementos internos)
Número o motivo visual, nombre de rol, descripción corta y llamada a la acción enlazada.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `label` | `string` | Sí | — | Nombre público del rol. |
| `description` | `string` | Sí | — | Resumen de su tarea. |
| `href` | `string` | Sí | — | Ruta del dashboard del rol. |
| `index` | `number` | Sí | — | Índice decorativo, no nombre accesible. |

## Eventos
Activación de enlace; comunica destino por navegación.

## Variantes
Card de portal escritorio; fila/tarjeta de ancho completo móvil.

## Estados
Default, hover, focus visible y active del enlace. Disabled solo si el perfil no es accesible (regla de servidor futura).

## Comportamiento
Toda la tarjeta es un único enlace, no enlaces anidados. Destino al dashboard asociado del catálogo de roles.

## Responsive
### WEB (desktop y tablet)
Grid de 3/2 columnas con área de click consistente.
### MÓVIL
Stack de una columna; tamaño táctil de 44 px mínimo.

## Accesibilidad
El nombre del enlace combina el rol con el propósito; no depende de la flecha o el número; outline y contraste AA.

## Componentes internos (hijos)
Título, descripción, flecha decorativa.

## Dependencias
`ROLE_OPTIONS`, Angular Router.

## Componentes relacionados
`Button`, `ApplicationShell`.

## Pantallas donde aparece
Portal principal (cinco instancias).

## Roles que lo utilizan
Visitante o usuario que elige perfil de demo.

## Reutilización
Baja, aunque una tarjeta por perfil conserva la misma estructura.

## Consideraciones de implementación
El código agrupa actualmente estas cinco instancias en el template de `ScreenPageComponent`; extraer a `RoleCardComponent` si el portal se convierte en un módulo de navegación independiente.
