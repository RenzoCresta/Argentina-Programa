module Pachorra
    def self.ave=(un_ave)
      @ave = un_ave
    end
    
    def self.entrenar_ave!
      10.times { @ave.volar_en_circulos! }
      @ave.comer_alpiste! 30
      5.times { @ave.volar_en_circulos! }
      @ave.hacer_lo_que_quiera!
    end
  end