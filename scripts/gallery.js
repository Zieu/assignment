const galleryData = [
  {
      "title": "Basketball basket",
      "source": "https://images.unsplash.com/photo-1516716984596-1f6e47c5e986?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
      "thumb": "https://images.unsplash.com/photo-1516716984596-1f6e47c5e986?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      "theme": "light",
      "id": 0    
  },
  {
      "title": "Desert Photo",
      "source": "https://images.unsplash.com/photo-1533079047304-3997643590ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=60",
      "thumb": "https://images.unsplash.com/photo-1533079047304-3997643590ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=60",
      "theme": "light",
      "id": 1    
  },
  {
    "title": "Bird on waterfalls",
    "source": "https://images.unsplash.com/photo-1532982116380-02ce47a3e03c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=60",
    "thumb": "https://images.unsplash.com/photo-1532982116380-02ce47a3e03c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=60",
    "theme": "light",
    "id": 2   
  },
  {
      "title": "Ocean",
      "source": "https://images.unsplash.com/photo-1536008758366-72fbc5b16911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=60",
      "thumb": "https://images.unsplash.com/photo-1536008758366-72fbc5b16911?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=60",
      "theme": "light",
      "id": 3    
  },
  {
      "title": "Sea shores near pine trees",
      "source": "https://images.unsplash.com/photo-1542351567-cd7b06dc08d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=60",
      "thumb": "https://images.unsplash.com/photo-1542351567-cd7b06dc08d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=60",
      "theme": "light",
      "id": 4    
  },
  {
      "title": "Golden hour",
      "source": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8&auto=format&fit=crop&w=2000&q=60",
      "thumb": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8&auto=format&fit=crop&w=300&q=60",
      "theme": "light",
      "id": 5   
  },
  {
      "title": "Rocky mountain",
      "source": "https://images.unsplash.com/photo-1542500186-6edb30855637?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8&auto=format&fit=crop&w=2000&q=60",
      "thumb": "https://images.unsplash.com/photo-1542500186-6edb30855637?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8&auto=format&fit=crop&w=300&q=60",
      "theme": "light",
      "id": 6   
  },
  {
      "title": "Snow-capped mountains",
      "source": "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjZ8fHxlbnwwfHx8&auto=format&fit=crop&w=2000&q=60",
      "thumb": "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80",
      "theme": "light",
      "id": 7   
  }
]

const cardContainer = document.querySelector(".gallery-cards");

galleryData.map((image) => {
  cardContainer.innerHTML += `
  <div class="gallery-card ${
    image.theme === "dark" ? "gallery-card--dark" : ""
  }">
  <div class="gallery-card-content">
  <a class="gallery-lightbox" href="${
    image.source
  }" data-lightbox="fav-gallery" data-title=${image.title}>
    <img
      class="gallery-card-img"
      src="${image.thumb}"
      alt="${image.title}"
      title="${image.title}"
    />
    <div class="gallery-card-resize-icon"></div>
    </a>
  </div>
  <div class="gallery-card-line"></div>
  <div class="gallery-card-title-wrapper">
    <span class="gallery-card-text">${image.title}</span>
    <button id="button-id-${image.id}" class="gallery-theme-toggler"></button>
  </div>
  </div>
  `;
});

galleryData.map(({ id }) => {
  const themeTogglerBtn = document.getElementById(`button-id-${id}`);
  const card = document.querySelectorAll(".gallery-card");
  themeTogglerBtn.addEventListener("click", toggleTheme);

  function toggleTheme() {
    card[id].classList.toggle("gallery-card--dark");
  }
});
