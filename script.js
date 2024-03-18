function converterMoeda() {
    var valor = parseFloat(document.getElementById("valorMoeda").value);
    var moedaOrigem = document.getElementById("moedaOrigem").value;
    var moedaDestino = document.getElementById("moedaDestino").value;
  
    var cotacoes = {
      dolar: 1,
      real: 5.32, 
      euro: 0.88, 
      bitcoin: 0.000021, 
      libra: 0.75 
    };
  
    var valorConvertido =
      valor * (cotacoes[moedaDestino] / cotacoes[moedaOrigem]);
    document.getElementById("resultadoMoeda").innerHTML =
      "Valor convertido: " +
      valorConvertido.toFixed(2) +
      " " +
      moedaDestino.toUpperCase();
  }
  
 
  function converterTemperatura() {
    var temperatura = parseFloat(document.getElementById("temp").value);
    var tempOrigem = document.getElementById("tempOrigem").value;
    var tempDestino = document.getElementById("tempDestino").value;
  
    var resultado;
  
    if (tempOrigem === "celsius") {
      if (tempDestino === "fahrenheit") {
        resultado = (temperatura * 9) / 5 + 32;
      } else if (tempDestino === "kelvin") {
        resultado = temperatura + 273.15;
      } else {
        resultado = temperatura;
      }
    } else if (tempOrigem === "fahrenheit") {
      if (tempDestino === "celsius") {
        resultado = ((temperatura - 32) * 5) / 9;
      } else if (tempDestino === "kelvin") {
        resultado = ((temperatura - 32) * 5) / 9 + 273.15;
      } else {
        resultado = temperatura;
      }
    } else if (tempOrigem === "kelvin") {
      if (tempDestino === "celsius") {
        resultado = temperatura - 273.15;
      } else if (tempDestino === "fahrenheit") {
        resultado = ((temperatura - 273.15) * 9) / 5 + 32;
      } else {
        resultado = temperatura;
      }
    }
  
    document.getElementById("resultadoTemperatura").innerHTML =
      "Temperatura convertida: " +
      resultado.toFixed(2) +
      " " +
      tempDestino.toUpperCase();
  }