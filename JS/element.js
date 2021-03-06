var getBody = document.body
var game = document.getElementById("game")
var level = document.getElementById("level")
var instructions = document.getElementById("instructions")
var audio = document.getElementById("audio")
var video = document.getElementById("background")

var languages = ["En", "Fr", "Jp"]
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
    var screenOverlay = document.createElement("img")
    screen.id = "screen"+sendId
    screenCam.id = "screenCam"+sendId
    screenOverlay.id = "overlay"+sendId
    screen.className = "screen"
    
    screen.innerHTML = ""
    screen.style.backgroundSize = "100%"
    screen.style.left = "15%"
    screen.style.pointerEvents = "none"
    
    screenCam.src = ""
    screenCam.alt = "videoSurveillanceCamera"
    screenCam.style.objectFit = "cover"
    screenCam.style.width = "100%"
    screenCam.style.height = "100%"
    screenCam.style.position="absolute"
    
    screenOverlay.src = "RESOURCES/camOverlay.gif"
    screenOverlay.alt = "cameraOverlay"
    screenOverlay.style.position = "absolute"
    screenOverlay.style.top = "0"
    screenOverlay.style.left = "0"
    screenOverlay.style.objectFit = "contain"
    screenOverlay.style.height = "100%"
    screenOverlay.style.width = "100%"
    screenOverlay.style.filter = "brightness(0.75)"
    
    var time =  document.createElement("p")
    time.style.color = "white"
    time.style.position = "absolute"
    time.style.top = "5%"
    time.style.left = "15%"
    time.style.fontSize = "30px"
    var hours = 22;
    var minutes = 0;
    var x = setInterval(function() {
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
        if(hours==24){
            hours=0;
        }
        if(hours == 6) {
            won()
        }
        let zero = "";
        if(minutes<10) zero="0"
        time.innerHTML = hours + " : "+zero+minutes;

    }, 750);
    screen.appendChild(screenCam)
    screen.appendChild(screenOverlay)
    screen.appendChild(time)
    game.appendChild(screen)
}


function deleteScreen(sendId) {
    var id = "screen"+sendId
    var screen = document.getElementById(id)
    game.removeChild(screen)
}

function createBorder() {
    if(document.getElementsByClassName("screen")[0]) {
        var screen = document.getElementsByClassName("screen")[0]
        var border = document.createElement("img")
        
        border.id = "borderScreen"
        border.style.position = "absolute"
        border.style.left = (screen.getBoundingClientRect()).left - 15 + "px"
        border.style.top = (screen.getBoundingClientRect()).top - 30 + "px"
        border.style.width = screen.offsetWidth + screen.offsetWidth * 0.05 + "px"
        border.style.height = screen.offsetHeight + screen.offsetHeight * 0.1 + "px"
        border.style.pointerEvents = "none"
        border.src = "RESOURCES/Screen6.png"
        border.alt = "videoSurveillanceBorder"
        
        game.appendChild(border)
    }
    else {
        console.log("No screen yet")
    }
}



function changeBorder(version) {
    var screen = document.getElementsByClassName("screen")[0]
    var border = document.getElementById("borderScreen")
    border.style.left = (screen.getBoundingClientRect()).left - 15 + "px"
    border.style.top = (screen.getBoundingClientRect()).top - 10 + "px"
    border.style.width = screen.offsetWidth + 14 + "px"
    border.style.height = screen.offsetHeight + 14 + "px"
    border.src = "RESOURCES/Screen"+version+".png"
}

function loadBorder() {
    if(!document.getElementById("borderScreen")) {
        createBorder()
    }
    else {
        var border = document.getElementById("borderScreen")
        var overlay = document.getElementById("screenOverlay")
        var screen = document.getElementsByClassName("screen")[0]
        
        border.style.width = screen.offsetWidth + screen.offsetWidth * 0.05 + "px"
        border.style.height = screen.offsetHeight + screen.offsetHeight * 0.1 + "px"

    }
}

function deleteBorder() {
    if(undefined != document.getElementById("borderScreen")) {
        var b = document.getElementById("borderScreen")
        game.removeChild(b)
    }
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

function createVent() {
    let map = document.getElementById("map")

    let vent = document.createElement("div")
    vent.id = "cam"+(document.getElementsByClassName("cam").length+1)
    vent.classList.add("cam")
    vent.classList.add("vent")
    vent.innerHTML = ""
    vent.style.left = "1%"
    
    let ventPic = document.createElement("img")
    ventPic.id = "ventPic"
    ventPic.className = "camPic"
    ventPic.src = "RESOURCES/vent.png"
    vent.appendChild(ventPic)
    
    vent.onclick = function(){
        let map = document.getElementById("imgMap")
        let doors = document.getElementById("doors")
        let cam = document.getElementsByClassName("selectedCam")[0]
        let t = document.getElementById("terminal")

        startSound("lock3")
        map.src="RESOURCES/Levels/Level1/mapVent.png"
        doors.style.opacity="0.25"
        cam.style.opacity = "0"
        linkCam(vent)
        
        t.style.opacity = "0.9"
        t.style.pointerEvents = "all"
        saisie = document.createElement("INPUT")
        saisie.id = "saisie"
        saisie.classList.add("saisie")
        saisie.setAttribute('type', 'text');
        saisie.addEventListener('keypress', function (e) {
            var key = e.which || e.keyCode;
            if (key === 13) {
              let test = saisie.value
              saisie.value=""
              if(test == "purgeVentConduct"){
                startSound("steamSound1")
                ventPurged=true
              }         
            }


        });
        t.appendChild(saisie)
        saisie.focus()
        saisie.select()
    }
    game.appendChild(vent)
    arrangeCam();
}

function deleteVent() {
    if(undefined != document.getElementsByClassName("vent")) {
        var v = document.getElementsByClassName("vent")[0]
        game.removeChild(v)
    }
}

function createCam(sendId) {
    var cam = document.createElement("div")
    cam.id = "cam"+sendId
    cam.classList.add("cam")
    cam.innerHTML = ""
    cam.style.left = "1%"
    
    var camPic = document.createElement("img")
    camPic.id = "camPic"+sendId
    camPic.className = "camPic"
    camPic.src = "RESOURCES/cam.png"
    cam.appendChild(camPic)
    
    cam.onclick = function(){
        var overlay = document.getElementById("screenOverlay")
        var map = document.getElementById("imgMap")
        var doors = document.getElementById("doors")
        var terminal = document.getElementById("terminal")
        if(undefined != document.getElementById("saisie")) {
            var saisie = document.getElementById("saisie")
            terminal.removeChild(saisie)
        }
        startSound("lock3")
        var screens = document.getElementsByClassName("screen")

        terminal.style.opacity = "0"
        terminal.style.pointerEvents = "none"
        if(interval != undefined ) {
            clearInterval(interval)
        }
        for(var i = 0; i < getNbScreen(); i++) {
            if (screens[i].id.slice(6, 7) == cam.id.slice(3,4)){
                screens[i].classList.add("selectedCam")
                if(monster.room.camera == screens[i]){
                    glitch()
                }
                screens[i].style.opacity = "1"
                screens[i].style.pointerEvents = "all"
                map.src="RESOURCES/Levels/Level1/mapCam"+i+".png"
                doors.style.opacity = "1"

            }
            else {
                screens[i].classList.remove("selectedCam")
                screens[i].style.opacity = "0"
                screens[i].style.pointerEvents = "none"
                screens[i].style.animation = "none"
            }
        linkCam(cam)
        }

        
    }
    game.appendChild(cam)
    arrangeCam()
}


function linkCam(cam) {
    var cams = document.getElementsByClassName("cam")
    var camPics = document.getElementsByClassName("camPic")
    for(var i = 0; i < cams.length; i++) {
        cams[i].style.borderRadius = "30%"
        cams[i].style.boxShadow = "inset 12px 12px 2px 1px rgba(0, 0, 0, 0.2), 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
        cams[i].style.backgroundColor = "#545454" 
        camPics[i].style.width = "95%"
    }
    cam.style.borderRadius = "20%"
    cam.style.boxShadow = "none"
    cam.style.backgroundColor = "#acb4b5"
    camPics[cam.id.slice(cam.id.length-1, cam.id.length)-1].style.width = "100%"

    loadBorder()
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
    start.style.backgroundColor = "rgba(0,0,0,1)"
    start.style.color = "white"
    start.style.opacity = "0"
    start.style.cursor = "pointer"
    start.style.pointerEvents = "none"
    if (parseInt(getCookie("language")) == 2) {
        start.style.fontFamily = "GenkaiMincho"
    }
    else {
        start.style.fontFamily = "AnotherDanger"
    }
    start.style.fontSize = "5vw"
    start.style.textAlign = "center"
    start.style.zIndex = "10"
    
    startText.style.marginTop = "30vh"
    startText.innerHTML = textPerLang[parseInt(getCookie("language"))][3]
    
    start.onclick = function() {
        start.style.transition = "opacity 1s"
        start.style.pointerEvents = "none"
        start.style.opacity = "0"
        var d = document.getElementById("doors")
        d.innerHTML=""
        var s = document.createElement("script")
        s.setAttribute("type","text/jscript")
        document.body.appendChild(s)
        monster.start()
    }
    
    start.appendChild(startText)
    game.appendChild(start)
}

function createShadow() {
    var shadow = document.createElement("img")
    var screen = document.getElementById("screen1")
    var posX = screen.offsetLeft
    var posY = screen.offsetTop
    shadow.id = "shadow"+Math.random()
    shadow.src = "RESOURCES/flou.png"
    shadow.alt = "shadow"
    shadow.style.zIndex = "15"
    shadow.style.width = "50px"
    shadow.style.height = "50px"
    shadow.style.filter = "invert(1)"
    shadow.style.transition = "top 0.3s ease-in, left 0.3s ease-in, opacity 0.2s 0.3s"
    shadow.style.position = "fixed"
    shadow.style.top = posY+"px"
    shadow.style.left = posX+"px"
    
    game.appendChild(shadow)
    
    setTimeout(function(){
        shadow.style.top = screen.offsetHeight+posY-shadow.offsetHeight+"px"
        shadow.style.left = screen.offsetWidth+posX-shadow.offsetWidth+"px"
        shadow.style.opacity = "0"
    }, 10)
    setTimeout(function() {
        game.removeChild(shadow)
    }, 510)
    
}

function loadShadows() {
    createShadow()
    setTimeout(createShadow, 2)
    setTimeout(createShadow, 5)
    setTimeout(createShadow, 15)
    setTimeout(createShadow, 20)
    setTimeout(createShadow, 25)
    setTimeout(createShadow, 15)
}


















function createLevel(sendId,bool) {
    var newLevel = document.createElement("div")
    var newLevelImg = document.createElement("img")
    newLevelImg.className="levelElementImg"
    newLevelImg.style.height = "100%"
    newLevelImg.style.width = "100%" 
    newLevelImg.style.objectFit = "cover"
    if(bool==true){
        newLevelImg.src = "RESOURCES/chains.png"
        newLevel.classList.add("levelElementFalse")
        newLevel.onmouseover = function() {
            startSound("chain")
        }

    }
    else {
        newLevelImg.src = tabLevelPic[sendId]
        newLevel.classList.add("levelElementTrue")
        newLevel.onclick = function() {
            startSound('metalCreaking2')
            newLevel.style.animation = "hinge 2s 1"
            toGame()
        }
        newLevel.onmouseover = function() {
            startSound('ghost')
        }
        newLevel.onmouseout = function() {
            TheSilenceBringer()
        }
    }
    newLevel.classList.add("levelElement")
    newLevel.id = "level"+sendId
    newLevel.innerHTML = ""
    newLevel.style.width = "20vw"
    newLevel.style.height = "20vh"
    
    
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
    newLevel.appendChild(newLevelImg)
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
        startSound('lockLong')
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
    
    
    labelSound.innerHTML = "SOUND &nbsp;&nbsp;"
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
    
    labelLanguage.innerHTML = "LANGUAGE &nbsp;&nbsp;"
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
        startSound('whistle')
    }
    buttonLobby.onclick = function() {
        toLobby()
        hideMenu()
        startSound('whistle')
    }
    darkness.onclick = function() {
        hideMenu()
        startSound('metalCreaking3')
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
        audio.volume = "0"
        var son = document.getElementById("lock");
        son.volume="0";
        var son2 = document.getElementById("unlock");
        son2.volume="0";
        noSoundEffect = true
    })
    
    soundOn.addEventListener("click", function(){
        var audio = document.getElementById("audio");
        audio.volume = "1"
        var son = document.getElementById("lock");
        son.volume="1";
        var son2 = document.getElementById("unlock");
        son2.volume="1";
        noSoundEffect = false
    })
    
    musicOnly.addEventListener("click", function(){
        var audio = document.getElementById("audio");
        audio.volume = "1"
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
        prevLanguageVal = getCookie("language")
        setCookie("language", 0)
        reloadLanguages()
        startSound("writing")
    })
    fr.addEventListener("click", function(){
        prevLanguageVal = getCookie("language")
        setCookie("language", 1)
        reloadLanguages()
        startSound("writing")
    })
    jp.addEventListener("click", function(){
        prevLanguageVal = getCookie("language")
        setCookie("language", 2)
        reloadLanguages()
        startSound("writing")
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
    if (parseInt(getCookie("language")) == 2) {
        rules.style.fontFamily = "GenkaiMincho"
        rulesTitle.style.fontFamily = "GenkaiMincho"
    }
    rules.innerHTML = textPerLang[parseInt(getCookie("language"))][5]
    rulesTitle.innerHTML = "HOW TO PLAY"
    
    rules.style.fontSize = "0.7vh + 0.7vw"
    
    instructions.appendChild(rulesTitle)
    instructions.appendChild(rules)
}


function displayLost() {
    var lost = document.createElement("div")
    
    lost.id = "lost"
    lost.style.position = "fixed"
    lost.style.left = "0"
    lost.style.top = "0"
    lost.style.width = "100vw"
    lost.style.height = "100vh"
    lost.style.pointerEvents = "none"
    lost.style.opacity = "0"
    lost.style.fontSize = "5vw"
    lost.style.backgroundColor = "black"
    lost.style.color = "white"
    lost.style.textAlign = "center"
    
    getBody.appendChild(lost)
}

var lost = null

function loadLost() {
    startSound("Scream")
    if(lost == null) {
        displayLost()
    }
    lost = document.getElementById("lost")

    if (parseInt(getCookie("language")) == 2) {
        lost.style.fontFamily = "GenkaiMincho"
        lost.innerHTML = "<br><br><br>" + textPerLang[parseInt(getCookie("language"))][17]
    }
    else {
        lost.style.fontFamily = "AnotherDanger"
        lost.innerHTML = "<br><br>" + textPerLang[parseInt(getCookie("language"))][17]
    }
    
    lost.style.opacity = "1"
    setTimeout("lost.style.opacity = '0'", 3000)
}

function displayWon() {
    var won = document.createElement("div")
    
    won.id = "lost"
    won.style.position = "fixed"
    won.style.left = "0"
    won.style.top = "0"
    won.style.width = "100vw"
    won.style.height = "100vh"
    won.style.pointerEvents = "none"
    won.style.opacity = "0"
    won.style.fontSize = "5vw"
    won.style.backgroundColor = "black"
    won.style.color = "white"
    won.style.textAlign = "center"
    
    getBody.appendChild(won)
}


var won = null

function loadWon() {
    if(lost == null) {
        displayWon()
    }
    won = document.getElementById("lost")

    if (parseInt(getCookie("language")) == 2) {
        won.style.fontFamily = "GenkaiMincho"
        won.innerHTML = "<br><br><br>" + textPerLang[parseInt(getCookie("language"))][18]
    }
    else {
        won.style.fontFamily = "AnotherDanger"
        won.innerHTML = "<br><br>" + textPerLang[parseInt(getCookie("language"))][18]
    }
    
    won.style.opacity = "1"
    setTimeout("won.style.opacity = '0'", 3000)
}





function reloadInstructions() {
    var rules = document.getElementById("rules")
    var title = document.getElementById("rulesTitle")
    
    rules.innerHTML = textPerLang[parseInt(getCookie("language"))][5]
    title.innerHTML = textPerLang[parseInt(getCookie("language"))][4]
    
    if (parseInt(getCookie("language")) == 2) {
        rules.style.fontFamily = "GenkaiMincho"
        title.style.fontFamily = "GenkaiMincho"
    }
    else {
        rules.style.fontFamily = "CutTheCrap"
        title.style.fontFamily = "CutTheCrap"
    }
}

function reloadLobby() {
    var start = document.getElementById("playButton")
    var instruction = document.getElementById("instructionsButton")
    
    start.innerHTML = textPerLang[parseInt(getCookie("language"))][0]
    instruction.innerHTML = textPerLang[parseInt(getCookie("language"))][1]
    
    if (parseInt(getCookie("language")) == 2) {
        start.style.fontFamily = "GenkaiMincho"
        instruction.style.fontFamily = "GenkaiMincho"
    }
    else {
        start.style.fontFamily = "AnotherDanger"
        instruction.style.fontFamily = "AnotherDanger"
    }
}

function reloadLevel() {
    var select = document.getElementById("titleLevel")
    
    select.innerHTML = textPerLang[parseInt(getCookie("language"))][2]
    
    if (parseInt(getCookie("language")) == 2) {
        select.style.fontFamily = "GenkaiMincho"
    }
    else {
        select.style.fontFamily = "CutTheCrap"
    }
}

function reloadGame() {
    if (document.getElementById('start')) {
        var start = document.getElementById('startText')
        start.innerHTML = textPerLang[parseInt(getCookie("language"))][3]
        
        if (parseInt(getCookie("language")) == 2) {
            start.style.fontFamily = "GenkaiMincho"
        }
        else {
            start.style.fontFamily = "AnotherDanger"
        }
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
    
    title.innerHTML = textPerLang[parseInt(getCookie("language"))][6]
    
    sound.innerHTML = textPerLang[parseInt(getCookie("language"))][7]
    
    soundOn.innerHTML = textPerLang[parseInt(getCookie("language"))][8]
    
    soundOff.innerHTML = textPerLang[parseInt(getCookie("language"))][9]
    
    language.innerHTML = textPerLang[parseInt(getCookie("language"))][10]
    
    level.innerHTML = textPerLang[parseInt(getCookie("language"))][11]
    
    lobby.innerHTML = textPerLang[parseInt(getCookie("language"))][12]
 
    musicOnly.innerHTML = textPerLang[parseInt(getCookie("language"))][13]
}



