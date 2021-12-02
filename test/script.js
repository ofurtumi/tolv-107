let closed = document.querySelector(".card");
let fav = document.querySelector(".done")
let nedri = document.querySelector(".nedri");
closed.addEventListener("click",opnaLoka);

fav.addEventListener("click",(e) => {
    console.log("click")
    e.stopPropagation()
    if (fav.checked) {
        console.log("Fav is checked..");
    } 
    else {
        console.log("Fav is not checked..");
    }
})

function opnaLoka() {
    if (nedri.style.display === "block") {
        nedri.style.display = "none";
    }
    else {
        nedri.style.display = "block";
    }
}
