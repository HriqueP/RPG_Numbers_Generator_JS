function gerarNumeros() {
  var qtdNums = parseInt(document.getElementById("qtdNums").value);
  var min = parseInt(document.getElementById("numInicial").value);
  var max = parseInt(document.getElementById("numFinal").value);
  var x = "";

  if (isNaN(qtdNums) || isNaN(min) || isNaN(max)) {
    alert("Valores Inválidos");
    return;
  }

  for (let i = 0; i < qtdNums; i++) {
    x += Math.floor(Math.random() * (max - min + 1)) + min + " ";
  }
  document.getElementById("result").innerHTML = x;
}
