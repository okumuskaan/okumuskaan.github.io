// Responsive header + mobile menu
(function () {
  function init() {
    const headerNav = document.getElementById("header-nav");
    const headerNav2 = document.getElementById("header-nav-2");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileMenuContainer = document.getElementById("mobile-menu-container");
    const main = document.querySelector("main");

    if (!headerNav || !headerNav2 || !mobileNav || !mobileMenuContainer || !main) return;

    // Add smooth transition for padding-top
    main.style.transition = "padding-top 0.3s linear";

    const BREAKPOINT = 1200;
    let isOpen = false;

    function setHeaderMode() {
      const mobile = window.innerWidth < BREAKPOINT;
      document.documentElement.classList.toggle("is-mobile", mobile);

      headerNav.style.display = mobile ? "none" : "flex";
      headerNav2.style.display = mobile ? "flex" : "none";

      // If we go back to desktop, force-close the mobile menu
      if (!mobile) {
        closeMobileMenu(true);
      }
    }

    function openMobileMenu() {
      if (isOpen) return;
      isOpen = true;
      mobileNav.style.display = "block";
      mobileNav.style.position = "fixed";
      mobileNav.style.top = "80px"; // Match header height
      mobileNav.style.left = "0";
      mobileNav.style.width = "100%";
      mobileNav.style.zIndex = "1000"; // Ensure it stays above other content
      // allow transition by setting height after display
      mobileNav.style.height = "0px";
      requestAnimationFrame(() => {
        mobileNav.style.height = mobileNav.scrollHeight + "px";
        main.style.paddingTop = mobileNav.scrollHeight + "px"; // Push content down
        mobileNav.querySelectorAll("h5").forEach((el) => (el.style.opacity = "1"));
      });
    }

    function closeMobileMenu(immediate = false) {
      if (!isOpen && !immediate) return;
      isOpen = false;
      mobileNav.querySelectorAll("h5").forEach((el) => (el.style.opacity = "0"));
      mobileNav.style.height = "0px";
      main.style.paddingTop = "0px"; // Reset padding
      const finish = () => {
        mobileNav.style.display = "none";
        mobileNav.style.position = "static"; // Reset position
        mobileNav.style.top = "";
        mobileNav.style.left = "";
        mobileNav.style.width = "";
        mobileNav.style.zIndex = "";
      };
      if (immediate) {
        finish();
      } else {
        setTimeout(finish, 250);
      }
      // reset hamburger animation class if needed
      if (mobileMenuContainer.classList.contains("change")) {
        mobileMenuContainer.classList.remove("change");
      }
    }

    // Hamburger click handler (keeps your original "change" class animation)
    window.myFunction = function (x) {
      x.classList.toggle("change");
      if (!isOpen) openMobileMenu();
      else closeMobileMenu(false);
    };

    // Dropdowns inside mobile menu (optional)
    const mobileDropdowns = Array.from(document.getElementsByClassName("mobile-dropdown"));
    const heightChanges = {
      "Notes": 0,
      "Art Archive": 210,
    };
    const inds = { "Notes": 0, "Art Archive": 0 };

    mobileDropdowns.forEach((el) => {
      el.style.fontWeight = "300";
      el.addEventListener("click", () => {
        const mobileSubdropdown = el.parentNode.querySelector(".mobile-subdropdown");
        if (!mobileSubdropdown) return;

        const key = el.textContent.trim();
        inds[key] = (inds[key] + 1) % 2;

        if (inds[key] === 1) {
          el.style.fontWeight = "700";
          mobileSubdropdown.style.display = "block";
          // expand container height smoothly
          requestAnimationFrame(() => {
            mobileNav.style.height = mobileNav.scrollHeight + heightChanges[key] + "px";
            main.style.paddingTop = mobileNav.scrollHeight + heightChanges[key] + "px"; // Adjust padding for expanded menu
          });
          setTimeout(() => {
            mobileSubdropdown.querySelectorAll("h5").forEach((h) => (h.style.opacity = "1"));
          }, 60);
        } else {
          el.style.fontWeight = "300";
          mobileSubdropdown.querySelectorAll("h5").forEach((h) => (h.style.opacity = "0"));
          mobileSubdropdown.style.display = "none";
          requestAnimationFrame(() => {
            mobileNav.style.height = mobileNav.scrollHeight + "px";
            main.style.paddingTop = mobileNav.scrollHeight + "px"; // Adjust padding for collapsed submenu
          });
        }
      });
    });

    // Run once and on resize
    setHeaderMode();
    window.addEventListener("resize", setHeaderMode);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();