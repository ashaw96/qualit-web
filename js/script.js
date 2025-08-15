document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Open mobile menu
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevent background scroll
    });
  }

  // Close mobile menu
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "auto"; // Restore background scroll
    });
  }

  // Close menu when clicking on navigation links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "auto"; // Restore background scroll
    });
  });

  // Close menu when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "auto"; // Restore background scroll
    }
  });

  // Team Cards Functionality (existing code)
  const teamCards = document.querySelectorAll(".team-card");

  teamCards.forEach((card) => {
    const defaultContent = card.querySelector(".card-content-default");
    const hoverContent = card.querySelector(".card-content-hover");

    // Initially hide hover content
    if (hoverContent) {
      hoverContent.style.display = "none";
    }

    card.addEventListener("mouseenter", () => {
      card.classList.add("col-span-2");
      if (defaultContent) defaultContent.style.display = "none";
      if (hoverContent) hoverContent.style.display = "flex";
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("col-span-2");
      if (defaultContent) defaultContent.style.display = "block";
      if (hoverContent) hoverContent.style.display = "none";
    });
  });

  const careersCard = document.getElementById("careers-card");
  if (careersCard) {
    careersCard.addEventListener("mouseenter", () => {
      careersCard.classList.add("hover-effect");
    });
    careersCard.addEventListener("mouseleave", () => {
      careersCard.classList.remove("hover-effect");
    });
  }
});
