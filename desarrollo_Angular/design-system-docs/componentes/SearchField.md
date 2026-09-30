# SearchField

## Identificación
Nombre: Búsqueda de registros · Nombre técnico: `SearchField` · Categoría: Datos / formulario · Tipo: control compuesto · Plataforma: **A** · Reutilización: Alta, 10+ listados estimados.

## Responsabilidad
Filtrar localmente la vista de registros por texto coincidente.

## Cuándo utilizarlo
En inventario, usuarios, solicitudes, catálogo, auditoría y listados con volumen suficiente.

## Cuándo NO utilizarlo
En páginas con tres o menos datos y sin búsqueda del wireframe.

## Estructura (elementos internos)
Label visible o visually-hidden, input `type=search`, botón borrar opcional y estado de resultados.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `value` | `string` | No | `''` | Consulta actual. |
| `placeholder` | `string` | No | `Buscar` | Texto de ayuda, no etiqueta única. |
| `fields` | `string[]` | No | Campos indexados definidos | Llaves buscables. |
| `debounceMs` | `number` | No | `0` local | Delay solo para búsqueda remota. |

## Eventos
`queryChange(value)`, `clear()`.

## Variantes
Search inline de panel; full width móvil; search remota con loading si se introduce API.

## Estados
Default vacío, typed, focus, searching, zero results; error si falla backend.

## Comportamiento
Ignora acentos/case cuando corresponda; respeta filtros activos; limpiar restaura conjunto. No presenta estado vacío ambiguo.

## Responsive
### WEB (desktop y tablet)
Control compacto junto al título del panel.
### MÓVIL
Ancho completo y botón de borrar táctil.

## Accesibilidad
`type=search`, etiqueta "Buscar [entidad]" y live region para número de resultados si se requiere; no anunciar resultados por pulsación excesiva.

## Componentes internos (hijos)
Input y control clear opcional.

## Dependencias
Dataset o endpoint paginado.

## Componentes relacionados
`RecordList`, `EmptyState`, `DataTable`.

## Pantallas donde aparece
Inventario, despachos, solicitudes, usuarios, RBAC, sedes, catálogo y auditoría según volumen.

## Roles que lo utilizan
Jefe de sede, logística y administrador.

## Reutilización
Alta, con nombre de entidad configurable.

## Consideraciones de implementación
La demo implementa búsqueda en memoria sobre texto y estado en `ScreenPageComponent`; no se añade debounce innecesario a datos locales.
