document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
      particles: {
        number: { value: 300 },
        color: { value: '#39ff14' }, // partículas verde neon
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 120,
          color: '#05C137', // conexões verde neon
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out'
        }
      }
    });
  });
  