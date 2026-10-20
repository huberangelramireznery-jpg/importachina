# HU-03 — Como Administrador, quiero gestionar usuarios y asignarles un rol (Administrador, Vendedor o Cliente), para controlar quién accede a cada función.

| Dato | Valor |
|---|---|
| **ID** | HU-03 |
| **Rol** | Administrador |
| **Puntos** | 5 |
| **Sprint** | Sprint 1 — Autenticación y roles |
| **Estado** | Backlog |
| **Etiqueta** | Administrador · Sprint 1 |

## Criterios de aceptación
- [ ] Puedo listar, crear, editar y desactivar usuarios.
- [ ] Un Vendedor o Cliente no puede entrar al panel de administración.

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
