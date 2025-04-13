function renderProjects(data) {
  const container = document.getElementById("projectsContainer");

  const grouped = data.reduce((acc, proj) => {
    if (!acc[proj.Type]) acc[proj.Type] = [];
    acc[proj.Type].push(proj);
    return acc;
  }, {});

  for (const [type, items] of Object.entries(grouped)) {
    const groupDiv = document.createElement("div");
    groupDiv.className = "type-group";
    groupDiv.innerHTML = `<h2>${type}</h2>`;

    items.forEach(p => {
      const techList = p.Technologies.map(t => `<li>${t}</li>`).join("");
      const html = `
        <div class="project-card">
          <img src="${p.ImageSourceName}" alt="${p.Title}">
          <h3>${p.Title}</h3>
          <p>${p.Text}</p>
          <ul>${techList}</ul>
        </div>
      `;
      groupDiv.innerHTML += html;
    });

    container.appendChild(groupDiv);
  }
}

// Fetch the JSON file
fetch('projects.json')
  .then(response => response.json())
  .then(data => renderProjects(data))
  .catch(err => console.error("Error loading projects.json", err));
