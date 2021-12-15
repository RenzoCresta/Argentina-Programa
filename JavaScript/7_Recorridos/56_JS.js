function gananciaPromedio(gananciaTotal) {
    let sumatoria = 0;
    for(let ganancias of gananciaTotal) {
      sumatoria = sumatoria + ganancias.ganancia; 
    }
    return sumatoria / longitud(gananciaTotal);
  }