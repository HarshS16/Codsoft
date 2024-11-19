// Sample project data
const projects = [
    { name: "PixelPeak", description: "YouTube Management Agency" },
    { name: "Hacktoberfest Contributions", description: "Open source projects" },
    { name: "Social Media App", description: "Community-based planning tool" },
  ];
  
  // Function to render projects
  const renderProjects = () => {
    const projectList = document.getElementById("project-list");
    projects.forEach((project) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      `;
      projectList.appendChild(listItem);
    });
  };
  
  // Initialize
  document.addEventListener("DOMContentLoaded", renderProjects);
  