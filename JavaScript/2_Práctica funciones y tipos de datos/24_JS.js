function puntosDeEnvidoTotales(numero1, palo1, numero2, palo2) { 
    if (palo1 === palo2) {
      return valorEnvido(numero1) + valorEnvido(numero2) + 20;
    }
      else if (numero1 > numero2) {
        return valorEnvido(numero1);
      }
      else {
        return valorEnvido(numero2);
      }
    }