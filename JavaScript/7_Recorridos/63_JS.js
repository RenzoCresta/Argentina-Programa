function meses(meses) {
    let mesesMapeados = [];
    for(let mes of meses) {
      agregar(mesesMapeados, mes.mes)
    }
    return mesesMapeados
  }
  
  function afortunados(afortunados) {
    let fortuna = [];
    for(let afortuna of afortunados) {
      if(afortuna.ganancia > 1000){
        agregar(fortuna, afortuna);
      }
    } return fortuna;
  }
  
  function mesesAfortunados(mesesAfortunados) {
   return meses(afortunados(mesesAfortunados));
  }