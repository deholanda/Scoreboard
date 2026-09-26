let guest = document.getElementById("guest")
let guestCount = 0
guest.textContent = 0

let home = document.getElementById("home")
let homeCount = 0
home.textContent = 0


function add1home() {
    homeCount++
    home.innerText = homeCount    
}

function add2home() {
    homeCount = homeCount + 2
    home.innerText = homeCount    
}

function add3home() {
    homeCount = homeCount + 3
    home.innerText = homeCount
}

function add1guest() {
    guestCount++
    guest.innerText = guestCount
}

function add2guest() {
    guestCount+=2
    guest.innerText = guestCount
}

function add3guest() {
    guestCount+=3
    guest.innerText = guestCount
}