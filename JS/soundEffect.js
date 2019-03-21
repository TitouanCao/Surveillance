var soundEffect = document.createElement('audio')
var screamer = new Audio()
var screamerState = null

soundEffect.id = "SoundEffect1"
soundEffect.className = "clear"
getBody.appendChild(soundEffect)








function randomScreamerS() {
    var rand = Math.floor(Math.random() * 10) 
    if (rand == 1) {
        screamer.src = 'RESOURCES/Sound/screamer.mp3';
        screamer.play();
    }
}
function startRandomScreamer() {
    screamerState = setInterval(randomScreamerS, 10000)
}

function stopRandomScreamer() {
    clearInterval(screamerState)
}



function doorLikeS() {
    var rand = Math.floor(Math.random() * 5) 
    if (rand == 0) {
        startSound('metalCreaking')
    }
    else if (rand == 1) {
        startSound('metalCreaking2')
    }
    else if (rand == 2) {
        startSound('metalCreaking3')
    }
    else if (rand == 3) {
        startSound('doorCreaking')
    }
    else {
        startSound('door')
    }
}







//Sound management, basically allocating channels when needed and shutting down others with a nice fade effect of course
function startSound(name) {
    var sound = 'RESOURCES/Sound/' + name + '.mp3'
    if (noSoundEffect == false) {
        var free = getFreeChannel()
        reviveOne(free, sound)
        killTheOthers(free)
    }
}


function getFreeChannel() {
    var i = 1
    while(undefined != document.getElementById("SoundEffect"+i)) {
        if(document.getElementById("SoundEffect"+i).paused) {
            return document.getElementById("SoundEffect"+i)
        }
        i++
    }
    var newChannel = document.createElement("audio")
    newChannel.id = "SoundEffect"+i
    newChannel.className = "clear"
    getBody.appendChild(newChannel)
    return newChannel   
}

function killTheOthers(survivor) {
    var total = document.getElementsByTagName("audio").length - 4
    var i = 1
    while(i <= total) {
        if(undefined != document.getElementById("SoundEffect"+i) && document.getElementById("SoundEffect"+i) != survivor) {
            if (document.getElementById("SoundEffect"+i).className != "faded"){
                fade(document.getElementById("SoundEffect"+i))
            }   
        }
        i++
    }
}

function reviveOne(channel, sound) {
    channel.className = "clear"
    channel.src = sound + ""
    channel.volume = "1"
    channel.play()
}


setInterval(TheReaper, 500)

function TheReaper() {
    var i = document.getElementsByTagName("audio").length - 1 //Music Audio
    if (i > 10) {
        dontTroll()
    }
    var displayI = i - 1
    if (undefined != document.getElementById("SoundEffect"+i) && document.getElementById("SoundEffect"+i).paused && i != 1) {
        var a = getBody.removeChild(document.getElementById("SoundEffect"+i))
        a = ""
    }
}

function TheSilenceBringer() {
    var i = document.getElementsByTagName("audio").length - 1 //Music Audio
    while (i > 0) {
        fade(document.getElementById("SoundEffect"+i))
        i--
    }
}

function dontTroll() {
    var i = document.getElementsByTagName("audio").length - 1 //Music Audio
    while (i > 0) {
        var a = getBody.removeChild(document.getElementById("SoundEffect"+i))
        a = ""
        i--
    }
    if(parseInt(getCookie('troll')) == 2){
        document.body.innerHTML = '';
        alert(textPerLang[parseInt(getCookie("language"))][16], "Titre", "ok j'y vais")
    } else {
        setCookie('troll', parseInt(getCookie('troll')) + 1)
        alert(textPerLang[parseInt(getCookie("language"))][14] + getCookie('troll') + textPerLang[parseInt(getCookie("language"))][15] + "", "Titre", "Okay")
    }
}


function fade(channel) {
    channel.className = "faded"
    vol = 1
    var process = setInterval(function() {
        vol -= 0.05
        if(vol > 0) {
            channel.volume = vol
        }
        else {
            vol = 0
            channel.volume = vol
            channel.pause()
            channel.className = "clear"
            clearInterval(process)
        }
    }, 100)
}





function showChannelStatus(channel) {
    console.log("VOLUME : " + channel.volume)
    console.log("PAUSED : " + channel.paused)
    console.log("CLASS : " + channel.className)
}




