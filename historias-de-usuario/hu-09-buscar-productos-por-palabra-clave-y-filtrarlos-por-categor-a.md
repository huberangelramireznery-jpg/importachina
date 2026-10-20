# HU-09 — Como Cliente, quiero buscar productos por palabra clave y filtrarlos por categoría, para encontrar lo que busco rápidamente.

| Dato | Valor |
|---|---|
| **ID** | HU-09 |
| **Rol** | Cliente |
| **Puntos** | 3 |
| **Sprint** | Sprint 2 — Catálogo y consumo de la API |
| **Estado** | Backlog |
| **Etiqueta** | Cliente · Sprint 2 |

## Criterios de aceptación
- [ ] La búsqueda devuelve productos cuyo título contiene la palabra.
- [ ] Puedo combinar la búsqueda con una categoría y limpiar los filtros.

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
