# Catálogo de componentes

## Criterio de plataforma

- **A:** misma estructura e interacción; solo responde al espacio disponible.
- **B:** lógica compartida con presentación o navegación adaptada a la plataforma.
- **C:** solo web.
- **D:** solo móvil.

La reutilización es una estimación derivada de 31 pantallas web y 31 móviles; no equivale a un conteo de instancias Figma. En la matriz, “Alta” indica presencia transversal o en varios flujos, “Media” presencia en una familia de procesos y “Baja” uso concentrado en un proceso.

## Inventario por categoría

| Categoría | Componente | Plataforma | Reutilización aproximada | Uso en el sistema |
|---|---|:---:|---|---|
| Layout | `ApplicationShell` | B | Alta · 62 pantallas | Marco compartido, perfil y área de contenido. |
| Navegación | `RoleNavigation` | B | Alta · 62 pantallas | Acceso a seis pantallas por rol; drawer en móvil. |
| Navegación | `PageHeader` | A | Alta · 31 pantallas de perfil | Identifica rol, pantalla y propósito. |
| Navegación | `Breadcrumbs` | B | Alta · 31 pantallas de perfil | Sitúa la pantalla; reduce segmentos en móvil. |
| Navegación | `RoleCard` | A | Baja · 5 accesos | Entrada del portal a cada perfil. |
| Primitivos / UI | `Button` | A | Alta · 60+ controles | Acciones, enlaces y envío de formularios. |
| Primitivos / UI | `FormField` | A | Alta · 30+ campos | Label, ayuda, control y estado de validación. |
| Formularios | `SelectField` | A | Alta · 15+ controles | Servicio, sede, bahía, estado, referencia y motivo. |
| Formularios | `DateTimeField` | A | Media · 6+ controles | Fecha y hora de cita o despacho. |
| Formularios | `FileUpload` | B | Baja · 2+ superficies | Evidencias/fotos; entrada de archivo, captura móvil inferida. |
| Feedback | `StatusBadge` | A | Alta · 30+ registros | Estados de cita, orden, stock, lote y acceso. |
| Dashboard | `MetricCard` | A | Media · 18+ indicadores | KPIs para dashboard y rendimiento. |
| Datos | `SearchField` | A | Alta · 10+ listados | Filtra registros visibles. |
| Datos | `RecordList` | B | Alta · 20+ pantallas | Tarjetas en teléfono; tabla/listado en escritorio. |
| Datos | `DetailSummary` | B | Media · 5+ detalles | Resumen de cita, orden y solicitud. |
| Dashboard | `PerformanceChart` | B | Media · 5+ dashboards/reportes | Tendencias, capacidad y rendimiento. |
| Feedback | `EmptyState` | A | Media · listados/formularios | Guía cuando no hay registros o coincidencias; estado inferido. |
| Feedback | `NotificationToast` | B | Media · interacciones confirmables | Confirma operaciones sin perder contexto; patrón inferido. |
| Compuesto / negocio | `AppointmentBookingForm` | A | Baja · 2 vistas de plataforma | Reserva de sede/servicio/bahía/horario. |
| Negocio | `AppointmentSummary` | A | Baja · 4+ pantallas de cliente | Cita seleccionada y acciones disponibles. |
| Negocio / navegación | `AppointmentActions` | A | Baja · 3+ estados de cita | Modificar, cancelar y seguir la cita. |
| Negocio / datos | `TrackingTimeline` | B | Baja · cliente y logística | Hitos del servicio o del lote. |
| Negocio / formularios | `DiagnosticChecklist` | A | Baja · flujo mecánico | Captura validada de inspección. |
| Formularios | `EvidenceUpload` | B | Baja · flujo mecánico | Evidencia visual vinculada a orden. |
| Negocio / formularios | `PartsConsumptionForm` | A | Baja · flujo mecánico | Consumo de artículos y cantidad. |
| Negocio / datos | `BranchInventoryTable` | B | Media · sede y catálogo | Referencias, existencias, mínimos y ubicación. |
| Negocio / formularios | `TransferRequestForm` | A | Baja · flujo de sede | Solicitud entre sedes. |
| Negocio / datos | `ReplenishmentQueue` | B | Baja · logística de fábrica | Priorización de solicitudes de reabastecimiento. |
| Negocio / aprobación | `LotApprovalPanel` | A | Baja · flujo logístico | Verifica lote, destino y cantidad liberada. |
| Negocio / datos | `DispatchList` | B | Baja · flujo logístico | Envíos, transportadora y ETA. |
| Administración | `UserTable` | B | Baja · administrador | Usuarios, rol, sede y estado. |
| Administración | `PermissionMatrix` | B | Baja · administrador | Matriz web y resumen mobile por recurso. |
| Administración | `BranchBayManager` | B | Baja · administrador | Configuración de sedes y capacidad. |
| Administración / auditoría | `AuditLogTable` | B | Baja · administrador | Eventos de acceso, permiso y exportación. |
| Feedback / datos | `FormActions` | B | Alta · 15+ formularios | Acciones primaria, secundaria y destructiva. |

**Totales de catálogo:** 35 componentes conceptuales: 5 layout/navegación, 6 primitivos/formularios, 6 datos/feedback, 2 dashboard, 16 funcionales/de negocio/administración. El inventario es un diseño de arquitectura: la primera versión usa un `ScreenPageComponent` tipado para componer formularios y listados similares sin proliferar componentes Angular de una sola línea. Las piezas compartidas ya implementadas como clases Angular independientes son `MetricCard` y `StatusBadge`.

## Decisión de no duplicación

- Las 62 instancias de pantallas se resuelven con los mismos componentes y un catálogo por perfil; las versiones móvil y web no se mantienen como catálogos de negocio separados.
- Los campos de motivo, fecha y estado son variantes configuradas de `FormField`; no crean un componente por pantalla.
- La tabla/lista de inventario, solicitudes, despacho, usuarios y auditoría comparte `RecordList` con datos y acciones específicas.
- Los detalles de cita, orden y solicitud componen `DetailSummary` con campos del dominio correspondientes.
- Los componentes A/B usan tokens semánticos compartidos; ninguna variante es una copia del estilo base.

## Fichas de especificación

- Navegación y base: [ApplicationShell](./componentes/ApplicationShell.md), [RoleNavigation](./componentes/RoleNavigation.md), [PageHeader](./componentes/PageHeader.md), [Breadcrumbs](./componentes/Breadcrumbs.md), [RoleCard](./componentes/RoleCard.md), [Button](./componentes/Button.md).
- UI y datos: [FormField](./componentes/FormField.md), [SelectField](./componentes/SelectField.md), [DateTimeField](./componentes/DateTimeField.md), [FileUpload](./componentes/FileUpload.md), [StatusBadge](./componentes/StatusBadge.md), [MetricCard](./componentes/MetricCard.md), [SearchField](./componentes/SearchField.md), [RecordList](./componentes/RecordList.md), [DetailSummary](./componentes/DetailSummary.md), [PerformanceChart](./componentes/PerformanceChart.md), [EmptyState](./componentes/EmptyState.md), [NotificationToast](./componentes/NotificationToast.md), [FormActions](./componentes/FormActions.md).
- Procesos de negocio: [AppointmentBookingForm](./componentes/AppointmentBookingForm.md), [AppointmentSummary](./componentes/AppointmentSummary.md), [AppointmentActions](./componentes/AppointmentActions.md), [TrackingTimeline](./componentes/TrackingTimeline.md), [DiagnosticChecklist](./componentes/DiagnosticChecklist.md), [EvidenceUpload](./componentes/EvidenceUpload.md), [PartsConsumptionForm](./componentes/PartsConsumptionForm.md), [BranchInventoryTable](./componentes/BranchInventoryTable.md), [TransferRequestForm](./componentes/TransferRequestForm.md), [ReplenishmentQueue](./componentes/ReplenishmentQueue.md), [LotApprovalPanel](./componentes/LotApprovalPanel.md), [DispatchList](./componentes/DispatchList.md).
- Administración: [UserTable](./componentes/UserTable.md), [PermissionMatrix](./componentes/PermissionMatrix.md), [BranchBayManager](./componentes/BranchBayManager.md), [AuditLogTable](./componentes/AuditLogTable.md).
