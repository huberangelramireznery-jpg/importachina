# HU-08 — Como Cliente, quiero ver el catálogo y el detalle de cada producto, para conocer lo que está disponible antes de comprar.

| Dato | Valor |
|---|---|
| **ID** | HU-08 |
| **Rol** | Cliente |
| **Puntos** | 3 |
| **Sprint** | Sprint 2 — Catálogo y consumo de la API |
| **Estado** | Backlog |
| **Etiqueta** | Cliente · Sprint 2 |

## Criterios de aceptación
- [ ] El catálogo muestra imagen, título y precio, con paginación.
- [ ] El detalle muestra descripción, imágenes y el botón para agregar al carrito.

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
