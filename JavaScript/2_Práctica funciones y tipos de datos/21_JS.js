function escribirCartelitoOptimo(titulo, nombre, apellido) {
    return escribirCartelito(titulo, nombre, apellido, longitud(nombre + apellido) > 15) ;
  }