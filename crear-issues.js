// Crea las 16 historias de usuario como Issues de GitHub en el repositorio.
// Uso:
//   node crear-issues.js <owner> <repo> <TOKEN_PERSONAL>
// Ejemplo:
//   node crear-issues.js huberangelramireznery-jpg importachina <TOKEN>
const fs = require("fs");
const S = require("C:\\Users\\huber\\AppData\\Local\\Temp\\opencode\\docgen2\\S.json");

const [owner, repo, token] = process.argv.slice(2);
if (!owner || !repo || !token) {
  console.error("Uso: node crear-issues.js <owner> <repo> <TOKEN_PERSONAL>");
  process.exit(1);
}
const API = `https://api.github.com/repos/${owner}/${repo}`;
const H = { "Authorization": `Bearer ${token}`, "Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json", "User-Agent": "importachina-bot" };

const SPRINT_OBJ = { 1: "Autenticación y roles", 2: "Catálogo y consumo de la API", 3: "Carrito, pedidos y pagos", 4: "Reportes y publicación" };

async function main() {
  // 1. Crear labels
  const labels = [
    ["Administrador", "b45309", "eeccaa"],
    ["Vendedor", "c2410c", "ffd8b1"],
    ["Cliente", "2563eb", "c7d9fe"],
    ["Sprint 1", "0ea5e9", "bae6fd"],
    ["Sprint 2", "16a34a", "bbf7d0"],
    ["Sprint 3", "d97706", "fde68a"],
    ["Sprint 4", "7c3aed", "ddd6fe"]
  ];
  for (const [name, color, light] of labels) {
    const r = await fetch(`${API}/labels`, { method: "POST", headers: H, body: JSON.stringify({ name, color, description: "Etiqueta de ImportaChina" }) });
    console.log("label", name, r.status);
  }
  // 2. Crear issues
  for (const sp of S) {
    for (const h of sp.h) {
      const [id, rol, accion, beneficio, pts, criterios] = h;
      const body = [
        `| Dato | Valor |`, `|---|---|`, `| **ID** | ${id} |`, `| **Rol** | ${rol} |`,
        `| **Puntos** | ${pts} |`, `| **Sprint** | Sprint ${sp.n} — ${SPRINT_OBJ[sp.n]} |`,
        ``, `## Criterios de aceptación`, ...criterios.map(c => `- [ ] ${c}`),
        ``, `## Subtareas técnicas`,
        `- [ ] **Migración / colección:** estructura de datos y reglas en \`firestore.rules\``,
        `- [ ] **Modelo:** documento y campos de la colección`,
        `- [ ] **Controlador:** lógica en \`public/index.html\``,
        `- [ ] **Vista:** interfaz y conexión a los datos`,
        `- [ ] **Prueba:** verificación en la app desplegada`,
        ``, `## Definición de terminado`,
        `- [ ] Criterios de aceptación marcados`,
        `- [ ] Desplegado y probado en https://importachina-2026.web.app`,
        `- [ ] Verificado en celular`,
        `- [ ] Pull Request revisado por el compañero`
      ].join("\n");
      const title = `Como ${rol}, quiero ${accion}, para ${beneficio}.`;
      const r = await fetch(`${API}/issues`, {
        method: "POST", headers: H,
        body: JSON.stringify({ title, body, labels: [rol, `Sprint ${sp.n}`] })
      });
      const j = await r.json();
      console.log(r.ok ? `issue #${j.number} ${id}` : `ERROR ${id}: ${j.message}`);
      await new Promise(s2 => setTimeout(s2, 700));
    }
  }
  // 3. Crear el tablero Kanban como issue fija de control
  await fetch(`${API}/issues`, { method: "POST", headers: H, body: JSON.stringify({
    title: "📋 Tablero Kanban — Gestión ImportaChina",
    body: [
      "**Backlog** — HU-05, HU-06, HU-07, HU-08, HU-09, HU-10, HU-11, HU-12, HU-13, HU-14, HU-15, HU-16",
      "**Por Hacer** — historias del sprint en curso",
      "**En Proceso (máx. 3)** — HU-08",
      "**En Pruebas (máx. 2)** — HU-01, HU-02, HU-04",
      "**Hecho** — —",
      "",
      "Reglas: una tarjeta entra a En Proceso cuando tiene responsable y rama de Git; a En Pruebas cuando el PR está abierto; a Hecho cuando cumple la definición de terminado (criterios marcados, desplegado, probado en móvil y PR revisado).",
      "Al cerrar cada sprint se archivan las tarjetas de Hecho y se deja aquí la nota de la retrospectiva."
    ].join("\n")
  }) });
  console.log("tablero Kanban creado");
}
main().catch(e => console.error("ERROR", e.message));
