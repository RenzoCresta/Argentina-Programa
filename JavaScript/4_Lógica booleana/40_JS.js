function puedeJubilarse (edad, sexo, aportes) {
    return aportes >= 30 && (edad >= 65 && sexo === "M" || edad >= 60 && sexo === "F"); 
   }