// ============================================================
//  template.ts — Markup HTML del shell de la aplicación
//  Solo contiene estructura estática. La lógica va en app.ts
// ============================================================

export function getAppShell(): string {
  return `
    <!-- ── Navbar ──────────────────────────────────────────── -->
    <nav class="fixed w-full z-50 glass-panel shadow-sm top-0">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">

          <!-- Logo fijo — no hereda font-size del <html> -->
          <div class="flex-shrink-0 flex items-center gap-2">
            <span style="font-size:1.5rem" class="text-gold-600">📿</span>
            <span style="font-size:1.1rem" class="font-serif font-bold text-parchment-800 dark:text-parchment-200">El Santo Rosario</span>
          </div>

          <!-- Links desktop -->
          <div class="hidden lg:flex space-x-8">
            <a href="#paso-a-paso" class="text-parchment-800 dark:text-parchment-200 hover:text-gold-600 font-medium transition-colors">Guía Paso a Paso</a>
            <a href="#misterios"   class="text-parchment-800 dark:text-parchment-200 hover:text-gold-600 font-medium transition-colors">Los Misterios</a>
            <a href="#oraciones"   class="text-parchment-800 dark:text-parchment-200 hover:text-gold-600 font-medium transition-colors">Las Oraciones y Origen</a>
          </div>

          <!-- Controles desktop: tamaño letra + modo oscuro -->
          <div class="hidden lg:flex items-center gap-2 ml-6">
            <div class="flex items-center gap-1" role="group" aria-label="Tamaño de letra">
              <button id="fs-decrease" title="Reducir letra"  class="fs-btn" style="font-size:0.78rem">A−</button>
              <button id="fs-reset"    title="Tamaño normal"  class="fs-btn" style="font-size:0.9rem">A</button>
              <button id="fs-increase" title="Agrandar letra" class="fs-btn" style="font-size:1.1rem">A+</button>
            </div>
            <button id="dark-toggle" title="Modo oscuro"
              class="fs-btn ml-1" style="font-size:1rem" aria-label="Alternar modo oscuro">🌙</button>
          </div>

          <!-- Botón hamburguesa móvil -->
          <div class="lg:hidden flex items-center">
            <button id="mobile-menu-btn" class="text-parchment-800 dark:text-parchment-200 hover:text-gold-600 focus:outline-none">
              <span style="font-size:1.5rem">☰</span>
            </button>
          </div>

        </div>
      </div>

      <!-- Menú móvil desplegable -->
      <div id="mobile-menu" class="hidden lg:hidden bg-parchment-100 dark:bg-parchment-900 border-t border-parchment-200 dark:border-parchment-800">
        <a href="#paso-a-paso" class="block px-4 py-3 text-base font-medium hover:bg-parchment-200 dark:hover:bg-parchment-800 dark:text-parchment-200">Guía Paso a Paso</a>
        <a href="#misterios"   class="block px-4 py-3 text-base font-medium hover:bg-parchment-200 dark:hover:bg-parchment-800 dark:text-parchment-200">Los Misterios</a>
        <a href="#oraciones"   class="block px-4 py-3 text-base font-medium hover:bg-parchment-200 dark:hover:bg-parchment-800 dark:text-parchment-200">Las Oraciones y Origen</a>
      </div>

      <!-- Segunda fila móvil: tamaño letra + modo oscuro (siempre visible) -->
      <div class="lg:hidden flex justify-center items-center gap-3 py-2 bg-parchment-50 dark:bg-parchment-900 border-t border-parchment-200 dark:border-parchment-800">
        <span style="font-size:0.75rem" class="text-parchment-800 dark:text-parchment-200 font-medium">Letra:</span>
        <div class="flex items-center gap-1" role="group" aria-label="Tamaño de letra">
          <button id="fs-decrease-m" class="fs-btn" style="font-size:0.75rem">A−</button>
          <button id="fs-reset-m"    class="fs-btn" style="font-size:0.75rem">A</button>
          <button id="fs-increase-m" class="fs-btn" style="font-size:0.75rem">A+</button>
        </div>
        <button id="dark-toggle-m" title="Modo oscuro"
          class="fs-btn ml-1" style="font-size:0.9rem" aria-label="Alternar modo oscuro">🌙</button>
      </div>

    </nav>

    <!-- ── Hero ─────────────────────────────────────────────── -->
    <header class="pt-36 sm:pt-20 px-0 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h1 class="font-serif text-4xl sm:text-5xl font-bold text-parchment-800 dark:text-parchment-200 mb-6 leading-tight">
        Aprende a Rezar <br><span class="text-gold-600">El Santo Rosario</span>
      </h1>
      <p class="text-lg text-parchment-900 dark:text-parchment-300 opacity-80 max-w-2xl mx-auto px-10 pb-10">
        Una guía interactiva completa para comprender y practicar esta devoción. Explora cómo
        sostenerlo, qué misterios meditar según el día y descubre el profundo origen histórico
        y bíblico de cada oración.
      </p>
    </header>

    <!-- ── Main ─────────────────────────────────────────────── -->
    <main class="space-y-24">

      <!-- Sección 1: Paso a Paso -->
      <section id="paso-a-paso" class="px-0 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
        <div class="text-center mb-10 px-3 sm:px-0">
          <h2 class="font-serif text-3xl font-bold text-parchment-800 dark:text-parchment-200 mb-4">Guía Práctica: Paso a Paso</h2>
          <p class="text-parchment-900 dark:text-parchment-300 opacity-80 max-w-3xl mx-auto">
            Interactúa con la estructura del rosario. Selecciona un punto para ver las instrucciones detalladas.
          </p>
        </div>

        <div class="flex flex-col md:flex-row gap-8 items-start justify-center interactive-container">

          <!-- Visual del rosario -->
          <div class="rosario-visual w-full md:w-1/3 flex justify-center py-4 bg-white dark:bg-[#1e1a16] rounded-2xl shadow-sm border border-parchment-200 dark:border-[#3d3229] relative">
            <div class="absolute w-1 bg-parchment-300 dark:bg-[#3d3229] top-0 left-1/2 transform -translate-x-1/2 z-0 rounded-full" style="height: calc(100% - 7rem)"></div>

            <div class="flex flex-col items-center space-y-4 z-10 w-full">

              <button class="step-btn group flex flex-col items-center outline-none w-full" data-step="1">
                <div class="w-12 h-16 flex items-center justify-center text-gold-600 text-3xl bead bg-white dark:bg-[#1e1a16] border-2 border-gold-500 rounded-sm mb-1 transition-colors group-hover:bg-gold-50 dark:group-hover:bg-[#2a2118]">✝</div>
                <span class="bead-label text-base font-bold uppercase tracking-wider text-parchment-800 dark:text-parchment-300 bg-white dark:bg-[#1e1a16] px-2 rounded">Inicio</span>
              </button>

              <button class="step-btn group flex flex-col items-center outline-none w-full" data-step="2">
                <div class="w-6 h-6 rounded-full bg-parchment-800 dark:bg-parchment-300 bead shadow-md border-2 border-white dark:border-[#1e1a16] group-hover:bg-gold-600"></div>
              </button>

              <div class="flex flex-col space-y-2">
                <button class="step-btn group flex justify-center outline-none w-full" data-step="3">
                  <div class="w-4 h-4 rounded-full bg-parchment-300 dark:bg-parchment-800 bead shadow-sm border border-white dark:border-[#1e1a16] group-hover:bg-gold-400"></div>
                </button>
                <button class="step-btn group flex justify-center outline-none w-full" data-step="3">
                  <div class="w-4 h-4 rounded-full bg-parchment-300 dark:bg-parchment-800 bead shadow-sm border border-white dark:border-[#1e1a16] group-hover:bg-gold-400"></div>
                </button>
                <button class="step-btn group flex justify-center outline-none w-full" data-step="3">
                  <div class="w-4 h-4 rounded-full bg-parchment-300 dark:bg-parchment-800 bead shadow-sm border border-white dark:border-[#1e1a16] group-hover:bg-gold-400"></div>
                </button>
              </div>

              <button class="step-btn group flex flex-col items-center outline-none w-full mt-2" data-step="4">
                <div class="w-10 h-10 rounded-full bg-gold-200 dark:bg-gold-700 border-2 border-gold-500 flex items-center justify-center bead shadow-md group-hover:bg-gold-300 dark:group-hover:bg-gold-600">
                  <span class="text-gold-700 dark:text-gold-200 text-base font-bold">M</span>
                </div>
                <span class="bead-label text-base font-bold uppercase tracking-wider text-parchment-800 dark:text-parchment-300 bg-white dark:bg-[#1e1a16] px-2 rounded mt-1">Centro</span>
              </button>

<div class="w-full flex justify-center mt-6">
  <button
    class="step-btn w-32 h-32 border-4 border-dashed border-parchment-300 dark:border-parchment-800 rounded-full flex items-center justify-center relative group cursor-pointer outline-none"
    data-step="5"
  >
    <!-- Abajo (antes era arriba) -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-parchment-300 dark:bg-parchment-800"></div>

    <!-- Centro derecha -->
    <div class="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-parchment-300 dark:bg-parchment-800"></div>

    <!-- Centro izquierda -->
    <div class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-parchment-300 dark:bg-parchment-800"></div>

    <!-- Arriba derecha (antes abajo derecha) -->
    <div class="absolute top-[15%] right-[15%] translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-parchment-300 dark:bg-parchment-800"></div>

    <!-- Arriba izquierda (antes abajo izquierda) -->
    <div class="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-parchment-300 dark:bg-parchment-800"></div>

    <!-- Texto -->
    <div class="decenas-label text-center font-bold text-parchment-800 dark:text-parchment-200 text-base bg-white dark:bg-[#1e1a16] p-1 rounded group-hover:text-gold-600 transition-colors z-10">
      Las<br>Decenas
    </div>
  </button>
</div>

              <button class="step-btn group flex flex-col items-center outline-none w-full mt-8 relative z-10" data-step="6">
                <div class="w-10 h-10 flex items-center justify-center text-gold-600 text-2xl bead bg-white dark:bg-[#1e1a16] border-2 border-gold-500 rounded-full shadow-md group-hover:bg-gold-50 dark:group-hover:bg-[#2a2118]">🙏</div>
                <span class="bead-label text-base font-bold uppercase tracking-wider text-parchment-800 dark:text-parchment-300 bg-white dark:bg-[#1e1a16] px-2 rounded mt-1">Cierre</span>
              </button>

            </div>
          </div>

          <!-- Panel de instrucciones -->
          <div id="instruction-panel"
               class="w-full md:w-2/3 bg-white dark:bg-[#1e1a16] p-6 md:p-8 rounded-2xl shadow-sm border border-parchment-200 dark:border-[#3d3229] min-h-[400px]">
            <div class="h-full flex flex-col justify-center items-center text-center opacity-60">
              <span class="text-4xl mb-4 text-gold-500">👈</span>
              <h3 class="text-xl font-serif font-bold mb-2 dark:text-parchment-200">Selecciona un elemento</h3>
              <p class="dark:text-parchment-300">Haz clic en las partes del rosario interactivo para ver las instrucciones.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- Sección 2: Los Misterios -->
      <section id="misterios"
               class="px-0 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 bg-white dark:bg-[#1e1a16] rounded-3xl p-8 shadow-sm border border-parchment-200 dark:border-[#3d3229]">
        <div class="text-center mb-10 px-3 sm:px-0">
          <h2 class="font-serif text-3xl font-bold text-parchment-800 dark:text-parchment-200 mb-4">Los Misterios del Rosario</h2>
          <p class="text-parchment-900 dark:text-parchment-300 opacity-80 max-w-3xl mx-auto">
            Selecciona el día de la semana para descubrir qué misterios contemplar.
          </p>
        </div>
        <div id="day-selector" class="flex flex-wrap justify-center gap-2 mb-8"></div>
        <div id="mystery-display" class="bg-parchment-50 dark:bg-[#1a1510] rounded-xl p-6 md:p-10 border border-parchment-200 dark:border-[#3d3229]">
          <div class="text-center">
            <h3 class="text-2xl font-serif font-bold text-gold-600 mb-2">Selecciona un Día</h3>
            <p class="text-parchment-800 dark:text-parchment-300">Usa los botones superiores para ver los misterios.</p>
          </div>
        </div>
      </section>

      <!-- Sección 3: Oraciones y Origen -->
      <section id="oraciones" class="px-0 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
        <div class="text-center mb-10 px-3 sm:px-0">
          <h2 class="font-serif text-3xl font-bold text-parchment-800 dark:text-parchment-200 mb-4">Textos y Orígenes Históricos</h2>
          <p class="text-parchment-900 dark:text-parchment-300 opacity-80 max-w-3xl mx-auto">
            Haz clic en «Conocer Origen» para descubrir la riqueza histórica y bíblica de cada oración.
          </p>
        </div>
        <div id="prayers-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 sm:px-0"></div>
      </section>

    </main>

    <!-- ── Footer ────────────────────────────────────────────── -->
    <footer class="bg-parchment-900 dark:bg-[#0f0c09] text-parchment-100 py-12 text-center mt-24">
      <div class="max-w-4xl mx-auto px-4">
        <span class="text-3xl mb-4 block text-gold-500">🕊️</span>
        <h3 class="font-serif text-xl font-bold mb-4">El Rosario es la síntesis de todo el Evangelio.</h3>
        <p class="opacity-70 text-base">Esta guía fue creada para facilitar la comprensión y la práctica de esta devoción tradicional.</p>
      </div>
    </footer>
  `;
}
