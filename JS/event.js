var tabCams = []
var cams = document.getElementsByClassName("cam")
var qtte = cams.length
var interval
var global1 = ""


function getCams() {
    for (var i = 0; i < qtte; i++) {
        tabCams.push(cams[i])
    }
}

//Camera visual effects

function glitch(){
    startSound("interference")
    let screens = document.getElementsByClassName("selectedCam")
    let selectedCam = screens[0].firstChild
    let screenName = selectedCam.src
    var pos = screenName.lastIndexOf("/");
    screenName = screenName.slice(pos+1,screenName.length-4);
    var i = document.getElementById(selectedCam.id)
    interval = setInterval(function(){
        i.src="RESOURCES/camPics/"+screenName+"_glitch.jpg";
        i.style.bottom="1%";
        i.style.left="1%"
        setTimeout(function(){i.src="RESOURCES/camPics/"+screenName+".jpg";i.style.bottom="0%";i.style.left="0%"},100)

    },200)

}

function focusedGlitch(id){
    startSound("interference")
    
    var screenId = "screenCam"+id
    var screen = document.getElementById(screenId)
    var screenName = screen.src.slice(screen.src.lastIndexOf("/") + 1, screen.src.length - 4)
    console.log(screenName)
    screen.src = "RESOURCES/camPics/"+screenName+"_glitch.jpg"
    
    setTimeout(function(){
        screen.src="RESOURCES/camPics/"+screenName+".jpg"
    },100)
    setTimeout(function(){
        screen.src="RESOURCES/camPics/"+screenName+"_glitch.jpg"
    },200)
    setTimeout(function(){
        screen.src="RESOURCES/camPics/"+screenName+".jpg"
    },300)
    setTimeout(function(){
        screen.src="RESOURCES/camPics/"+screenName+"_glitch.jpg"
    },400)
    setTimeout(function(){
        screen.src="RESOURCES/camPics/"+screenName+".jpg"
    },500)
    setTimeout(function(){
        screen.src="RESOURCES/camPics/"+screenName+"_glitch.jpg"
    },600)
    setTimeout(function(){
        screen.src="RESOURCES/camPics/"+screenName+".jpg"
    },700)
}



function invertSpectre(pic) {
    global1 = pic
    global1.style.filter = "invert(0.5)"
    global1.style.transition = "opacity 0.3s ease, filter 0s ease"
    setTimeout("global1.style.filter = 'invert(0)'", 100)
    setTimeout("global1.style.transition ='opacity 0.3s ease, filter 0.5s ease'", 100)
}














function toLobby() {
    var lobby = document.getElementById("lobby")
    var game = document.getElementById("game")
    var level = document.getElementById("level")

    if(document.getElementById("instructions").style.left == "0px") {
        leaveInstructions()
    }
    else if(document.getElementById("game").style.opacity == "1") {
        audio.src = "RESOURCES/Sound/FreeSwitzerland.mp3"
        video.src = "RESOURCES/paint.mp4"
        lobby.style.top = "0%"
        level.style.top = "110%" 
        game.style.opacity = "0"
        game.style.pointerEvents = "none"
        resetLevel()
        loadLevels(12)
    }
    else {
        lobby.style.top = "0%"
        level.style.top = "110%" 
    }
    
    //stopRandomScreamer()
}

function toLevel() {
    var lobby = document.getElementById("lobby")
    var game = document.getElementById("game")
    var level = document.getElementById("level")
    if(document.getElementById("instructions").style.left == "0px") {
        leaveInstructions()
        lobby.style.top = "-110%"
        level.style.top = "0"
    }
    else if(document.getElementById("game").style.opacity == "1") {
        audio.src = "RESOURCES/Sound/FreeSwitzerland.mp3"
        video.src = "RESOURCES/paint.mp4"
        document.getElementById("start").style.transition = "opacity 1s"
        game.style.opacity = "0"
        setTimeout("document.getElementById('start').style.transition = 'none'",10)
        game.style.pointerEvents = "none"
        
        loadLevels(12)
        
    }
    else {
        lobby.style.top = "-110%"
        level.style.top = "0"
    }
    
    level.style.pointerEvents = "all"
    level.style.opacity = "1"
    
    setTimeout("resetLevel()", 250)
    
    //stopRandomScreamer()
}

function toGame() {
    loadScreens(5)
    createVent()
    
    if(!document.getElementById("start")) {
        startScreen()
    }
    else {
        reloadGame()
    }

    loadLevel1()
    
    var cam1 = document.getElementById ("cam1")
    linkCam(cam1)
    
    setTimeout(function() {
        setTimeout("sinkLevels()",1000)
        
        var lobby = document.getElementById("lobby")
        var game = document.getElementById("game")
        var level = document.getElementById("level")
        
        game.style.opacity = "1"
        game.style.pointerEvents = "all"
        level.style.opacity = "0"
        level.style.pointerEvents = "none"  

        var start = document.getElementById('start')
        start.style.opacity = "1"
        start.style.pointerEvents = "all"

        audio.src = "RESOURCES/Sound/Silences.mp3"
        audio.currentTime = 47
        video.src = "RESOURCES/triangles.mp4"
    }, 1000)
    
    
    //startRandomScreamer()
    
}

function toInstructions() {
    var instructions = document.getElementById("instructions")
    instructions.style.left = "0"
    instructions.style.transition = "left 2s"
}

function leaveInstructions() {
    var instructions = document.getElementById("instructions")
    instructions.style.animation = "hinge 2s 1"
    instructions.style.transition = "none"
    
    setTimeout("instructions.style.left = '100%'", 2000)
    setTimeout("getBody.removeChild(instructions)", 2000)
    setTimeout("instructions.style.animation = 'none'", 2000)
    setTimeout("getBody.appendChild(instructions)", 2010)
}

function ventEvent(room){
    startSound("ventSound1")
    let i= 10

    let time = setInterval(function(){
        i--
        if(ventPurged){
            clearInterval(time)
            ventPurged=false;
        }
        if(i==0) {
            startSound("ventSound2")
            clearInterval(time)
            loadLost()
            resetLevel()
            toLevel()

        }
    },1000)
    
}

function won() {
    toLevel()
    loadWon()
    b.reload()
}


function resetLevel() {
    sinkScreens()
    
    //Rajouter les valeurs créées pour les autres niveaux lorsqu'ils sont ajoutés
    if (undefined != b) b.suicide()
    b = null
    m = null
    if(null != monster) monster.reset()
    monster = null

    r1 = null
    r2 = null 
    r3 = null
    r4 = null
    r5 = null
    r6 = null
    r7 = null
    r8 = null
    r9 = null
    
    if (undefined != g1) g1.suicide()
    if (undefined != g2) g2.suicide()
    if (undefined != g3) g3.suicide()
    g1 = null
    g2 = null
    g3 = null

    Allrooms = []
    ventRooms = []
    Alldoors = []

    var map = document.getElementById("map")
    var erase = game.removeChild(map);
    erase = null

    var check = document.getElementsByClassName("door")
    if(check.length != 0) {
        var tamp = check.length
        for(var i = 0; i < tamp; i++){
            erase = game.removeChild(check[0])
            erase = null
        }
    }
    var doors = document.getElementById("doors")
    erase = game.removeChild(doors);
    erase = null;
    
    d1 = null
    d2 = null
    d3 = null
    d4 = null
    d5 = null
    d6 = null
    d7 = null
    d8 = null
    d9 = null
    d10 = null
    d11 = null
    d12 = null
}




//Window resize events


window.addEventListener("resize", function() {
    loadBorder()
})
