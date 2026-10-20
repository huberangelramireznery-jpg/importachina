# HU-14 — Como Cliente, quiero ver el historial de mis pedidos y su estado, para saber en qué punto está cada compra.

| Dato | Valor |
|---|---|
| **ID** | HU-14 |
| **Rol** | Cliente |
| **Puntos** | 3 |
| **Sprint** | Sprint 4 — Reportes y publicación |
| **Estado** | Backlog |
| **Etiqueta** | Cliente · Sprint 4 |

## Criterios de aceptación
- [ ] Solo veo mis propios pedidos.
- [ ] Cada pedido muestra fecha, productos, total y estado.

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
