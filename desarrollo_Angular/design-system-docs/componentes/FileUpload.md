# FileUpload

## Identificación
Nombre: Adjuntar evidencia · Nombre técnico: `FileUpload` · Categoría: Formularios · Tipo: control de archivo · Plataforma: **B** · Reutilización: Baja, flujo mecánico.

## Responsabilidad
Seleccionar archivos de imagen vinculados a una orden y presentar el archivo seleccionado.

## Cuándo utilizarlo
En evidencias/fotos del diagnóstico y trabajo realizado.

## Cuándo NO utilizarlo
Para imágenes de catálogo estáticas o documentos que no se adjuntan a una orden.

## Estructura (elementos internos)
Label, input file, texto de formatos/tamaño permitido y preview opcional con acción quitar.

## Props
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---:|---|---|
| `accept` | `string` | No | `image/*` | Tipos admitidos. |
| `multiple` | `boolean` | No | `false` | Permite varias fotos solo si orden lo habilita. |
| `maxSizeBytes` | `number` | No | Política API | Límite validado cliente y servidor. |
| `files` | `File[]` | No | `[]` | Selección local vigente. |
| `required` | `boolean` | No | `false` | Exige al menos un archivo. |

## Eventos
`filesChange(files)`, `remove(fileId)`.

## Variantes
Selector de archivos web; selector con cámara móvil únicamente si el producto autoriza ese permiso; vista compacta de archivo seleccionado.

## Estados
Default, selected, uploading, success, error, disabled y empty.

## Comportamiento
Validar MIME/tamaño/cantidad; cancelar conserva selección previa; error indica archivo afectado. No subir silenciosamente ni filtrar EXIF sin política establecida.

## Responsive
### WEB (desktop y tablet)
Dropzone opcional con alternativa de botón/teclado; previews en grilla.
### MÓVIL
Input nativo accesible a galería; `capture` solo con autorización explícita y fallback.

## Accesibilidad
Input nativo asociado a label, nombre/tamaño anunciados, acciones de quitar nombradas y errores bajo el campo; el dropzone no es única forma.

## Componentes internos (hijos)
`FormField`, `Button`, preview y progreso.

## Dependencias
Servicio de almacenamiento firmado/API y reglas de privacidad futuras.

## Componentes relacionados
`EvidenceUpload`, `DiagnosticChecklist`, `NotificationToast`.

## Pantallas donde aparece
Mecánico · evidencias/fotos.

## Roles que lo utilizan
Mecánico con acceso a orden.

## Reutilización
Baja hasta conocer otros flujos de adjuntos.

## Consideraciones de implementación
La demo permite seleccionar imagen y reporta el nombre local, sin cargar archivo ni guardarlo fuera de memoria.
