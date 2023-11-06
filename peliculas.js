class Pelicula {
    constructor(titulo, director, duracion) {
      this.titulo = titulo;
      this.director = director;
      this.duracion = duracion;
    }
  }
  
  class Drama extends Pelicula {
    constructor(titulo, director, duracion, tema) {
      super(titulo, director, duracion);
      this.tema = tema;
    }
  }
  
  class Terror extends Pelicula {
    constructor(titulo, director, duracion, sustos) {
      super(titulo, director, duracion);
      this.sustos = sustos;
    }
  }
  
  class Comedia extends Pelicula {
    constructor(titulo, director, duracion, humor) {
      super(titulo, director, duracion);
      this.humor = humor;
    }
  }

  const dramaVideos = [
    new Drama("El Silencio de los Inocentes", "Jonathan Demme", 118 , "Crimen"),
    new Drama("La Lista de Schindler", "Steven Spielberg", 195, "Holocausto"),
    new Drama("Forrest Gump", "Robert Zemeckis", 142, "Vida y superación"),
    new Drama("El Padrino", "Francis Ford Coppola", 175, "Crimen familiar"),
    new Drama("Cisne Negro", "Darren Aronofsky", 108, "Psicológico"),
  ];
  
  const terrorVideos = [
    new Terror("El Exorcista", "William Friedkin", 122, 5),
    new Terror("Pesadilla en Elm Street", "Wes Craven", 91, 4),
    new Terror("El Resplandor", "Stanley Kubrick", 146, 5),
    new Terror("Saw", "James Wan", 103, 4),
    new Terror("Hereditary", "Ari Aster", 127, 5),
  ];
  
  const comediaVideos = [
    new Comedia("Superbad", "Greg Mottola", 113, "Comedia adolescente"),
    new Comedia("Amélie", "Jean-Pierre Jeunet", 122, "Romántica"),
    new Comedia("The Grand Budapest Hotel", "Wes Anderson", 99, "Absurda"),
    new Comedia("Dumb and Dumber", "Peter Farrelly", 107, "Tonta"),
    new Comedia("Anchorman", "Adam McKay", 94, "Periodismo"),
  ];

  console.log("Películas de Drama:");
dramaVideos.forEach((movie, index) => {
  console.log(`Película ${index + 1}:`);
  console.log("Título:", movie.titulo);
  console.log("Director:", movie.director);
  console.log("Duración:", movie.duracion);
  console.log("Tema:", movie.tema);
  console.log("---------");
});

console.log("\nPelículas de Terror:");
terrorVideos.forEach((movie, index) => {
  console.log(`Película ${index + 1}:`);
  console.log("Título:", movie.titulo);
  console.log("Director:", movie.director);
  console.log("Duración:", movie.duracion);
  console.log("Sustos:", movie.sustos);
  console.log("---------");
});
