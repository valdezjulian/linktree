document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  function getParticleColor() {
    return getComputedStyle(root).getPropertyValue('--particle-color').trim();
  }

  function initParticles() {
    const color = getParticleColor();
    const isLight = root.getAttribute('data-theme') === 'light';

    particlesJS('particles-js', {
      particles: {
        number: { value: 220 },
        color: { value: color },
        shape: { type: 'circle' },
        opacity: { value: isLight ? 0.25 : 0.45, random: true },
        size: { value: 2.6, random: true },
        line_linked: {
          enable: true,
          distance: 130,
          color: color,
          opacity: isLight ? 0.22 : 0.35,
          width: 1
        },
        move: { enable: true, speed: isLight ? 0.4 : 0.6 }
      },
      retina_detect: true
    });
  }


  initParticles();

  // Detecta mudança de tema e reinicializa partículas
  const observer = new MutationObserver(() => {
    const canvas = document.querySelector('#particles-js');
    if (canvas) {
      canvas.innerHTML = '';
      initParticles();
    }
  });

  observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
});
