# HU-13 — Como Vendedor, quiero registrar el pago de un pedido, para confirmar que la venta está cubierta.

| Dato | Valor |
|---|---|
| **ID** | HU-13 |
| **Rol** | Vendedor |
| **Puntos** | 2 |
| **Sprint** | Sprint 3 — Carrito, pedidos y pagos |
| **Estado** | Backlog |
| **Etiqueta** | Vendedor · Sprint 3 |

## Criterios de aceptación
- [ ] Registro método, monto y fecha del pago.
- [ ] Al registrar el pago, el pedido pasa a Pagado.

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
