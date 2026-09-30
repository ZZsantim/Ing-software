# Análisis del wireframe

## Fuente y alcance

Wireframe `wireframe2` de Figma, páginas **WEB** y **MÓVIL**. Se revisaron la lista de capas y los frames disponibles en ambas páginas, la pantalla web de agendamiento de cita y sus capas, el dashboard del cliente, y el flujo móvil de agendamiento. El archivo muestra pantallas de gestión de taller e inventario en wireframes monocromáticos. Las 31 pantallas de cada página se toman de los nombres de frame visibles; cuando el detalle de un frame no fue legible, se usa solo lo que dice su nombre y se declara el supuesto en [`99-supuestos.md`](./99-supuestos.md).

Los frames web están rotulados a 1920 × 1080 px. En la página MÓVIL, los wireframes aparecen dentro de artboards de Figma; el frame de agendamiento coloca controles en un viewport de teléfono (incluye un placeholder de imagen/servicio). Las decisiones de escala y comportamiento móvil de esta especificación se adaptan al viewport del usuario, no a la medida del artboard exterior.

## Inventario y propósito

Cada perfil tiene seis pantallas; el portal principal sirve de acceso común. Los nombres técnicos de las rutas corresponden a la aplicación demostrativa.

| # | Web / móvil | Perfil | Ruta demo | Propósito |
|---:|---|---|---|---|
| 1 | portal principal / portal principal móvil | General | `portal-principal` | Presentar el producto y dirigir a cada perfil. |
| 2 | administrador · 1 · dashboard general / administrador móvil 1 · dashboard general | Administrador | `admin-dashboard` | Resumir usuarios, sedes, roles y eventos. |
| 3 | administrador · 2 · usuarios / administrador móvil 2 · usuarios | Administrador | `admin-usuarios` | Consultar y gestionar usuarios. |
| 4 | administrador · 3 · roles y permisos RBAC / administrador móvil 3 · roles y permisos | Administrador | `admin-roles` | Consultar roles y permisos por responsabilidad. |
| 5 | administrador · 4 · sedes y bahías / administrador móvil 4 · sedes y bahías | Administrador | `admin-sedes` | Mantener sedes, bahías y su capacidad. |
| 6 | administrador · 5 · catálogo / administrador móvil 5 · catálogo | Administrador | `admin-catalogo` | Gestionar servicios y referencias de repuestos. |
| 7 | administrador · 6 · auditoría y seguridad / administrador móvil 6 · auditoría | Administrador | `admin-auditoria` | Consultar actividad administrativa y seguridad. |
| 8 | logística fábrica · 1 · dashboard inventario global / logística fábrica móvil 1 · dashboard inventario | Logística | `logistica-dashboard` | Resumir referencias, solicitudes, despachos y lotes. |
| 9 | logística fábrica · 2 · solicitudes de reabastecimiento / logística fábrica móvil 2 · solicitudes | Logística | `logistica-solicitudes` | Revisar la cola de solicitudes de las sedes. |
| 10 | logística fábrica · 3 · detalle de solicitud / logística fábrica móvil 3 · detalle solicitud | Logística | `logistica-detalle-solicitud` | Revisar una solicitud y pasar a su aprobación o despacho. |
| 11 | logística fábrica · 4 · aprobar lote / salida / logística fábrica móvil 4 · aprobar lote | Logística | `logistica-aprobar-lote` | Validar el lote, cantidad y destino antes de liberarlo. |
| 12 | logística fábrica · 5 · despacho / logística fábrica móvil 5 · despacho | Logística | `logistica-despacho` | Consultar envíos a sedes y fechas estimadas. |
| 13 | logística fábrica · 6 · trazabilidad / JIT / logística fábrica móvil 6 · trazabilidad | Logística | `logistica-trazabilidad` | Seguir lote y envío hasta la recepción. |
| 14 | mecánico · 1 · dashboard de actividades / mecánico móvil 1 · dashboard actividades | Mecánico | `mecanico-dashboard` | Priorizar el trabajo y revisar órdenes asignadas. |
| 15 | mecánico · 2 · orden de trabajo / mecánico móvil 2 · orden de trabajo | Mecánico | `mecanico-orden` | Consultar vehículo, bahía y tareas de la orden. |
| 16 | mecánico · 3 · diagnóstico / checklist / mecánico móvil 3 · diagnóstico | Mecánico | `mecanico-diagnostico` | Registrar hallazgos y completar la inspección. |
| 17 | mecánico · 4 · evidencias / fotos / mecánico móvil 4 · evidencias | Mecánico | `mecanico-evidencias` | Adjuntar evidencia fotográfica del servicio. |
| 18 | mecánico · 5 · consumo de repuestos / mecánico móvil 5 · repuestos | Mecánico | `mecanico-repuestos` | Registrar repuestos y cantidades por orden. |
| 19 | mecánico · 6 · actualizar estado / cierre / mecánico móvil 6 · actualizar / cierre | Mecánico | `mecanico-cierre` | Actualizar el estado y documentar el cierre. |
| 20 | jefe de sede · 1 · dashboard general / jefe de sede móvil 1 · dashboard general | Jefe de sede | `sede-dashboard` | Supervisar citas, capacidad, órdenes y alertas de sede. |
| 21 | jefe de sede · 2 · rendimiento / diagramas / jefe de sede móvil 2 · rendimiento / diagramas | Jefe de sede | `sede-rendimiento` | Analizar indicadores y rendimiento semanal. |
| 22 | jefe de sede · 3 · calendario y capacidad / jefe de sede móvil 3 · calendario | Jefe de sede | `sede-calendario` | Consultar calendario y disponibilidad de bahías. |
| 23 | jefe de sede · 4 · inventario / jefe de sede móvil 4 · inventario | Jefe de sede | `sede-inventario` | Consultar existencias y mínimos de la sede. |
| 24 | jefe de sede · 5 · transferencia entre sedes / jefe de sede móvil 5 · transferencia | Jefe de sede | `sede-transferencias` | Solicitar el movimiento de artículos entre sedes. |
| 25 | jefe de sede · 6 · alertas y reportes / jefe de sede móvil 6 · alertas / reportes | Jefe de sede | `sede-alertas` | Priorizar alertas y generar reportes operativos. |
| 26 | cliente · 1 · dashboard general / cliente móvil 1 · dashboard general | Cliente | `cliente-dashboard` | Revisar citas, vehículos y resumen del servicio. |
| 27 | cliente · 2 · agendar cita / cliente móvil 2 · agendar cita | Cliente | `cliente-agendar` | Elegir servicio, sede, bahía, fecha y hora. |
| 28 | cliente · 3 · detalle / modificar / cancelar / cliente móvil 3 · detalle / modificar / cancelar | Cliente | `cliente-detalle` | Consultar la cita y sus acciones disponibles. |
| 29 | cliente · 4 · modificar cita / cliente móvil 4 · modificar cita | Cliente | `cliente-modificar` | Cambiar la fecha u hora de una reserva. |
| 30 | cliente · 5 · cancelar cita / cliente móvil 5 · cancelar cita | Cliente | `cliente-cancelar` | Elegir una cita y documentar la razón de cancelación. |
| 31 | cliente · 6 · seguimiento / cliente móvil 6 · seguimiento | Cliente | `cliente-seguimiento` | Consultar las etapas del servicio del vehículo. |

## Roles y acceso

| Rol | Pantallas | Objetos de trabajo que aparecen en el recorrido |
|---|---|---|
| Cliente | Dashboard, agendar, detalle, modificar, cancelar, seguimiento | Vehículo, cita, servicio y progreso del taller. |
| Mecánico | Actividades, orden, diagnóstico, evidencias, repuestos, cierre | Orden, vehículo, checklist, fotos y consumo. |
| Jefe de sede | Dashboard, rendimiento, calendario, inventario, transferencias, alertas/reportes | Sede, bahía, capacidad, inventario y alertas. |
| Logística fábrica | Dashboard global, solicitudes, detalle, aprobar lote, despacho, trazabilidad JIT | Solicitud, lote, despacho y recepción en sede. |
| Administrador | Dashboard, usuarios, RBAC, sedes/bahías, catálogo, auditoría/seguridad | Usuarios, permisos, configuración y registro de actividad. |
| Portal principal | Entrada común | Selección del perfil de demostración. |

## Flujos principales

1. **Servicio al cliente:** portal → dashboard → agendar → detalle → modificar o cancelar; seguimiento acompaña el progreso de la orden.
2. **Trabajo mecánico:** dashboard de actividades → orden → diagnóstico/checklist → fotos/evidencias → consumo de repuestos → actualizar/cerrar.
3. **Reabastecimiento JIT:** inventario o alerta de sede → solicitud de transferencia/reabastecimiento → cola logística → detalle → aprobación de lote → despacho → trazabilidad/recepción.
4. **Control de sede:** dashboard → rendimiento, calendario y capacidad, inventario, transferencias o alertas.
5. **Administración:** dashboard → usuarios y roles/permisos; configurar sedes/bahías y catálogo; auditar acciones.

Los enlaces entre pantallas proceden de la relación evidente entre nombres y objetos del wireframe; las interacciones exactas que no se ven dibujadas se anotan como inferencias.

## Patrones visuales y funcionales

- En la cabecera de los frames web se repiten logo y accesos de perfil/contacto/retorno al portal; cada frame incluye identificación de perfil y pantalla.
- Se repiten campos con contorno, títulos/etiquetas breves, placeholders de texto/selección y botones rectangulares grises.
- Listados, indicadores, diagramas, fotografías, datos de cita y trazabilidad se representan en placeholders sencillos. Se conservan como componentes con variantes y datos, no como pantallas duplicadas.
- El booking web observado contiene servicio, sede, bahía, fecha, hora, motivo y acciones Guardar/Cancelar/Confirmar. El booking móvil presenta fecha/hora, sede/servicio, un área de imagen/servicio y Guardar/Cancelar.
- Las dos páginas repiten la secuencia funcional de seis pantallas por perfil. El diseño móvil comparte el dominio y el orden, pero adapta navegación y distribución.
- Figma no demuestra la existencia de un backend, estados visuales exhaustivos, autenticación real, exportación ni textos finales de errores.

## Matriz pantalla × componentes

`Shell` = cabecera/navegación responsive; `M` = indicador; `F` = formulario; `R` = registros o tabla; `D` = resumen de detalle; `T` = línea de tiempo; `C` = gráfico; `P` = selector de perfil.

| Pantalla | Shell | M | F | R | D | T | C | P |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Portal principal | ✓ | ✓ |  |  |  |  |  | ✓ |
| Cliente · dashboard | ✓ | ✓ |  | ✓ |  |  | ✓ |  |
| Cliente · agendar cita | ✓ |  | ✓ |  |  |  |  |  |
| Cliente · detalle de cita | ✓ |  |  | ✓ | ✓ |  |  |  |
| Cliente · modificar cita | ✓ |  | ✓ |  |  |  |  |  |
| Cliente · cancelar cita | ✓ |  | ✓ |  |  |  |  |  |
| Cliente · seguimiento | ✓ |  |  |  |  | ✓ |  |  |
| Mecánico · actividades | ✓ | ✓ |  | ✓ |  |  | ✓ |  |
| Mecánico · orden | ✓ |  |  | ✓ | ✓ |  |  |  |
| Mecánico · diagnóstico | ✓ |  | ✓ |  |  |  |  |  |
| Mecánico · evidencias | ✓ |  | ✓ |  |  |  |  |  |
| Mecánico · repuestos | ✓ |  | ✓ |  |  |  |  |  |
| Mecánico · cierre | ✓ |  | ✓ |  |  |  |  |  |
| Sede · dashboard | ✓ | ✓ |  | ✓ |  |  | ✓ |  |
| Sede · rendimiento | ✓ | ✓ |  |  |  |  | ✓ |  |
| Sede · calendario | ✓ |  |  | ✓ |  |  |  |  |
| Sede · inventario | ✓ |  |  | ✓ |  |  |  |  |
| Sede · transferencia | ✓ |  | ✓ |  |  |  |  |  |
| Sede · alertas/reportes | ✓ |  |  | ✓ |  |  |  |  |
| Logística · dashboard global | ✓ | ✓ |  | ✓ |  |  | ✓ |  |
| Logística · solicitudes | ✓ |  |  | ✓ |  |  |  |  |
| Logística · detalle | ✓ |  |  | ✓ | ✓ |  |  |  |
| Logística · aprobación de lote | ✓ |  | ✓ |  |  |  |  |  |
| Logística · despacho | ✓ |  |  | ✓ |  |  |  |  |
| Logística · trazabilidad | ✓ |  |  |  |  | ✓ |  |  |
| Admin · dashboard | ✓ | ✓ |  | ✓ |  |  | ✓ |  |
| Admin · usuarios | ✓ |  |  | ✓ |  |  |  |  |
| Admin · roles/RBAC | ✓ |  |  | ✓ |  |  |  |  |
| Admin · sedes/bahías | ✓ |  |  | ✓ |  |  |  |  |
| Admin · catálogo | ✓ |  |  | ✓ |  |  |  |  |
| Admin · auditoría/seguridad | ✓ |  |  | ✓ |  |  |  |  |

La matriz documenta la composición funcional de la implementación y no atribuye al wireframe un widget cuando solo se ve un placeholder. Los detalles de cada pantalla y las decisiones inferidas están en [`99-supuestos.md`](./99-supuestos.md).
