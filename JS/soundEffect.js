var soundEffect = new Audio()
var soundEffectBis = new Audio()
var screamer = new Audio()
var screamerState = null


function playScreamerS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/screamer2.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }

}

function openDoorS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/door.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function lockLongS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/lockLong.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function whistleS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/whistle.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function metalCreakingS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/metalCreaking.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function metalCreaking2S() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/metalCreaking2.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function metalCreaking3S() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/metalCreaking3.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function doorCreakingS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/doorCreaking1.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function echoS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/echo.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function chainsawS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/chainsaw.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
}

function writingS() {
    if (noSoundEffect == false){
        fade(checkChannelRevert())
        checkChannel().src = 'RESOURCES/Sound/writing.mp3'
        checkChannel().volume = "1"
        checkChannel().play()
    }
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
        lockLongS()
    }
}

















function fade(channel) {
    var vol = 0.5;
    var interval = 100;

    var fadeout = setInterval(
    function() {
        if (vol > 0.1) {
            vol -= 0.05;
            channel.volume = vol
        }
        else if (vol <= 0.1 && vol > 0) {
            vol = 0
            channel.volume = vol
        }
        else {
          clearInterval(fadeout);
        }
    }, interval);
}

function checkChannel() {
    if(!soundEffect.paused && soundEffectBis.paused) {
        return soundEffectBis
    }
    else {
        return soundEffect
    }
}

function checkChannelRevert() {
    if(!soundEffect.paused && soundEffectBis.paused) {
        return soundEffect
    }
    else {
        return soundEffectBis
    }
}










