// ============================================================
//  main.ts — Punto de entrada de la aplicación
//  Monta el HTML del shell y luego inicializa la lógica
// ============================================================

import './styles.css';
import { getAppShell } from './template';
import { initApp }     from './app';

const root = document.getElementById('app');

if (!root) {
  throw new Error('No se encontró el elemento #app en el DOM');
}

// 1. Inyectar el markup (solo el contenido del <body>, sin <html>/<head>)
root.innerHTML = getAppShell();

// 2. Inicializar toda la lógica DESPUÉS de montar el HTML
//    (importante: los querySelector funcionan porque el DOM ya existe)
initApp();
