document.getElementById("btn").addEventListener("click", function () {
  var dadoUtente = Math.floor(Math.random()*6) + 1;
  var dadoCPU = Math.floor(Math.random()*6) + 1;
  var winner = document.getElementById("winner");
  
  //  VERSIONE più completa
  var dadi = ["fas fa-dice-one","fas fa-dice-two","fas fa-dice-three","fas fa-dice-four","fas fa-dice-five","fas fa-dice-six"];
  var iconaUtente = document.getElementById("iconaUtente");
  var iconaCPU = document.getElementById("iconaCPU");

  iconaUtente.className = dadi[dadoUtente - 1];
  iconaCPU.className = dadi[dadoCPU - 1];
  //

  if (dadoUtente > dadoCPU) {
    winner.innerHTML = "Hai vinto!";
  } else if (dadoUtente < dadoCPU) {
    winner.innerHTML = "Hai perso!";
  } else {
    winner.innerHTML = "Pareggio!";
  }
})
