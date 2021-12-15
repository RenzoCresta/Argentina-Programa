function gananciaPositiva(gananciaTotal){
    let sumatoria = 0;
    for(let ganancias of gananciaTotal) {
      if (ganancias.ganancia >= 1) {
        sumatoria = sumatoria + ganancias.ganancia;
      }
     } return sumatoria;
    
   }
  function promedioGananciasPositivas(gananciaTotal) {
    let sumatoria = 0; 
    for(let ganancias of gananciaTotal) {
      sumatoria = gananciaPositiva(gananciaTotal) / cantidadDeBalancesPositivos(gananciaTotal);
    }
    return sumatoria;
  }