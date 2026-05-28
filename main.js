// Seleciona a div vazia no HTML
const gallery = document.getElementById('gallery');

// Dados das 3 obras
const artworks = [
  {
    title: "O Grito",
    artist: "Edvard Munch",
    desc: "Uma expressão profunda de ansiedade e emoção humana.",
    badge: "ÁUDIO 3D",
    img: "../Imagens/Scream.jpg" // Adicionamos ../ para sair da pasta js e entrar em Imagens
  },
  {
    title: "A Noite Estrelada",
    artist: "Vincent van Gogh",
    desc: "Uma representação vibrante e dinâmica da vista noturna.",
    badge: "ÁUDIO 3D",
    img: "../Imagens/Starry_Night.jpg"
  },
  {
    title: "Independência ou Morte",
    artist: "Pedro Américo",
    desc: "A icônica representação do momento histórico do Brasil.",
    badge: "ÁUDIO 3D",
    img: "../Imagens/Independência_ou_Morte.jpg"
  }
];

// Injeta o HTML de cada card
artworks.forEach((artwork) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-image">
      <img src="${artwork.img}" alt="${artwork.title}" loading="lazy">
      <span class="badge">${artwork.badge}</span>
    </div>

    <div class="card-body">
      <h2>${artwork.title}</h2>
      <p class="artist">${artwork.artist}</p>
      <p class="desc">${artwork.desc}</p>
    </div>
    
    <button class="btn">
      <span class="play-icon"></span>
      Ouvir Experiência
    </button>
  `;

  gallery.appendChild(card);
});