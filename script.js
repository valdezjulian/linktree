const btnToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// aplica tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);

function updateToggleA11y() {
  const isLight = root.getAttribute('data-theme') === 'light';
  btnToggle.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
  btnToggle.setAttribute('title', isLight ? 'Modo escuro' : 'Modo claro');
}
updateToggleA11y();

btnToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleA11y();

  // transição suave geral
  document.body.style.transition = 'background-color .6s ease, color .6s ease';
});
