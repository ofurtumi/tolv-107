/**
 * blað, skæri, steinn
 * spilað í gegn um console
 */


const MAX_BEST_OF = 10;

let wins = 0;
let losses = 0;
let heildarLeikir = 0;

/**
 * Athugar hvort gefin tala sé gild sem best-of gildi.
 * @param {number} bestOf Tala sem skal athuga
 * @return {boolean} true eða false
 */
function isValidBestOf(bestOf) {
  if (bestOf % 2 === 1 && bestOf <= MAX_BEST_OF) return true
  else return false
}
// console.assert(isValidBestOf(1) === true, '1 er valid best of');
// console.assert(isValidBestOf(2) === false, '2 er ekki er valid best of');
// console.assert(isValidBestOf(9) === true, '9 er valid best of');

function playAsText(play) {
  out = 'Óþekkt'
  switch(play) {
    case '1':
      out = 'Skæri'
      break;
  
    case '2':
      out = 'Blað'
      break;
  
    case '3':
      out = 'Steinn'
      break;
    
    default:
      out = 'Óþekkt'
      break;
  }

  console.log(out);
  return(out)
}
// console.assert(playAsText('1') === 'Skæri', '1 táknar skæri');
// console.assert(playAsText('2') === 'Blað', '2 táknar blað');
// console.assert(playAsText('3') === 'Steinn', '3 táknar steinn');
// console.assert(playAsText('foo') === 'Óþekkt', 'Annað er óþekkt');

/**
 * Athugar hvort spilari eða tölva vinnur.
 * @param {number} player Það sem spilari spilaði
 * @param {number} computer Það sem tölva spilaði
 * @returns -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function checkGame(player, computer) {
  let out = 0;
  switch(player) {
    case 'Skæri':
      if (computer === 2) out = 1;
      else if (computer === 1) out = 0;
      else out = -1;
      // console.log("Skæri = " + out)
      break;
    
    case 'Blað':
      if (computer === 3) out = 1;
      else if (computer === 2) out = 0;
      else out = -1;
      // console.log("Blað = " + out)
      break;

    case 'Steinn':
      if (computer === 1) out = 1;
      else if (computer === 3) out = 0;
      else out = -1;
      // console.log("Steinn = " + out)
      break;

    default:
      out = -1;
      break; 
  }

  return out;
}
// console.assert(checkGame('Skæri', 2) === 1, 'Skæri vinnur blað');
// console.assert(checkGame('Blað', 3) === 1, 'Blað vinnur stein');
// console.assert(checkGame('Steinn', 1) === 1, 'Steinn vinnur skæri');
// console.assert(checkGame('Skæri', 1) === 0, 'Skæri og skæri eru jafntefli');
// console.assert(checkGame('Skæri', 3) === -1, 'Skæri tapar fyrir stein');

/**
 * Spilar einn leik.
 * @return {boolean} -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function round() {
  let hendi = prompt("Hvað spilar þú? 1: skæri, 2: blað, 3: steinn")
  if (hendi !== 'cancel') {
    hendi = playAsText(hendi);
  }

  if (hendi === 'Óþekkt') {
    alert("Tölva vann þessa umferð")
    losses++
  }

  else {
    let tolva = Math.floor(Math.random()*2+1)
    let sigurvegari = checkGame(hendi,tolva)
    
    switch(sigurvegari) {
      case 0:
        alert("Jafntefli, reynum aftur")
        round();
        break;
  
      case 1:
        alert("Þú vannst þessa umferð")
        wins++
        break;
  
      case -1:
        alert("Tölva vann þessa umferð")
        losses++
        break;
    }
  }
}

function play() {
  wins = 0
  losses = 0
  let fLeikir = prompt("Af hversu mörgum leikjum þarf að vinna?")

  if (isValidBestOf(fLeikir)) {
    while ((wins+losses) < (fLeikir/2)) {
      round()
    }
  }

  else {
    console.error("Vinsamlegast veldu lægri tölu eða tölu sem er ekki slétt")
  }

  if (wins < losses) {
    alert("Tölva vann!")
  }

  else {
    alert("Þú vannst, til hamingju!")
  }
}

function games() {
  heildarLeikir = wins+losses;
  console.log("Þú hefur spilað %s leiki.", heildarLeikir);

  if (wins+losses !== 0) {
    console.log("Þú hefur unnið %s, eða %s% af heild.", wins, 100*wins/(heildarLeikir));
    console.log("Þú hefur tapað %s, eða %s% af heild.", losses, 100*losses/(heildarLeikir));
  }
}
