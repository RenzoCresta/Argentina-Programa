function estaEntre(numero1, numero2, numero3) {
    return numero3 > numero1 && numero1 > numero2 ;
  }
  function estaFueraDeRango(numero1, numero2, numero3) {
    return numero2 > numero1 || numero1 > numero3 ;
  } 