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
    var numero = getNbScreen() + 1
    var placement = numero * 100 + 15
    
    getBody.appendChild(screen)
    
    var rand = Math.floor(Math.random(16))
    screen.style.backgroundColor = getCouleur()
    screen.style.left = placement+"%"
}

function deleteScreen(sendId) {
    var id = "screen"+sendId
    var screen = document.getElementById(id)
    getBody.removeChild(screen)
}

function slideScreen() {
    var screens = document.getElementsByClassName("screen")
    for(var i = 0; i < getNbScreen(); i++) {
        var place = screens[i].style.left
        var newVal = place.slice(0, place.length - 1)
        if(newVal - 100 < -100) {
            screens[i].style.opacity = "0"
            screens[i].style.left = (getNbScreen() - 2) * 100 + 15 + "%"
        }
        else {screens[i].style.left = newVal - 100 + "%"}
    }
    for(var i = 0; i < getNbScreen(); i++) {
        screens[i].style.opacity = "1"
    }
}







var nbCam=0;


function createSwitch() {
    var cam1 = document.createElement("div") 
    cam1.id = "cameraButton"
    
    cam1.className = "cameraButton"
    cam1.style.top=10*nbCam+5+"%";
    cam1.innerHTML = "Camera "+(nbCam+1)
    
    getBody.appendChild(cam1)
    nbCam++;
}











