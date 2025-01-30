let  sponsor = document.getElementById("sponsor")
let sponsorList = document.getElementById("Ourwork")
let overlay = document.getElementById("overlay")


sponsor.addEventListener("click",() => {
  if (sponsorList.style.display == "none"){
    sponsorList.style.display = "block";
    overlay.style.display = "block";
    }
  else {
    sponsorList.style.display = "none";
  }
})

overlay.addEventListener("click",() => {
  sponsorList.style.display = "none";
  overlay.style.display = "none";
})