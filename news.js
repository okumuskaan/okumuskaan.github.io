// news.js
(function () {
  const container = document.getElementById('newsContainer');
  const buttons = document.querySelectorAll('.view-btn');

  if (!container || !buttons.length) return;

  function setView(view) {
    // Update container layout class
    container.classList.remove('gallery', 'list', 'timeline', 'masonry');
    container.classList.add(view);

    // Update buttons: active state + aria + icons
    buttons.forEach((b) => {
      const isActive = b.dataset.view === view;

      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));

      const img = b.querySelector('img');
      if (!img) return;

      if (b.dataset.view === 'gallery') {
        img.src = isActive
          ? './imgs/icons/grid-filled-white.png'
          : './imgs/icons/grid-filled.png';
      } else if (b.dataset.view === 'list') {
        img.src = isActive
          ? './imgs/icons/list-filled-white.png'
          : './imgs/icons/list-filled.png';
      } else {
        // Fallback for any future views you add
        // (You can extend this with more icon mappings)
      }
    });

    // Persist choice
    try {
      localStorage.setItem('newsView', view);
    } catch (e) {
      // ignore
    }
  }

  // Click handlers
  buttons.forEach((b) => {
    b.addEventListener('click', () => {
      setView(b.dataset.view);
    });
  });

  // Restore saved view (default to gallery)
  let saved = 'gallery';
  try {
    saved = localStorage.getItem('newsView') || 'gallery';
  } catch (e) {
    // ignore
  }

  setView(saved);
})();
