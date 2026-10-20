# HU-05 — Como Administrador, quiero sincronizar productos desde la API de AliExpress, para llenar el catálogo sin cargarlos uno por uno.

| Dato | Valor |
|---|---|
| **ID** | HU-05 |
| **Rol** | Administrador |
| **Puntos** | 5 |
| **Sprint** | Sprint 2 — Catálogo y consumo de la API |
| **Estado** | Backlog |
| **Etiqueta** | Administrador · Sprint 2 |

## Criterios de aceptación
- [ ] Al lanzar la sincronización se importan entre 20 y 50 productos con título, imagen y precio de costo.
- [ ] Un producto ya importado no se duplica y cada sincronización queda registrada con su resultado.

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
