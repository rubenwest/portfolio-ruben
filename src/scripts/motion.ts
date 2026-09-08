let dispose: (() => void) | undefined;
function setupMotion() {
  dispose?.();
  const controller = new AbortController();
  const { signal } = controller;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const frames = new Set<number>();
  const animations = new Set<Animation>();
  document.querySelectorAll<HTMLElement>('[data-motion-card]').forEach(card => {
    let frame = 0;
    card.addEventListener('pointermove', event => {
      if (reduced.matches || !fine.matches) return;
      cancelAnimationFrame(frame); frames.delete(frame);
      frame = requestAnimationFrame(() => {
        frames.delete(frame);
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty('--pointer-x', `${x * 100}%`);
        card.style.setProperty('--pointer-y', `${y * 100}%`);
        card.style.setProperty('--tilt-x', `${(0.5 - y) * 3}deg`);
        card.style.setProperty('--tilt-y', `${(x - 0.5) * 3}deg`);
      });
      frames.add(frame);
    }, {signal});
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame); frames.delete(frame);
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    }, {signal});
  });
  document.querySelectorAll<HTMLDetailsElement>('.xp details').forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    let animation: Animation | undefined;
    let expanded = details.open;
    summary.addEventListener('click', event => {
      if (reduced.matches) return;
      event.preventDefault();
      const start = details.getBoundingClientRect().height;
      expanded = animation ? !expanded : !details.open;
      if (animation) { animations.delete(animation); animation.cancel(); }
      details.style.height = '';
      details.open = true;
      const styles = getComputedStyle(details);
      const end = expanded ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
      animation = details.animate({height:[`${start}px`,`${end}px`]}, {duration:360,easing:'cubic-bezier(.22,1,.36,1)'});
      animations.add(animation);
      animation.onfinish = () => {
        details.open = expanded;
        if (animation) animations.delete(animation);
        animation = undefined;
      };
    }, {signal});
  });
  dispose = () => {controller.abort();frames.forEach(cancelAnimationFrame);animations.forEach(a=>a.cancel());};
}
document.addEventListener('astro:page-load', setupMotion);
document.addEventListener('astro:before-swap', ()=>dispose?.());
