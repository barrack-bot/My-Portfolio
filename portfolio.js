// Sticky Navigation Background Change on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  // Hamburger Menu Toggle for Mobile with Animation
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li");
  
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  
    // Add animation delays for each nav link
    navItems.forEach((item, index) => {
      item.style.setProperty("--delay", index);
    });
  });
  