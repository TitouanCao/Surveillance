var tabCams = []
var cams = document.getElementsByClassName("cam")
var qtte = cams.length


function getCams() {
    for (var i = 0; i < qtte; i++) {
        tabCams.push(cams[i])
    }
}

function toLobby() {
    if(document.getElementById("instructions").style.left == "0px") {
        leaveInstructions()
    }
    else if(document.getElementById("game").style.top == "0%") {
        audio.src = "RESOURCES/FreeSwitzerland.mp3"
        video.src = "RESOURCES/paint.mp4"
    }
    var lobby = document.getElementById("lobby")
    var game = document.getElementById("game")
    var level = document.getElementById("level")
    
    lobby.style.top = "0%"
    game.style.top = "210%"
    level.style.top = "110%" 
    setTimeout("sinkScreens()", 1000)  
    
    //stopRandomScreamer()
}

function toLevel() {
    if(document.getElementById("instructions").style.left == "0px") {
        leaveInstructions()
    }
    else if(document.getElementById("game").style.top == "0%") {
        audio.src = "RESOURCES/Sound/FreeSwitzerland.mp3"
        video.src = "RESOURCES/paint.mp4"
    }
    var lobby = document.getElementById("lobby")
    var game = document.getElementById("game")
    var level = document.getElementById("level")
    
    lobby.style.top = "-110%"
    game.style.top = "110%"
    level.style.top = "0%"
    setTimeout("sinkScreens()", 1000)
    
    //stopRandomScreamer()
}

function toGame() {
    var lobby = document.getElementById("lobby")
    var game = document.getElementById("game")
    var level = document.getElementById("level")
    
    lobby.style.top = "-210%"
    game.style.top = "0%"
    level.style.top = "-110%"
    
    loadScreens(6)
    
    if(!document.getElementById("start")) {
        startScreen()
    }
    else {
        reloadGame()
    }
    
    loadLevel1()
    
    audio.src = "RESOURCES/Sound/Silences.mp3"
    audio.currentTime = 47
    video.src = "RESOURCES/smoke.mp4"
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

