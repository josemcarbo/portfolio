window.addEventListener("load", () => {
  const _options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.85,
  };

  const $sections = document.querySelectorAll(".section");
  const $menuLinks = document.querySelectorAll("a");
  const $blurEffect = document.querySelector(".blur-effect");
  const $cardOverlay = document.querySelectorAll(".card-overlay");

  document.querySelectorAll("a").forEach((element) => {
    element.addEventListener("click", (event) => {
      document.querySelectorAll("a.active").forEach((element) => {
        element.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });

  document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;

    $blurEffect.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px,
      rgba(29, 78, 216, 0.15), transparent 80%)`;
  });

  const activateMenuLink = (id) => {
    $menuLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  $cardOverlay.forEach((overlay) => {
    overlay.addEventListener("mouseover", (event) => {
      $cardOverlay.forEach((element) => {
        element.parentNode.classList.add("disabled");
      });
      event.target.parentNode.classList.remove("disabled");
    });

    overlay.addEventListener("mouseleave", (event) => {
      $cardOverlay.forEach((element) => {
        element.parentNode.classList.remove("disabled");
      });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activateMenuLink(entry.target.id);
      }
    });
  }, _options);

  $sections.forEach((section) => {
    observer.observe(section);
  });
});
