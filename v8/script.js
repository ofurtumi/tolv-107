let byrja = document.querySelector('.byrja')
let umferdir = document.querySelector('.umferdir')
let sbs = document.querySelector('.sbs')
let nidurstada = document.querySelector('.nidurstada')
let umferdAf = document.querySelector('#umferdAf')
let playerHand = document.querySelector("#playerHand")
let compHand = document.querySelector("#compHand")
let winner = document.querySelector("#winner")
let stadan = document.querySelector("#stada")
let naestiTakki = document.querySelector("#naesta")
let afturTakki = document.querySelector("#aftur")
let scoreboard = document.querySelector(".scoreboard")
let hWins = document.querySelector("#hWins")
let hLosses = document.querySelector("#hLosses")

let txt = ""
let out = 0
let tolva = 0
let maxAf = 0           // af hversu mörgum leikjum þarf að vinna
let nuverandiLeikir = 0 // hversu margar umferðir er búið að spila
let wins = 0            // hversu marga leiki er búið að vinna
let losses = 0          // hversu mörgum leikjum er búið að tapa
let heildarLeikir = 0   // hversu marga leiki er búið að spila
let heildarWin = 0      // fjöldi sigra yfir marga leiki
let heildarLosses = 0   // fjöldi tapa yfir marga leiki

document.querySelector(".byrja").addEventListener("click", hefjaLeik)

for (let i = 1; i<=5; i++) {
  document.querySelector("#f"+(i)).addEventListener("click",(event) => { fjoldiUmferda(i);});
}

for (let i = 1;i<=3;i++) {
  document.querySelector("#sbs"+(i)).addEventListener("click",(event) => { umferd(i);});
}

naestiTakki.addEventListener("click",nyUmferd)
afturTakki.addEventListener("click",byrjaAftur)

function hefjaLeik() {
  wins = 0
  losses = 0
  nuverandiLeikir = 0
  
  byrja.style.display = "none"
  umferdir.style.display = "flex"
}

/**
 * function sem er keyrt þegar valið er um af hversu mörgum leikjum þarf að vinna til þess að vinna alveg
 * @param {number} fjoldi nr takkans sem ýtt var á notað til að reikna út hversu margar umferðir á að spila
 */
function fjoldiUmferda(fjoldi) {
  maxAf = Number((fjoldi*2)-1)
  umferdir.style.display = "none"
  sbs.style.display = "flex"
}

//out gildin þýða eftirfarandi: 1=win 0=jafntefli og -1=lose
function umferd(hendi) {
  tolva = Math.floor(Math.random()*2+1)
  switch(hendi) {
    case 1:
      if (tolva === 2) out = 1
      else if (tolva === 1) out = 0
      else out = -1
      break

    case 2:
      if (tolva === 3) out = 1
      else if (tolva === 2) out = 0
      else out = -1
      break

    case 3:
      if (tolva === 1) out = 1
      else if (tolva === 3) out = 0
      else out = -1
      break
  }
  urslitOgAftur(hendi,tolva,out)
}

function urslitOgAftur(hendi,tolva,result) {
  sbs.style.display = "none"
  nidurstada.style.display = "flex"
  
  switch(hendi) {
    case 1:
      playerHand.textContent = "skæri"
      break
    case 2:
      playerHand.textContent = "blað"
      break
    case 3:
      playerHand.textContent = "stein"
      break
  }

  switch(tolva) {
    case 1:
      compHand.textContent = "skæri"
      break
    case 2:
      compHand.textContent = "blað"
      break
    case 3:
      compHand.textContent = "stein"
      break
  }

  switch(result) {
    case 1:
      wins = wins + 1
      nuverandiLeikir = nuverandiLeikir + 1
      winner.textContent = "Þú vannst"
      break

    case 0:
      winner.textContent = "Jafntefli, reynum aftur"
      break

    case -1:
      losses = losses + 1
      nuverandiLeikir = nuverandiLeikir + 1
      winner.textContent = "Tölvan vann"
      break
  }

  stadan.textContent = wins + " - " + losses
  umferdAf.textContent = "Umferð " + nuverandiLeikir + " af " + maxAf

  if (wins < (maxAf+1)/2 && losses < (maxAf+1)/2) {
    afturTakki.style.display = "none"
    naestiTakki.style.display = "block"
  }

  else {
    naestiTakki.style.display = "none"
    afturTakki.style.display = "block"
  }
}

function nyUmferd() {
  nidurstada.style.display = "none"
  sbs.style.display = "flex"
}

function byrjaAftur() {
  heildarLeikir = heildarLeikir + 1
  
  addToScoreboard()

  nidurstada.style.display = "none"
  sbs.style.display = "none"
  umferdir.style.display = "none" 
  byrja.style.display = "flex"
}

function addToScoreboard() {
  if (wins < losses) {
    heildarLosses++
    txt = document.createTextNode('#'+ heildarLeikir+": Þú tapaðir "+wins + " - " + losses);
  }

  else {
    heildarWin++
    txt = document.createTextNode('#'+ heildarLeikir+": Þú vannst "+wins + " - " + losses);
  }

  let p = document.createElement('p')
  p.appendChild(txt);
  scoreboard.appendChild(p);

  hWins.textContent = heildarWin + " (" + Math.round(100*heildarWin/heildarLeikir) + "%)"
  hLosses.textContent = heildarLosses + " (" + Math.round(100*heildarLosses/heildarLeikir) + "%)"
}