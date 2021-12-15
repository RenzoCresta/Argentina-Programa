function estaCerrado(esFeriado, dia, horario) {
    function esFinDeSemana (dia) {
    return  dia === "sabado" || dia === "domingo" ;
    }
    return esFeriado || esFinDeSemana(dia) || !dentroDeHorarioBancario(horario) ;
  }