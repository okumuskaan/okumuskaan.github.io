/*
// news-arrow.js - News scroller for index.html
document.addEventListener('DOMContentLoaded', function() {
  const newsContainer = document.querySelector('.news-container.scroller');
  const arrows = document.querySelectorAll('.news-arrow');
  const leftArrow = arrows[0]; // First is left
  const rightArrow = arrows[1]; // Second is right
  const newsBoxes = newsContainer.querySelectorAll('.news-box');

  if (!newsContainer || arrows.length < 2 || !newsBoxes.length) return;

  const boxWidth = newsContainer.querySelector('.news-box').offsetWidth + 25; // Include gap (25px from CSS)

  function updateArrowClasses() {
    const scrollLeft = newsContainer.scrollLeft;

    leftArrow.classList.toggle('first', scrollLeft <= 100);
    rightArrow.classList.toggle('last', scrollLeft >= 2500);
  }


  function updateBoxOpacities() {
    const scrollLeft = newsContainer.scrollLeft;
    const focusedIndex = Math.max(0, Math.min(newsBoxes.length - 1, Math.round(scrollLeft / boxWidth)));

    newsBoxes.forEach((box, index) => {
      box.style.opacity = index === focusedIndex ? '1' : '0.3';
      box.style.transition = 'opacity 0.3s ease';
      console.log(`Box ${index} opacity set to ${box.style.opacity}`);
    });
  }

  leftArrow.addEventListener('click', function() {
    newsContainer.scrollBy({ left: -boxWidth, behavior: 'smooth' });
    setTimeout(() => {
      updateArrowClasses();
      updateBoxOpacities();
    }, 300);
  });

  rightArrow.addEventListener('click', function() {
    newsContainer.scrollBy({ left: boxWidth, behavior: 'smooth' });
    setTimeout(() => {
      updateArrowClasses();
      updateBoxOpacities();
    }, 300);
  });

  // Initial setup
  updateArrowClasses();
  updateBoxOpacities();

  // Update on scroll
  newsContainer.addEventListener('scroll', () => {
    updateArrowClasses();
    updateBoxOpacities();
  });
});
*/

// news-arrow.js - News scroller for index.html

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
console.log("It's a phone! News scroller disabled.");
}
else{
  
document.addEventListener('DOMContentLoaded', function() {
  const newsContainer = document.querySelector('.news-container.scroller');
  const arrows = document.querySelectorAll('.news-arrow');
  const leftArrow = arrows[0]; // First is left
  const rightArrow = arrows[1]; // Second is right
  const newsBoxes = newsContainer.querySelectorAll('.news-box');

  if (!newsContainer || arrows.length < 2 || !newsBoxes.length) return;

  const boxWidth = newsContainer.querySelector('.news-box').offsetWidth + 20; // Match CSS gap: 20px
  let autoScrollInterval;

  function updateArrowClasses() {
    const scrollLeft = newsContainer.scrollLeft;
    const maxScroll = newsContainer.scrollWidth - newsContainer.clientWidth;

    console.log(`Scroll Left: ${scrollLeft}, Max Scroll: ${maxScroll}`);

    leftArrow.classList.toggle('first', scrollLeft <= 80); // Align with first snap point
    rightArrow.classList.toggle('last', scrollLeft >= 2500);
  }

  function updateBoxOpacities() {
    const scrollLeft = newsContainer.scrollLeft;
    const focusedIndex = Math.max(0, Math.min(newsBoxes.length - 1, Math.round(scrollLeft / boxWidth)));

    newsBoxes.forEach((box, index) => {
      box.style.opacity = index === focusedIndex ? '1' : '0.3';
      box.style.transition = 'opacity 0.3s ease';
    });
  }

  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  }

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      const scrollLeft = newsContainer.scrollLeft;
      console.log("Scroll-left:", scrollLeft);
      const maxScroll = newsContainer.scrollWidth - newsContainer.clientWidth;

      if (scrollLeft >= 2500) {
        // At end, loop to start (first snap point)
        newsContainer.scrollTo({ left: 80, behavior: 'smooth' }); // Scroll to ~80px (first item)
      } else {
        // Scroll right
        newsContainer.scrollBy({ left: boxWidth, behavior: 'smooth' });
      }

      setTimeout(() => {
        updateArrowClasses();
        updateBoxOpacities();
      }, 300);
    }, 4000); // Auto-scroll every 4 seconds
  }

  leftArrow.addEventListener('click', function() {
    stopAutoScroll();
    newsContainer.scrollBy({ left: -boxWidth, behavior: 'smooth' });
    setTimeout(() => {
      updateArrowClasses();
      updateBoxOpacities();
    }, 300);
  });

  rightArrow.addEventListener('click', function() {
    stopAutoScroll();
    newsContainer.scrollBy({ left: boxWidth, behavior: 'smooth' });
    setTimeout(() => {
      updateArrowClasses();
      updateBoxOpacities();
    }, 300);
  });

  // Stop auto-scroll on manual scroll
  newsContainer.addEventListener('scroll', function() {
    updateArrowClasses();
    updateBoxOpacities();
  });

  // Stop auto-scroll only when the user actually interacts
  function onUserIntent() {
    // If this interaction is happening during an auto scroll animation,
    // it still counts as user intent and should stop.
    stopAutoScroll();
  }

  // Wheel, touch, pointer, keyboard are strong signals of manual scrolling/navigation
  newsContainer.addEventListener('wheel', onUserIntent, { passive: true });
  newsContainer.addEventListener('touchstart', onUserIntent, { passive: true });
  newsContainer.addEventListener('pointerdown', onUserIntent, { passive: true });
  window.addEventListener('keydown', (e) => {
    // If the user is using keys that can scroll, stop auto-scroll
    const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
    if (keys.includes(e.key)) onUserIntent();
  });


  // Initial setup
  updateArrowClasses();
  updateBoxOpacities();
  startAutoScroll(); // Start auto-scrolling
});
}
