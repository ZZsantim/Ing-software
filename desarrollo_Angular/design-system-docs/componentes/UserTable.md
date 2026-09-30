# UserTable

## Identificación
Nombre: Gestión de usuarios · Nombre técnico: `UserTable` · Categoría: Administración / datos · Tipo: tabla de identidad · Plataforma: **B** · Reutilización: Baja, flujo de administrador.

## Responsabilidad
Consultar usuarios y su contacto, rol, sede y estado de acceso.

## Cuándo utilizarlo
En administración de usuarios y accesos.

## Cuándo NO utilizarlo
Para editar perfil personal o mostrar registro de eventos históricos.

## Estructura (elementos internos)
Búsqueda/filtro; nombre/contacto; rol; sede; estado; acción ver/editar; selector de página.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `users` | `UserSummary[]` | Sí | `[]` | Identidades visibles al admin. |
| `filters` | `UserFilter[]` | No | `[]` | Rol, sede, estado. |
| `actions` | `UserAction[]` | Sí | — | Editar, invitar o suspender autorizadas. |
| `loading` | `boolean` | No | `false` | Consulta remota. |

## Eventos
`search(query)`, `filterChange(filter)`, `edit(userId)`, `action(userId,action)`.

## Variantes
Tabla web; lista móvil; lista de usuarios recientes del dashboard.

## Estados
Default, selected filters, loading, empty, no-results, inactive/locked y error.

## Comportamiento
Paginación backend al crecer; nunca mostrar secretos/tokens; suspender requiere permiso, motivo y confirmación; editar rol auditado.

## Responsive
### WEB (desktop y tablet)
Columnas separadas por atributo y ordenamiento.
### MÓVIL
Tarjeta con persona, rol y estado; acciones en menú accesible.

## Accesibilidad
Nombre/email enlazados, rol/estado como texto; caption/headers; no depender solo de avatar/color; acciones identifican cuenta.

## Componentes internos (hijos)
`RecordList`, `SearchField`, `StatusBadge`, `FormActions`.

## Dependencias
Proveedor de identidad, RBAC y políticas de privacidad.

## Componentes relacionados
`PermissionMatrix`, `AuditLogTable`, `BranchBayManager`.

## Pantallas donde aparece
Administrador · usuarios y dashboard general.

## Roles que lo utilizan
Administrador autenticado.

## Reutilización
Baja, pero comparte primitive de listado.

## Consideraciones de implementación
Los usuarios del prototipo son alias ficticios `.demo`; no se implementa alta o identidad real.
