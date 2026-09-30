# PermissionMatrix

## Identificación
Nombre: Matriz de permisos por rol · Nombre técnico: `PermissionMatrix` · Categoría: Administración / datos · Tipo: matriz de acceso · Plataforma: **B** · Reutilización: Baja, administración RBAC.

## Responsabilidad
Comparar permisos que asigna cada rol a recursos y acciones.

## Cuándo utilizarlo
En roles y permisos RBAC para revisar configuración antes de publicarla.

## Cuándo NO utilizarlo
Para conceder capacidades desde la interfaz cliente o reemplazar política server-side.

## Estructura (elementos internos)
Nombre de rol, agrupación de recursos, columnas ver/crear/actualizar/aprobar y controles permitidos.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `roles` | `Role[]` | Sí | `[]` | Roles en el alcance del admin. |
| `permissions` | `PermissionMatrixValue[]` | Sí | `[]` | Matriz actual. |
| `readonly` | `boolean` | No | `true` | Vista de consulta por defecto. |
| `pendingChanges` | `boolean` | No | `false` | Estado dirty de edición. |

## Eventos
`permissionChange({roleId,resource,action,allowed})`, `save()`, `discard()`.

## Variantes
Matriz comparativa web; tarjetas por recurso móvil con acciones colapsables.

## Estados
Readonly, selected/checked, disabled por política inmutable, dirty/pending, saving, error y empty.

## Comportamiento
Deny-by-default; mostrar herencia y dependencias si existen; aplicar cambios atómicamente tras reautenticación/confirmación; log de auditoría obligatorio.

## Responsive
### WEB (desktop y tablet)
Tabla con primera columna fija y scroll accesible cuando sea necesario.
### MÓVIL
Acordeón por recurso y lectura permiso-por-permiso; no encoger matriz de 20 columnas.

## Accesibilidad
Headers de tabla con scope, checkbox con rol+recurso+acción en nombre, estado de herencia explicado, teclado y foco persistente tras cambio.

## Componentes internos (hijos)
`RecordList`/matriz tabular, `FormField`, `FormActions`, aviso de cambios.

## Dependencias
Autorización RBAC de servidor, catálogo de recursos y versionado.

## Componentes relacionados
`UserTable`, `AuditLogTable`, `ApplicationShell`.

## Pantallas donde aparece
Administrador · roles y permisos.

## Roles que lo utilizan
Administrador con privilegio RBAC.

## Reutilización
Baja, alta criticidad y fuerte seguridad.

## Consideraciones de implementación
El catálogo demo muestra perfiles y una fila de permisos resumida; no configura accesos ni funciona como RBAC real.
