let cleanup: (() => void) | undefined;
function initScenes() {
  cleanup?.();
  const controller = new AbortController();
  const {signal} = controller;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const hover = matchMedia('(hover: hover) and (pointer: fine)');
  document.querySelectorAll<HTMLElement>('[data-flip-card]').forEach(card => {
    const button = card.querySelector<HTMLButtonElement>('button')!;
    const front = card.querySelector<HTMLElement>('[data-flip-front]')!;
    const back = card.querySelector<HTMLElement>('[data-flip-back]')!;
    let pinned = false;
    const show = (open: boolean) => {
      card.classList.toggle('is-flipped', open);
      button.setAttribute('aria-expanded', String(open));
      front.setAttribute('aria-hidden', String(open));
      back.setAttribute('aria-hidden', String(!open));
      // La cara oculta queda inerte: sus enlaces no se tabulan ni se anuncian.
      front.inert = open;
      back.inert = !open;
    };
    card.classList.add('is-enhanced');
    show(false);
    card.addEventListener('pointerenter', () => {if(hover.matches) show(true);}, {signal});
    card.addEventListener('pointerleave', () => {if(!pinned) show(false);}, {signal});
    // El clic se escucha en la tarjeta, no en el botón: así el disparador puede
    // dejar pasar el ratón y los enlaces del reverso siguen siendo pulsables.
    card.addEventListener('click', event => {
      if((event.target as Element).closest('a')) return;
      pinned = !pinned;
      show(pinned);
    }, {signal});
    // Con teclado, enfocar la tarjeta la abre; así se llega a los enlaces del reverso.
    button.addEventListener('focus', () => show(true), {signal});
    card.addEventListener('keydown', event => {if(event.key === 'Escape'){pinned=false;show(false);button.focus();}}, {signal});
    // Solo se cierra cuando el foco sale de la tarjeta, no al saltar a un enlace del reverso.
    card.addEventListener('focusout', event => {
      if(card.contains(event.relatedTarget as Node | null)) return;
      pinned = false;
      show(false);
    }, {signal});
  });
  const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-scene], #como-trabajo .diagram'));
  const visible = new Set<HTMLElement>();
  let frame = 0;
  const update = () => {
    frame = 0;
    visible.forEach(scene => {
      const rect = scene.getBoundingClientRect();
      const progress = reduced.matches ? 1 : Math.max(0,Math.min(1,(innerHeight - rect.top) / Math.min(rect.height*.8,innerHeight*.8)));
      scene.style.setProperty('--assembly',String(progress));
      scene.style.setProperty('--scene-progress',String(progress));
    });
  };
  const schedule = () => {if(!frame) frame=requestAnimationFrame(update);};
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {const scene=entry.target as HTMLElement;if(entry.isIntersecting)visible.add(scene);else visible.delete(scene);});schedule();
  }, {rootMargin:'100px'});
  scenes.forEach(scene=>observer.observe(scene));
  window.addEventListener('scroll',schedule,{passive:true,signal});
  window.addEventListener('resize',schedule,{passive:true,signal});
  reduced.addEventListener('change',schedule,{signal});
  cleanup=()=>{controller.abort();observer.disconnect();cancelAnimationFrame(frame);};
}
document.addEventListener('astro:page-load',initScenes);
document.addEventListener('astro:before-swap',()=>cleanup?.());
