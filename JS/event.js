var tabCams = []
var cams = document.getElementsByClassName("cam")
var qtte = cams.length

function getCams() {
    for (var i = 0; i < qtte; i++) {
        tabCams.push(cams[i])
    }
}

function toGame() {
    var lobby = document.getElementById("lobby")
    var game = document.getElementById("game")
    
    lobby.style.top = "-100%"
    game.style.top = "0%"
}