let takki = document.querySelector("#testTakki");
let iTitill = document.querySelector("#inputTitill");
let iLysing = document.querySelector("#inputLysing");
let iDags = document.querySelector("#inputDags");
let iFlokkur = document.querySelector("#inputFlokkur");
let iLitur = document.querySelector("#inputLitur");

let listi = [];

takki.addEventListener("click", nyttShit);
let template = document.querySelector("#template");
let holder = document.querySelector("#holder");

function nyttShit() {
  let clone = template.content.cloneNode(true);
  let uppl = writeJson();
  clone.querySelector(".titill").textContent = uppl.Titill;
  clone.querySelector(".lysing").textContent = uppl.Lysing;
  clone.querySelector(".dags").textContent = uppl.Dags;
  let tags = clone.querySelectorAll(".tag");
  tags[0].textContent = "tag 1";
  tags[1].textContent = "tag 2";
  tags[2].textContent = "tag 3";
  clone.querySelector(".flokkur").textContent = uppl.Flokkur;
  clone.querySelector(".card").style.borderColor = uppl.Litur;

  holder.appendChild(clone)
}

function takeAndEscape(e) {
  let output = e.value;
  e.value = null;
  return output;
}

function writeJson() {
  let obj = {
    Titill: takeAndEscape(iTitill),
    Lysing: takeAndEscape(iLysing),
    Dags: takeAndEscape(iDags),
    Flokkur: takeAndEscape(iFlokkur),
    Litur: takeAndEscape(iLitur),
  }

  localStorage.removeItem("listi")
  listi.push(obj)
  localStorage.setItem("listi",JSON.stringify(listi))
  
  return obj;
}

function onStart() {
  let geymdurListi = localStorage.getItem("listi");
  let parsedListi = JSON.parse(geymdurListi);
  console.log(parsedListi)
  for (const key of parsedListi) {
    listi.push(key);
    let clone = template.content.cloneNode(true);
    clone.querySelector(".titill").textContent = key.Titill;
    clone.querySelector(".lysing").textContent = key.Lysing;
    clone.querySelector(".dags").textContent = key.Dags;
    let tags = clone.querySelectorAll(".tag");
    tags[0].textContent = "tag 1";
    tags[1].textContent = "tag 2";
    tags[2].textContent = "tag 3";
    clone.querySelector(".flokkur").textContent = key.Flokkur;
    clone.querySelector(".card").style.borderColor = key.Litur;

    holder.appendChild(clone)
  }
}

onStart()