function valorEnvido (carta){
    if (carta >= 1 && carta <=7) {
      return carta;
    }
    else if (carta >= 10 && carta <= 12) {
      return 0;
    }
  }