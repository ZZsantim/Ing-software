# BranchInventoryTable

## Identificación
Nombre: Inventario de sede · Nombre técnico: `BranchInventoryTable` · Categoría: Datos / negocio · Tipo: listado tabular · Plataforma: **B** · Reutilización: Media, sede y administración/catálogo.

## Responsabilidad
Exponer referencia, existencias, mínimo, ubicación y estado de stock.

## Cuándo utilizarlo
Consulta del inventario de sede y revisión de catálogo/logística.

## Cuándo NO utilizarlo
Para efectuar consumo sin orden, lote en camino o una aprobación de transferencia.

## Estructura (elementos internos)
Selector de sede si permitido; buscador; tabla de referencia, stock, mínimo, ubicación y estado; acción pedir stock.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `branchId` | `string` | Sí | Sede del perfil | Contexto autorizado. |
| `items` | `InventoryItem[]` | Sí | `[]` | Filas de inventario. |
| `filters` | `InventoryFilter[]` | No | `[]` | Buscar, categoría/estado. |
| `loading` | `boolean` | No | `false` | Carga server-side. |
| `canRequest` | `boolean` | No | Permiso derivado | Habilita solicitud, no la concede. |

## Eventos
`search(query)`, `sort(column)`, `requestReplenishment(itemId)`.

## Variantes
Tabla web; cards mobile; vista resumen de catálogo.

## Estados
Default, low-stock, out-of-stock, loading, empty, error, selected filter y readonly.

## Comportamiento
Unidades claramente indicadas; ordenar/filter server-side si volumen; umbral de stock procede del backend; acción de reabastecimiento preserva artículo/sede.

## Responsive
### WEB (desktop y tablet)
Columnas alineadas para SKU, nombre, disponible/mínimo y ubicación.
### MÓVIL
Cards con nombre/estado/stock prioritarios; no ocultar unidad/min/max.

## Accesibilidad
Tabla con caption y headers; stock bajo indicado por texto; filtros labels; acción nombra el repuesto.

## Componentes internos (hijos)
`SearchField`, `RecordList`, `StatusBadge`, `Button`, `EmptyState`.

## Dependencias
Servicio de inventario, sede, unidad y política de mínimos.

## Componentes relacionados
`PartsConsumptionForm`, `TransferRequestForm`, `ReplenishmentQueue`.

## Pantallas donde aparece
Jefe de sede · inventario; administrador · catálogo/dashboards logísticos afines.

## Roles que lo utilizan
Jefe de sede, logística y administrador según autorización.

## Reutilización
Media; una estructura común con datos por sede y global.

## Consideraciones de implementación
La demo muestra tres referencias ilustrativas; solicita reabastecimiento mediante enlace a logística.
