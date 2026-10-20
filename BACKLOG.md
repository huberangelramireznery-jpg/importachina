# 📋 Backlog de historias de usuario — Gestión ImportaChina

Proyecto: **ImportaChina** (Firebase) · Metodología: **Scrum con tablero Kanban**
Total: **16 historias** · **52 puntos**

## Plan de sprints
| Sprint | Objetivo | Historias | Puntos |
|---|---|---|---|
| Sprint 0 | Preparación: tablero, repositorio, base de datos y wireframes | — | — |
| Sprint 1 | Autenticación y roles | HU-01, HU-02, HU-03, HU-04 | 12 |
| Sprint 2 | Catálogo y consumo de la API | HU-05, HU-06, HU-07, HU-08, HU-09 | 15 |
| Sprint 3 | Carrito, pedidos y pagos | HU-10, HU-11, HU-12, HU-13 | 15 |
| Sprint 4 | Reportes, pruebas finales y publicación | HU-14, HU-15, HU-16 | 10 |

## Historias
| ID | Rol | Quiero | Para | Pts | Sprint | Estado |
|---|---|---|---|---|---|---|
| [HU-01](historias-de-usuario/hu-01-registrarme-con-mi-correo-y-una-contrase-a.md) | Cliente | registrarme con mi correo y una contraseña | poder comprar en la tienda | 3 | Sprint 1 | Backlog |
| [HU-02](historias-de-usuario/hu-02-iniciar-y-cerrar-sesi-n.md) | Cliente | iniciar y cerrar sesión | acceder a mi cuenta de forma segura | 2 | Sprint 1 | Backlog |
| [HU-03](historias-de-usuario/hu-03-gestionar-usuarios-y-asignarles-un-rol-administrador-vendedor-o-cliente-.md) | Administrador | gestionar usuarios y asignarles un rol (Administrador, Vendedor o Cliente) | controlar quién accede a cada función | 5 | Sprint 1 | Backlog |
| [HU-04](historias-de-usuario/hu-04-editar-mi-perfil-y-mi-direcci-n-de-env-o.md) | Cliente | editar mi perfil y mi dirección de envío | recibir mis pedidos en el lugar correcto | 2 | Sprint 1 | Backlog |
| [HU-05](historias-de-usuario/hu-05-sincronizar-productos-desde-la-api-de-aliexpress.md) | Administrador | sincronizar productos desde la API de AliExpress | llenar el catálogo sin cargarlos uno por uno | 5 | Sprint 2 | Backlog |
| [HU-06](historias-de-usuario/hu-06-crear-editar-y-eliminar-categor-as.md) | Administrador | crear, editar y eliminar categorías | mantener el catálogo organizado | 2 | Sprint 2 | Backlog |
| [HU-07](historias-de-usuario/hu-07-definir-el-margen-de-ganancia-y-ver-el-precio-de-venta-de-cada-producto.md) | Administrador | definir el margen de ganancia y ver el precio de venta de cada producto | que la tienda gane sobre el costo de importación | 2 | Sprint 2 | Backlog |
| [HU-08](historias-de-usuario/hu-08-ver-el-cat-logo-y-el-detalle-de-cada-producto.md) | Cliente | ver el catálogo y el detalle de cada producto | conocer lo que está disponible antes de comprar | 3 | Sprint 2 | Backlog |
| [HU-09](historias-de-usuario/hu-09-buscar-productos-por-palabra-clave-y-filtrarlos-por-categor-a.md) | Cliente | buscar productos por palabra clave y filtrarlos por categoría | encontrar lo que busco rápidamente | 3 | Sprint 2 | Backlog |
| [HU-10](historias-de-usuario/hu-10-agregar-productos-al-carrito-y-modificar-sus-cantidades.md) | Cliente | agregar productos al carrito y modificar sus cantidades | preparar mi compra antes de pagar | 5 | Sprint 3 | Backlog |
| [HU-11](historias-de-usuario/hu-11-confirmar-mi-compra-con-mi-direcci-n-de-env-o.md) | Cliente | confirmar mi compra con mi dirección de envío | generar mi pedido | 5 | Sprint 3 | Backlog |
| [HU-12](historias-de-usuario/hu-12-ver-la-lista-de-pedidos-y-cambiar-su-estado.md) | Vendedor | ver la lista de pedidos y cambiar su estado | dar seguimiento a cada venta | 3 | Sprint 3 | Backlog |
| [HU-13](historias-de-usuario/hu-13-registrar-el-pago-de-un-pedido.md) | Vendedor | registrar el pago de un pedido | confirmar que la venta está cubierta | 2 | Sprint 3 | Backlog |
| [HU-14](historias-de-usuario/hu-14-ver-el-historial-de-mis-pedidos-y-su-estado.md) | Cliente | ver el historial de mis pedidos y su estado | saber en qué punto está cada compra | 3 | Sprint 4 | Backlog |
| [HU-15](historias-de-usuario/hu-15-ver-el-detalle-completo-de-un-pedido.md) | Vendedor | ver el detalle completo de un pedido | preparar el envío correctamente | 2 | Sprint 4 | Backlog |
| [HU-16](historias-de-usuario/hu-16-ver-un-reporte-de-ventas-por-rango-de-fechas-y-los-productos-m-s-vendidos.md) | Administrador | ver un reporte de ventas por rango de fechas y los productos más vendidos | tomar decisiones sobre el catálogo | 5 | Sprint 4 | Backlog |

## Reglas del tablero Kanban
| Columna | Una tarjeta entra cuando… | Sale cuando… | Límite WIP |
|---|---|---|---|
| Backlog | Todas las historias pendientes. | Pasa a Por Hacer en el planning. | sin límite |
| Por Hacer | Está en el sprint y tiene criterios de aceptación. | Alguien la toma. | — |
| En Proceso | Tiene responsable y rama de Git; código en Pull Request. | El Pull Request está abierto. | 3 |
| En Pruebas | El Pull Request está abierto. | Pasa pruebas y revisión de un compañero. | 2 |
| Hecho | Cumple todos los criterios de aceptación. | Se archiva al cerrar el sprint. | — |

## Etiquetas
- `Administrador` (borde color naranja) — `Vendedor` (naranja claro) — `Cliente` (azul)
- Una etiqueta por sprint: `Sprint 1` … `Sprint 4`

## Definición de terminado (global)
1. Criterios de aceptación cumplidos y marcados
2. Código desplegado y funcionando en la URL del proyecto
3. Permisos probados (lo permitido responde 200, lo no permitido 403)
4. Verificado en celular
5. Pull Request revisado por el compañero
