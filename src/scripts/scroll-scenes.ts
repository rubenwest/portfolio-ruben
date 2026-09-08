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
    };
    card.classList.add('is-enhanced');
    show(false);
    card.addEventListener('pointerenter', () => {if(hover.matches) show(true);}, {signal});
    card.addEventListener('pointerleave', () => {if(!pinned) show(false);}, {signal});
    button.addEventListener('click', () => {pinned = !pinned;show(pinned);}, {signal});
    button.addEventListener('keydown', event => {if(event.key === 'Escape'){pinned=false;show(false);}}, {signal});
    button.addEventListener('blur', () => {pinned=false;show(false);}, {signal});
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
