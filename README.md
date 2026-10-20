# 🛒 ImportaChina — Sistema web de tienda de productos importados

Proyecto académico con **Firebase** (Firestore + Authentication + Hosting) y metodología ágil **Scrum/Kanban**.
Demo: https://importachina-2026.web.app

## Requisitos
- Node.js 18+ y `npm i -g firebase-tools`
- Cuenta Google con acceso al proyecto `importachina-2026`

## Instalación y despliegue
```bat
cd importachina-firebase
firebase login
firebase use importachina-2026
firebase deploy --only firestore:rules,hosting
```

## Cuentas de prueba
| Rol | Correo | Contraseña |
|---|---|---|
| Administrador | admin@importachina.bo | Admin12345 |
| Cliente | cliente@importachina.bo | Cliente12345 |

> Las cuentas nuevas se registran desde `/login.html` y quedan **pendientes** hasta que el administrador las aprueba (HU-01, HU-03).

## Estructura
- `public/index.html` → catálogo, detalle, carrito, checkout, mis pedidos, perfil y panel por rol
- `public/login.html` → login y registro con aprobación
- `public/firebase-config.js` → claves del proyecto
- `firestore.rules` → permisos por rol (cliente, vendedor, administrador)
- `wireframes/index.html` → wireframes de catálogo y detalle (escritorio y móvil)
- `tablero/index.html` → tablero Kanban con las 16 historias
- `ImportaChina_Backlog_y_Tablero.docx` → backlog, sprints, criterios y reglas del tablero

## Base de datos (NoSQL documental)
| Colección | Contenido |
|---|---|
| `Usuarios` | nombre, correo, rol, estado, teléfono, dirección |
| `Roles` | administrador, vendedor, cliente |
| `Categorias` | nombre y estado |
| `Productos` | nombre, costo, margen, precio de venta, stock, imagen, externalId |
| `Carritos` | usuario, items embebidos, total |
| `Pedidos` | usuario, items embebidos con precio congelado, total, estado, dirección |
| `Pagos` | pedido, método, monto, estado |
| `SyncLogs` | resultado de cada sincronización del catálogo |

## Reglas de negocio clave
- El **precio de venta** = costo × (1 + margen/100) y se recalcula al guardar el producto.
- El pedido guarda el **precio del producto al momento de la compra** (HU-11).
- El **vendedor** cambia el estado del pedido y registra el pago; no administra usuarios.
- El **administrador** gestiona usuarios, roles, productos, categorías, sincroniza y ve reportes.
- Un **cliente** solo ve y edita su propia información y sus pedidos.

## Git (dúo)
```bat
git init
git add .
git commit -m "Sprint 0: preparacion del proyecto"
git branch -M main
git remote add origin URL_DEL_REPO
git push -u origin main
```
Una rama por historia (`us-10-carrito`) y Pull Request para que el historial muestre a ambos integrantes.
