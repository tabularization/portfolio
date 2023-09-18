const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

document.addEventListener("DOMContentLoaded", function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); 
        
        const targetId = link.getAttribute("href");
        // Use the targetId to find the corresponding element
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline:"nearest"});
      });
    });
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));