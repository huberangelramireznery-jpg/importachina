# 📋 Tablero Kanban — Gestión ImportaChina

**Proyecto:** tienda web de productos importados · **Metodología:** Scrum con tablero Kanban
**Demo:** https://importachina-2026.web.app · **Historias:** 16 · **Puntos:** 52

> Este tablero es la vista Kanban del proyecto. Cada historia de usuario es una tarjeta,
> y además está abierta como **Issue** con sus criterios de aceptación en checkboxes
> (pestaña **Issues** del repositorio o en el Project “Gestión - ImportaChina”).

## Plan de sprints
| Sprint | Objetivo | Historias | Puntos |
|---|---|---|---|
| Sprint 0 | Preparación: tablero, repositorio, base de datos, wireframes | — | — |
| Sprint 1 | Autenticación y roles | HU-01, HU-02, HU-03, HU-04 | 12 |
| Sprint 2 | Catálogo y consumo de la API | HU-05, HU-06, HU-07, HU-08, HU-09 | 15 |
| Sprint 3 | Carrito, pedidos y pagos | HU-10, HU-11, HU-12, HU-13 | 15 |
| Sprint 4 | Reportes, pruebas finales y publicación | HU-14, HU-15, HU-16 | 10 |

## Todas las tarjetas
| # | Historia de usuario | Rol | Puntos | Sprint | Estado |
|---|---|---|---|---|---|
| [#1](https://github.com/huberangelramireznery-jpg/importachina/issues/1) | Como Cliente, quiero registrarme con mi correo y una contraseña, para poder comprar en la tienda. | Cliente | 3 | Sprint 1 | Hecho |
| [#2](https://github.com/huberangelramireznery-jpg/importachina/issues/2) | Como Cliente, quiero iniciar y cerrar sesión, para acceder a mi cuenta de forma segura. | Cliente | 2 | Sprint 1 | Hecho |
| [#3](https://github.com/huberangelramireznery-jpg/importachina/issues/3) | Como Administrador, quiero gestionar usuarios y asignarles un rol (Administrador, Vendedor o Cliente), para controlar quién accede a cada función. | Administrador | 5 | Sprint 1 | Por hacer |
| [#4](https://github.com/huberangelramireznery-jpg/importachina/issues/4) | Como Cliente, quiero editar mi perfil y mi dirección de envío, para recibir mis pedidos en el lugar correcto. | Cliente | 2 | Sprint 1 | Hecho |
| [#5](https://github.com/huberangelramireznery-jpg/importachina/issues/5) | Como Administrador, quiero sincronizar productos desde la API de AliExpress, para llenar el catálogo sin cargarlos uno por uno. | Administrador | 5 | Sprint 2 | Por hacer |
| [#6](https://github.com/huberangelramireznery-jpg/importachina/issues/6) | Como Administrador, quiero crear, editar y eliminar categorías, para mantener el catálogo organizado. | Administrador | 2 | Sprint 2 | Por hacer |
| [#7](https://github.com/huberangelramireznery-jpg/importachina/issues/7) | Como Administrador, quiero definir el margen de ganancia y ver el precio de venta de cada producto, para que la tienda gane sobre el costo de importación. | Administrador | 2 | Sprint 2 | Por hacer |
| [#8](https://github.com/huberangelramireznery-jpg/importachina/issues/8) | Como Cliente, quiero ver el catálogo y el detalle de cada producto, para conocer lo que está disponible antes de comprar. | Cliente | 3 | Sprint 2 | En Progreso |
| [#9](https://github.com/huberangelramireznery-jpg/importachina/issues/9) | Como Cliente, quiero buscar productos por palabra clave y filtrarlos por categoría, para encontrar lo que busco rápidamente. | Cliente | 3 | Sprint 2 | Por hacer |
| [#10](https://github.com/huberangelramireznery-jpg/importachina/issues/10) | Como Cliente, quiero agregar productos al carrito y modificar sus cantidades, para preparar mi compra antes de pagar. | Cliente | 5 | Sprint 3 | Por hacer |
| [#11](https://github.com/huberangelramireznery-jpg/importachina/issues/11) | Como Cliente, quiero confirmar mi compra con mi dirección de envío, para generar mi pedido. | Cliente | 5 | Sprint 3 | Por hacer |
| [#12](https://github.com/huberangelramireznery-jpg/importachina/issues/12) | Como Vendedor, quiero ver la lista de pedidos y cambiar su estado, para dar seguimiento a cada venta. | Vendedor | 3 | Sprint 3 | Por hacer |
| [#13](https://github.com/huberangelramireznery-jpg/importachina/issues/13) | Como Vendedor, quiero registrar el pago de un pedido, para confirmar que la venta está cubierta. | Vendedor | 2 | Sprint 3 | Por hacer |
| [#14](https://github.com/huberangelramireznery-jpg/importachina/issues/14) | Como Cliente, quiero ver el historial de mis pedidos y su estado, para saber en qué punto está cada compra. | Cliente | 3 | Sprint 4 | Por hacer |
| [#15](https://github.com/huberangelramireznery-jpg/importachina/issues/15) | Como Vendedor, quiero ver el detalle completo de un pedido, para preparar el envío correctamente. | Vendedor | 2 | Sprint 4 | Por hacer |
| [#16](https://github.com/huberangelramireznery-jpg/importachina/issues/16) | Como Administrador, quiero ver un reporte de ventas por rango de fechas y los productos más vendidos, para tomar decisiones sobre el catálogo. | Administrador | 5 | Sprint 4 | Por hacer |

## Columnas del tablero
### Hecho (3)

- **HU-01** (3 pts) — Como Cliente, quiero registrarme con mi correo y una contraseña, para poder comprar en la tienda.
  - Criterios: El formulario valida correo único y contraseña de mínimo 8 caracteres. · Al registrarme, mi cuenta queda con el rol Cliente.
  - Issue: [#1](https://github.com/huberangelramireznery-jpg/importachina/issues/1)
- **HU-02** (2 pts) — Como Cliente, quiero iniciar y cerrar sesión, para acceder a mi cuenta de forma segura.
  - Criterios: Con credenciales correctas entro a mi cuenta; con incorrectas veo un mensaje de error claro. · Al cerrar sesión no puedo volver a las páginas privadas.
  - Issue: [#2](https://github.com/huberangelramireznery-jpg/importachina/issues/2)
- **HU-04** (2 pts) — Como Cliente, quiero editar mi perfil y mi dirección de envío, para recibir mis pedidos en el lugar correcto.
  - Criterios: Puedo cambiar mi nombre, teléfono y dirección. · Los cambios se guardan y se muestran al volver a entrar.
  - Issue: [#4](https://github.com/huberangelramireznery-jpg/importachina/issues/4)

### En Progreso (1)

- **HU-08** (3 pts) — Como Cliente, quiero ver el catálogo y el detalle de cada producto, para conocer lo que está disponible antes de comprar.
  - Criterios: El catálogo muestra imagen, título y precio, con paginación. · El detalle muestra descripción, imágenes y el botón para agregar al carrito.
  - Issue: [#8](https://github.com/huberangelramireznery-jpg/importachina/issues/8)

### Por hacer (12)

- **HU-03** (5 pts) — Como Administrador, quiero gestionar usuarios y asignarles un rol (Administrador, Vendedor o Cliente), para controlar quién accede a cada función.
  - Criterios: Puedo listar, crear, editar y desactivar usuarios. · Un Vendedor o Cliente no puede entrar al panel de administración.
  - Issue: [#3](https://github.com/huberangelramireznery-jpg/importachina/issues/3)
- **HU-05** (5 pts) — Como Administrador, quiero sincronizar productos desde la API de AliExpress, para llenar el catálogo sin cargarlos uno por uno.
  - Criterios: Al lanzar la sincronización se importan entre 20 y 50 productos con título, imagen y precio de costo. · Un producto ya importado no se duplica y cada sincronización queda registrada con su resultado.
  - Issue: [#5](https://github.com/huberangelramireznery-jpg/importachina/issues/5)
- **HU-06** (2 pts) — Como Administrador, quiero crear, editar y eliminar categorías, para mantener el catálogo organizado.
  - Criterios: Cada categoría tiene nombre único. · No puedo eliminar una categoría que tenga productos asignados.
  - Issue: [#6](https://github.com/huberangelramireznery-jpg/importachina/issues/6)
- **HU-07** (2 pts) — Como Administrador, quiero definir el margen de ganancia y ver el precio de venta de cada producto, para que la tienda gane sobre el costo de importación.
  - Criterios: El precio de venta se calcula a partir del costo y el margen. · Los cambios de margen se reflejan en el catálogo.
  - Issue: [#7](https://github.com/huberangelramireznery-jpg/importachina/issues/7)
- **HU-09** (3 pts) — Como Cliente, quiero buscar productos por palabra clave y filtrarlos por categoría, para encontrar lo que busco rápidamente.
  - Criterios: La búsqueda devuelve productos cuyo título contiene la palabra. · Puedo combinar la búsqueda con una categoría y limpiar los filtros.
  - Issue: [#9](https://github.com/huberangelramireznery-jpg/importachina/issues/9)
- **HU-10** (5 pts) — Como Cliente, quiero agregar productos al carrito y modificar sus cantidades, para preparar mi compra antes de pagar.
  - Criterios: Puedo agregar, cambiar la cantidad y quitar productos. · El carrito muestra subtotales y total actualizados.
  - Issue: [#10](https://github.com/huberangelramireznery-jpg/importachina/issues/10)
- **HU-11** (5 pts) — Como Cliente, quiero confirmar mi compra con mi dirección de envío, para generar mi pedido.
  - Criterios: Al confirmar se crea un pedido con estado Pendiente y el carrito queda vacío. · Se guarda el precio de cada producto al momento de la compra.
  - Issue: [#11](https://github.com/huberangelramireznery-jpg/importachina/issues/11)
- **HU-12** (3 pts) — Como Vendedor, quiero ver la lista de pedidos y cambiar su estado, para dar seguimiento a cada venta.
  - Criterios: Veo los pedidos con cliente, total y estado. · Puedo cambiar el estado entre Pendiente, Pagado, Enviado y Entregado.
  - Issue: [#12](https://github.com/huberangelramireznery-jpg/importachina/issues/12)
- **HU-13** (2 pts) — Como Vendedor, quiero registrar el pago de un pedido, para confirmar que la venta está cubierta.
  - Criterios: Registro método, monto y fecha del pago. · Al registrar el pago, el pedido pasa a Pagado.
  - Issue: [#13](https://github.com/huberangelramireznery-jpg/importachina/issues/13)
- **HU-14** (3 pts) — Como Cliente, quiero ver el historial de mis pedidos y su estado, para saber en qué punto está cada compra.
  - Criterios: Solo veo mis propios pedidos. · Cada pedido muestra fecha, productos, total y estado.
  - Issue: [#14](https://github.com/huberangelramireznery-jpg/importachina/issues/14)
- **HU-15** (2 pts) — Como Vendedor, quiero ver el detalle completo de un pedido, para preparar el envío correctamente.
  - Criterios: El detalle muestra productos, cantidades, dirección y datos de contacto. · Puedo volver a la lista sin perder los filtros.
  - Issue: [#15](https://github.com/huberangelramireznery-jpg/importachina/issues/15)
- **HU-16** (5 pts) — Como Administrador, quiero ver un reporte de ventas por rango de fechas y los productos más vendidos, para tomar decisiones sobre el catálogo.
  - Criterios: Puedo elegir fecha inicial y final y ver el total vendido. · Veo los 5 productos más vendidos del periodo.
  - Issue: [#16](https://github.com/huberangelramireznery-jpg/importachina/issues/16)


## Reglas de las columnas (Kanban)
| Columna | Una tarjeta entra cuando… | Sale cuando… | Límite WIP |
|---|---|---|---|
| Por hacer | Está en el sprint y tiene criterios de aceptación. | Alguien la toma. | — |
| En Proceso | Tiene responsable y rama de Git; el código está en un Pull Request. | El Pull Request está abierto. | 3 |
| En Pruebas | El Pull Request está abierto. | Pasa pruebas y revisión de un compañero. | 2 |
| Hecho | Cumple todos los criterios de aceptación. | Se archiva al cerrar el sprint. | — |

## Definición de terminado
1. Criterios de aceptación marcados en la Issue.
2. Código desplegado y funcionando en `https://importachina-2026.web.app`.
3. Permisos probados (lo permitido responde 200, lo no permitido 403).
4. Verificado en celular (responsive).
5. Pull Request abierto y revisado por el compañero.

## Etiquetas
- Rol: `Administrador` · `Vendedor` · `Cliente`
- Sprint: `Sprint 1` … `Sprint 4`

## Cuentas de prueba
| Rol | Correo | Contraseña |
|---|---|---|
| Administrador | admin@importachina.bo | Admin12345 |
| Vendedor | vendedor@importachina.bo | Vendedor12345 |
| Cliente | cliente@importachina.bo | Cliente12345 |

## Sistema en vivo
- Tienda con catálogo, carrito y pedido: https://importachina-2026.web.app
- Catálogo público sin cuenta: https://importachina-2026.web.app/catalogo.html
- Código: https://github.com/huberangelramireznery-jpg/importachina
