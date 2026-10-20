# HU-11 — Como Cliente, quiero confirmar mi compra con mi dirección de envío, para generar mi pedido.

| Dato | Valor |
|---|---|
| **ID** | HU-11 |
| **Rol** | Cliente |
| **Puntos** | 5 |
| **Sprint** | Sprint 3 — Carrito, pedidos y pagos |
| **Estado** | Backlog |
| **Etiqueta** | Cliente · Sprint 3 |

## Criterios de aceptación
- [ ] Al confirmar se crea un pedido con estado Pendiente y el carrito queda vacío.
- [ ] Se guarda el precio de cada producto al momento de la compra.

## Subtareas técnicas
- [ ] **Migración / colección en Firestore:** Crear o ajustar la estructura de datos en `firestore.rules` y la colección correspondiente.
- [ ] **Modelo:** Definir el documento y sus campos en la colección.
- [ ] **Controlador:** Implementar la lógica en `public/index.html` y el render de la vista.
- [ ] **Vista:** Construir la interfaz y conectarla a los datos.
- [ ] **Prueba:** Verificar en la consola del navegador y con la app desplegada.

## Definición de terminado
- [ ] Todos los criterios de aceptación marcados
- [ ] Código desplegado en `https://importachina-2026.web.app`
- [ ] Prueba manual realizada (permisos correctos: 200 lo permitido, 403 lo no permitido)
- [ ] Verificado en celular (responsive)
- [ ] Pull Request abierto y revisado por el compañero

---
*Historia de usuario del tablero “Gestión - ImportaChina”.*
