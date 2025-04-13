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
const projectsData = [
  {
    "Title": "Proyecto Oculus Infinity",
    "Text": "Al sentir un gran interés por la tecnología de realidad virtual, he incursionado en el desarrollo de aplicaciones para esta plataforma, enfocándome principalmente en el Oculus Quest 2, el cual cuenta actualmente con una importante participación en el mercado.",
    "Technologies": ["Unity, C#", "Oculus XR Plugin", "Android"],
    "ImageSourceName": "oculusquest.png",
    "Type": "VirtualReality"
  },
  {
    "Title": "The other guys - Gameloft",
    "Text": "Journeys Interactive Histories / Linda Brown - Como parte del equipo de Tech Quality, mi función ha sido mejorar el código preexistente, corregir errores, analizar y hacer seguimiento de las métricas y problemas presentados. Además, durante mi tiempo en The other guys, he tenido la responsabilidad de desarrollar nuevas funcionalidades desde cero, con el fin de mejorar la monetización y la retención de usuarios de la aplicación. Este trabajo ha requerido una combinación de habilidades técnicas y creativas para garantizar que las nuevas funcionalidades sean de alta calidad y brinden una experiencia de usuario satisfactoria.",
    "Technologies": ["Unity, C#", "Amplitude", "Firebase", "Android / iOS"],
    "ImageSourceName": "theotherguys.png",
    "Type": "Unity",
    "Url": "https://play.google.com/store/apps/details?id=com.otherguys.journeys"
  },
  {
    "Title": "RatkidGames",
    "Text": "Juegos y apps de entretenimiento para dispositivos android, publicados en Google Play Store, siendo el mas exitoso \"Sonidos Random Memes\" con mas de 1 millon de descargas, es una botonera con sonidos pedidos por los usuarios, de humor absurdo basados en toda la cultura meme",
    "Technologies": ["Unity, C#", "ASP.NET Core", "Admob", "Android / iOS"],
    "ImageSourceName": "ratkidgames.png",
    "Type": "Unity",
    "Url": "https://play.google.com/store/apps/developer?id=RatKid+Games"
  },
  {
    "Title": "Inari Apps",
    "Text": "He creado una segunda cuenta para la publicación de aplicaciones de entretenimiento y juegos, con el objetivo de desarrollar juegos más serios y complejos. Actualmente, esta cuenta solo cuenta con un juego publicado llamado \"Kawaii Color Block\"",
    "Technologies": ["Unity, C#", "ASP.NET", "Entity framework, Sql server", "Admob", "Android / iOS"],
    "ImageSourceName": "inari.png",
    "Type": "Unity",
    "Url": "https://play.google.com/store/apps/developer?id=Inari",
    "VideoUrl": "https://www.youtube.com/embed/1ioNA-sf0DM"
  },
  {
    "Title": "AAG",
    "Text": "Sistema de gestión de matriculados, tarjetas, torneos, clubes y otros. Solución realizada en .Net Framework para la Asociación Argentina de Golf, utilizando ASP.NET para la interfaz de gestión web y Xamarin para la app móvil, se utilizaron los servicios de azure para la publicación de las Api y las bases de datos para los distintos ambientes",
    "Technologies": [".NET Framework, ASP.NET", "Xamarin", "Entity framework, Sql server", "Lectura de Códigos QR", "Android / iOS"],
    "ImageSourceName": "aag.png",
    "Type": "NET"
  },
  {
    "Title": "MutualAlas",
    "Text": "Sistema de otorgamiento y gestión de microcreditos. Solución realizada en .Net Core para Mutual Alas, utilizando ASP.NET Core para la interfaz de gestion web y Blazor WebAssembly para la generación de la webapp móvil, se utilizaron los servicios de azure para la publicación de las Api y las bases de datos para los distintos ambientes.",
    "Technologies": [".NET Core 6", "ASP.NET Core", "Blazor", "Entity framework, Sql server"],
    "ImageSourceName": "mutualalas.png",
    "Type": "NET"
  },
  {
    "Title": "Shopping Las Terrazas",
    "Text": "La aplicación utiliza Unity para generar mapas a partir de ubicaciones reales y transferirlos a un terreno de Unity. También proporciona información sobre el clima de la montaña en función de su altitud, mientras que la ubicación y la referencia de distancia a los puntos de interés se realizan a través del uso de la realidad virtual y el GPS.",
    "Technologies": ["Unity, C#", "Google VR SDK", "Blender", "Sketch up", "Mapbox"],
    "ImageSourceName": "terrazas.png",
    "Type": "VirtualReality"
  },
  {
    "Title": "Sophenia",
    "Text": "Applicación promocional para la deteccion por etiqueta de los distintos varietales de vinos por medio de los servicios cognitivos de Azure y marcas de la firma Sophenia y sistema de gestion web. Se realizo con ASP.NET, Xamarin, Sql server utilizando los servicios cognitivos de azure para la identificación de las etiquetas",
    "Technologies": ["ASP.NET", "Xamarin", "Entity framework, Sql server", "Azure cognitive services", "Android / iOS"],
    "ImageSourceName": "sophenia.png",
    "Type": "NET"
  },
  {
    "Title": "UniversalCred",
    "Text": "Sistema de gestion de mensajes de promocion, utilizando whatsapp para contactar a los socios del cliente. Solución realizada en .Net Core para Mutual Alas, utilizando ASP.NET Core para la interfaz de gestion web y Xamarin para la app móvil, se utilizaron los servicios de azure para la publicación de las Api y las bases de datos para los distintos ambientes",
    "Technologies": ["ASP.NET", "Xamarin", "Entity framework, Sql server", "Android / iOS"],
    "ImageSourceName": "universalcred.png",
    "Type": "NET"
  }
]
;
renderProjects(projectsData);
// Fetch the JSON file
// fetch('projects.json')
//   .then(response => response.json())
//   .then(data => renderProjects(data))
//   .catch(err => console.error("Error loading projects.json", err));
