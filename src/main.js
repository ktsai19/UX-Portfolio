import "./style.css";

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById("siteNav");
const navInner = nav?.querySelector(".nav-inner");
const setNavState = () => {
  if (!navInner) return;
  navInner.style.boxShadow =
    window.scrollY > 24
      ? "0 12px 40px -14px rgba(60,40,20,0.35)"
      : "none";
};
setNavState();
window.addEventListener("scroll", setNavState, { passive: true });

// Mobile nav drawer
const navToggle = document.getElementById("navToggle");
const navDrawer = document.getElementById("navDrawer");
navToggle?.addEventListener("click", () => {
  const open = navDrawer.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navDrawer?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navDrawer.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  })
);

// Scroll reveal
const revealEls = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Liquid glass specular highlight — tracks pointer per card
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".glass").forEach((panel) => {
    panel.addEventListener("pointermove", (e) => {
      const rect = panel.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      panel.style.setProperty("--mx", `${x}%`);
      panel.style.setProperty("--my", `${y}%`);
    });
  });
}

// Gallery lightbox — click a real case-study photo to view it full size
const galleryItems = document.querySelectorAll(".cs-gallery-item--photo");
if (galleryItems.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2 2 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
    <img alt="" />
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");

  const openLightbox = (img) => {
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    if (!img) return;
    item.addEventListener("click", () => openLightbox(img));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
