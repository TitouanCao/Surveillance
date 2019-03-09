function loadScreens(qtte) {
    for(var i = 1; i <= qtte; i++) {
        createScreen(i)
        createCam(i)
    }
}

function sinkScreens() {
    var qtte = getNbScreen()
    for(var i = 1; i <= qtte; i++) {
        deleteScreen(i)
        deleteCam(i)
    }
}

function loadLevels(qtte) {
    for(var i = 1; i <= qtte; i++) {
        createLevel(i)
    }
}

function sinkLevels() {
    var qtte = getNbLevel()
    for(var i = 1; i <= qtte; i++) {
        deleteLevel(i)
    }
}


function reloadLanguages() {
    reloadInstructions()
    reloadLobby()
    reloadLevel()
    reloadGame()
    reloadMenu()
}

function loadTheGame() {
    var background = document.getElementById('background')
    background.pause()
    document.body.style.opacity = "1"
    
    createInstructions()
    createSetting()
    loadLevels(12)
    
    
    setTimeout("document.body.style.pointerEvents = 'all'", 2000)
    setTimeout("background.play()", 2000)
}

