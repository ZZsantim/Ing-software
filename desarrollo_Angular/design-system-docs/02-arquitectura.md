# Arquitectura y composición

## Capas y carpetas

La aplicación es standalone, sin NgModules, con Angular Router y TypeScript estricto. El prototipo no incorpora backend, autenticación real ni dependencias visuales externas.

```text
src/
├── app/
│   ├── app.ts                   # raíz <router-outlet>
│   ├── app.config.ts            # proveedores de Angular y Router
│   ├── app.routes.ts            # Shell + ruta parametrizada + fallback
│   ├── core/
│   │   ├── data/screen-catalog.ts
│   │   ├── layout/app-shell.component.{ts,html,css}
│   │   ├── models/screen.model.ts
│   │   ├── not-found/not-found.component.ts
│   │   └── services/workshop-store.service.ts
│   ├── features/screens/
│   │   ├── screen-page.component.{ts,html,css}
│   │   └── screen-page.component.spec.ts
│   └── shared/components/
│       ├── metric-card.component.{ts,css}
│       └── status-badge.component.{ts,css}
├── index.html
├── main.ts
└── styles.css                  # tokens globales, tipografía y foco
```

El `ScreenPageComponent` está parametrizado por tipo de pantalla. Sus campos y registros provienen de `SCREEN_CATALOG`, los modelos limitan los valores aceptados y `WorkshopStoreService` mantiene las mutaciones locales. Esta composición central evita copiar markup entre treinta pantallas. Si evoluciona el producto, los procesos de cita, taller, logística y administración pueden extraerse a componentes feature sin modificar sus modelos de dominio.

## Mapa de composición

```text
App
└── RouterOutlet
    └── AppShell
        ├── SideNavigation ─── ROLE_OPTIONS + screensForRole(role)
        ├── TopBar ─────────── perfil activo + regreso al portal
        ├── RouterOutlet
        │   └── ScreenPage ─── findScreen(id)
        │       ├── PageHeader + Breadcrumbs
        │       ├── Portal ─── RoleCard × 5 + MetricCard
        │       ├── Dashboard ─ MetricCard* + RecordList* + PerformanceChart*
        │       ├── Form ────── FormField* + FormActions
        │       ├── Detail ─── DetailSummary + AppointmentActions*
        │       ├── Checklist ─ FormField* + FormActions
        │       ├── Upload ─── FileUpload + FormActions
        │       ├── Table ──── SearchField + RecordList + StatusBadge + EmptyState
        │       └── Timeline ─ TrackingTimeline + StatusBadge
        ├── NotificationToast ─ WorkshopStoreService.notice
        └── WorkspaceFooter
```

`*` identifica una composición según los datos, no necesariamente un componente Angular independiente en esta iteración.

## Rutas y navegación

`/` redirige a `/portal-principal`; las rutas `/:screenId` eligen un elemento del catálogo y cada perfil tiene seis rutas. El catálogo también proporciona el menú lateral, por lo que no hay listas de enlaces duplicadas en el template. Cualquier id desconocido se representa como pantalla no encontrada. Los botones que cambian de proceso usan `routerLink`; formularios y estados de demostración invocan el servicio local.

| Dominio | Ruta de entrada | Recorrido principal |
|---|---|---|
| Cliente | `/cliente-dashboard` | `/cliente-agendar` → `/cliente-detalle` → modificar/cancelar; `/cliente-seguimiento`. |
| Mecánico | `/mecanico-dashboard` | `/mecanico-orden` → diagnóstico → evidencias/repuestos → cierre. |
| Jefe de sede | `/sede-dashboard` | rendimiento, calendario, inventario, transferencias y alertas. |
| Logística | `/logistica-dashboard` | solicitudes → detalle → aprobación → despacho → trazabilidad. |
| Administrador | `/admin-dashboard` | usuarios, RBAC, sedes/bahías, catálogo y auditoría. |

## Web y móvil

La navegación, rutas, datos, validaciones nativas y componentes de dominio son compartidos. `ApplicationShell` y `RoleNavigation` cambian presentación a un drawer operable por botón en viewports estrechos. Los `RecordList` pueden transformarse de filas de varias columnas a tarjetas apiladas; la matriz de permisos y los gráficos anchos deben reordenarse o permitir desplazamiento controlado. Los campos de fecha, hora y selección usan controles semánticos HTML adaptados por navegador. Toda acción móvil conserva un área interactiva mínima de 44 × 44 px.

No se mantienen ramas independientes de HTML web/móvil. Los puntos de adaptación se resuelven con CSS responsive y la misma estructura de datos; una captura desde cámara en `EvidenceUpload` es una mejora inferida y se implementaría sobre la lógica compartida.

## Estado y responsabilidades

- `SCREEN_CATALOG` contiene texto, tipo de pantalla, opciones de controles, métricas y registros demo; `DEMO_APPOINTMENTS` es el conjunto único de diez citas iniciales; no conoce elementos del DOM.
- `ScreenPageComponent` interpreta ese modelo, valida formularios con restricciones HTML y controla filtro y exportación visible.
- `WorkshopStoreService` concentra cambios a citas, cambios de estado y mensajes de confirmación. Copia `DEMO_APPOINTMENTS` a un signal en memoria, no a una base de datos ni persistencia de servidor.
- `AppShellComponent` selecciona rol y navegación según la ruta; el estado visual de la página vive en su componente.
- `MetricCardComponent` y `StatusBadgeComponent` son presentacionales y reciben datos mediante inputs tipados.

## Límites para producción

Conectar un API a través de servicios tipados (citas, órdenes, stock, usuarios), autenticar perfiles antes de filtrar permisos, validar y autorizar en servidor, guardar las evidencias con política de privacidad, mantener movimientos de inventario atómicos, y definir paginación/exportación segura. Los registros de muestra están etiquetados como demostración y no son datos reales ni una integración de RBAC.
