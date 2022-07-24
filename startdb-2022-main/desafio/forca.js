var estadoEsperado = 'aguardando chute';

class Forca {
  constructor(palavraSecreta){
    this.palavraSecreta = palavraSecreta;
    this.palavra = "";
    this.vidas = 6;
    this.letrasChutadas = [];
    for (var i = 0; i < this.palavraSecreta.length; i++) {
      this.palavra = this.palavra.concat("_");
    }
  }

  chutar(letra) {
    if(this.letrasChutadas.indexOf(letra) == -1 && letra.length == 1){
      for (var i = 0; i < this.palavraSecreta.length; i++) {
        if(this.palavraSecreta[i] == letra){
          this.palavra = replaceByIndex(this.palavra, i, letra);
        }
      }
      this.letrasChutadas.push(letra);
      if(this.palavraSecreta.indexOf(letra) == -1){
        this.vidas--;
      }

      if(this.vidas > 0 && this.palavra == this.palavraSecreta){
        estadoEsperado = "ganhou";
      }else if(this.vidas == 0){
        estadoEsperado = "perdeu";
      }
    }
  }

  buscarEstado() { return estadoEsperado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

function replaceByIndex(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

module.exports = Forca;