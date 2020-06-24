var mailVerified = document.getElementById("mailVerified");

document.getElementById("btn").addEventListener("click", function(){
  var mail = ["mail@gmail.com", "mail@libero.it", "mail@tiscali.it", "mail@fake.com"];
  var mailUtente = document.getElementById("mailUtente").value;
  var trovata = false;

  mailVerified.className = " ";

  for (var i = 0; i < mail.length; i++) {
    if (mailUtente == mail[i]) {
      trovata = true;
    }

    if (trovata == true) {
      mailVerified.innerHTML = "La tua mail è presente";
    } else {
      mailVerified.innerHTML = "La tua mail non è presente";
    }
  }
})

document.getElementById("btnCancel").addEventListener("click", function () {
  document.getElementById("mailUtente").value = " ";
  mailVerified.className = "none";
})
