
let homePoints = document.getElementById("Hpoints")
let homeCount=0
let guestPoints = document.getElementById("Gpoints")
let guestCount=0



let count = 0

function saveHpoints1() {
  homeCount = homeCount + 1
  homePoints.innerText = homeCount

}
function saveHpoints2() {
 homeCount = homeCount + 2
  homePoints.innerText = homeCount
}

function  saveHpoints3() {
  homeCount = homeCount + 3
  homePoints.innerText = homeCount
  
}




//--------------------------------------------
 

function saveGpoints1() {
  guestCount = guestCount + 1;
  guestPoints.innerText = guestCount
  
}

function saveGpoints2() {
  guestCount = guestCount + 2;
  guestPoints.innerText = guestCount
  
}

function saveGpoints3() {
  guestCount = guestCount + 3;
   guestPoints.innerText = guestCount
  
}





