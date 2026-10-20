# HU-15 — Como Vendedor, quiero ver el detalle completo de un pedido, para preparar el envío correctamente.

| Dato | Valor |
|---|---|
| **ID** | HU-15 |
| **Rol** | Vendedor |
| **Puntos** | 2 |
| **Sprint** | Sprint 4 — Reportes y publicación |
| **Estado** | Backlog |
| **Etiqueta** | Vendedor · Sprint 4 |

## Criterios de aceptación
- [ ] El detalle muestra productos, cantidades, dirección y datos de contacto.
- [ ] Puedo volver a la lista sin perder los filtros.

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
