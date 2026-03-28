// js/news-click.js
document.addEventListener('DOMContentLoaded', function() {
  function initNewsClicks() {
    const newsBoxes = document.querySelectorAll('.news-box');
    newsBoxes.forEach(box => {
      box.style.cursor = 'pointer';
      box.addEventListener('click', function() {
        const id = newsData.length - this.getAttribute('data-id') - 1;
        window.location.href = 'news-detail.html?id=' + id;
      });
    });
  }

  // Check if newsData is loaded; if not, wait
  if (typeof newsData === 'undefined') {
    setTimeout(initNewsClicks, 50); // Small delay for async load
  } else {
    initNewsClicks();
  }
});