# EvidenceUpload

## Identificación
Nombre: Evidencia de taller · Nombre técnico: `EvidenceUpload` · Categoría: Negocio / formularios · Tipo: compuesto · Plataforma: **B** · Reutilización: Baja, evidencia mecánica.

## Responsabilidad
Asociar una o más imágenes al vehículo, orden y paso de la reparación.

## Cuándo utilizarlo
En evidencia/fotos de ingreso, diagnóstico o cierre.

## Cuándo NO utilizarlo
Para evidencia no relacionada a orden y que no tenga finalidad de taller.

## Estructura (elementos internos)
Resumen de orden, `FileUpload`, capturas seleccionadas, etiqueta del hito y comentario.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `workOrderId` | `string` | Sí | — | Orden destino. |
| `stage` | `intake \| diagnosis \| completion` | Sí | `diagnosis` | Momento documentado. |
| `files` | `FileMetadata[]` | No | `[]` | Selección y progreso. |
| `maxFiles` | `number` | No | Regla del servidor | Tope por tipo de orden. |
| `caption` | `string` | No | `''` | Descripción textual. |

## Eventos
`filesSelected(files)`, `remove(fileId)`, `upload()` y `uploadComplete(metadata)`.

## Variantes
Web selector/drag-and-drop; móvil galería y cámara solo si se permite.

## Estados
Empty, selected, uploading/progress, complete, rejected (tipo/tamaño), network error y disabled.

## Comportamiento
Validar tipo/tamaño; no declarar subida completada hasta confirmación API; limpiar PII innecesaria; conservar metadata bajo política de retención.

## Responsive
### WEB (desktop y tablet)
Preview en mosaico y archivo vía teclado.
### MÓVIL
Flujo de captura con permisos y fallback a galería; límite de peso y targets accesibles.

## Accesibilidad
Etiquetar cada imagen y acción eliminar; progreso como live status sin anuncios repetitivos; alternativas textuales para la evidencia.

## Componentes internos (hijos)
`FileUpload`, `FormField`, `FormActions`, preview.

## Dependencias
API segura de almacenamiento, permisos de cámara y consentimiento.

## Componentes relacionados
`DiagnosticChecklist`, `PartsConsumptionForm`, cierre de orden.

## Pantallas donde aparece
Mecánico · evidencias/fotos.

## Roles que lo utilizan
Mecánico; consulta solo a roles autorizados.

## Reutilización
Baja hasta definir otros adjuntos funcionales.

## Consideraciones de implementación
La demo selecciona imagen en memoria local y no tiene endpoint, cámara ni gestión de evidencia persistente.
