// Function to dynamically render projects
const renderProjects = () => {
    const projects = [
      { name: "PixelPeak", description: "YouTube Management Agency" },
      { name: "Hacktoberfest Contributions", description: "Open source projects" },
      { name: "Social Media App", description: "Community-based planning tool" },
    ];
  
    const projectCards = document.getElementById("project-cards");
  
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      `;
      projectCards.appendChild(card);
    });
  };
  
  // GSAP Scroll Animations
  const initScrollAnimations = () => {
    gsap.from(".section-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
      },
    });
  
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
      },
    });
  };
  
  // Initialize everything
  document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    initScrollAnimations();
  });
  