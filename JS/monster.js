var start = null
var delay = 10000
var cam = null

class Monster {
    
    constructor() {
        this.room = null
        this.triggered = false
    }
    
    initialize(room) {
        this.room = room
    }
    
    moove() {
        let moves = this.room.getPath()
        let doors = this.room.getDoors()
        console.log(moves)
        if(interval != undefined ) {
                clearInterval(interval)
        }
        if (moves.length <= 0) {
            console.log("niktamere")
            let rand = Math.floor(Math.random() * doors.length)
            doors[rand].destroy()
            this.room = doors[rand].otherRoom(this.room)
        }
        else {
            let rand = Math.floor(Math.random() * moves.length)
            console.log(rand)
            this.room = moves[rand]
            
        }
        this.seen()  
    }
    
    trigger() {
        this.triggered == true
        //setTimeout(, 10000)
    }

    seen(){
        console.log(this.room)
        let cam = document.getElementsByClassName("selectedCam")[0]
        if(this.room.camera == cam){
            glitch()
        }
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