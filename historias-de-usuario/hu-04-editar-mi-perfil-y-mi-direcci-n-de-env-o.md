# HU-04 — Como Cliente, quiero editar mi perfil y mi dirección de envío, para recibir mis pedidos en el lugar correcto.

| Dato | Valor |
|---|---|
| **ID** | HU-04 |
| **Rol** | Cliente |
| **Puntos** | 2 |
| **Sprint** | Sprint 1 — Autenticación y roles |
| **Estado** | Backlog |
| **Etiqueta** | Cliente · Sprint 1 |

## Criterios de aceptación
- [ ] Puedo cambiar mi nombre, teléfono y dirección.
- [ ] Los cambios se guardan y se muestran al volver a entrar.

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
