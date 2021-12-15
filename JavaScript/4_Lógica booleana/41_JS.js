function puedeSubirse(altura, acompañante, afeccion) {
    return !afeccion && (altura >= 1.5 || altura >= 1.2 && acompañante); 
  }