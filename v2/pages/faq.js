var dropdown = document.getElementsByClassName("dropdown")
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", 
    function () { 
        this.classList.toggle("active"); 
        var aholder = this.nextElementSibling;
    if (aholder.style.display === "block") {
      aholder.style.display = "none";
    } else {
      aholder.style.display = "block";
    }
    });
}