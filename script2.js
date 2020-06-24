var mailVerified = document.getElementById("mailVerified");
var mailUtente = document.getElementById("mailUtente");

document.getElementById("btn").addEventListener("click", function(){
  var mail = ["mail@gmail.com", "mail@libero.it", "mail@tiscali.it", "mail@fake.com"];
  var trovata = false;

  mailVerified.className = "";

  for (var i = 0; i < mail.length; i++) {
    if (mailUtente.value == mail[i]) {
      trovata = true;
    }

    //Alternativa al for e al primo if, utilizzo includes:
    //var mailValue = mailUtente.value;
    //var trovata = mail.includes(mailUser);

    if (trovata) {
      mailVerified.innerHTML = "La tua mail è presente";
    } else {
      mailVerified.innerHTML = "La tua mail non è presente";
    }
  }
})

document.getElementById("btnCancel").addEventListener("click", function () {
  console.log(mailUtente);
  mailUtente.value = "";
  mailVerified.className = "none";
})
