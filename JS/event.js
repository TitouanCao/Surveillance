var tabCams = []
var cams = document.getElementsByClassName("cam")
var qtte = cams.length

var global1 = ""


function getCams() {
    for (var i = 0; i < qtte; i++) {
        tabCams.push(cams[i])
    }
}

//Camera visual effects

function glitch(){
    interferencesS()
    var i = document.getElementById("screenCam1")
    i.src="RESOURCES/couloir_glitch.jpg"
    setTimeout(function(){i.src="RESOURCES/couloir.jpg"},100)
    setTimeout(function(){i.src="RESOURCES/couloir_glitch.jpg"},200)
    setTimeout(function(){i.src="RESOURCES/couloir.jpg"},300)
    setTimeout(function(){i.src="RESOURCES/couloir_glitch.jpg"},400)
    setTimeout(function(){i.src="RESOURCES/couloir.jpg"},500)
    setTimeout(function(){i.src="RESOURCES/couloir_glitch.jpg"},600)
    setTimeout(function(){i.src="RESOURCES/couloir.jpg"},700)
}

function glitch2(){
    interferencesS()
    var i = document.getElementById("screenCam1")
    i.src="RESOURCES/couloir_glitch2.jpg"
    setTimeout(function(){i.src="RESOURCES/couloir.jpg"},100)
    setTimeout(function(){i.src="RESOURCES/couloir_glitch2.jpg"},200)
    setTimeout(function(){i.src="RESOURCES/couloir.jpg"},300)
    setTimeout(function(){i.src="RESOURCES/couloir_glitch2.jpg"},400)
    setTimeout(function(){i.src="RESOURCES/couloir.jpg"},500)
    setTimeout(function(){i.src="RESOURCES/couloir_glitch2.jpg"},600)
    setTimeout(function(){i.src="RESOURCES/couloir.jpg"},700)
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
        sinkScreens()
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
        game.style.opacity = "0"
        game.style.pointerEvents = "none"
        
        loadLevels(12)
        
    }
    else {
        lobby.style.top = "-110%"
        level.style.top = "0"
    }
    
    level.style.pointerEvents = "all"
    level.style.opacity = "1"
    
    setTimeout("sinkScreens()", 250)
    
    //stopRandomScreamer()
}

function toGame() {
    loadScreens(6)
    
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
        sinkLevels()
        
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
    }, 1300)
    
    
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






//Window resize events


window.addEventListener("resize", function() {
    loadBorder()
})
