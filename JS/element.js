var getBody = document.body
var game = document.getElementById("game")
var level = document.getElementById("level")
var instructions = document.getElementById("instructions")
var audio = document.getElementById("audio")
var video = document.getElementById("background")

var languages = ["En", "Fr", "Jp"]
var currentLanguage = languages[0]
var currentLanguageVal = 0
var prevLanguageVal = -1


var noSoundEffect = false







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
    var screenCam = document.createElement("img")
    screen.id = "screen"+sendId
    screenCam.id = "screenCam"+sendId
    screen.className = "screen"
    
    screen.innerHTML = ""
    screen.style.backgroundSize = "100%"
    screen.style.left = "15%"
    
    screenCam.src = ""
    screenCam.alt = "videoSurveillanceCamera"
    screenCam.style.objectFit = "cover"
    screenCam.style.width = "100%"
    screenCam.style.height = "100%"
    
    screen.appendChild(screenCam)
    game.appendChild(screen)
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
            if (screens[i].id.slice(6, 7) == cam.id.slice(3,4)){
                screens[i].style.opacity = "1"
                screens[i].style.pointerEvents = "all"
                screens[i].style.animation = "perturbe 1s 1"
                playScreamerS()
            }
            else {
                screens[i].style.opacity = "0"
                screens[i].style.pointerEvents = "none"
                screens[i].style.animation = "none"
            }
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
    start.style.fontSize = "5vw"
    start.style.textAlign = "center"
    start.style.zIndex = "10"
    start.style.transition = "all 1s"
    
    startText.style.marginTop = "30vh"
    startText.innerHTML = textPerLang[currentLanguageVal][3]
    
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
    newLevel.onclick = function() {
        newLevel.style.animation = "hinge 2s 1";
        metalCreaking3S()
        toGame()
    }
    
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
        lockLongS()
    }
    
    
    getBody.appendChild(setting)
}

function createMenu() {
    var menu = document.createElement("div")
    var titleMenu = document.createElement("h2")
    var buttons = document.createElement("div")
    
    var buttonSound = document.createElement("div")
    var labelSound = document.createElement("span")
    var buttonSoundA1 = document.createElement("label")
    var labelSoundA1 = document.createElement("span")
    var buttonSoundA2 = document.createElement("input")
    var buttonSoundA3 = document.createElement("span")
    var buttonSoundB1 = document.createElement("label")
    var labelSoundB1 = document.createElement("span")
    var buttonSoundB2 = document.createElement("input")
    var buttonSoundB3 = document.createElement("span")
    var buttonSoundC1 = document.createElement("label")
    var labelSoundC1 = document.createElement("span")
    var buttonSoundC2 = document.createElement("input")
    var buttonSoundC3 = document.createElement("span")
    
    var buttonLanguage = document.createElement("div")
    var labelLanguage = document.createElement("span")
    var buttonLanguageA1 = document.createElement("label")
    var buttonLanguageA2 = document.createElement("input")
    var buttonLanguageA3 = document.createElement("span")
    var buttonLanguageB1 = document.createElement("label")
    var buttonLanguageB2 = document.createElement("input")
    var buttonLanguageB3 = document.createElement("span")
    var buttonLanguageC1 = document.createElement("label")
    var buttonLanguageC2 = document.createElement("input")
    var buttonLanguageC3 = document.createElement("span")
    
    var buttonLevel = document.createElement("button")
    var buttonLobby = document.createElement("button")
    var darkness = document.createElement("div")
    
    
    menu.id = "menu"
    titleMenu.id = "titleMenu"
    buttons.id = "menuButtons"
    
    buttonSound.id = "buttonSound"
    labelSound.id = "labelSound"
    buttonSoundA1.id = "buttonSoundA1"
    labelSoundA1.id = "labelSoundA1"
    buttonSoundA2.id = "buttonSoundA2"
    buttonSoundA3.id = "buttonSoundA3"
    buttonSoundB1.id = "buttonSoundB1"
    labelSoundB1.id = "labelSoundB1"
    buttonSoundB2.id = "buttonSoundB2"
    buttonSoundB3.id = "buttonSoundB3"
    buttonSoundC1.id = "buttonSoundC1"
    labelSoundC1.id = "labelSoundC1"
    buttonSoundC2.id = "buttonSoundC2"
    buttonSoundC3.id = "buttonSoundC3"
    
    buttonLanguage.id = "buttonLanguage"
    labelLanguage.id = "labelLanguage"
    buttonLanguageA1.id = "buttonLanguageA1"
    buttonLanguageA2.id = "buttonLanguageA2"
    buttonLanguageA3.id = "buttonLanguageA3"
    buttonLanguageB1.id = "buttonLanguageB1"
    buttonLanguageB2.id = "buttonLanguageB2"
    buttonLanguageB3.id = "buttonLanguageB3"
    buttonLanguageC1.id = "buttonLanguageC1"
    buttonLanguageC2.id = "buttonLanguageC2"
    buttonLanguageC3.id = "buttonLanguageC3"
    
    buttonLevel.id = "buttonLevel"
    buttonLobby.id = "buttonLobby"
    darkness.id = "darkness"
    
    
    labelSound.innerHTML = "SOUND &nbsp;&nbsp;&nbsp;&nbsp;"
    labelSoundA1.innerHTML = "ON"
    labelSoundB1.innerHTML = "OFF"
    labelSoundC1.innerHTML = "MUSIC ONLY"
    
    buttonSoundA1.className = "container"
    buttonSoundB1.className = "container"
    buttonSoundC1.className = "container"
    buttonSoundA2.type = "radio"
    buttonSoundA2.name = "radio"
    buttonSoundA2.checked = true
    buttonSoundB2.type = "radio"
    buttonSoundB2.name = "radio"
    buttonSoundC2.type = "radio"
    buttonSoundC2.name = "radio"
    buttonSoundA3.className = "checkmark"
    buttonSoundB3.className = "checkmark"
    buttonSoundC3.className = "checkmark"
    
    labelLanguage.innerHTML = "LANGUAGE &nbsp;&nbsp;&nbsp;&nbsp;"
    buttonLanguageA1.innerHTML = "<img src='RESOURCES/usa.png' alt='usaFlag' width='20px'>"
    buttonLanguageB1.innerHTML = "<img src='RESOURCES/Fr.jpg' alt='frFlag' width='25px'>"
    buttonLanguageC1.innerHTML = "<img src='RESOURCES/jp.png' alt='jpFlag' width='25px'>"
    
    buttonLanguageA1.className = "container"
    buttonLanguageB1.className = "container"
    buttonLanguageC1.className = "container"
    buttonLanguageA2.type = "radio"
    buttonLanguageA2.name = "radio2"
    buttonLanguageA2.checked = true
    buttonLanguageB2.type = "radio"
    buttonLanguageB2.name = "radio2"
    buttonLanguageC2.type = "radio"
    buttonLanguageC2.name = "radio2"
    buttonLanguageA3.className = "checkmark"
    buttonLanguageB3.className = "checkmark"
    buttonLanguageC3.className = "checkmark"

    
    titleMenu.innerHTML = "MENU"
    buttonLevel.innerHTML = "LEVEL SELECTION"
    buttonLobby.innerHTML = "LOBBY"
    
    buttonLevel.onclick = function() {
        toLevel()
        hideMenu()
        whistleS()
    }
    buttonLobby.onclick = function() {
        toLobby()
        hideMenu()
        whistleS()
    }
    darkness.onclick = function() {
        hideMenu()
        metalCreaking3S()
    }
    
    darkness.style.opacity = "0"
    darkness.style.pointerEvents = "none"
    menu.style.opacity = "0"
    menu.style.pointerEvents = "none"
    
    menu.appendChild(titleMenu)
    menu.appendChild(buttons)
    buttons.appendChild(buttonSound)
    buttonSound.appendChild(labelSound)
    buttonSound.appendChild(buttonSoundA1)
    buttonSoundA1.appendChild(labelSoundA1)
    buttonSoundA1.appendChild(buttonSoundA2)
    buttonSoundA1.appendChild(buttonSoundA3)
    buttonSound.appendChild(buttonSoundB1)
    buttonSoundB1.appendChild(labelSoundB1)
    buttonSoundB1.appendChild(buttonSoundB2)
    buttonSoundB1.appendChild(buttonSoundB3)
    buttonSound.appendChild(buttonSoundC1)
    buttonSoundC1.appendChild(labelSoundC1)
    buttonSoundC1.appendChild(buttonSoundC2)
    buttonSoundC1.appendChild(buttonSoundC3)
    buttons.appendChild(buttonLanguage)
    buttonLanguage.appendChild(labelLanguage)
    buttonLanguage.appendChild(buttonLanguageA1)
    buttonLanguageA1.appendChild(buttonLanguageA2)
    buttonLanguageA1.appendChild(buttonLanguageA3)
    buttonLanguage.appendChild(buttonLanguageB1)
    buttonLanguageB1.appendChild(buttonLanguageB2)
    buttonLanguageB1.appendChild(buttonLanguageB3)
    buttonLanguage.appendChild(buttonLanguageC1)
    buttonLanguageC1.appendChild(buttonLanguageC2)
    buttonLanguageC1.appendChild(buttonLanguageC3)
    buttons.appendChild(buttonLevel)
    buttons.appendChild(buttonLobby)
    getBody.appendChild(menu)
    getBody.appendChild(darkness)
    
    var soundOn = document.getElementById("buttonSoundA2")
    var soundOff = document.getElementById("buttonSoundB2")
    var musicOnly = document.getElementById("buttonSoundC2")
    
    soundOff.addEventListener("click", function(){
        var audio = document.getElementById("audio");
        audio.pause();
        var son = document.getElementById("lock");
        son.volume="0";
        var son2 = document.getElementById("unlock");
        son2.volume="0";
        noSoundEffect = true
    })
    
    soundOn.addEventListener("click", function(){
        var audio = document.getElementById("audio");
        audio.play();
        var son = document.getElementById("lock");
        son.volume="1";
        var son2 = document.getElementById("unlock");
        son2.volume="1";
        noSoundEffect = false
    })
    
    musicOnly.addEventListener("click", function(){
        var audio = document.getElementById("audio");
        audio.play();
        var son = document.getElementById("lock");
        son.volume="0";
        var son2 = document.getElementById("unlock");
        son2.volume="0";
        noSoundEffect = true
    })
    
    
    var eng = document.getElementById("buttonLanguageA2")
    var fr = document.getElementById("buttonLanguageB2")
    var jp = document.getElementById("buttonLanguageC2")
    
    eng.addEventListener("click", function(){
        prevLanguageVal = currentLanguageVal
        currentLanguage = languages[0]
        currentLanguageVal = 0
        reloadLanguages()
        writingS()
    })
    fr.addEventListener("click", function(){
        prevLanguageVal = currentLanguageVal
        currentLanguage = languages[1]
        currentLanguageVal = 1
        reloadLanguages()
        writingS()
    })
    jp.addEventListener("click", function(){
        prevLanguageVal = currentLanguageVal
        currentLanguage = languages[2]
        currentLanguageVal = 2
        reloadLanguages()
        writingS()
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
    rules.innerHTML = textPerLang[currentLanguageVal][5]
    rulesTitle.innerHTML = "HOW TO PLAY"
    
    instructions.appendChild(rulesTitle)
    instructions.appendChild(rules)
}





function reloadInstructions() {
    var rules = document.getElementById("rules")
    var title = document.getElementById("rulesTitle")
    
    rules.innerHTML = textPerLang[currentLanguageVal][5]
    title.innerHTML = textPerLang[currentLanguageVal][4]
}

function reloadLobby() {
    var start = document.getElementById("playButton")
    var instruction = document.getElementById("instructionsButton")
    
    start.innerHTML = textPerLang[currentLanguageVal][0]
    instruction.innerHTML = textPerLang[currentLanguageVal][1]
}

function reloadLevel() {
    var select = document.getElementById("titleLevel")
    
    select.innerHTML = textPerLang[currentLanguageVal][2]
}

function reloadGame() {
    if (document.getElementById('start')) {
        var start = document.getElementById('startText')
        start.innerHTML = textPerLang[currentLanguageVal][3]
        document.getElementById('start').style.left = "0%"
        document.getElementById('start').style.opacity = "1"
    }
}

function reloadMenu() {
    var title = document.getElementById("titleMenu")
    var sound = document.getElementById("labelSound")
    var soundOn = document.getElementById("labelSoundA1")
    var soundOff = document.getElementById("labelSoundB1")
    var musicOnly = document.getElementById("labelSoundC1")
    var language = document.getElementById("labelLanguage")
    var level = document.getElementById("buttonLevel")
    var lobby = document.getElementById("buttonLobby")
    
    title.innerHTML = textPerLang[currentLanguageVal][6]
    
    sound.innerHTML = textPerLang[currentLanguageVal][7]
    
    soundOn.innerHTML = textPerLang[currentLanguageVal][8]
    
    soundOff.innerHTML = textPerLang[currentLanguageVal][9]
    
    language.innerHTML = textPerLang[currentLanguageVal][10]
    
    level.innerHTML = textPerLang[currentLanguageVal][11]
    
    lobby.innerHTML = textPerLang[currentLanguageVal][12]
 
    musicOnly.innerHTML = textPerLang[currentLanguageVal][13]
}


