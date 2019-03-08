var getBody = document.body
var game = document.getElementById("game")
var level = document.getElementById("level")
var instructions = document.getElementById("instructions")
var audio = document.getElementById("audio")
var video = document.getElementById("background")

function getNbScreen() {
    var nbScreen = document.getElementsByClassName("screen")
    return nbScreen.length
}


function getNbCam() {
    var nbCam = document.getElementsByClassName("cam")
    return nbCam.length
}


function getNbLevel() {
    var nbLevel = document.getElementsByClassName("levelElement")
    return nbLevel.length
}

/*
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
*/


function createScreen(sendId) {
    var screen = document.createElement("div")
    screen.id = "screen"+sendId
    screen.className = "screen"
    screen.innerHTML = ""
    
    game.appendChild(screen)
    
    var rand = Math.floor(Math.random(16))
    screen.style.backgroundColor = "white" //getCouleur()
    screen.style.left = "15%"
}


function deleteScreen(sendId) {
    var id = "screen"+sendId
    var screen = document.getElementById(id)
    game.removeChild(screen)
}

/*
function slideScreen(id) {
    var screens = document.getElementsByClassName("screen")
    for(var i = 0; i < getNbScreen(); i++) {
        if (screens[i].id == "screen"+id){screens[i].style.top = "15%"}
        else if (screens[i].style.top == "15%") {screens[i].style.top = "115%"}
        else {screens[i].style.top = "-100%"}
    }
}
*/

function createCam(sendId) {
    var cam = document.createElement("div")
    cam.id = "cam"+sendId
    cam.className = "cam"
    cam.innerHTML = ""
    cam.style.left = "1%"
    
    var camPic = document.createElement("img")
    camPic.id = "camPic"+sendId
    camPic.className = "camPic"
    camPic.src = "RESOURCES/cam.png"
    cam.appendChild(camPic)
    
    cam.onclick = function(){
        var screens = document.getElementsByClassName("screen")
        for(var i = 0; i < getNbScreen(); i++) {
            if (screens[i].id.slice(6, 7) == cam.id.slice(3,4)){screens[i].style.opacity = "1"}
            else {screens[i].style.opacity = "0"}
        }
        var cams = document.getElementsByClassName("cam")
        var camPics = document.getElementsByClassName("camPic")
        for(var i = 0; i < cams.length; i++) {
            cams[i].style.borderRadius = "30%"
            cams[i].style.boxShadow = "inset 12px 12px 2px 1px rgba(0, 0, 0, 0.2), 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
            cams[i].style.backgroundColor = "#acb4b5"
            camPics[i].style.width = "95%"
        }
        cam.style.borderRadius = "20%"
        cam.style.boxShadow = "none"
        cam.style.backgroundColor = "#ffffff"
        camPic.style.width = "100%"
    }
    
    game.appendChild(cam)
    arrangeCam()
}

function deleteCam(sendId) {
    var id = "cam"+sendId
    var cam = document.getElementById(id)
    game.removeChild(cam)
}

function arrangeCam() {
    var cams = document.getElementsByClassName("cam")
    for(var i = 0; i < getNbCam(); i++){
        if (cams.length <= 6){
            cams[i].style.top = 2 + i * 16 + "%"
            cams[i].style.height = "15%"
        }
        else {
            cams[i].style.top = (100 / cams.length) * i + "%"
            cams[i].style.height = (95 / cams.length) + "%"
        }
    }
}

function startScreen() {
    var start = document.createElement("div")
    var startText = document.createElement("h1")
    start.id = "start"
    startText.id = "startText"
    
    start.style.position = "absolute"
    start.style.top = "0"
    start.style.left = "0"
    start.style.width = "100vw"
    start.style.height = "100vh"
    start.style.backgroundColor = "rgba(0,0,0,0.9)"
    start.style.color = "white"
    start.style.fontFamily = "CutTheCrap"
    start.style.fontSize = "6vw"
    start.style.textAlign = "center"
    start.style.zIndex = "10"
    start.style.transition = "all 1s"
    
    startText.style.marginTop = "30vh"
    startText.innerHTML = "CLICK TO START"
    
    start.onclick = function() {
        start.style.left = "-100%"
        start.style.opacity = "0"
        var cam1 = document.getElementById ("cam1")
        cam1.click()
    }
    
    start.appendChild(startText)
    game.appendChild(start)
}






















function createLevel(sendId) {
    var newLevel = document.createElement("div")
    newLevel.id = "level"+sendId
    newLevel.className = "levelElement"
    newLevel.innerHTML = ""
    newLevel.style.width = "20vw"
    newLevel.style.height = "20vh"
    newLevel.onclick = function() {toGame()}
    
    /*
    if (getNbLevel() >= 12) {
        var levels = document.getElementsByClassName("levelElement")
        for (var i = 0; i < getNbLevel(); i++){
            levels[i].style.width = levels[i].style.width.slice(0, levels[i].style.width.length - 2) / 2 + "vw"
            levels[i].style.height = levels[i].style.height.slice(0, levels[i].style.height.length - 2) / 2 + "vh"
            levels[i].style.top = (Math.floor(((getNbLevel()) / 4)) + 1) * 25 + "vh"
            levels[i].style.left = getNbLevel() % 4  * 25 + 2.5 + "vw"
        }
        newLevel.style.top = ((Math.floor(((getNbLevel()) / 8)) + 1) * 25) + "vh"
        newLevel.style.left = (getNbLevel() % 8  * 25 + 2.5)  + "vw"
    }
    else {*/
        newLevel.style.top = (Math.floor(((getNbLevel()) / 4)) + 1) * 25 + "vh"
        newLevel.style.left = getNbLevel() % 4  * 25 + 2.5 + "vw"
    /*}*/
    

    
    level.appendChild(newLevel)
    
}

function deleteLevel(sendId) {
    var id = "level"+sendId
    var levelSup = document.getElementById(id)
    level.removeChild(levelSup)
}


function createSetting() {
    var setting = document.createElement("img")
    setting.id = "setting"
    setting.src = "RESOURCES/setting.png"
    setting.alt = "setting"
    setting.style.position = "fixed"
    setting.style.top = "1vh"
    setting.style.right = "1vw"
    setting.style.width = "3vw"
    setting.onclick = function() {
        displayMenu()
    }
    
    
    getBody.appendChild(setting)
}

function createMenu() {
    var menu = document.createElement("div")
    var titleMenu = document.createElement("h2")
    var buttons = document.createElement("div")
    
    var buttonSound = document.createElement("div")
    var buttonSoundA1 = document.createElement("label")
    var buttonSoundA2 = document.createElement("input")
    var buttonSoundA3 = document.createElement("span")
    var buttonSoundB1 = document.createElement("label")
    var buttonSoundB2 = document.createElement("input")
    var buttonSoundB3 = document.createElement("span")
    
    var buttonLevel = document.createElement("button")
    var buttonLobby = document.createElement("button")
    var darkness = document.createElement("div")
    
    menu.id = "menu"
    titleMenu.id = "titleMenu"
    buttons.id = "menuButtons"
    
    buttonSound.id = "buttonSound"
    buttonSoundA1.id = "buttonSoundA1"
    buttonSoundA2.id = "buttonSoundA2"
    buttonSoundA3.id = "buttonSoundA3"
    buttonSoundB1.id = "buttonSoundB1"
    buttonSoundB2.id = "buttonSoundB2"
    buttonSoundB3.id = "buttonSoundB3"
    
    buttonLevel.id = "buttonLevel"
    buttonLobby.id = "buttonLobby"
    darkness.id = "darkness"
    
    buttonSound.innerHTML = "SOUND &nbsp;&nbsp;&nbsp;&nbsp;"
    buttonSoundA1.innerHTML = "ON"
    buttonSoundB1.innerHTML = "OFF"
    
    buttonSoundA1.className = "container"
    buttonSoundB1.className = "container"
    buttonSoundA2.type = "radio"
    buttonSoundA2.name = "radio"
    buttonSoundA2.checked = true
    buttonSoundB2.type = "radio"
    buttonSoundB2.name = "radio"
    buttonSoundA3.className = "checkmark"
    buttonSoundB3.className = "checkmark"
    
    
    titleMenu.innerHTML = "MENU"
    buttonLevel.innerHTML = "LEVEL SELECTION"
    buttonLobby.innerHTML = "LOBBY"
    
    buttonLevel.onclick = function() {
        toLevel()
        hideMenu()
    }
    buttonLobby.onclick = function() {
        toLobby()
        hideMenu()
    }
    darkness.onclick = function() {
        hideMenu()
    }
    darkness.style.opacity = "0"
    darkness.style.pointerEvents = "none"
    menu.style.opacity = "0"
    menu.style.pointerEvents = "none"
    
    menu.appendChild(titleMenu)
    menu.appendChild(buttons)
    buttons.appendChild(buttonSound)
    buttonSound.appendChild(buttonSoundA1)
    buttonSoundA1.appendChild(buttonSoundA2)
    buttonSoundA1.appendChild(buttonSoundA3)
    buttonSound.appendChild(buttonSoundB1)
    buttonSoundB1.appendChild(buttonSoundB2)
    buttonSoundB1.appendChild(buttonSoundB3)
    buttons.appendChild(buttonLevel)
    buttons.appendChild(buttonLobby)
    getBody.appendChild(menu)
    getBody.appendChild(darkness)
    
    var soundOn = document.getElementById("buttonSoundA2")
    var soundOff = document.getElementById("buttonSoundB2")
    soundOff.addEventListener("click", function(){
        var audio = document.getElementById("audio");
        audio.pause()
    })
    
    soundOn.addEventListener("click", function(){
        var audio = document.getElementById("audio");
        audio.play()
    })
}

function displayMenu() {
    if (!document.getElementById('menu')) {
        createMenu()
    }
    var menu = document.getElementById("menu")
    var darkness = document.getElementById("darkness")
    menu.style.opacity = "1"
    menu.style.pointerEvents = "all"
    darkness.style.opacity = "1"
    darkness.style.pointerEvents = "all"
}

function hideMenu() {
    var menu = document.getElementById("menu")
    var darkness = document.getElementById("darkness")
    menu.style.opacity = "0"
    menu.style.pointerEvents = "none"
    darkness.style.opacity = "0"
    darkness.style.pointerEvents = "none"
}


function createInstructions() {
    var rules = document.createElement("div")
    var rulesTitle = document.createElement("h1")
    rules.id = "rules"
    rulesTitle.id = "rulesTitle"
    rules.innerHTML = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
    rulesTitle.innerHTML = "HOW TO PLAY"
    
    instructions.appendChild(rulesTitle)
    instructions.appendChild(rules)
}




