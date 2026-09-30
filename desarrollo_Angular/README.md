# Taller conectado — aplicación Angular

Prototipo responsive para los flujos del wireframe `wireframe2` de Figma. Reúne el portal de cliente, las operaciones del mecánico, la supervisión de sede, la logística de fábrica y la administración.

## Requisitos

- Node.js compatible con Angular 22 (Node 22.12+; comprobado con Node 24.21).
- npm 11 o compatible.

## Instalar, probar y ejecutar

Desde una terminal:

```bash
cd desarrollo_Angular
npm install
npm test
npm run build
npm start
```

Abre [http://localhost:4200](http://localhost:4200). La primera pantalla es el portal principal. Desde ahí puedes abrir uno de los cinco perfiles, usar la navegación lateral para recorrer sus seis pantallas, cambiar el perfil desde el selector y regresar al portal.

La aplicación es una demostración de frontend: incluye diez citas de prueba y datos ficticios de órdenes, inventario, solicitudes y usuarios. El formulario de cita y los cambios de estado funcionan localmente. No está conectada a una base de datos: los datos se declaran en `src/app/core/data/screen-catalog.ts`, y `WorkshopStoreService` copia las citas al estado Angular en memoria. Al recargar, vuelve el conjunto inicial. La búsqueda y la exportación CSV funcionan sobre esos datos en el navegador.

**¿Dónde está la base de datos?** No hay una base de datos en este proyecto: todavía no se configuraron SQLite, PostgreSQL, MongoDB ni un backend. Los datos iniciales están en el catálogo TypeScript (no en un archivo `.db`) y las modificaciones viven solo mientras la aplicación está abierta. Consulta el [detalle de los datos de demostración](./design-system-docs/04-datos-de-demostracion.md). Para persistencia real entre sesiones y usuarios habría que integrar un backend y su base de datos.

## Estructura

```text
desarrollo_Angular/
├── design-system-docs/          # análisis, arquitectura, tokens y especificación .md
├── src/
│   ├── app/
│   │   ├── core/                # rutas, layout, catálogo y estado de dominio
│   │   ├── features/screens/    # vista parametrizada de las 31 pantallas
│   │   └── shared/components/   # piezas de UI reutilizables
│   ├── index.html
│   ├── main.ts                  # arranque de Angular
│   └── styles.css               # tokens y estilos globales
├── angular.json                 # targets de build, desarrollo y pruebas
├── package.json
└── tsconfig*.json
```

## Recorrido de datos

`app.routes.ts` entrega la ruta al `AppShellComponent`; este mantiene el encabezado, el selector de perfil y la navegación. El segmento final de URL selecciona un objeto tipado de `SCREEN_CATALOG`. `ScreenPageComponent` presenta formulario, indicadores, registros, detalle o seguimiento según el tipo de la pantalla. `WorkshopStoreService` gestiona las citas de demostración, los cambios de estado y los avisos. Los componentes compartidos presentan indicadores y estados con los tokens definidos en `src/styles.css`.

La especificación completa y la matriz de cobertura están en [`design-system-docs/`](./design-system-docs/).
