var getBody = document.body

function getNbScreen() {
    var nbScreen = document.getElementsByClassName("screen")
    return nbScreen.length
}

function getNbCam() {
    var nbCam = document.getElementsByClassName("cam")
    return nbCam.length
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

function createCam(sendId) {
    var cam = document.createElement("div")
    cam.id = "cam"+sendId
    cam.className = "cam"
    cam.innerHTML = "Caméra " + sendId
    
    getBody.appendChild(cam)
    
    var rand = Math.floor(Math.random(16))
    cam.style.backgroundColor = getCouleur()
    cam.style.left = "1%"
    arrangeCam()
}

function arrangeCam() {
    var cams = document.getElementsByClassName("cam")
    for(var i = 0; i < getNbCam(); i++){
        cams[i].style.top = (100 / cams.length) * i + "%"
        cams[i].style.height = (95 / cams.length) + "%"
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











