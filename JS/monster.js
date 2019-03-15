var start = null
var delay = 10000
var cam = null

class Monster {
    
    constructor() {
        this.posX = 0
        this.posY = 0
        this.triggered = false
    }
    
    setPos(x, y) {
        this.posX = x
        this.posY = y
    }
    
    getPosX() {
        return this.posX
    } 
    
    getPosY() {
        return this.posY
    }
    
    randomMove() {
        var footX = Math.floor(Math.random()*11) - 5
        var footY = Math.floor(Math.random()*11) - 5
        if (this.posX + footX >= 0) {
            this.posX = this.posX + footX
        }
        if (this.posY + footY >= 0) {
            this.posY = this.posY + footY
        }
    }
    
    randomTrigger() {
        var rand = Math.floor(Math.random()*getNbScreen() * 10000)
        setTimeout("monster.trigger()", rand)
    }
    
    trigger() {
        var max = Math.floor(Math.random()*getNbScreen()) + 1
        console.log(max)
        
        cam = document.getElementById("cam" + max)
        
        cam.addEventListener("click", this.stopTrigger(max))
    }
    
    stopTrigger(max) {
        focusedGlitch(max)
        cam.removeEventListener("click", this.stopTrigger(max))
    }
    
    start() {
        start = setInterval("monster.randomMove()", 1000)
        
    }
    
    stop() {
        clearInterval(start)
    }
    
    lose() {
        toLevel()
    }
    
}