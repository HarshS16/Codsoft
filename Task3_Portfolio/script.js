// Sample project data
const projects = [
    { name: "PixelPeak", description: "YouTube Management Agency for professional creators." },
    { name: "Hacktoberfest Contributions", description: "Open source projects for global impact." },
    { name: "Social Media App", description: "A tool for community planning and meetups." },
  ];
  
  // Function to render project cards
  const renderProjects = () => {
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
  
  // Initialize
  document.addEventListener("DOMContentLoaded", renderProjects);
  