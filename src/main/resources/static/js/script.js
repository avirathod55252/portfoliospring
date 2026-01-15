// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Update active nav link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });
}

// Close menu when link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.style.display = "none";
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe skill cards and project cards
document
  .querySelectorAll(".skill-card, .project-card, .timeline-content")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector("textarea").value;

    // Simple validation
    if (name && email && message) {
      // Here you would typically send data to server
      alert(
        `Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}`
      );
      contactForm.reset();
    } else {
      alert("Please fill in all fields");
    }
  });
}

// Scroll reveal effect
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(
    ".section-title, .section-description"
  );

  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.style.opacity = "1";
      reveal.style.transform = "translateY(0)";
    }
  });
});

// Initialize scroll reveal styles
document
  .querySelectorAll(".section-title, .section-description")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

// Particle background effect (optional)
function createParticles() {
  const particleContainer = document.querySelector(".hero");
  if (!particleContainer) return;

  // You can add particle animation here if desired
}

// Mobile menu responsive behavior
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if (navMenu) {
      navMenu.style.display = "flex";
    }
  }
});

// Smooth scroll on page load if hash exists
if (window.location.hash) {
  const target = document.querySelector(window.location.hash);
  if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}

// Add subtle mouse movement effect to hero image
const heroImage = document.querySelector(".animated-bg");
if (heroImage) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth - e.clientX * 2) / 100;
    const y = (window.innerHeight - e.clientY * 2) / 100;
    heroImage.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  document.addEventListener("mouseleave", () => {
    heroImage.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
}

console.log("Portfolio loaded successfully!");
