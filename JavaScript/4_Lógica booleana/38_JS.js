function sonMediosHermanos(hermano1, hermano2) {
    function tienenLaMismaMadre(hermano1, hermano2) {
      return madreDe(hermano1) === madreDe(hermano2); 
    }
    function tienenElMismoPadre (hermano1, hermano2) {
     return padreDe(hermano1) === padreDe(hermano2); 
    }
    return (tienenLaMismaMadre(hermano1, hermano2) && !tienenElMismoPadre(hermano1, hermano2)) || (!tienenLaMismaMadre(hermano1, hermano2) && tienenElMismoPadre(hermano1, hermano2)) ;
  }