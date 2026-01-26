document.addEventListener('DOMContentLoaded', function() {
  const newsBoxes = document.querySelectorAll('.news-box');
  newsBoxes.forEach(box => {
    box.style.cursor = 'pointer';
    box.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      window.location.href = 'news-detail.html?id=' + id;
    });
  });
});