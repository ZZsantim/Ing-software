# Datos de demostración y almacenamiento

## Diez citas de prueba

El proyecto incluye diez citas demo con ids únicos (`1048` a `1057`), servicios, sedes, bahías, vehículos, fechas y estados. El único origen de esas muestras es:

[`src/app/core/data/screen-catalog.ts`](../src/app/core/data/screen-catalog.ts), exportación `DEMO_APPOINTMENTS`.

El dashboard del cliente y las opciones de modificar/cancelar consumen el mismo conjunto de citas. Al agendar una cita se agrega otro registro temporal con el siguiente id.

## ¿Dónde está la base de datos?

**No hay una base de datos conectada ni un archivo de base de datos en este proyecto.** Los datos de ejemplo están escritos en TypeScript; `WorkshopStoreService` los copia a un Angular signal y gestiona cambios en memoria. No hay conexión a SQLite, MongoDB, PostgreSQL ni a un servidor API. Cerrar o recargar la aplicación restaura los registros originales.

El catálogo también contiene listas de ejemplo para órdenes de trabajo, existencias, solicitudes de reposición, personas, sedes, alertas y eventos. Son datos ficticios para recorrer la interfaz, no registros que se deban usar como identidad o inventario real.

## Prueba manual

1. Abrir `cliente-dashboard`: se muestran diez citas iniciales.
2. Usar `Agendar nueva cita`, completar servicio, sede, bahía, fecha y hora, y confirmar: la lista muestra una cita número 1058.
3. Cambiar a `Modificar cita` o `Cancelar cita`: el selector carga las citas seed actuales.
4. Recargar la página: se restablecen las diez citas base.

La persistencia real requiere un API autenticado con autorización en servidor, base de datos transaccional, validación de disponibilidad y permisos. La interfaz actual no intenta simular esas propiedades.
