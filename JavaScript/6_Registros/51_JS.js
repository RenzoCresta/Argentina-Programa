function agregarAPostresRapidos(listaPostres, postre) {
    if (postre.tiempoDeCoccion <= 60) {
      agregar(listaPostres, postre);
    }
  }