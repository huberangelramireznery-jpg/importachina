# HU-01 — Como Cliente, quiero registrarme con mi correo y una contraseña, para poder comprar en la tienda.

| Dato | Valor |
|---|---|
| **ID** | HU-01 |
| **Rol** | Cliente |
| **Puntos** | 3 |
| **Sprint** | Sprint 1 — Autenticación y roles |
| **Estado** | Backlog |
| **Etiqueta** | Cliente · Sprint 1 |

## Criterios de aceptación
- [ ] El formulario valida correo único y contraseña de mínimo 8 caracteres.
- [ ] Al registrarme, mi cuenta queda con el rol Cliente.

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
