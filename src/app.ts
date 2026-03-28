// ============================================================
//  app.ts — Lógica de la aplicación (completamente tipada)
// ============================================================

import {
  stepInstructions,
  mysteriesData,
  mysteryDetails,
  prayersList,
  type DayKey,
} from "./data";

// ── 1. Paso a Paso ─────────────────────────────────────────

function renderStepPanel(stepId: number): void {
  const panel = document.getElementById("instruction-panel");
  if (!panel) return;

  const data = stepInstructions[stepId];
  if (!data) return;

  document.querySelectorAll<HTMLElement>(".step-btn").forEach((btn) => {
    const isActive = btn.dataset["step"] === String(stepId);
    btn.classList.toggle("ring-2", isActive);
    btn.classList.toggle("ring-offset-2", isActive);
    btn.classList.toggle("ring-gold-500", isActive);
    btn.classList.toggle("rounded", isActive);
  });

  const prayersHtml = data.prayers
    .map(
      (p) =>
        `<span class="inline-block bg-parchment-100 dark:bg-[#2a2118] border border-parchment-300 dark:border-[#4a3828] text-parchment-800 dark:text-parchment-200 text-base px-2 py-1 rounded shadow-sm mr-2 mb-2 font-medium">${p}</span>`,
    )
    .join("");

  panel.innerHTML = `
    <div class="fade-in flex flex-col h-full justify-start">
      <span class="text-gold-500 text-base font-bold tracking-widest uppercase mb-2 block">Paso a Paso</span>
      <h3 class="text-2xl font-serif font-bold text-parchment-900 dark:text-parchment-100 mb-1">${data.title}</h3>
      <div class="text-gold-600 font-medium italic mb-6 border-b border-parchment-200 dark:border-[#3d3229] pb-2">
        Acción: ${data.action}
      </div>
      <div class="mb-8 text-parchment-800 dark:text-parchment-200 text-lg leading-relaxed">
        <p>${data.text}</p>
      </div>
      <div class="mt-auto bg-parchment-50 dark:bg-[#2a2118] p-4 rounded-xl border border-parchment-200 dark:border-[#4a3828]">
        <span class="block text-base text-parchment-800 dark:text-parchment-200 font-bold mb-2">Oraciones a recitar aquí:</span>
        <div class="flex flex-wrap">${prayersHtml}</div>
      </div>
    </div>
  `;
}

function initStepButtons(): void {
  document.querySelectorAll<HTMLElement>(".step-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const step = Number(btn.dataset["step"]);
      if (step) renderStepPanel(step);
    });
  });
}

// ── 2. Misterios ───────────────────────────────────────────

function renderMysteries(dayKey: DayKey): void {
  const display = document.getElementById("mystery-display");
  if (!display) return;

  const dayInfo = mysteriesData[dayKey];
  const mysteries = mysteryDetails[dayInfo.type];

  const mysteryCards = mysteries
    .map(
      (m, index) => `
      <div class="mystery-card bg-white dark:bg-[#1e1a16] p-4 rounded-lg shadow-sm border border-parchment-200 dark:border-[#3d3229] flex flex-col md:flex-row gap-4 items-start hover:border-gold-300 dark:hover:border-gold-700 transition-colors">
        <div class="mystery-number flex-shrink-0 w-8 h-8 rounded-full bg-parchment-100 dark:bg-[#2a2118] flex items-center justify-center font-serif font-bold text-gold-600 border border-gold-200 dark:border-[#5a4a38]">
          ${index + 1}
        </div>
        <div>
          <h4 class="font-bold text-lg text-parchment-900 dark:text-parchment-100">${m.title}</h4>
          <p class="text-parchment-800 dark:text-parchment-300 mt-1">${m.desc}</p>
          <div class="mt-2 text-base text-gold-600 font-medium">
            <span class="opacity-70">Fruto del misterio:</span> ${m.fruit}
          </div>
        </div>
      </div>
    `,
    )
    .join("");

  display.innerHTML = `
    <div class="fade-in">
      <div class="text-center mb-8">
        <span class="inline-block px-3 py-1 rounded-full text-base font-bold mb-2 ${dayInfo.color}">
          Misterios ${dayInfo.type}
        </span>
        <h3 class="text-2xl font-serif font-bold text-parchment-900 dark:text-parchment-100">
          Meditaciones para el ${dayInfo.name}
        </h3>
      </div>
      <div class="space-y-4">${mysteryCards}</div>
    </div>
  `;
}

function updateDayButtons(activeDayKey: DayKey): void {
  document.querySelectorAll<HTMLButtonElement>(".day-btn").forEach((btn) => {
    const isActive = btn.dataset["day"] === activeDayKey;
    btn.className = [
      "px-4 py-2 rounded-full font-medium transition-colors border day-btn",
      "focus:outline-none focus:ring-2 ring-offset-2 ring-gold-500",
      isActive
        ? "bg-gold-600 text-white border-gold-600 shadow-md scale-105"
        : "bg-white dark:bg-[#1e1a16] text-parchment-800 dark:text-parchment-200 border-parchment-300 dark:border-[#3d3229] hover:bg-parchment-100 dark:hover:bg-[#2a2118]",
    ].join(" ");
  });
}

function initMysteries(): void {
  const selector = document.getElementById("day-selector");
  if (!selector) return;

  const jsDay = new Date().getDay(); // 0 = domingo
  const dayKeys: DayKey[] = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  const todayKey: DayKey = dayKeys[jsDay];

  // Construir botones en orden lunes→domingo
  const orderedKeys: DayKey[] = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];

  orderedKeys.forEach((dayKey) => {
    const dayInfo = mysteriesData[dayKey];
    const btn = document.createElement("button");
    btn.className =
      "px-4 py-2 rounded-full font-medium transition-colors border day-btn focus:outline-none focus:ring-2 ring-offset-2 ring-gold-500 bg-white text-parchment-800 border-parchment-300 hover:bg-parchment-100";
    btn.textContent = dayInfo.name;
    btn.dataset["day"] = dayKey;

    btn.addEventListener("click", () => {
      updateDayButtons(dayKey);
      renderMysteries(dayKey);
    });

    selector.appendChild(btn);
  });

  // Cargar día actual por defecto
  updateDayButtons(todayKey);
  renderMysteries(todayKey);
}

// ── 3. Oraciones ───────────────────────────────────────────

function toggleOrigin(id: string): void {
  const content = document.getElementById(`origin-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  if (!content || !icon) return;

  const isHidden = content.classList.contains("hidden");
  content.classList.toggle("hidden", !isHidden);
  icon.textContent = isHidden ? "↓" : "→";
}

function initPrayers(): void {
  const grid = document.getElementById("prayers-grid");
  if (!grid) return;

  prayersList.forEach((prayer) => {
    const card = document.createElement("div");
    card.className =
      "prayer-card bg-white dark:bg-[#1e1a16] rounded-xl p-6 shadow-sm border border-parchment-200 dark:border-[#3d3229] flex flex-col h-full hover:shadow-md transition-shadow";

    card.innerHTML = `
      <h3 class="font-serif text-xl font-bold text-parchment-900 dark:text-parchment-100 mb-3 border-b border-parchment-100 dark:border-[#3d3229] pb-2 flex justify-between items-center">
        ${prayer.name}
        <span class="text-gold-500 text-base"></span>
      </h3>
      <p class="text-parchment-800 dark:text-parchment-300 italic leading-relaxed mb-4 flex-grow text-xl">"${prayer.text}"</p>

      <button
        id="btn-${prayer.id}"
        class="origin-btn text-left w-full mt-auto bg-parchment-50 dark:bg-[#2a2118] hover:bg-parchment-100 dark:hover:bg-[#332819] text-parchment-900 dark:text-parchment-200 text-base font-medium py-2 px-3 rounded-lg border border-parchment-200 dark:border-[#3d3229] transition-colors flex justify-between items-center focus:outline-none focus:ring-2 ring-gold-500"
        aria-expanded="false"
      >
        <span>Conocer Origen</span>
        <span id="icon-${prayer.id}">→</span>
      </button>

      <div id="origin-${prayer.id}"
           class="origin-panel hidden mt-3 text-base text-parchment-800 dark:text-parchment-200 bg-gold-50 dark:bg-[#2a1f0f] p-4 rounded-lg border border-gold-200 dark:border-[#5a4a38] leading-relaxed fade-in">
        ${prayer.origin}
      </div>
    `;

    const btn = card.querySelector<HTMLButtonElement>(`#btn-${prayer.id}`);
    btn?.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      toggleOrigin(prayer.id);
    });

    grid.appendChild(card);
  });
}

// ── Navbar hide-on-scroll ───────────────────────────────────

function initNavbarScroll(): void {
  const nav = document.querySelector("nav");
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const scrolled = currentY > 60; // solo actúa después de 60px
        const goingDown = currentY > lastY;

        if (scrolled && goingDown) {
          nav.style.transform = "translateY(-100%)";
        } else {
          nav.style.transform = "translateY(0)";
        }

        lastY = currentY;
        ticking = false;
      });
    },
    { passive: true },
  );
}

// ── 4. Menú móvil ──────────────────────────────────────────

function initMobileMenu(): void {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.add("hidden"));
  });
}

// ── 5. Control de tamaño de letra ──────────────────────────
//
//  3 botones: A− baja 1 nivel, A resetea, A+ sube 1 nivel.
//  6 niveles totales — ~14px · ~16px · ~19px · ~22px · ~26px · ~30px

const FONT_LEVELS: number[] = [87.5, 100, 118.75, 137.5, 162.5, 187.5];
const DEFAULT_LEVEL_INDEX = 1;
let currentLevelIndex = DEFAULT_LEVEL_INDEX;

function applyFontLevel(index: number): void {
  currentLevelIndex = Math.max(0, Math.min(FONT_LEVELS.length - 1, index));
  document.documentElement.style.fontSize = `${FONT_LEVELS[currentLevelIndex]}%`;
  syncActiveButton();
}

function syncActiveButton(): void {
  // Desktop
  document
    .getElementById("fs-decrease")
    ?.classList.toggle("fs-active", currentLevelIndex === 0);
  document
    .getElementById("fs-reset")
    ?.classList.toggle("fs-active", currentLevelIndex === DEFAULT_LEVEL_INDEX);
  document
    .getElementById("fs-increase")
    ?.classList.toggle(
      "fs-active",
      currentLevelIndex === FONT_LEVELS.length - 1,
    );

  // Móvil
  document
    .getElementById("fs-decrease-m")
    ?.classList.toggle("fs-active", currentLevelIndex === 0);
  document
    .getElementById("fs-reset-m")
    ?.classList.toggle("fs-active", currentLevelIndex === DEFAULT_LEVEL_INDEX);
  document
    .getElementById("fs-increase-m")
    ?.classList.toggle(
      "fs-active",
      currentLevelIndex === FONT_LEVELS.length - 1,
    );
}

function initFontSize(): void {
  document
    .getElementById("fs-decrease")
    ?.addEventListener("click", () => applyFontLevel(currentLevelIndex - 1));
  document
    .getElementById("fs-reset")
    ?.addEventListener("click", () => applyFontLevel(DEFAULT_LEVEL_INDEX));
  document
    .getElementById("fs-increase")
    ?.addEventListener("click", () => applyFontLevel(currentLevelIndex + 1));

  document
    .getElementById("fs-decrease-m")
    ?.addEventListener("click", () => applyFontLevel(currentLevelIndex - 1));
  document
    .getElementById("fs-reset-m")
    ?.addEventListener("click", () => applyFontLevel(DEFAULT_LEVEL_INDEX));
  document
    .getElementById("fs-increase-m")
    ?.addEventListener("click", () => applyFontLevel(currentLevelIndex + 1));

  syncActiveButton();
}

// ── 6. Modo oscuro ─────────────────────────────────────────

function applyDark(dark: boolean): void {
  document.documentElement.classList.toggle("dark", dark);
  const icon = dark ? "☀️" : "🌙";
  const label = dark ? "Activar modo claro" : "Activar modo oscuro";
  ["dark-toggle", "dark-toggle-m"].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.textContent = icon;
    btn.title = label;
    btn.setAttribute("aria-label", label);
  });
}

function initDarkMode(): void {
  let isDark = false;

  ["dark-toggle", "dark-toggle-m"].forEach((id) => {
    document.getElementById(id)?.addEventListener("click", () => {
      isDark = !isDark;
      applyDark(isDark);
    });
  });

  applyDark(isDark);
}

// ── Punto de entrada ───────────────────────────────────────

export function initApp(): void {
  initNavbarScroll(); // ← nueva línea
  initMobileMenu();
  initFontSize();
  initDarkMode();
  initStepButtons();
  initMysteries();
  initPrayers();

  if (window.innerWidth > 768) {
    renderStepPanel(1);
  }
}
