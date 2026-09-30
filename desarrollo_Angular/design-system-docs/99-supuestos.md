# Supuestos, inferencias y auditoría

## Supuestos y límites

1. **Nombres de frames como inventario:** las dos páginas Figma enumeran un portal más seis pantallas para cada uno de cinco roles. Se cuentan las 31 capas/frame web y sus 31 equivalentes móviles.
2. **Estados monocromáticos:** la página muestra wireframes grises, no estilos finales. Se aplica la paleta Burnt sienna prescrita en las instrucciones autónomas, no se atribuye a los estilos del archivo Figma.
3. **Procesos inferidos:** el nombre de los screens sugiere continuidad entre cita, orden, diagnóstico, repuestos y logística. Los enlaces navegables de la demo ilustran esos caminos; su orden de negocio se debe validar con el equipo.
4. **Sin integración de servicios:** no se recibió contrato de API, identidad, persistencia, catálogos reales ni estructura de base de datos. El prototipo usa datos de muestra en memoria y no simula autorización de RBAC.
5. **Contenido de muestra:** cifras, identidades, placas, sedes, referencias, estados y fechas de la aplicación son ficticios para la demostración; reemplazarlos antes de producción. Las fechas se presentan en formato local, no definen zona horaria.
6. **Móvil:** los frames visibles mantienen el mismo recorrido que la página web. Se infiere un drawer, una columna en formularios/listados y tap target 44 px; no se atribuyen esas interacciones a un prototipo navegable de Figma.
7. **Captura de fotos:** la pantalla menciona evidencias/fotos. El input de archivo acepta imágenes; acceso directo a cámara, permisos, compresión, subida y privacidad requieren una decisión de producto.
8. **Diagrama y estados faltantes:** carga, vacío, fallo de red, confirmación modal, paginación, selección de citas, políticas de cancelación y colisiones de bahía no se especifican completamente en lo visible del wireframe. Los mensajes de demo, estados del componente y gráficos son inferidos.
9. **RBAC:** existe un frame de roles y permisos, pero no se interpreta que el selector de perfil de demo otorgue privilegios reales. Se requiere autenticación y autorización en servidor.
10. **Fechas del sistema:** el wireframe no indica hora universal ni vigencia de datos; las fechas semilla se identifican como ilustrativas.

## Autoauditoría de cobertura

| Control | Resultado |
|---|---|
| Pantallas inventariadas | 31 web + 31 móvil = **62 variantes**, correspondientes a 31 flujos/pantallas lógicas. |
| Cobertura por roles | Portal (1) + cliente (6) + mecánico (6) + jefe de sede (6) + logística fábrica (6) + administrador (6) = **31**. |
| Componentes de catálogo | 35 conceptos reutilizables clasificados en [`01-catalogo-componentes.md`](./01-catalogo-componentes.md), con A/B/C para cada uno. |
| Composición documentada | Shell, navegación y componentes semánticos cubren cada pantalla en la matriz de [`00-analisis-wireframe.md`](./00-analisis-wireframe.md). |
| Especificación individual | Una ficha por cada componente de los 35 del catálogo en `componentes/`. |
| Tokens y contraste | Paleta, estados, escalas y pares medidos WCAG AA en [`03-design-tokens.md`](./03-design-tokens.md). |
| Valores visuales compartidos | CSS usa variables semánticas globales; no se definen tokens separados por cada pantalla. |
| A11y | Teclado, foco, etiquetas y comportamiento adaptativo especificados en cada ficha. |
| Cobertura de la demo Angular | El catálogo implementado contiene las 31 rutas lógicas; mobile/web comparten datos y ruta y cambian composición con CSS. |
| Backend / autenticación | Fuera de alcance porque no existe contrato entregado; explícitamente no simulado como real. |

La cobertura de nombres de frames es completa. La equivalencia final de campos, permisos y estados funcionales queda pendiente de confirmación del equipo de producto, porque el wireframe no muestra todos los detalles de sus vistas.
