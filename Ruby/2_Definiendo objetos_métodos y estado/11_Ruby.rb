module Pepita
    @energia = 100
    @ciudad = Obera
    
    def self.energia
      @energia 
    end
    
    def self.cantar!
      'pri pri pri'
    end
    
    def self.comer_lombriz!
      @energia += 20
    end
    
    def self.volar_en_circulos!
      @energia -= 10
    end
    
    def self.volar_hacia!(destino)
      @energia -= 100
      @ciudad = destino
    end
    def self.ciudad 
      @ciudad
  end
  end