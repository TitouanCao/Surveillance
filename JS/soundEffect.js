var soundEffect = document.createElement('audio')
var screamer = new Audio()
var screamerState = null

soundEffect.id = "SoundEffect1"
soundEffect.className = "clear"
getBody.appendChild(soundEffect)


function ghostS() {
    manageSounds('RESOURCES/Sound/ghost.mp3')
}

function lockLongS() {
    manageSounds('RESOURCES/Sound/lockLong.mp3')
}

function playScreamerS() {
    manageSounds('RESOURCES/Sound/screamer2.mp3')
}

function openDoorS() {
    manageSounds('RESOURCES/Sound/door.mp3')
}

function whistleS() {
    manageSounds('RESOURCES/Sound/whistle.mp3')
}

function metalCreakingS() {
    manageSounds('RESOURCES/Sound/metalCreaking.mp3')
}

function metalCreaking2S() {
    manageSounds('RESOURCES/Sound/metalCreaking2.mp3')
}

function metalCreaking3S() {
    manageSounds('RESOURCES/Sound/metalCreaking3.mp3')
}

function doorCreakingS() {
    manageSounds('RESOURCES/Sound/doorCreaking1.mp3')
}

function echoS() {
    manageSounds('RESOURCES/Sound/echo.mp3')
}

function chainsawS() {
    manageSounds('RESOURCES/Sound/chainsaw.mp3')
}

function writingS() {
    manageSounds('RESOURCES/Sound/writing.mp3')
}

function interferenceS() {
    manageSounds('RESOURCES/Sound/interference.mp3')
}

function buttonS() {
    manageSounds('RESOURCES/Sound/lock3.mp3')
}

function chainS() {
    manageSounds('RESOURCES/Sound/chain.mp3')
}

function lockS() {
    manageSounds('RESOURCES/Sound/lock.mp3')
}

function unlockS() {
    manageSounds('RESOURCES/Sound/unlock.mp3')
}













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
        metalCreakingS()
    }
    else if (rand == 1) {
        metalCreaking2S()
    }
    else if (rand == 2) {
        metalCreaking3S()   
    }
    else if (rand == 3) {
        doorCreakingS()
    }
    else {
        openDoorS()
    }
}







//Sound management, basically allocating channels when needed and shutting down others with a nice fade effect of course
function manageSounds(sound) {
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


setInterval(TheReaper, 1000)

function TheReaper() {
    var i = document.getElementsByTagName("audio").length - 1 //Music Audio
    var displayI = i - 1
    if (undefined != document.getElementById("SoundEffect"+i) && document.getElementById("SoundEffect"+i).paused && i != 1) {
        console.log("I reaped " + document.getElementById("SoundEffect"+i).id + " - Still " + displayI + " survivor(s)")
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




