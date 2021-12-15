let medalla = ["oro", "plata", "bronce"];
function medallaSegunPuesto(puesto) {
  if (puesto >= 1 && puesto <=3) {
    return medalla[puesto - 1] ;
  }
  else {
    return "nada"
  }
}