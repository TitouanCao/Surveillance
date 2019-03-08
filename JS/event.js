var tabCams = []
var cams = document.getElementsByClassName("cam")
var qtte = cams.length

function getCams() {
    for (var i = 0; i < qtte; i++) {
        tabCams.push(cams[i])
    }
}

