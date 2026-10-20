# HU-07 — Como Administrador, quiero definir el margen de ganancia y ver el precio de venta de cada producto, para que la tienda gane sobre el costo de importación.

| Dato | Valor |
|---|---|
| **ID** | HU-07 |
| **Rol** | Administrador |
| **Puntos** | 2 |
| **Sprint** | Sprint 2 — Catálogo y consumo de la API |
| **Estado** | Backlog |
| **Etiqueta** | Administrador · Sprint 2 |

## Criterios de aceptación
- [ ] El precio de venta se calcula a partir del costo y el margen.
- [ ] Los cambios de margen se reflejan en el catálogo.

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
