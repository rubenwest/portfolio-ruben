/**
 * GoatCounter con View Transitions: el script oficial solo cuenta la carga
 * inicial, así que cada navegación se registra a mano en astro:page-load.
 * Los clics en WhatsApp, Telegram y Email se registran como eventos.
 */

interface GoatCounter {
  count: (vars: { path: string; title?: string; event?: boolean }) => void;
}

declare global {
  interface Window {
    goatcounter?: GoatCounter;
  }
}

/** Espera a que el script async de GoatCounter esté listo; si no carga (bloqueador), no hace nada. */
function withCounter(run: (counter: GoatCounter) => void, attempts = 20): void {
  if (window.goatcounter?.count) {
    run(window.goatcounter);
    return;
  }
  if (attempts > 0) window.setTimeout(() => withCounter(run, attempts - 1), 250);
}

document.addEventListener('astro:page-load', () => {
  const path = location.pathname + location.search;
  withCounter((counter) => counter.count({ path, title: document.title }));
});

document.addEventListener('click', (event) => {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('[data-contact]');
  if (!link) return;
  const channel = link.dataset.contact;
  withCounter((counter) => counter.count({ path: `contacto-${channel}`, title: `Contacto: ${channel}`, event: true }), 0);
});

export {};
