function ganancias(balancesDeUnPeriodo) {
    let ganancias = [];
    for (let balance of balancesDeUnPeriodo) {
      agregar(ganancias, balance.ganancia)
    }
    return ganancias;
  }
  