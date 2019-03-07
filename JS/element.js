var getBody = document.body

function getNbScreen() {
    var nbScreen = document.getElementsByClassName("screen")
    return nbScreen.length
}

function getCouleur() {
    var res = ""
    for(var i = 0; i < 6; i++){
        var rand = Math.floor(Math.random() * 16)
        if (rand == 10) {rand = "A"}
        else if (rand == 11){rand = "B"}
        else if (rand == 12){rand = "C"}
        else if (rand == 13){rand = "D"}
        else if (rand == 14){rand = "E"}
        else if (rand == 15){rand = "F"}
        res = res + rand + ""
    }
    return "#"+res
}

function createScreen(sendId) {
    var screen = document.createElement("div")
    screen.id = "screen"+sendId
    screen.className = "screen"
    screen.innerHTML = ""
    
    getBody.appendChild(screen)
    
    var rand = Math.floor(Math.random(16))
    screen.style.backgroundColor = getCouleur()
    screen.style.top = "-100%"
    screen.style.left = "15%"
}

function deleteScreen(sendId) {
    var id = "screen"+sendId
    var screen = document.getElementById(id)
    getBody.removeChild(screen)
}

function slideScreen(id) {
    var screens = document.getElementsByClassName("screen")
    for(var i = 0; i < getNbScreen(); i++) {
        if (screens[i].id == "screen"+id){screens[i].style.top = "15%"}
        else if (screens[i].style.top == "15%") {screens[i].style.top = "115%"}
        else {screens[i].style.top = "-100%"}
    }
}










function createSwitch() {
    var left = document.createElement("div")
    var right = document.createElement("div")
    
    left.id = "triangleLeft"
    right.id = "triangleRight"
    
    left.className = "triangle"
    right.className = "triangle"
    
    left.innerHTML = ""
    right.innerHTML = ""
    
    getBody.appendChild(left)
    getBody.appendChild(right)
}











